"use client"
import Reasons from "./Reasons"
import { motion } from "framer-motion"
import { fadeInOutUpToDown, fadeInOutDownToUp } from "../../Components/FramerAnimation/Framer"

const WhyJoinUs = () => {
  return (
    <div id="join">
      <section className="flex px-3.5 w-full  mx-auto flex-col gap-10 py-20 items-center justify-center bg-backgroundColor text-primaryColor">
        <div className="w-full max-w-7xl ">
          <motion.p variants={fadeInOutUpToDown} initial="hidden" whileInView="visible" className="w-max xl:ml-11">
            Codebility
          </motion.p>
          <motion.div
            variants={fadeInOutDownToUp}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col mt-7 md:gap-6 lg:flex-row lg:justify-between "
          >
            <h1 className="text-4xl font-bold text-tealColor xl:ml-12 md:text-6xl lg:ml-0">Why Choose Us?</h1>
            <p className="w-full mt-2 text-sm text-primaryColor xl:ml-24 lg:max-w-xl">
              At Codebility, we don't just keep pace with the digital world; we set the trends. Our expertise is built
              on a foundation of innovation, passion, and a deep understanding of the digital landscape. Since our
              inception, we have dedicated ourselves to empowering individuals and businesses alike, turning complex
              digital challenges into seamless solutions.
            </p>
          </motion.div>
        </div>
        <motion.div className="flex flex-col w-full gap-5 py-10 mx-auto my-5 max-w-7xl">
          <Reasons
            title="Innovative Approach"
            subTitle="Pushing the Boundaries of Creativity"
            reasonNumber={1}
            description="Our team thrives on creativity and innovation. We believe in thinking outside the box, bringing fresh ideas to the table that revolutionize the way digital solutions are crafted. Our approach is not just about solving problems; it's about creating pathways to new possibilities."
          />
          <Reasons
            title="Expert Team"
            subTitle="A Collective of Digital Maestros"
            reasonNumber={2}
            description="Codebility is home to some of the industry's brightest minds. Our team of experts is not just skilled; they're passionate about what they do. From seasoned developers to creative designers, each member brings their A-game to ensure we deliver nothing but the best."
          />
          <Reasons
            title="Customer-Centric Solutions"
            subTitle="Tailored to Your Unique Needs"
            reasonNumber={3}
            description="We understand that each client is unique. That's why our solutions are as diverse as our clientele. We take the time to understand your vision and tailor our services to align perfectly with your goals. Our success is measured by your satisfaction."
          />
        </motion.div>
        <motion.div
          variants={fadeInOutDownToUp}
          initial="hidden"
          whileInView="visible"
          className="mx-5 mt-5 flex max-w-7xl items-center justify-center md:mx-16 md:justify-end lg:justify-center xl:mx-auto xl:w-[70%]"
        >
          <p className="text-center w-fulltext-xs lg:max-w-3xl lg:text-sm">
            This revision aims to convey a sense of expertise, creativity, and client-focused service that Codebility
            offers. It highlights the company's strengths and commitment to delivering tailored solutions.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default WhyJoinUs
