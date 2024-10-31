import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiExpress,SiGmail } from "react-icons/si";

import {
  RiSupabaseFill,
  RiTailwindCssFill,
  RiReactjsLine,
} from "react-icons/ri";

import { PiFigmaLogoDuotone } from "react-icons/pi";
import { TbCircleLetterC } from "react-icons/tb";

import projectImage1 from "../assets/cubekit.svg";
import projectImage2 from "../assets/frequencii.svg";
import projectImage3 from "../assets/pictelai.svg";

export const NAVIGATION_LINKS = [
  { label: "PROJECTS", href: "#projects" },
  { label: "BIO", href: "#bio" },
  { label: "SKILLS", href: "#skills" },
  { label: "WORK EXPERIENCE", href: "#work" },
  { label: "INTERNSHIPS", href: "#internships" },
  { label: "EDUCATION", href: "#education" },
  { label: "CONTACT", href: "#contact" },
  
];

export const HERO = {
  name: "Bhupesh Roushan",
  greet: "Hello there! 👋🏻 I'm",
  description1:
    "Welcome to my Portfolio! I’m a passionate Frontend Developer with a strong foundation in creating responsive, user-centric designs and interactive web experiences. With expertise in HTML, CSS, JavaScript, and modern frameworks like React, I bring ideas to life with seamless functionality and polished aesthetics.",
  description2:
    "Beyond frontend, I have solid knowledge of the entire MERN stack, enabling me to work end-to-end on projects and contribute to both the client and server sides.",
  description3:
    "Explore my work to see how I blend design with Technology to craft engaging digital experiences. Let’s build something incredible together!",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Cubekit - Hiring Platform",
    description:
      "Job-hunting platform designed to connect users with ideal job opportunities.Built Using Clerk, Supabase, ReactJs, EmailJs ,Zod and React Hook Form, React Router, styled with ShadCn and Tailwind CSS.",
    projectLink: "https://cubekit.vercel.app",
    image: projectImage1,
  },
  {
    id: 2,
    name: "PictelAI - Powered by Gemini",
    description:
      "An AI-powered Web App built with React.js for frontend and Context API for state management. Styled with Tailwind CSS for responsiveness, Integrated the Google Gemini API to deliver AI functionality.",
    projectLink: "https://pictelai.vercel.app",
    image: projectImage3,
  },
  {
    id: 3,
    name: "Frequencii - E-commerce Prototype",
    description:
      "An e-commerce prototype using React.js for frontend and Redux Toolkit for state management.EmailJS to handle communications and newsletters, Styled with Tailwind CSS and ShadCN.",
    projectLink: "https://frequencii.vercel.app",
    image: projectImage2,
  },
 
];

export const BIO = [
  "I’m a Frontend Developer with a strong foundation in building visually engaging and intuitive web applications. I graduated from BMS Institute of Technology in Bangalore, where I studied Electronics and Communication Engineering from 2018 to 2023. During my studies, I had the opportunity to intern at Varcons Technologies in Bangalore, where I gained hands-on experience in software development and deepened my understanding of industry practices.",

  "After graduating, I worked as a Sports Analyst at Hudl from July to November 2023, where I developed analytical and data-driven insights skills that I now bring into my development work. These experiences have honed my ability to approach projects with precision and problem-solving acumen.",

  "Specializing in HTML, CSS, JavaScript, and React, I focus on crafting responsive, interactive interfaces for seamless user experiences. With additional skills in the MERN stack, I am well-equipped to contribute to both frontend and backend development, enabling me to tackle projects from all angles.",
  "Driven by a passion for technology and continuous learning, I’m excited to build impactful digital experiences that make a difference.",
];

export const SKILLS = [
  {
    icon: <FaHtml5 className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "HTML",
  },
  {
    icon: <FaCss3Alt className="text-4xl text-sky-400 lg:text-5xl" />,
    name: "CSS",
  },
  {
    icon: <IoLogoJavascript className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "Javascript",
  },
  {
    icon: <RiReactjsLine className="text-4xl  text-cyan-400 lg:text-5xl" />,
    name: "React",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node Js",
  },
  {
    icon: <SiExpress className="text-4xl text-yellow-500 lg:text-5xl" />,
    name: "Express Js",
  },

  {
    icon: <RiSupabaseFill className="text-4xl text-green-500 lg:text-5xl" />,
    name: "Supabase",
  },
  {
    icon: <FaBootstrap className="text-4xl text-purple-700 lg:text-5xl" />,
    name: "Bootstrap",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Tailwind CSS",
  },
  {
    icon: <PiFigmaLogoDuotone className="text-4xl text-sky-500 lg:text-5xl" />,
    name: "Figma",
  },
  {
    icon: <FaPython className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Python",
  },
  {
    icon: <TbCircleLetterC className="text-4xl text-green-400 lg:text-5xl" />,
    name: "C",
  },
  {
    icon: <FaGitAlt className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Git",
  },
  {
    icon: <FaGithub className="text-4xl text-white lg:text-5xl" />,
    name: "Github",
  },
];

export const EXPERIENCES = [
  {
    title: "Sports Analyst",
    company: "Hudl India Pvt. Ltd.",
    duration: "July 2023 - November 2023",
    description:
      "Used Hudl’s software for event analysis and key performance indicators,Provided detailed insights on teams, players, and opponent tendencies. Teamed up with data scientists to develop advanced statistical models.",
  }
];

export const INTERNSHIPS=[
  {
    title: "Full Stack Web Devloper Intern",
    company: "Varcons Technologies",
    duration: "February 2023 - March 2023",
    description:
      "Worked on the Project named ”Coursezz”, Tech Stack used is Figma, React.Js, MongoDB, Express.Js Node.js.",
  }
]

export const EDUCATION = [
  {
    degree: "B.E. in Electronics and Communication Engineering",
    institution: "BMS Institute of Technology and Management, Bangalore",
    duration: "September 2018 - June 2023",
    description:
      "Built a strong foundation in electronics and communication systems while developing transferable problem-solving and analytical skills that complement my work as a MERN stack developer. Focused on core areas such as circuit design, microprocessors, and digital systems, while also gaining valuable project experience that has enhanced my ability to work with complex architectures and user interfaces. My engineering background supports my proficiency in frontend development by enabling me to bring precision and a system-oriented mindset to building responsive, user-centered web applications.",
  }
];

export const SOCIAL_MEDIA_LINKS = [
 
  {
    href: "https://www.instagram.com/roushanwa",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/roushanwa",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/bhupesh-roushan",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/roushanb",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href:"mailto:roushan.bhupesh@gmail.com",
    icon: <SiGmail fontSize={25} className="hover:opacity-80" />,
  },
];
