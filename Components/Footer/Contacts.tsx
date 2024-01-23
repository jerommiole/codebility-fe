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
    <div className="flex gap-3">
      <div className="self-center">
        <Image src={imageUrl} alt={alt} width={50} height={50} />
      </div>
      <div>
        <h1 className="text-xl font-semibold">{name}</h1>
        <p className="text-sm text-secondaryColor">{description}</p>
      </div>
    </div>
  )
}

export default Contacts
