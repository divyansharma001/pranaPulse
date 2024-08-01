
import React, { useState } from 'react';
import { motion } from "framer-motion"

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Username:', username);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#0884AB]">
      <div className="w-full max-w-3xl bg-white p-4 md:p-8 rounded-lg flex flex-col sm:flex-row sm:space-x-4 md:space-x-8">
        
        <div className="flex-grow flex flex-col justify-center items-center sm:w-1/2 sm:mt-[-100px] md:mt-[-150px]">
          <h2 className="text-xl font-bold sm:mb-2 text-black sm:text-center sm:text-3xl md:text-4xl sm:mr-10 md:mr-20 mt-20 md:mt-32">Welcome to,</h2>
          <h2 className="text-3xl font-bold mb-6 text-black sm:text-center sm:text-4xl md:text-5xl sm:mr-8">Prana<span className='text-[#0884AB]'>Pulse</span></h2>

          <motion.img
            src="https://png.pngtree.com/png-vector/20240417/ourmid/pngtree-artificial-intelligence-robot-in-meditation-pose-and-mindfulness-png-image_12293309.png"
            alt="Random Image"
            className="w-full sm:rounded-lg sm:h-auto sm:max-w-sm h-64 md:h-80"
            animate={{
              y: [0, -18, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
              },
            }}
          />
        </div>

        
        <div className="w-full mt-2 sm:w-1/2">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mr-4 text-center mb-4 text-black sm:text-3xl sm:mt-2">SignUp</h2>
            <div className="mb-4 border-2 p-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Enter Email:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4 border-2 p-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Create a Username:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4 border-2 p-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Create a Password:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-[#0884AB] hover:bg-[#056a89] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              SignUp
            </button>
            <h2 className=' text-black sm:text-sm mb-20 sm:mt-5 md:mb-32'>
              Already have an account?
              <a href='/signin' className='text-[#0884AB] ml-2 cursor-pointer'>SignIn</a>
            </h2>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;