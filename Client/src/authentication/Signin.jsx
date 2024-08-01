
import React, { useState } from 'react';
import { motion } from "framer-motion"

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#0884AB] overflow-hidden">
      <div className="w-full max-w-3xl bg-white p-8 ">
        <div className="flex flex-col justify-center items-center sm:flex-row sm:space-x-8">
         
          <div className="flex-grow flex flex-col justify-center items-center sm:w-1/2">
            <h2 className="text-5xl font-bold mb-6 text-black">Prana<span className='text-[#0884AB]'>Pulse</span></h2>
            <motion.img
              src="https://img.freepik.com/free-vector/floating-robot_78370-3669.jpg"
              alt="Random Image"
              className="w-full rounded-lg object-cover sm:h-auto"
              animate={{
                y: [0, -18, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                },
              }}
            />
          </div>

         
          <div className="w-full mt-4 sm:w-1/2 sm:mt-0">
            <form onSubmit={handleSubmit}>
              <h2 className="text-3xl font-semibold mr-4 text-center mb-4 text-black">SignIn</h2>
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Enter Password:
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
                SignIn
              </button>
              <h2 className='mt-4 text-black'>
                Don't have an account?
                <a href='/signup' className='text-[#0884AB] ml-2 cursor-pointer'>SignUp</a>
              </h2>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;