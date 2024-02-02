import { loginUser } from "app/api"
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

export const options: NextAuthOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),
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
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  callbacks: {
    async jwt({ token, user }) {
      const newFile: any = { ...user }
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
      if (token) {
        return {
          ...session,
          user: {
            ...session,
            ...token,
          },
        }
      }
      return session
    },
  },
}
