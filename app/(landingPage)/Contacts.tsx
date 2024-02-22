"use client"
import Image from "next/image"
import { motion } from "framer-motion"
interface ContactProps {
  imageUrl: string
  alt: string
  name: string
  description: string
}

const Contacts = ({ imageUrl, alt, name, description }: ContactProps) => {
  return (
    <div className="flex max-w-md gap-3">
      <div className="self-center">
        <Image src={imageUrl} alt={alt} width={40} height={40} />
      </div>
      <div>
        <h1 className="text-xl font-semibold">{name}</h1>
        <p className="text-sm text-secondaryColor">{description}</p>
      </div>
    </div>
  )
}

export default Contacts
