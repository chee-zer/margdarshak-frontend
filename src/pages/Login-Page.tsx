import React, { useState } from 'react';

const Login = () => {

  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault()
    
    console.log('Phone:', phone);
    console.log('Email:', email);
    console.log('Password:', password);
    setPhone('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen  bg-auth-flow font-inter flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2 text-left">Login to Margdarshak</h2> 
        <p className="text-sm text-gray-500 mb-8 text-left">
          Enter your credentials below to login with your account
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              placeholder="1234567890"
              value={phone} 
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

         
          <div className="relative flex items-center justify-center mb-4">
            <div className="absolute w-full border-t border-gray-300"></div>
            <span className="bg-white px-3 text-sm text-gray-500 relative z-10">OR CONTINUE WITH</span>
          </div>

   
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="m@example.com"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="**********"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
