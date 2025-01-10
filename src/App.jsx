import React from 'react';
import './index.css';
const App = () => {
  return (
    <div className="flex">
      <div className="w-72 bg-[#01051b] text-[#faf8f9] h-screen flex flex-col items-center p-5 fixed left-0 top-0">
        <div className="mb-2.5">
          <img src="/profile_pic.png" alt="Profile" className="w-25 h-32 rounded-full" />
        </div>
        <div className="text-center mb-5">
          <h2 className="text-3xl font-serif text-[#fcf9fa]">Simran Bansal</h2>
          <p className="text-xl text-[#e00b76]">Web Developer</p>
        </div>
        <div className="flex gap-2 mb-5">
          <span>📧</span>
          <span>🔗</span>
          <span>🐙</span>
          <span>📸</span>
        </div>
        <nav className="flex flex-col w-full">
          <a href="#" className="text-white py-2 border-b border-white hover:text-[#dfba12] transition-colors">Home</a>
          <a href="#" className="text-white py-2 border-b border-white hover:text-[#dfba12] transition-colors">About</a>
          <a href="#" className="text-white py-2 border-b border-white hover:text-[#dfba12] transition-colors">Resume</a>
          <a href="#" className="text-white py-2 border-b border-white hover:text-[#dfba12] transition-colors">Portfolio</a>
          <a href="#" className="text-white py-2 border-b border-white hover:text-[#dfba12] transition-colors">Contact</a>
        </nav>
        <button className="mt-auto bg-[#e00b76] text-[#c7c5e2] p-3 rounded-lg cursor-pointer hover:bg-[#e6b032] transition-colors">
          Download CV
        </button>
      </div>
      <main className="ml-72 p-5 flex-grow">
        <h1 className="text-4xl my-5">Welcome to My Portfolio</h1>
        <p>Here is some content about me...</p>
      </main>
    </div>
  );
};
export default App;