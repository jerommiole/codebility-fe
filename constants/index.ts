import { LeftSidebar, SocialIcons, Theme } from "@/types"

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
