import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import techsio from "@/public/1.png";
import login from "@/public/loginn.png";
import avr2 from "@/public/2.png";
import turing from "@/public/turing.png";
import tracking from "@/public/tracking.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Reactjs, Nodejs Developer",
    location: "SARL ATLAS CBA",
    description:
      "In the context of this project, I was entrusted with the development of a dashboard designed for the management of an online gift card sales website. Additionally, I played a key role in the creation of a web application dedicated to parcel tracking.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  {
    title: "Full stack web developer",
    location: "AVR technologies",
    description:
      "Within the Research and Development team, I took the lead in creating a sophisticated dashboard to oversee parameters, user interactions, and statistics for a mobile augmented reality application.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Devteam",
    description:
      "Designed and implemented a robust ERP system utilizing web-based applications. Comprising 12 distinct modules, each operating as an independent application, the system effectively addresses diverse facets of business management, showcasing my expertise in creating comprehensive solutions for streamlined and efficient operations.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "E-commerce website for selling gift cards",
    description:
      "As part of this project, I developped a dashboard for managing an online gift card sales website. This comprehensive tool empowers users to effectively monitor real-time statistics, prevent fraudulent activities, manage products, stocks, and user accounts",
    tags: [
      "Reactjs",
      "Next.js",
      "Ant design",
      "Redux",
      "mongoDB",
      "jest",
      "Leafletjs",
      "Github",
      "Agile",
    ],
    imageUrl: techsio,
  },
  {
    title: "Back-office for managing an AR application",
    description:
      "Within the Research and Development team, I took the lead in creating a sophisticated dashboard to oversee parameters, user interactions, and statistics for a mobile augmented reality application",
    tags: [
      "Reactjs",
      "Ant design",
      "Redux",
      "mongoDB",
      "jest",
      "Github",
      "Kanban",
    ],
    imageUrl: avr2,
  },
  {
    title: "Back-office for managing a parcel-tracking application",
    description:
      "Within the Research and Development team, I took the lead in creating a sophisticated dashboard to oversee parameters, user interactions, and statistics for a mobile augmented reality application",
    tags: [
      "Reactjs",
      "Ant design",
      "Redux",
      "mongoDB",
      "jest",
      "Leafletjs",
      "Github",
    ],
    imageUrl: tracking,
  },
  {
    title: "Freelance platform",
    description:
      "I contributed to the development of a freelance platform that seamlessly connects freelancers with clients, fostering a collaborative ecosystem for task completion. This platform boasts user-friendly features such as project browsing, intelligent project suggestions, and seamless client communication.",
    tags: [
      "React",
      "Next.js",
      "Nodejs",
      "Tailwind",
      "CI/CD",
      "AWS (EC2,S3)",
      "Mongodb",
      "Gitlab",
    ],
    imageUrl: turing,
  },
  {
    title: "ERP for company managment",
    description:
      "As a full-stack developer, I developped (ERP) system that seamlessly integrates 12+ applications. This robust solution streamlines HR management, payroll calculations, visualizing statistics, email handling, and real estate project management, providing a centralized platform for efficient operation.",
    tags: [
      "React.js",
      "Node.js",
      "Redux",
      "MongoDB",
      "Express",
      "MateriaUI",
      "Handelbars",
      "React Hook Forms",
      "Reusable components",
      "jest/Recat testing library",
      "Agile",
    ],
    imageUrl: login,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "GitLab",
  "Tailwind",
  "MaterialUI",
  "AntDesign",
  "CI/CD",
  "AWS (EC2,S3)",
  "MongoDB",
  "Redux",
  "GraphQL",
  "RestAPI",
  "Express",
  "Handlebars",
  "webPack",
  "NGINX",
  "React Hook Forms",
  "Jest",
  "React testing library",
] as const;

export const methodologyData = [
  "Agile",
  "Scrum",
  "Waterfall",
  "Kanban",
  "Trello",
  "Jira",
] as const;
