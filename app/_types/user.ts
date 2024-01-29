export interface User {
  user: {
    id: string
    name: string
    short_bio: string | null
    image_icon: string | null
    address: string
    email_address: string
    phone_no: string | null
    github_link: string
    fb_link: string | null
    linkedin_link: string | null
    whatsapp_link: string | null
    skype_link: string | null
    telegram_link: string | null
    portfolio_website: string
    tech_stacks: string[]
    addtl_skills: string[]
    password: string
    created_at: string
    updated_at: string
    schedule: string
    position: string[]
    roleType: "MENTOR"
    userType: "ADMIN"
    work_experience: any[] // You may want to define a type/interface for work experience
  }
  token: string
}
