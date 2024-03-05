import { fadeInOutLeftToRight } from "Components/FramerAnimation/Framer"
import ButtonLink from "@/Components/shared/home/ButtonLink"
import Heading3 from "@/Components/shared/home/Heading3"
import { motion } from "framer-motion"
import Link from "next/link"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  desc: string
  url: string | undefined
}
const ServiceCard = ({ icon, title, desc, url }: ServiceCardProps) => {
  return (
    <motion.div variants={fadeInOutLeftToRight} initial="hidden" whileInView="visible">
      <div className="flex flex-col gap-4 bg-[#0D0D0D] p-4 lg:bg-transparent">
        {icon}
        <Heading3>{title}</Heading3>
        <p className="text-[#8E8E8E]">{desc}</p>
        <ButtonLink>
          {url && (
            <Link href={url} className=" text-[#31AFC4]">
              Read More
            </Link>
          )}
        </ButtonLink>
      </div>
    </motion.div>
  )
}

export default ServiceCard
