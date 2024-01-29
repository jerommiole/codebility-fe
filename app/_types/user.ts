export interface User {
  user: {
    id: string | null
    name: string | null
    short_bio: string | null
    image_icon: string | null
    address: string | null
    email_address: string
    phone_no: string | null
    github_link: string | null
    fb_link: string | null
    linkedin_link: string | null
    whatsapp_link: string | null
    skype_link: string | null
    telegram_link: string | null
    portfolio_website: string | null
    tech_stacks: string[] | []
    addtl_skills: string[] | []
    password: string | null
    created_at: string
    updated_at: string
    schedule: string | null
    position: string[] | []
    roleType: string | null
    userType: string | null
    work_experience: string[] | []
  }
  token: string | null
}
