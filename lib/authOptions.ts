import { AuthOptions } from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"

import GoogleProvider from "next-auth/providers/google"
import clientPromise from "./mongoClient"
import { getCodev } from "../app/api"

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,
  adapter: MongoDBAdapter(clientPromise) as any,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      const email = session?.user?.email
      // const sessionUser = await User.findOne({ email: session.user.email })
      // const sessionUser = await getCodev(email)
      //
      // console.log(sessionUser)
      // session?.user?.id = sessionUser?.id
      /* if (session.user) {
        session.user.id = user.id
      }*/
      return session
    },
    async signIn({ profile }) {
      console.log(profile)
      try {
        // const userExist = await User.findOne({ email: profile.email })
        //
        // if (!userExist) {
        //   const user = await User.create({ email: profile.email })
        // }

        return true
      } catch (err) {
        console.log(err)
        return false
      }
    },
  },
}
