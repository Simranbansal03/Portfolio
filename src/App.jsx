import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie-player';
import './index.css';
import LoadingAnimation from './LoadingAnimation.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink, faCamera } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#05091d] backdrop-blur-3xl text-white z-50">
        <Lottie
          loop
          play
          animationData={LoadingAnimation}
          style={{ width: 500, height: 500 }}
        />
      </div>
    );
  }
  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`w-72 bg-[#05091d] text-[#faf8f9] h-screen flex flex-col items-center p-5 fixed left-0 top-0 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform lg:translate-x-0 z-50`}
      >
        {/* Profile Section */}
        <div className=" ml-3 mb-10 mt-11"></div>
        <img
          src="/profile_pic.png"
          alt="Profile"
          className="w-24 h-24 rounded-full absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <div className="text-center mt-4 mb-5">
          <h2 className="text-3xl font-serif text-[#ffffff]">Simran Bansal</h2>
          <p className="text-xl text-[#dba3f3]">Web Developer</p>
        </div>
        {/* Social Icons */}
        <div className="flex gap-8 mb-5">
          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faInstagram}/>
        </div>
        {/* Navigation Links */}
        <nav className="flex flex-col w-full">
          <a
            href="#"
            className="text-white py-3 border-b border-white hover:text-[#f6c445] transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white py-3 border-b border-white hover:text-[#f6c445] transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-white py-3 border-b border-white hover:text-[#f6c445] transition-colors"
          >
            Resume
          </a>
          <a
            href="#"
            className="text-white py-3 border-b border-white hover:text-[#f6c445] transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#"
            className="text-white py-3 border-b border-white hover:text-[#f6c445] transition-colors"
          >
            Contact
          </a>
        </nav>
        <button className="mt-auto bg-[#191054] text-[#ffffff] p-3 rounded-lg cursor-pointer hover:bg-[#f6c445] transition-colors">
          Download CV
        </button>
      </div>

      {/* Hamburger Button */}
      <button
        className="lg:hidden fixed top-5 right-5 z-50 bg-[#f6c445] text-white py-2.5 px-3 shadow-lg"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Main Content */}
      <main className="ml-0 lg:ml-72 p-5 flex-grow ">
        <h1 className="text-4xl my-5">Welcome to My Portfolio</h1>
        <p>Here is some content about me...</p>
      </main>
    </div>
  );
};

export default App;
