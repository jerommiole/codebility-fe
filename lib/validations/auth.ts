import * as z from "zod"

const isValidGitHubUrl = (url: string) => {
  try {
    const githubUrlRegex = /^https:\/\/github\.com\/[a-zA-Z0-9_-]+$/
    return githubUrlRegex.test(url)
  } catch (e) {
    return false
  }
}

const isValidUrl = (url: string) => {
  try {
    new URL(url)
    return true
  } catch (e) {
    return false
  }
}

export const SignUpValidation = z
  .object({
    name: z.string().min(1, { message: "Required" }),
    address: z.string().min(1, { message: "Required" }),
    email: z.string().email().min(1, { message: "Required" }),
    githubLink: z
      .string()
      .min(1, { message: "Required" })
      .refine((value) => isValidGitHubUrl(value), {
        message: "Invalid Github URL format",
      }),
    portfolioLink: z
      .string()
      .min(1, { message: "Required" })
      .refine((value) => isValidUrl(value), { message: "Invalid Url Format" }),
    techstacks: z.string().min(1, { message: "Required" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .refine((value: string) => /[a-z]/.test(value), {
        message: "Password must contain at least one lowercase letter",
      })
      .refine((value: string) => /[A-Z]/.test(value), {
        message: "Password must contain at least one uppercase letter",
      })
      .refine((value: string) => /\d/.test(value), {
        message: "Password must contain at least one digit",
      })
      .refine((value: string) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value), {
        message: "Password must contain at least one special character",
      }),
    confirmPassword: z.string().min(1, { message: "Required" }),
    schedule: z.string().min(1, { message: "Required" }),
    position: z.string().min(1, { message: "Required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"],
  })

export const SignInValidation = z.object({
  email: z.string().email().min(1, { message: "Email Required" }),
  password: z.string().min(1, { message: "Password Required" }),
})
