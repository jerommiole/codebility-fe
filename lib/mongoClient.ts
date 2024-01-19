// Import MongoClient from mongodb
import { MongoClient } from "mongodb"

// Check if the environment variable "MONGO_URI" is set
if (!process.env.MONGO_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGO_URI"')
}

// Assign the value of "MONGO_URI" to the uri variable
const uri: string = process.env.MONGO_URI

// Define options for MongoClient
const options = {}

// Declare variables for MongoClient and its promise
let client: MongoClient
let clientPromise: Promise<MongoClient>

// Check the environment and configure accordingly
if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable to preserve the value across HMR
  // @ts-ignore
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    // @ts-ignore
    global._mongoClientPromise = client.connect()
  }
  // @ts-ignore
  clientPromise = global._mongoClientPromise
} else {
  // In production mode, don't use a global variable
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

// Export the module-scoped MongoClient promise
export default clientPromise
