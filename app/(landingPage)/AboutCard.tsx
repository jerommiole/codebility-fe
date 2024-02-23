import { fadeInOutLeftToRight } from "Components/FramerAnimation/Framer"
import Heading3 from "Components/landingPage/Heading3"
import { motion } from "framer-motion"

interface AboutCardProps {
  icon: React.ReactNode
  title: string
  desc: string
}
const AboutCard = ({ icon, title, desc }: AboutCardProps) => {
  return (
    <motion.div variants={fadeInOutLeftToRight} initial="hidden" whileInView="visible">
      <div className="flex flex-col gap-4 bg-[#0D0D0D] p-4 lg:bg-transparent">
        {icon}
        <Heading3>{title}</Heading3>
        <p className="text-[#8E8E8E]">{desc}</p>
      </div>
    </motion.div>
  )
}

export default AboutCard
