import { loginUser } from "app/api"
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { User } from "app/_types/user"

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid Credentials")
        }
        const response: any = await loginUser(credentials)
        if (response.message !== "login" || !response.data) {
          throw new Error("Invalid Credentials")
        }
        return response.data
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const newFile: any = { ...user }
      console.log(newFile)
      if (user) {
        const client_user_data: any = {
          ...token,
          data: newFile,
          name: newFile.user.name,
          email: newFile.user.email_address,
          id: newFile.user.id,
        }
        // delete client_user_data.user.password
        return { ...client_user_data }
      }
      return token
    },
    async session({ session, token }) {
      console.log("Session", session)
      console.log("Token", token)
      return {
        ...session,
        user: {
          ...session,
          ...token,
        },
      }
      return session
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
}
