import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie-player';
import './index.css';
import LoadingAnimation from './LoadingAnimation.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink, faCamera } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Typewriter = ({ texts, typingSpeed = 150, pauseTime = 2000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[currentTextIndex];
      if (isDeleting) {
        if (currentCharIndex > 0) {
          setDisplayedText(currentText.substring(0, currentCharIndex - 1));
          setCurrentCharIndex(currentCharIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        if (currentCharIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, currentCharIndex + 1));
          setCurrentCharIndex(currentCharIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const typingInterval = setInterval(
      handleTyping,
      isDeleting ? typingSpeed / 2 : typingSpeed
    );

    return () => clearInterval(typingInterval);
  }, [
    currentCharIndex,
    isDeleting,
    texts,
    typingSpeed,
    pauseTime,
    currentTextIndex,
  ]);

  return (
    <span className="inline-block">
      {displayedText}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

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
    <div className="flex bg-[#02071f] min-h-screen">
      {/* Sidebar */}
      <div
        className={`w-72 bg-[#05091d] text-[#faf8f9] h-screen flex flex-col items-center p-5 fixed left-0 top-0 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform lg:translate-x-0 z-50`}
      >
        {/* Profile Section */}
        <div className="ml-3 mb-10 mt-11"></div>
        <img
          src="/profile_pic.png"
          alt="Profile"
          className="w-24 h-24 rounded-full absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <div className="text-center mt-4 mb-5">
          <h2 className="text-3xl font-serif text-[#ffffff]">Simran Bansal</h2>
          <p className="text-xl text-[#dba3f3]">
            <Typewriter
              texts={["Web Developer", "Creative Coder", "Tech Enthusiast"]}
            />
          </p>
        </div>
        {/* Social Icons */}
        <div className="flex gap-8 mb-5">
          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        {/* Navigation Links */}
        <nav className="flex flex-col w-full">
          <a href="#" className="text-white py-3 border-b border-white hover:text-[#f6c445] transition-colors">Home</a>
          <a href="#" className="text-white py-3 border-b border-white hover:text-[#f6c445] transition-colors">About</a>
          <a href="#" className="text-white py-3 border-b border-white hover:text-[#f6c445] transition-colors">Resume</a>
          <a href="#" className="text-white py-3 border-b border-white hover:text-[#f6c445] transition-colors">Portfolio</a>
          <a href="#" className="text-white py-3 border-b border-white hover:text-[#f6c445] transition-colors">Contact</a>
        </nav>
        <button className="mt-auto bg-[#191054] text-[#ffffff] p-3 rounded-lg cursor-pointer hover:bg-[#f6c445] transition-colors">Download CV</button>
      </div>

      {/* Hamburger Button */}
      <button
        className="lg:hidden fixed top-5 right-5 z-50 bg-[#f472b6] text-white py-2.5 px-3 shadow-lg"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Main Content */}
      <main className="ml-0 lg:ml-72 p-5 flex-grow bg-[#141727]">
        <section
          id="home"
          className="mt-7 mb-10 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Simran Bansal
            </h1>
            <h2 className="text-lg md:text-xl text-[#dba3f3] mb-4">
              Web Developer
            </h2>
            <p className="text-sm md:text-lg text-white mb-6">
              I am a passionate web developer with experience in creating
              dynamic and responsive websites. I love to build web applications
              that solve real-world problems and enhance user experiences.
            </p>
            <div className="flex gap-4">
              <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                View Work
              </button>
              <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
                Contact Me
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-5 md:mt-0 flex justify-center">
            <img
              src="./file1.png"
              alt="Illustration"
              className="w-100 h-120 md:w-70 md:h-70"
            />
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {["Project 1", "Project 2", "Project 3"].map((project, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-xl font-bold">{project}</h3>
                <p className="text-sm">
                  Description of {project.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-lg">
            Feel free to reach out to me via email or through my social media
            channels.
          </p>
        </section>
      </main>
    </div>
  );
};

export default App;