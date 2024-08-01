import supabase from '../Supabase.js';
import bcrypt from 'bcrypt';
import validator from 'validator';

export const signUp = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    
    if (!email || !password || !name) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }
     
    if (typeof password !== 'string') {
      return res.status(400).json({ message: 'Password must be a string' });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: 'Password must be at least 8 characters long' });
    }

    const { data: existingUser, error: existingUserError } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .single();

    if (existingUserError && existingUserError.code !== 'PGRST116') { 
      throw existingUserError;
    }

    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    
    const hashedPassword = await bcrypt.hash(password, 12); 
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    }, {
      data: { name }
    });

    if (error) {
      return res.status(error.status).json({ message: error.message });
    }

    res.status(201).json({ message: 'User created successfully', data });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};
export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    const { data: user, error: fetchError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (fetchError || !user) {
      return res.status(400).json({ message: 'Invalid login credentials' });
    }

   
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid login credentials' });
    }

    
    const { data: sessionData, error: authError } = await supabase.auth.signIn({
      email,
      password
    });

    if (authError) {
      return res.status(authError.status).json({ message: authError.message });
    }

    
    res.status(200).json({ message: 'Sign in successful', user: sessionData.user, session: sessionData.session });
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};


