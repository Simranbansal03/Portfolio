import React, { useState, useEffect } from "react";
import Lottie from "react-lottie-player";
import "./index.css";
import LoadingAnimation from "./LoadingAnimation.json";
import Education from "./Eduani.json";
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
      className={`transition-opacity duration-1000 ${inView ? "fade-in" : "fade-out"
        } ${className} ${id !== "home" ? "pt-24" : ""}`}
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
      <nav className="fixed top-0 left-0 right-7 bg-[#05091d] h-16 flex items-center justify-between px-6 z-50">
        {/* Logo Section */}
        <div className="flex items-center">
          <a
            href="#home"
            className="text-[#dba3f3] text-xl ml-4 font-mono hover:text-[#c77ef0] transition-colors"
          >
            {"<Simran/>"}
          </a>
        </div>


        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <a
            href="#home"
            className="text-white text-xl hover:text-[#dba3f3] transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white text-xl hover:text-[#dba3f3] transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-white text-xl hover:text-[#dba3f3] transition-colors"
          >
            Skills & Experience
          </a>
          <a
            href="#education"
            className="text-white text-xl hover:text-[#dba3f3] transition-colors"
          >
            Education
          </a>
          <a
            href="#projects"
            className="text-white text-xl hover:text-[#dba3f3] transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white text-xl hover:text-[#dba3f3] transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
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
          className={`fixed top-4 right-4 bg-[#05091d] transition-transform duration-300 lg:hidden rounded-lg shadow-lg ${isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
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
              href="#education"
              className="text-white py-2 px-4 hover:bg-[#130950] rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Education
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

      {/* Main Content */}
      <main className="pt-16 px-5 pb-5">
        {/* Home Section */}
        <Section id="home" className="h-screen flex items-center justify-between px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto">
            {/* Left Side - Text Content */}
            <div className="md:w-1/2 text-left space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                Hi there! I am
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white gradient-text">
                Simran Bansal
              </h1>
              <h2 className="text-xl md:text-3xl text-[#debdec]">
                <Typewriter
                  texts={["Web Developer", "Creative Coder", "Tech Enthusiast"]}
                />
              </h2>
              <p className="text-base md:text-xl text-white max-w-xl">
                Passionate web developer with experience in creating dynamic and responsive websites. I love to build web applications that solve real-world problems and enhance user experiences.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() =>
                    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
                  }
                  className="bg-[#9020c0] text-white py-2 px-6 rounded-md hover:bg-[#a027ec] transition-colors"
                >
                  View Work
                </button>
                <a
                  href="https://linkedin.com/in/simran-bansal-67a1a3225"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-transparent text-white py-2 px-6 rounded-md border border-[#dba3f3] hover:bg-[#dba3f3]/10 transition-colors">
                    Contact Me
                  </button>
                </a>
              </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="md:w-1/2 flex justify-center items-center">
              <div className="relative flex md:flex-row flex-col items-center gap-8">
                <img
                  src="./file66.png"
                  alt="Developer Illustration"
                  className="w-full h-auto max-w-xs md:max-w-md object-contain animate-glow"
                />
                <div className="social-links md:absolute md:right-[-4rem] md:top-1/2 md:transform md:-translate-y-1/2 flex md:flex-col flex-row items-center md:gap-6 gap-4 mt-4 md:mt-0">
                  {/* Social Icons */}
                  <a
                    href="https://github.com/Simranbansal03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-link"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-2xl text-[#f7f7f7] hover:text-[#c77ef0] transition-all duration-300"
                    />
                  </a>
                  <a
                    href="https://linkedin.com/in/simran-bansal-67a1a3225"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-link"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-2xl text-[#fefefe] hover:text-[#c77ef0] transition-all duration-300"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/_.simran03_/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-link"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-2xl text-[#fdfdfd] hover:text-[#c77ef0] transition-all duration-300"
                    />
                  </a>
                  <a href="mailto:simranbansal6903@gmail.com" className="social-icon-link">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-2xl text-[#fafafa] hover:text-[#c77ef0] transition-all duration-300"
                    />
                  </a>
                </div>
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
                    Hello! I'm Simran, a passionate software engineer based in
                    India. My journey in technology began during my early
                    college years, where I discovered my love for creating
                    solutions through code.
                  </p>

                  <p className="text-white pop-up delay-3">
                    Currently pursuing my postgraduate degree in Computer Science
                    Engineering, I've been focusing on web development and
                    software engineering. What excites me most about technology
                    is its potential to solve real-world problems and make a
                    positive impact on people's lives.
                  </p>

                  <p className="text-white pop-up delay-4">
                    Beyond coding, I'm deeply interested in open-source
                    contributions and staying up-to-date with the latest
                    technological trends. I believe in the power of community
                    and knowledge sharing, which drives me to actively
                    participate in tech communities and collaborative projects.
                  </p>
                </div>

                <div className="mt-8 pop-up delay-5">
  <a
    href="https://drive.google.com/uc?export=download&id=1AfQVQ1QJ7_tDpA0ewZpAtOBRA0VGde99"
    className="bg-[#69188c] text-white py-3 px-6 rounded-md hover:bg-[#c77ef0] transition-colors flex items-center"
    style={{ display: 'inline-block', textDecoration: 'none' }}
  >
    <FontAwesomeIcon icon={faCamera} className="mr-2" />
    Download CV
  </a>
</div>
              </div>

              <div className="md:w-2/5 flex justify-center pop-up delay-3">
                <img
                  src="./file6.png"
                  alt="Profile"
                  className="w-full h-auto max-w-md object-contain"
                  style={{
                    minHeight: "400px",
                    objectFit: "contain",
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
              Skills & Experience<span className="text-[#dba3f3]">.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column - Skills */}
              <div className="pop-up delay-2 space-y-16">
                {/* Programming Languages Section */}
                <div className="relative">
                  <div className="absolute left-1.5 top-0 bottom-0 w-[1px] bg-[#dba3f3] opacity-20"></div>
                  <div className="flex items-center mb-8">
                    <div className="relative w-4 h-4 bg-transparent z-10 mt-1">
                      <div className="w-3 h-3 bg-[#dba3f3] rounded-full"></div>
                    </div>
                    <h3 className="text-[#dba3f3] text-lg ml-4">Programming Languages</h3>
                  </div>
                  <div className="pl-8">
                    <div className="grid grid-cols-3 gap-8">
                      {[
                        { name: "C++", icon: "devicon-cplusplus-plain" },
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
                  <div className="absolute left-1.5 top-0 bottom-0 w-[1px] bg-[#dba3f3] opacity-20"></div>
                  <div className="flex items-center mb-8">
                    <div className="relative w-4 h-4 bg-transparent z-10 mt-1">
                      <div className="w-3 h-3 bg-[#dba3f3] rounded-full"></div>
                    </div>
                    <h3 className="text-[#dba3f3] text-lg ml-4">Frameworks/Libraries</h3>
                  </div>
                  <div className="pl-8">
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
                  <div className="absolute left-1.5 top-0 bottom-0 w-[1px] bg-[#dba3f3] opacity-20"></div>
                  <div className="flex items-center mb-8">
                    <div className="relative w-4 h-4 bg-transparent z-10 mt-1">
                      <div className="w-3 h-3 bg-[#dba3f3] rounded-full"></div>
                    </div>
                    <h3 className="text-[#dba3f3] text-lg ml-4">Tools</h3>
                  </div>
                  <div className="pl-8">
                    <div className="grid grid-cols-3 gap-8">
                      {[
                        { name: "MySQL", icon: "devicon-mysql-plain" },
                        { name: "VS Code", icon: "devicon-vscode-plain" },
                        { name: "Canva", icon: "devicon-canva-plain" },
                        { name: "Figma", icon: "devicon-figma-plain" },
                        { name: "Photoshop", icon: "devicon-photoshop-plain" },
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

              {/* Right Column - Experience */}
              <div className="pop-up delay-3 space-y-16">
                {[
                  {
                    title: "GeeksforGeeks Student Chapter Lead",
                    from: "Head Graphic Designer",
                    period: "2023-2025",
                    description:
                      "Serving as a Student Chapter Lead for GeeksforGeeks, fostering a community of innovators, and empowering fellow students to enhance their coding skills and technical knowledge.",
                  },
                  {
                    title: "Smart India Hackathon",
                    from: "Designed & Implemented",
                    period: "2023-2024",
                    description:
                      "Designed & implemented innovative solutions at Smart India Hackathon. Developed prototype driving social change & technological advancement.",
                  },
                  {
                    title: "Web Development Training",
                    from: "Internshala",
                    period: "2022-2023",
                    description:
                      "Completed Web Development Training at Internshala. Acquired hands-on experience in building dynamic web applications and enhancing programming skills.",
                  },
                ].map((exp, index) => (
                  <div key={index} className="relative">
                    <div className="absolute left-1.5 top-0 bottom-0 w-[1px] bg-[#dba3f3] opacity-20"></div>
                    <div className="flex items-start">
                      <div className="relative w-4 h-4 bg-transparent z-10 mt-2">
                        <div className="w-3 h-3 bg-[#dba3f3] rounded-full"></div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-2xl font-bold text-white mb-1">{exp.title}</h4>
                        <p className="text-[#dba3f3] text-lg mb-1">{exp.from}</p>
                        <p className="text-[#dba3f3] text-lg mb-3">{exp.period}</p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
        <SeparatorLine />

        {/* Education Section */}
        <Section id="education">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-16 text-white pop-up delay-1">
              Education.
            </h2>
            <div className="flex flex-col md:flex-row gap-20">
              {/* Left Side - Illustration */}
              <div className="md:w-1/2 flex items-center justify-center pop-up delay-2">
                <div className="relative">
                  <div className="w-full max-w-[600px]">
                    <Lottie
                      loop
                      play
                      animationData={Education}
                      style={{ width: 500, height: 350 }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Education Cards */}
              <div className="md:w-1/2 space-y-8 pop-up delay-3">
                {/* Education Card 1 */}
                <div className="education-card bg-[#130950]/30 rounded-xl p-6 hover:bg-[#130950] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <img
                      src="/jecrc1.png"
                      alt="College Logo"
                      className="w-20 h-20 rounded-lg"
                    />
                    <div>
                      <h3 className="text-[#dba3f3] text-xl font-semibold mb-1">
                      Jaipur Engineering College and Research Center
                      </h3>
                      <h4 className="text-white mb-2">
                      Bachelor of Technology
                      </h4>
                      <p className="text-gray-400 mb-3">2021 - 2025</p>
                      <ul className="space-y-2 text-gray-300">
                        <li>•Computer Science & Engineering</li>
                        
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Education Card 2 */}
                <div className="education-card bg-[#130950]/30 rounded-xl p-6 hover:bg-[#130950] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <img
                      src="/cchs.png"
                      alt="College Logo"
                      className="w-20 h-20 rounded-lg"
                    />
                    <div>
                      <h3 className="text-[#dba3f3] text-xl font-semibold mb-1">
                        Cambridge Court High School,Jaipur
                      </h3>
                      <h4 className="text-white mb-2">
                      Senior Secondary Education(XII)
                      </h4>
                      <p className="text-gray-400 mb-3">2020 - 2021</p>
                      <p className="text-gray-300">
                        •Higher Secondary Education in PCM.
                      </p>
                    </div>
                  </div>
                </div>
                 {/* Education Card 3 */}
                 <div className="education-card bg-[#130950]/30 rounded-xl p-6 hover:bg-[#130950] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <img
                      src="/cchs.png"
                      alt="College Logo"
                      className="w-20 h-20 rounded-lg"
                    />
                    <div>
                      <h3 className="text-[#dba3f3] text-xl font-semibold mb-1">
                        Cambridge Court High School,Jaipur
                      </h3>
                      <h4 className="text-white mb-2">
                      Secondary Education(X)
                      </h4>
                      <p className="text-gray-400 mb-3">2018 - 2019</p>
                      <p className="text-gray-300">
                        •Completed Secondary Education with focus on Academic Excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <SeparatorLine />
        {/* Projects Section */}
        <Section id="projects">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-white pop-up delay-1">
              Projects<span className="text-[#dba3f3]">.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project Cards */}
              {[1, 2, 3].map((project, index) => (
                <div
                  key={index}
                  className="bg-[#130950] rounded-lg overflow-hidden shadow-lg pop-up delay-2"
                >
                  <img
                    src={`./project${project}.jpg`}
                    alt={`Project ${project}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Project Title {project}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Brief description of the project and the technologies
                      used.
                    </p>
                    <div className="flex gap-2">
                      <a
                        href="#"
                        className="text-[#dba3f3] hover:text-white transition-colors"
                      >
                        View Project
                      </a>
                      <span className="text-[#dba3f3]">|</span>
                      <a
                        href="#"
                        className="text-[#dba3f3] hover:text-white transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
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
                  Feel free to reach out to me for any questions or
                  opportunities. I'm always open to discussing new projects,
                  creative ideas, or opportunities to be part of your visions.
                </p>
                <div className="space-y-4 pop-up delay-3">
                  <div className="flex items-center text-white">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="mr-4 text-[#dba3f3]"
                    />
                    <span>simranbansal6903@gmail.com</span>
                  </div>
                  <div className="flex items-center text-white">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="mr-4 text-[#dba3f3]"
                    />
                    <span>github.com/Simranbansal03</span>
                  </div>
                  <div className="flex items-center text-white">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="mr-4 text-[#dba3f3]"
                    />
                    <span>linkedin.com/in/simran-bansal-67a1a3225</span>
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
      </main >

      {/* Overlay for mobile menu blur effect */}
      < div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMenuOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMenuOpen(false)}
      ></div >
    </div >
  );
};


export default App;