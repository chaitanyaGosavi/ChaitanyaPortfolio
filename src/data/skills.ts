// src/data/skills.ts

import {
  FaAngular,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiSharp,
  SiGo,
  SiBootstrap,
  SiBitbucket,
  SiJira,
  SiConfluence,
} from "react-icons/si";

export const skillsData = {
  frontend: [
    { name: "Angular", icon: FaAngular },
    { name: "React", icon: FaReact },
    { name: "NextJS", icon: SiNextdotjs },
    { name: "EXTJS", icon: FaReact },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
  ],

  languages: [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Python", icon: FaPython },
    { name: "C#", icon: SiSharp },
    { name: "Go", icon: SiGo },
  ],

  tools: [
    { name: "Git", icon: FaGitAlt },
    { name: "Bitbucket", icon: SiBitbucket },
    { name: "JIRA", icon: SiJira },
    { name: "Confluence", icon: SiConfluence },
    { name: "Linux", icon: FaReact }, // replace if you want better icon
  ],

  libraries: [
    { name: "RxJS", icon: FaReact },
    { name: "Ramda", icon: FaReact },
  ],
};