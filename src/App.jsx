import React, { useState, useEffect, useRef } from "react";
import * as emailjs from '@emailjs/browser';
import Lottie from "react-lottie-player";
import "./index.css";
import { TypeAnimation } from 'react-type-animation';
import Education from "./Eduani.json";
import DeveloperAnimation from "./Animation.json";
import LoadingAnimation from "./LoadingAnimation.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCamera } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import { IoIosLink } from "react-icons/io";
import project1image from "./assets/pg.jpg";
import project3image from "./assets/figma2.png";
import project4image from "./assets/dnk.png";
import project2image from "./assets/Netflix.jpg";

// Custom hook for scroll animations
const useScrollAnimation = (threshold = 0.1) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: false,
  });
  return [ref, inView];
};

// Projects data
const projects = [
  {
    id: 1,
    image: project1image,
    title: "PGLife",
    githubLink: "https://github.com/Simranbansal03/Pg_Life",
    techStack: [
      "devicon-html5-plain-wordmark colored",
      "devicon-php-plain colored",
      "devicon-css3-plain colored",
      "devicon-javascript-plain colored",
    ],
  },
  {
    id: 2,
    image: project2image,
    title: "Netflix Clone",
    githubLink: "https://github.com/Simranbansal03/Netflix-Clone",
    techStack: [
      "devicon-html5-plain-wordmark colored",
      "devicon-css3-plain colored",
      "devicon-javascript-plain colored",
    ],
  },
  {
    id: 3,
    image: project3image,
    title: "Talkza: Language Translator",
    githubLink: "https://www.figma.com/design/e78G6RgmpNk8mMzttzCJjr/language-translator?node-id=0-1&t=Hv04YrZgKZknobJB-1",
    techStack: ["devicon-figma-plain"],
  },
  {
    id: 4,
    image: project4image,
    title: "DNK Design",
    githubLink: "https://www.figma.com/design/574eiZ8koeVtQrhV4F1jSk/DNK-WEBSITE?node-id=16-74&t=480TWjjjebCHVIdT-1",
    techStack: ["devicon-figma-plain"],
  }
];
// ProjectCard Component
const ProjectCard = ({ project, reference, inView }) => {
  return (
    <div
      ref={reference}
      className={`relative group overflow-hidden rounded-xl transform transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
    >
      <div className="relative h-[250px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#400354] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-xl font-bold text-white mb-3 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-100">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-3 mb-4">
              {project.techStack.map((tech, techIndex) => (
                <i
                  key={techIndex}
                  className={`${tech} text-2xl transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500`}
                  style={{ transitionDelay: `${150 + techIndex * 50}ms` }}
                />
              ))}
            </div>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#f41818] transition-colors duration-300"
              >
                <div className="flex items-center gap-2 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-300">
                  <IoIosLink size="1.5rem" />
                  <span>View Project</span>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Section Component with improved animations
const Section = ({ id, children, className = "" }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-1000 ${inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-20"
        } ${className}`}
      style={{ scrollMarginTop: "80px" }}
    >
      {children}
    </section>
  );
};

// Separator Line Component
const SeparatorLine = () => {
  const [ref, inView] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`w-[95%] md:w-[97%] lg:w-[95%] max-w-[1100px] h-[2px] mx-auto my-8 transition-all duration-1000 ${inView ? "opacity-100" : "opacity-0"
        }`}
    >
      <div className="h-full bg-gradient-to-r from-[#dba3f3] via-[#8e44ad] to-[#130950]"></div>
    </div>
  );
};

