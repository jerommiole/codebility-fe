export interface User {
  id: string
  name: string
  short_bio?: string
  image_icon?: string
  address?: string
  email_address?: string | undefined
  phone_no?: string
  github_link?: string
  fb_link?: string
  linkedin_link?: string
  whatsapp_link?: string
  skype_link?: string
  telegram_link?: string
  portfolio_website?: string
  tech_stacks?: string[]
  addtl_skills?: string[]
  about_me?: string
  education?: string
  created_at?: string
  updated_at?: string
  schedule?: string
  position?: string[]
  roleType: "MENTOR"
  userType: "ADMIN"
  projects?: any[]
  clientId?: string
}
