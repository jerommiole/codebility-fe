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
      <div className="flex h-64 flex-col items-center justify-center gap-1 rounded-lg bg-[#121212] p-4 text-center">
        {icon}
        <Heading3>{title}</Heading3>
        <p className="text-[#8E8E8E]">{desc}</p>
      </div>
    </motion.div>
  )
}

export default AboutCard
