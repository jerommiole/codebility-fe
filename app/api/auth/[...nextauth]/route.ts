//@ts-nocheck
import { loginUser } from "app/api"
import NextAuth, { AuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { AdapterUser } from "next-auth/adapters"

export const authOptions: AuthOptions = {
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
        // return { email: "wew", name: "wew", password: "wew" }
        return response.data
      },
    }),
  ],
  callbacks: {
    async jwt({ token: originalToken, user: data, session }) {
      if (data) {
        const finalData = {
          ...originalToken,
          ...data?.user,
          token: data?.token,
        }
        delete finalData.password
        return {
          ...finalData,
        }
      }
      return originalToken
    },
    async session({ session, token, user }) {
      return {
        ...session,
        user: {
          ...session.user,
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

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
