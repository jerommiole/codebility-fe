import { fadeInOutDownToUp } from "Components/FramerAnimation/Framer"
import Section from "Components/landingPage/Section"
import { motion } from "framer-motion"

const WeLeverage = () => {
  return (
    <Section>
      <motion.p
        variants={fadeInOutDownToUp}
        initial="hidden"
        whileInView="visible"
        className="mx-auto mt-10 w-full text-base  text-primaryColor md:text-center"
      >
        We leverage innovation and design to exceed your expectations. Our dedicated team crafts digital solutions that
        drive growth, engagement, and success. Whether it's redefining your brand, launching a website, or creating
        compelling content, we turn your ideas into impactful and memorable digital experiences.
      </motion.p>
    </Section>
  )
}

export default WeLeverage