// Education Card Component
const EducationCard = ({ education, reference, inView }) => {
  return (
    <div
      ref={reference}
      className={`education-card bg-[#130950]/30 rounded-xl p-6 
        hover:bg-[#130950] transition-all duration-500 transform 
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
    >
      <div className="flex items-start gap-4">
        <img
          src={education.logo}
          alt="Institution Logo"
          className="w-20 h-20 rounded-lg transform transition-transform duration-300 group-hover:scale-105"
        />
        <div className="flex-1">
          <h3 className="text-[#dba3f3] text-xl font-semibold mb-1">
            {education.school}
          </h3>
          <h4 className="text-white mb-2">{education.degree}</h4>
          <p className="text-gray-400 mb-3">{education.period}</p>
          <ul className="space-y-2 text-gray-300">
            {education.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
const App = () => {
  // State management
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Refs for animations
  const projectRefs = projects.map(() => useInView({ threshold: 0.1 }));
  const programmingRef = useInView({ threshold: 0.1 });
  const frameworksRef = useInView({ threshold: 0.1 });
  const toolsRef = useInView({ threshold: 0.1 });
  const experienceRefs = [
    useInView({ threshold: 0.1 }),
    useInView({ threshold: 0.1 }),
    useInView({ threshold: 0.1 })
  ];

  // Education data and refs
  const educationData = [
    {
      logo: "/jecrc2.png",
      school: "Jaipur Engineering College and Research Center",
      degree: "Bachelor of Technology",
      period: "2021 - 2025",
      details: ["•Computer Science & Engineering"],
    },
    {
      logo: "/cchs2.png",
      school: "Cambridge Court High School, Jaipur",
      degree: "Senior Secondary Education(XII)",
      period: "2020 - 2021",
      details: ["•Higher Secondary Education in PCM."],
    },
    {
      logo: "/cchs2.png",
      school: "Cambridge Court High School, Jaipur",
      degree: "Secondary Education(X)",
      period: "2018 - 2019",
      details: ["•Completed Secondary Education with focus on Academic Excellence."],
    },
  ];
  const educationRefs = educationData.map(() => useInView({ threshold: 0.1 }));

  // Initialize emailjs
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
  }, []);

  // Loading screen effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // Form handlers
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  // Loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#05091d] backdrop-blur-3xl text-white z-50">
        <Lottie
          loop
          play
          animationData={LoadingAnimation}
          style={{ width: 500, height: 500 }}
          className="loading-animation"
        />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#05091d]">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-[#05091d]/90 backdrop-blur-md h-16 flex items-center justify-between px-6 z-50 transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="#home"
            className="text-[#dba3f3] text-xl ml-4 font-mono hover:text-[#c77ef0] transition-all duration-300"
          >
            {"<Simran/>"}
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center mr-9 space-x-8">
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Skills & Experience", id: "skills" },
            { name: "Education", id: "education" },
            { name: "Projects", id: "projects" },
            { name: "Contact", id: "contact" }
          ].map((item, index) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              className="text-white text-xl hover:text-[#dba3f3] transition-all duration-300 nav-link"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden fixed top-4 right-4 z-50 
            p-2 rounded-lg
            transition-all duration-300
            hover:scale-110
            active:scale-95
            ${isMenuOpen ? "bg-[#05091d]" : "bg-transparent"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-white transition-transform duration-300"
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
          className={`fixed top-0 right-0 h-full w-64 
            bg-[#05091d] 
            transform transition-transform duration-300 ease-in-out lg:hidden 
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            z-40
            shadow-xl`}
          style={{
            backgroundColor: "#05091d",
            backgroundImage: "none",
            opacity: 1,
          }}
        >
          {/* Dark overlay for the rest of the screen */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-transparent backdrop-blur-none transition-opacity duration-300 z-30"
              onClick={() => setIsMenuOpen(false)}
            />
          )}

          {/* Menu Items Container */}
          <div
            className="flex flex-col pt-20 p-4 space-y-4 bg-[#05091d]"
            style={{
              backgroundColor: "#05091d",
              backgroundImage: "none",
            }}
          >
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Skills & Experience", id: "skills" },
              { name: "Education", id: "education" },
              { name: "Projects", id: "projects" },
              { name: "Contact", id: "contact" }
            ].map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                className="text-white py-1 px-4 
                  hover:bg-[#130950] 
                  rounded-md 
                  transition-all duration-300
                  active:scale-95
                  block
                  w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content Wrapper with Blur Effect */}
      <div className={`transition-all duration-300 ${isMenuOpen ? "blur-sm" : ""}`}>
        <main className="pt-8 px-5 pb-5">
          {/* Home Section */}
          <Section
            id="home"
            className="h-screen flex items-center justify-between px-4 md:px-8"
          >
            <div className="max-w-6xl mx-auto px-4 min-h-screen flex items-center">
              <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
                {/* Left Side - Text Content */}
                <div className="md:w-1/2 text-left space-y-6">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white pop-up delay-1">
                    Hi there! I am
                  </h1>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white pop-up delay-2 gradient-text">
                    Simran Bansal
                  </h1>
                  <h2 className="text-2xl md:text-3xl text-[#debdec] pop-up delay-3">
                    <TypeAnimation
                      sequence={[
                        'Web Developer',
                        1000,
                        'Creative Coder',
                        1000,
                        'Tech Enthusiast',
                        1000,
                        'UI/UX Designer',
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </h2>
                  <p className="text-base md:text-xl text-white max-w-xl pop-up delay-4">
                    Passionate web developer with experience in creating dynamic and
                    responsive websites. I love to build web applications that solve
                    real-world problems and enhance user experiences.
                  </p>
                  <div className="flex gap-4 pop-up delay-5">
                    <button
                      onClick={() =>
                        document
                          .getElementById("projects")
                          .scrollIntoView({ behavior: "smooth" })
                      }
                      className="view-work-btn bg-[#9020c0] text-white py-2 px-6 rounded-md hover:bg-[#a027ec] transition-all duration-300"
                    >
                      View Work
                    </button>
                    <a
                      href="https://linkedin.com/in/simran-bansal-67a1a3225"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-btn bg-transparent text-white py-2 px-6 rounded-md border border-[#dba3f3] hover:bg-[#dba3f3]/10 transition-all duration-300"
                    >
                      Contact Me
                    </a>
                  </div>
                </div>

                {/* Right Side - Illustration */}
                <div className="md:w-1/2 flex justify-center items-center">
                  <div className="relative flex md:flex-row flex-col items-center gap-8">
                    <img
                      src="./file89.png"
                      alt="Developer Illustration"
                      className="w-full h-auto max-w-xs md:max-w-md object-contain animate-glow"
                    />
                    {/* Social Links */}
                    <div className="social-links md:absolute md:right-[-4rem] md:top-1/2 md:transform md:-translate-y-1/2 flex md:flex-col flex-row items-center md:gap-6 gap-4 mt-4 md:mt-0">
                      {[
                        {
                          icon: <FaGithub />,
                          href: "https://github.com/Simranbansal03",
                          delay: "delay-1",
                        },
                        {
                          icon: <FaLinkedin />,
                          href: "https://linkedin.com/in/simran-bansal-67a1a3225",
                          delay: "delay-2",
                        },
                        {
                          icon: <SiLeetcode />,
                          href: "https://leetcode.com/u/simranbansal6903/",
                          delay: "delay-3",
                        },
                        {
                          icon: <FaEnvelope />,
                          href: "mailto:simranbansal6903@gmail.com",
                          delay: "delay-4",
                        },
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`social-icon-link pop-up ${social.delay}`}
                        >
                          <div className="text-2xl text-[#ffffff] hover:text-[#c77ef0] transition-all duration-300">
                            {social.icon}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <SeparatorLine />

          {/* About Section */}
          <Section id="about" className="pt-8 pb-8">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-white pop-up delay-1">
                About<span className="text-[#dba3f3]">.</span>
              </h2>
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-3/5">
                  <div className="space-y-6 text-lg">
                    <p className="text-white pop-up delay-2">
                      Hi, I'm Simran, a driven software engineer from India, fueled by a
                      passion for harnessing technology to drive positive change. My
                      fascination with coding began in college, where I discovered the
                      thrill of crafting innovative solutions.
                    </p>

                    <p className="text-white pop-up delay-3">
                      Currently, I'm pursuing my undergraduate degree in Computer Science
                      Engineering, with a focus on web development and software
                      engineering. What really gets me excited is the potential for
                      technology to tackle real-world challenges and transform lives.
                    </p>

                    <p className="text-white pop-up delay-4">
                      Beyond coding, I'm drawn to the world of open-source contributions
                      and staying ahead of the tech curve. I believe that community,
                      collaboration, and knowledge sharing are the keys to unlocking true
                      innovation – which is why I'm always eager to participate in tech
                      communities and joint projects.
                    </p>
                  </div>

                  <a
                    href="https://drive.google.com/uc?export=download&id=1AfQVQ1QJ7_tDpA0ewZpAtOBRA0VGde99"
                    className="bg-[#69188c] text-white py-3 px-6 rounded-md hover:bg-[#c77ef0] transition-all duration-300 mt-7 inline-flex items-center pop-up delay-5"
                  >
                    <FontAwesomeIcon icon={faCamera} className="mr-2" />
                    Download CV
                  </a>
                </div>

                <div className="md:w-2/5 flex justify-center pop-up delay-3">
                  <img
                    src="./file6.png"
                    alt="Profile"
                    className="w-full h-full max-w-lg object-contain hover:scale-105 transition-all duration-300"
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
          <Section id="skills" className="pt-8 pb-8">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-white pop-up delay-1">
                Skills & Experience<span className="text-[#dba3f3]">.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Column - Skills */}
                <div className="space-y-16">
                  {/* Programming Languages */}
                  <div
                    ref={programmingRef[0]}
                    className={`relative transition-all duration-700 ${programmingRef[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                      }`}
                  >
                    <div className="absolute left-1.5 top-0 bottom-0 w-[1px] bg-[#dba3f3] opacity-20"></div>
                    <div className="flex items-center mb-8">
                      <div className="relative w-4 h-4 bg-transparent z-10 mt-1">
                        <div className="w-3 h-3 bg-[#dba3f3] rounded-full"></div>
                      </div>
                      <h3 className="text-[#dba3f3] text-lg ml-4">
                        Programming Languages
                      </h3>
                    </div>
                    <div className="pl-8">
                      <div className="grid grid-cols-3 gap-8">
                        {[
                          { name: "C++", icon: "devicon-cplusplus-plain hover:text-[#c77ef0]" },
                          { name: "HTML", icon: "devicon-html5-plain hover:text-[#c77ef0]" },
                          { name: "CSS", icon: "devicon-css3-plain hover:text-[#c77ef0]" },
                          { name: "JavaScript", icon: "devicon-javascript-plain hover:text-[#c77ef0]" },
                          { name: "C", icon: "devicon-c-plain hover:text-[#c77ef0]" },
                        ].map((lang, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center transition-all duration-500 hover:-translate-y-2"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <i className={`${lang.icon} text-4xl text-white mb-3`}></i>
                            <span className="text-gray-300 text-sm">{lang.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Frameworks/Libraries */}
                  <div
                    ref={frameworksRef[0]}
                    className={`relative transition-all duration-700 ${frameworksRef[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                      }`}
                  >
                    <div className="absolute left-1.5 top-0 bottom-0 w-[1px] bg-[#dba3f3] opacity-20"></div>
                    <div className="flex items-center mb-8">
                      <div className="relative w-4 h-4 bg-transparent z-10 mt-1">
                        <div className="w-3 h-3 bg-[#dba3f3] rounded-full"></div>
                      </div>
                      <h3 className="text-[#dba3f3] text-lg ml-4">
                        Frameworks/Libraries
                      </h3>
                    </div>
                    <div className="pl-8">
                      <div className="grid grid-cols-3 gap-8">
                        {[
                          { name: "ReactJS", icon: "devicon-react-original hover:text-[#c77ef0]" },
                          { name: "Bootstrap", icon: "devicon-bootstrap-plain hover:text-[#c77ef0]" },
                          { name: "Tailwind", icon: "devicon-tailwindcss-plain hover:text-[#c77ef0]" },
                        ].map((framework, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center transition-all duration-500 hover:-translate-y-2"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <i className={`${framework.icon} text-4xl text-white mb-3`}></i>
                            <span className="text-gray-300 text-sm">{framework.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tools Section */}
                  <div
                    ref={toolsRef[0]}
                    className={`relative transition-all duration-700 ${toolsRef[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                      }`}
                  >
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
                          { name: "MySQL", icon: "devicon-mysql-plain hover:text-[#c77ef0]" },
                          { name: "VS Code", icon: "devicon-vscode-plain hover:text-[#c77ef0]" },
                          { name: "Canva", icon: "devicon-canva-plain hover:text-[#c77ef0]" },
                          { name: "Figma", icon: "devicon-figma-plain hover:text-[#c77ef0]" },
                          { name: "Photoshop", icon: "devicon-photoshop-plain hover:text-[#c77ef0]" },
                          { name: "Git", icon: "devicon-git-plain hover:text-[#c77ef0]" },
                          { name: "GitHub", icon: "devicon-github-original hover:text-[#c77ef0]" },
                          { name: "ViteJS", icon: "devicon-vitejs-plain hover:text-[#c77ef0]" },
                        ].map((tool, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center transition-all duration-500 hover:-translate-y-2"
                            style={{ animationDelay: `${index * 100}ms` }}
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
                <div className="space-y-16">
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
                    <div
                      key={index}
                      ref={experienceRefs[index][0]}
                      className={`relative transition-all duration-700 ${experienceRefs[index][1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                        }`}
                    >
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
          <Section id="education" className="pt-8 pb-8">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8 ml-5 text-white pop-up delay-1">
                Education<span className="text-[#dba3f3]">.</span>
              </h2>
              <div className="flex flex-col md:flex-row gap-20">
                {/* Left Side - Animation */}
                <div className="md:w-1/2 flex items-center justify-center pop-up delay-2">
                  <div className="relative">
                    <div className="w-full max-w-[600px]">
                      <Lottie
                        loop
                        play
                        animationData={Education}
                        style={{ width: 500, height: 350 }}
                        className="float-animation"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Side - Education Cards */}
                <div className="md:w-1/2 space-y-8">
                  {educationData.map((edu, index) => (
                    <div
                      key={index}
                      ref={educationRefs[index][0]}
                      className={`education-card bg-[#130950]/30 rounded-xl p-6 
              hover:bg-[#130950] transition-all duration-500 transform 
              ${educationRefs[index][1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        <img
                          src={edu.logo}
                          alt="Institution Logo"
                          className="w-20 h-20 rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                        />
                        <div>
                          <h3 className="text-[#dba3f3] text-xl font-semibold mb-1">
                            {edu.school}
                          </h3>
                          <h4 className="text-white mb-2">{edu.degree}</h4>
                          <p className="text-gray-400 mb-3">{edu.period}</p>
                          <ul className="space-y-2 text-gray-300">
                            {edu.details.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          <SeparatorLine />

          {/* Projects Section */}
          <Section id="projects" className="pt-8 pb-8">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-white pop-up delay-1">
                Projects<span className="text-[#dba3f3]">.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    reference={projectRefs[index][0]}
                    inView={projectRefs[index][1]}
                  />
                ))}
              </div>
            </div>
          </Section>

          <SeparatorLine />
          {/* Contact Section */}
          <Section id="contact" className="pt-8 pb-8">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8 ml-5 text-white pop-up delay-1">
                Contact<span className="text-[#dba3f3]">.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Side - Contact Info */}
                <div className="space-y-6">
                  <p className="text-lg text-white pop-up delay-2">
                    Feel free to reach out to me for any questions or opportunities. I'm
                    always open to discussing new projects, creative ideas, or
                    opportunities to be part of your visions.
                  </p>
                  <div className="space-y-4 pop-up delay-3">
                    {[
                      {
                        icon: faEnvelope,
                        text: "simranbansal6903@gmail.com",
                        href: "mailto:simranbansal6903@gmail.com",
                      },
                      {
                        icon: faGithub,
                        text: "github.com/Simranbansal03",
                        href: "https://github.com/Simranbansal03",
                      },
                      {
                        icon: faLinkedin,
                        text: "simran-bansal-67a1a3225",
                        href: "https://linkedin.com/in/simran-bansal-67a1a3225",
                      },
                    ].map((contact, index) => (
                      <a
                        key={index}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white hover:text-[#dba3f3] transition-all duration-300 transform hover:-translate-x-2"
                        style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                      >
                        <FontAwesomeIcon
                          icon={contact.icon}
                          className="mr-4 text-[#dba3f3]"
                        />
                        <span>{contact.text}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="pop-up delay-4">
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="relative group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full p-3 rounded-md bg-[#130950] text-white border border-[#dba3f3] 
                focus:outline-none focus:border-[#c77ef0] transition-all duration-300
                transform group-hover:translate-y-[-2px]"
                        required
                      />
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#dba3f3] 
              transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"/>
                    </div>

                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full p-3 rounded-md bg-[#130950] text-white border border-[#dba3f3] 
                focus:outline-none focus:border-[#c77ef0] transition-all duration-300
                transform group-hover:translate-y-[-2px]"
                        required
                      />
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#dba3f3] 
              transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"/>
                    </div>

                    <div className="relative group">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        rows="4"
                        className="w-full p-3 rounded-md bg-[#130950] text-white border border-[#dba3f3] 
                focus:outline-none focus:border-[#c77ef0] transition-all duration-300
                transform group-hover:translate-y-[-2px] resize-none"
                        required
                      ></textarea>
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#dba3f3] 
              transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"/>
                    </div>

                    <button
                      type="submit"
                      className="w-full p-3 rounded-md bg-[#5b077f] text-white 
              hover:bg-[#c77ef0] focus:outline-none focus:border-[#c77ef0] 
              transition-all duration-300 transform hover:-translate-y-1
              relative overflow-hidden group"
                    >
                      <span className="relative z-10">Send Message</span>
                      <div className="absolute inset-0 bg-[#dba3f3] transform translate-y-full 
              group-hover:translate-y-0 transition-transform duration-300"/>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Section>

          {/* Footer */}
          <div className="text-center py-4 text-gray-400 text-sm border-t border-[#dba3f3]/20">
            <p className="pop-up delay-1">
              © 2025 Simran Bansal. All Rights Reserved.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;