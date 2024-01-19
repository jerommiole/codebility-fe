import { AuthOptions } from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"

import GoogleProvider from "next-auth/providers/google"
import clientPromise from "./mongoClient"

export const authOptions: AuthOptions = {
  secret: process.env.SECRET as string,
  adapter: MongoDBAdapter(clientPromise) as any,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
}
