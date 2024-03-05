import { LeftSidebar, SocialIcons, Theme } from "@/types"

export const navLinks = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Co-Devs",
    href: "#codevs",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Why Choose Us?",
    href: "#join",
  },
]
export const socialIcons: SocialIcons[] = [
  {
    route: "#facebook",
    imgURL: "/assets/svgs/icon-facebook-white.svg",
    label: "facebook",
  },
  {
    route: "#twitter",
    imgURL: "/assets/svgs/icon-twitter.svg",
    label: "twitter",
  },
  {
    route: "https://github.com/Zeff01/codebility-fe/tree/main",
    imgURL: "/assets/svgs/icon-github.svg",
    label: "github",
  },
  {
    route: "#linkedin",
    imgURL: "/assets/svgs/icon-linkedin.svg",
    label: "linkedin",
  },
  {
    route: "#slack",
    imgURL: "/assets/svgs/icon-slack.svg",
    label: "slack",
  },
]

export const sidebarLinks: LeftSidebar[] = [
  { route: "/dashboard", imgURL: "/assets/svgs/icon-dashboard.svg", label: "Dashboard" },
  { route: "/time-tracker", imgURL: "/assets/svgs/icon-time-tracker.svg", label: "Time Tracker" },
  { route: "/todo", imgURL: "/assets/svgs/icon-todo.svg", label: "To Do" },
  { route: "/projects", imgURL: "/assets/svgs/icon-projects.svg", label: "Projects" },
  { route: "/orgchart", imgURL: "/assets/svgs/icon-org-chart.svg", label: "Org Chart" },
  { route: "/clients", imgURL: "/assets/svgs/icon-clients.svg", label: "Clients" },
  { route: "/interns", imgURL: "/assets/svgs/icon-interns.svg", label: "Interns" },
  { route: "/applicants", imgURL: "/assets/svgs/icon-applicant.svg", label: "Applicants" },
]

export const themes: Theme[] = [
  { value: "light", label: "Light", icon: "/assets/svgs/icon-sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/svgs/icon-moon.svg" },
  { value: "system", label: "System", icon: "/assets/svgs/icon-eclipse.svg" },
]

import {
  IconCSharp,
  IconCSS,
  IconDjango,
  IconFigma,
  IconFirebase,
  IconHTML,
  IconJava,
  IconJavaScript,
  IconJQuery,
  IconKotlin,
  IconAngular,
  IconAWS,
  IconBootstrap,
  IconC,
  IconCPlusPlus,
  IconPostgreSQL,
  IconPython,
  IconReact,
  IconReactNative,
  IconRuby,
  IconSolidity,
  IconSwift,
  IconTailwind,
  IconTypeScript,
  IconVue,
  IconMongoDB,
  IconMySQL,
  IconNextJS,
  IconNodeJS,
  IconPHP,
} from "@/public/assets/svgs"

export const techstacks = [
  { name: "Angular", icon: IconAngular },
  { name: "AWS", icon: IconAWS },
  { name: "Bootstrap", icon: IconBootstrap },
  { name: "C", icon: IconC },
  { name: "C++", alias: "cplus-plus", icon: IconCPlusPlus },
  { name: "CSharp", icon: IconCSharp },
  { name: "CSS", icon: IconCSS },
  { name: "Django", icon: IconDjango },
  { name: "Figma", icon: IconFigma },
  { name: "Firebase", icon: IconFirebase },
  { name: "HTML", icon: IconHTML },
  { name: "Java", icon: IconJava },
  { name: "JavaScript", icon: IconJavaScript },
  { name: "JQuery", icon: IconJQuery },
  { name: "Kotlin", icon: IconKotlin },
  { name: "MongoDB", icon: IconMongoDB },
  { name: "MySQL", icon: IconMySQL },
  { name: "NextJS", icon: IconNextJS },
  { name: "NodeJS", icon: IconNodeJS },
  { name: "PHP", icon: IconPHP },
  { name: "PostgreSQL", icon: IconPostgreSQL },
  { name: "Python", icon: IconPython },
  { name: "React", icon: IconReact },
  { name: "ReactNative", alias: "react-native", icon: IconReactNative },
  { name: "Ruby", icon: IconRuby },
  { name: "Solidity", icon: IconSolidity },
  { name: "Swift", icon: IconSwift },
  { name: "Tailwind", icon: IconTailwind },
  { name: "TypeScript", icon: IconTypeScript },
  { name: "Vue", icon: IconVue },
]
