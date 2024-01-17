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
