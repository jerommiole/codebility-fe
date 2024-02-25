export const skillData = [
  {
    name: "angular",
  },
  {
    name: "css",
  },
  {
    name: "firebase",
  },
  {
    name: "bootstrap",
  },
  {
    name: "oracle",
  },
  {
    name: "html",
  },
]
export const workExperienceData = [
  {
    position: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    fromYear: "June 2018",
    toYear: "Present",
    location: "San Francisco, CA",
    tasks: [
      "Lead a team of developers in building and maintaining scalable web applications.",
      "Collaborate with cross-functional teams to define software requirements and specifications.",
      "Implement new features and enhancements using React and Node.js.",
      "Conduct code reviews and mentor junior team members.",
      "Optimize application performance and troubleshoot issues.",
      "Integrate third-party APIs to enhance functionality.",
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS", "MongoDB"],
  },
  {
    position: "Product Manager",
    fromYear: "January 2016",
    toYear: "March 2018",
    company: "InnovateTech Solutions",
    location: "New York, NY",
    tasks: [
      "Define product vision, strategy, and roadmaps.",
      "Gather and prioritize product requirements from stakeholders and customers.",
      "Work closely with design and development teams to ensure successful product delivery.",
      "Analyze market trends and competition to identify new opportunities.",
      "Conduct user interviews and surveys to gather feedback.",
      "Coordinate product launches and marketing efforts.",
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS", "MongoDB"],
  },
  {
    position: "UX/UI Designer",
    fromYear: "September 2014",
    toYear: "December 2015",
    company: "Creative Design Studio",
    location: "Los Angeles, CA",
    tasks: [
      "Design and prototype user interfaces for web and mobile applications.",
      "Conduct usability testing and gather user feedback for iterative design improvements.",
      "Collaborate with developers to implement responsive and user-friendly designs.",
      "Create design assets, including wireframes, mockups, and style guides.",
      "Stay up-to-date with design trends and tools.",
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS", "MongoDB"],
  },
  {
    position: "Software Engineer Intern",
    fromYear: "May 2013",
    toYear: "August 2013",
    company: "TechStart Innovations",
    location: "San Francisco, CA",
    tasks: [
      "Assisted in the development of new features for a cloud-based analytics platform.",
      "Collaborated with senior engineers to troubleshoot and debug issues.",
      "Participated in code reviews and learned best practices in software development.",
      "Gained hands-on experience with technologies such as Java and Spring Framework.",
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS", "MongoDB"],
  },
]

interface Social {
  socialUrl: string
  alt: string
  icon: string
}
interface Skill {
  name: string
  icon: string
}

export const socialsList: Record<string, Social> = {
  facebook: {
    socialUrl: "#facebook",
    alt: "facebook",
    icon: "/ri_facebook-fill.svg",
  },
  github: {
    socialUrl: "#github",
    alt: "github",
    icon: "/mdi_github.svg",
  },
  linkedin: {
    socialUrl: "#linkedin",
    alt: "linkedin",
    icon: "/mdi_linkedin.svg",
  },
  whatsapp: {
    socialUrl: "#whatsapp",
    alt: "whatsapp",
    icon: "/social-icon/whatsapp.svg",
  },
  skype: {
    socialUrl: "#skype",
    alt: "skype",
    icon: "/social-icon/skype.svg",
  },
  telegram: {
    socialUrl: "#telegram",
    alt: "telegram",
    icon: "/social-icon/telegram.svg",
  },
}

export const skillList: Record<string, Skill> = {
  angular: {
    name: "Angular",
    icon: "/techStack/angular.png",
  },
  css: {
    name: "CSS",
    icon: "/techStack/css.png",
  },
  github: {
    name: "Github",
    icon: "/techStack/mdi_github.png",
  },
  firebase: {
    name: "Firebase",
    icon: "/techStack/firebase.png",
  },
  bootstrap: {
    name: "Bootstrap",
    icon: "/techStack/bootstrap.png",
  },
  oracle: {
    name: "Oracle",
    icon: "/techStack/oracle.png",
  },
  html: {
    name: "HTML",
    icon: "/techStack/html.png",
  },
}
