import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleSignupbutton = () => {
    navigate('/signup');
  };

  const handleLoginbutton = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[url('/Images/Mobile.jpeg')] md:bg-[url('/Images/Home.jpeg')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4">
      {/* Apply blur only on mobile */}
      <div className="w-full max-w-4xl flex flex-col items-center justify-center text-center p-6 md:p-10 bg-white/60 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-xl">
        <div className="w-full max-w-xl flex flex-col justify-center items-center text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
            Welcome to ChatApp
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
            Connect Instantly. Chat Freely.
          </h2>
        </div>
        <div className="w-full max-w-sm flex flex-col md:flex-row justify-around items-center gap-4 mt-4">
          <button
            onClick={handleSignupbutton}
            className="py-3 px-6 w-full md:w-auto border-2 border-black rounded-md hover:bg-black hover:text-white transition"
          >
            Signup
          </button>
          <button
            onClick={handleLoginbutton}
            className="py-3 px-6 w-full md:w-auto border-2 border-black rounded-md hover:bg-black hover:text-white transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
