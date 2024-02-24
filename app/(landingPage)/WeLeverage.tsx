import { fadeInOutDownToUp } from "Components/FramerAnimation/Framer"
import SectionWrapper from "Components/landingPage/SectionWrapper"
import TextGradient from "Components/landingPage/TextGradient"
import { motion } from "framer-motion"
import innovationIcon from "public/assets/images/idea-icon.png"
import Image from "next/image"

const WeLeverage = () => {
  return (
    <div className="bg-[#0B0B0C]">
      <SectionWrapper>
        <div className="my-32 flex flex-col gap-4">
          <motion.p variants={fadeInOutDownToUp} initial="hidden" whileInView="visible" className="mx-auto">
            <Image alt="innovation icon" src={innovationIcon} width={200} height={200} />
          </motion.p>
          <motion.p
            variants={fadeInOutDownToUp}
            initial="hidden"
            whileInView="visible"
            className="m-auto max-w-[730px] text-center text-2xl text-primaryColor md:text-5xl"
          >
            &#10077;We leverage innovation and design to exceed your expectations. Our dedicated team crafts digital
            solutions that drive growth, engagement, and success.&#10078;
          </motion.p>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default WeLeverage
