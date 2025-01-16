// App.jsx
import React, { useState, useEffect } from "react";
import Lottie from "react-lottie-player";
import "./index.css";
import LoadingAnimation from "./LoadingAnimation.json";
import DeveloperAnimation from "./Animation.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCamera } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useInView } from "react-intersection-observer";

// Typewriter Component
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

// Section Component
const Section = ({ id, children, className = "" }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-opacity duration-1000 ${
        inView ? "fade-in" : "fade-out"
      } ${className}`}
    >
      {children}
    </section>
  );
};

// Separator Line Component
const SeparatorLine = () => {
  return (
    <div className="w-[95%] md:w-[97%] lg:w-[95%] max-w-[1100px] h-[2px] mx-auto my-8">
      <div className="h-full bg-gradient-to-r from-[#dba3f3] via-[#8e44ad] to-[#130950]"></div>
    </div>
  );
};
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="min-h-screen bg-[#05091d]">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-9 bg-[#05091d] h-16 flex items-center justify-between px-6 z-50">
        {/* Logo Section */}
        <div className="flex items-center">
          <span className="text-[#dba3f3] text-3xl ml-4 font-mono">{"<SB/>"}</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#home" className="text-white text-xl hover:text-[#dba3f3] transition-colors">
            Home
          </a>
          <a href="#about" className="text-white text-xl hover:text-[#dba3f3] transition-colors">
            About
          </a>
          <a href="#skills" className="text-white text-xl hover:text-[#dba3f3] transition-colors">
            Skills & Experience
          </a>
          <a href="#projects" className="text-white text-xl hover:text-[#dba3f3] transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-white text-xl hover:text-[#dba3f3] transition-colors">
            Contact
          </a>
        </div>

        {/* Menu Button for Mobile */}
        <button
          className="lg:hidden fixed top-4 right-4 z-50 bg-[#05091d] rounded-lg p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-4 right-4 bg-[#05091d] transition-transform duration-300 lg:hidden rounded-lg shadow-lg ${
            isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
          }`}
        >
          <div className="flex flex-col p-4 w-64 space-y-2">
            <a
              href="#home"
              className="text-white py-2 px-4 hover:bg-[#130950] rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white py-2 px-4 hover:bg-[#130950] rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="text-white py-2 px-4 hover:bg-[#130950] rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills & Experience
            </a>
            <a
              href="#projects"
              className="text-white py-2 px-4 hover:bg-[#130950] rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white py-2 px-4 hover:bg-[#130950] rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Overlay for blur effect */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
            {/* Main Content */}
            <main className="pt-16 px-5 pb-5">
        {/* Home Section */}
        <Section id="home" className="h-screen relative">
          <div className="max-w-6xl mx-auto px-4 pt-16 h-full">
            <div className="flex flex-col md:flex-row items-center justify-center h-full">
              <div className="md:w-1/2 text-left">
                <h1 className="text-6xl md:text-7xl font-bold text-white mb-3 pop-up delay-1">
                 Hi there!
                 I am
                </h1>
                <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-4 pop-up delay-1 gradient-text">
                 Simran Bansal
                </h1>
                <h2 className="text-2xl md:text-3xl text-[#debdec] mb-6 pop-up delay-2">
                  <Typewriter
                    texts={["Web Developer", "Creative Coder", "Tech Enthusiast"]}
                  />
                </h2>
                <p className="text-lg md:text-xl text-white mb-8 max-w-2xl pop-up delay-3">
                  Passionate web developer with experience in creating
                  dynamic and responsive websites. I love to build web applications
                  that solve real-world problems and enhance user experiences.
                </p>
                <div className="flex gap-4 pop-up delay-4">
                  <button className="bg-[#9020c0] text-white py-3 px-6 rounded-md hover:bg-[#a027ec] transition-colors">
                    View Work
                  </button>
                  <button className="bg-transparent text-white py-3 px-6 rounded-md border border-[#dba3f3] hover:bg-[#dba3f3]/10 transition-colors">
                    Contact Me
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-end items-center pop-up delay-5">
              <img
              src="./file66.png"
              alt="Developer Illustration"
              className="w-full h-full max-w-lg animate-glow"
            />
              </div>
            </div>
          </div>
        </Section>

        <SeparatorLine />

        {/* About Section */}
        <Section id="about">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 ml-5 text-[#fefefe] pop-up delay-1">
              {"About."}
            </h2>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-3/5">
                <div className="space-y-6 text-lg">
                  <p className="text-white pop-up delay-2">
                    Hello! I'm Simran, a passionate software engineer based in India. My journey in technology began during my early college years, where I discovered my love for creating solutions through code.
                  </p>
                  
                  <p className="text-white pop-up delay-3">
                    Currently pursuing my postgraduate degree in Software Engineering, I've been focusing on web development and software engineering. What excites me most about technology is its potential to solve real-world problems and make a positive impact on people's lives.
                  </p>

                  <p className="text-white pop-up delay-4">
                    Beyond coding, I'm deeply interested in open-source contributions and staying up-to-date with the latest technological trends. I believe in the power of community and knowledge sharing, which drives me to actively participate in tech communities and collaborative projects.
                  </p>
                </div>
                
                <div className="mt-8 pop-up delay-5">
                  <button className="bg-[#69188c] text-white py-3 px-6 rounded-md hover:bg-[#c77ef0] transition-colors flex items-center">
                    <FontAwesomeIcon icon={faCamera} className="mr-2" />
                    Download CV
                  </button>
                </div>
              </div>

              <div className="md:w-2/5 flex justify-center pop-up delay-3">
                <img
                  src="./file6.png"
                  alt="Profile"
                  className="w-full h-auto max-w-md object-contain"
                  style={{ 
                    minHeight: '400px',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>
        </Section>

        <SeparatorLine />
                {/* Skills & Experience Section */}
                <Section id="skills">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-white pop-up delay-1">
              Skills & Experience.<span className="text-[#dba3f3]"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column - Skills */}
              <div className="pop-up delay-2 space-y-16">
                {/* Programming Languages Section */}
                <div className="relative">
                  {/* Dot and Line */}
                  <div className="absolute left-0 top-0 w-4 h-4 bg-[#05091d] z-10">
                    <div className="w-3 h-3 bg-[#dba3f3] rounded-full"></div>
                  </div>
                  <div className="absolute left-1.5 top-0 bottom-0 w-[1px] bg-[#dba3f3] opacity-20"></div>
                  
                  <div className="pl-8">
                    <h3 className="text-[#dba3f3] text-lg mb-8">Programming Languages</h3>
                    <div className="grid grid-cols-3 gap-8">
                      {[
                        { name: "C++", icon: "devicon-cplusplus-plain" },
                        { name: "Python", icon: "devicon-python-plain" },
                        { name: "HTML", icon: "devicon-html5-plain" },
                        { name: "CSS", icon: "devicon-css3-plain" },
                        { name: "JavaScript", icon: "devicon-javascript-plain" },
                        { name: "C", icon: "devicon-c-plain" },
                      ].map((lang, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center transition-transform hover:-translate-y-1"
                        >
                          <i className={`${lang.icon} text-4xl text-white mb-3`}></i>
                          <span className="text-gray-300 text-sm">{lang.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Frameworks/Libraries Section */}
                <div className="relative">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-[#05091d] z-10">
                    <div className="w-3 h-3 bg-[#dba3f3] rounded-full"></div>
                  </div>
                  <div className="absolute left-1.5 top-0 bottom-0 w-[1px] bg-[#dba3f3] opacity-20"></div>
                  
                  <div className="pl-8">
                    <h3 className="text-[#dba3f3] text-lg mb-8">Frameworks/Libraries</h3>
                    <div className="grid grid-cols-3 gap-8">
                      {[
                        { name: "ReactJS", icon: "devicon-react-original" },
                        { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
                        { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
                      ].map((framework, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center transition-transform hover:-translate-y-1"
                        >
                          <i className={`${framework.icon} text-4xl text-white mb-3`}></i>
                          <span className="text-gray-300 text-sm">{framework.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tools Section */}
                <div className="relative">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-[#05091d] z-10">
                    <div className="w-3 h-3 bg-[#dba3f3] rounded-full"></div>
                  </div>
                  <div className="absolute left-1.5 top-0 bottom-0 w-[1px] bg-[#dba3f3] opacity-20"></div>
                  
                  <div className="pl-8">
                    <h3 className="text-[#dba3f3] text-lg mb-8">Tools</h3>
                    <div className="grid grid-cols-3 gap-8">
                      {[
                        { name: "MySQL", icon: "devicon-mysql-plain" },
                        { name: "VS Code", icon: "devicon-vscode-plain" },
                        { name: "Git", icon: "devicon-git-plain" },
                        { name: "GitHub", icon: "devicon-github-original" },
                        { name: "ViteJS", icon: "devicon-vitejs-plain" },
                      ].map((tool, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center transition-transform hover:-translate-y-1"
                        >
                          <i className={`${tool.icon} text-4xl text-white mb-3`}></i>
                          <span className="text-gray-300 text-sm">{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Education */}
              <div className="pop-up delay-3 space-y-16">
                {[
                  {
                    title: "GeeksforGeeks Student Chapter Lead",
                    from: "Head Graphic Designer",
                    period: "2023-2025",
                    description: "Serving as a Student Chapter Lead for GeeksforGeeks, fostering a community of innovators, and empowering fellow students to enhance their coding skills and technical knowledge."
                  },
                  {
                    title: "Smart India Hackathon",
                    from: "Designed & Implemented",
                    period: "2023-2024",
                    description: "Designed & implemented innovative solutions at Smart India Hackathon. Developed prototype driving social change & technological advancement."
                  },
                  {
                    title: "Web Development Training",
                    from: "Internshala",
                    period: "2022-2023",
                    description: "Completed Web Development Training at Internshala. Acquired hands-on experience in building dynamic web applications and enhancing programming skills."
                  }
                ].map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-[#05091d] z-10">
                      <div className="w-3 h-3 bg-[#dba3f3] rounded-full"></div>
                    </div>
                    <div className="absolute left-1.5 top-0 bottom-0 w-[1px] bg-[#dba3f3] opacity-20"></div>
                    
                    <div className="pl-8">
                      <h4 className="text-2xl font-bold text-white mb-1">{edu.title}</h4>
                      <p className="text-[#dba3f3] text-lg mb-1">{edu.from}</p>
                      <p className="text-[#dba3f3] text-lg mb-3">{edu.period}</p>
                      <p className="text-gray-300 text-lg leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <SeparatorLine />

        {/* Contact Section */}
        <Section id="contact">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-white pop-up delay-1">
              Contact<span className="text-[#dba3f3]">.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg text-white pop-up delay-2">
                  Feel free to reach out to me for any questions or opportunities.
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions.
                </p>
                <div className="space-y-4 pop-up delay-3">
                  <div className="flex items-center text-white">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="mr-4 text-[#dba3f3]"
                    />
                    <span>email@example.com</span>
                  </div>
                  <div className="flex items-center text-white">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="mr-4 text-[#dba3f3]"
                    />
                    <span>github.com/username</span>
                  </div>
                  <div className="flex items-center text-white">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="mr-4 text-[#dba3f3]"
                    />
                    <span>linkedin.com/in/username</span>
                  </div>
                </div>
              </div>
              <div className="pop-up delay-4">
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 rounded-md bg-[#130950] text-white border border-[#dba3f3] focus:outline-none focus:border-[#c77ef0]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-md bg-[#130950] text-white border border-[#dba3f3] focus:outline-none focus:border-[#c77ef0]"
                  />
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full p-3 rounded-md bg-[#130950] text-white border border-[#dba3f3] focus:outline-none focus:border-[#c77ef0]"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-[#5b077f] text-white py-3 rounded-md hover:bg-[#c77ef0] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
};

export default App;