"use client"
import Reasons from "./Reasons"
import { motion } from "framer-motion"
import { fadeInOutUpToDown, fadeInOutDownToUp } from "../../Components/FramerAnimation/Framer"

const WhyJoinUs = () => {
  return (
    <div id="join">
      <section className="mx-auto flex w-full  flex-col items-center justify-center gap-10 bg-backgroundColor px-3.5 py-20 text-primaryColor">
        <div className="w-full max-w-7xl ">
          <motion.p variants={fadeInOutUpToDown} initial="hidden" whileInView="visible" className="w-max xl:ml-11">
            Codebility
          </motion.p>
          <motion.div
            variants={fadeInOutDownToUp}
            initial="hidden"
            whileInView="visible"
            className="mt-7 flex flex-col md:gap-6 lg:flex-row lg:justify-between "
          >
            <h1 className="text-4xl font-bold text-tealColor md:text-6xl lg:ml-0 xl:ml-12">Why Choose Us?</h1>
            <p className="mt-2 w-full text-sm text-primaryColor lg:max-w-xl xl:ml-24">
              At Codebility, we lead in digital trends, driven by innovation and passion. With a deep understanding of
              the digital landscape, we empower individuals and businesses, effortlessly turning challenges into
              solutions since our inception.
            </p>
          </motion.div>
        </div>
        <motion.div className="mx-auto my-5 flex w-full max-w-7xl flex-col gap-5 py-10">
          <Reasons
            title="Innovative Approach"
            subTitle="Pushing Creativity Boundaries"
            reasonNumber={1}
            description="Embrace innovation with Codebility. Our team thinks outside the box, crafting revolutionary digital solutions that create new possibilities."
          />
          <Reasons
            title="Expert Team"
            subTitle="Digital Maestros Collective"
            reasonNumber={2}
            description="At Codebility, our passionate experts, from developers to designers, bring their A-game to ensure top-notch results. Join forces with some of the industry's brightest minds."
          />
          <Reasons
            title="Customer-Centric Solutions"
            subTitle="Tailored for You"
            reasonNumber={3}
            description="Your uniqueness is our focus. Codebility delivers diverse solutions, understanding your vision and aligning our services perfectly with your goals. Your satisfaction measures our success."
          />
        </motion.div>
        <motion.div
          variants={fadeInOutDownToUp}
          initial="hidden"
          whileInView="visible"
          className="mx-5 mt-5 flex max-w-7xl items-center justify-center md:mx-16 md:justify-end lg:justify-center xl:mx-auto xl:w-[70%]"
        >
          <p className="w-fulltext-xs text-center lg:max-w-3xl lg:text-sm">
            This revision aims to convey a sense of expertise, creativity, and client-focused service that Codebility
            offers. It highlights the company's strengths and commitment to delivering tailored solutions.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default WhyJoinUs
