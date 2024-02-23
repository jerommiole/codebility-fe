"use client"
import Heading2 from "Components/landingPage/Heading2"
import IntroText from "Components/landingPage/IntroText"
import Paragraph from "Components/landingPage/Paragraph"
import SectionWrapper from "Components/landingPage/SectionWrapper"
import { motion } from "framer-motion"
import { fadeInOutDownToUp } from "../../Components/FramerAnimation/Framer"
import WhyChooseItem from "./WhyChooseItem"

const WhyChooseUs = () => {
  return (
    <div id="join">
      <SectionWrapper>
        <div className="flex flex-col gap-20">
          <motion.div
            variants={fadeInOutDownToUp}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col gap-4 lg:flex-row"
          >
            <div className="basis-1/2">
              <Heading2>Why Choose Us?</Heading2>
            </div>
            <div className="max-w-[450px] basis-1/2">
              <IntroText>
                At Codebility, we lead in digital trends, driven by innovation and passion. With a deep understanding of
                the digital landscape, we empower individuals and businesses, effortlessly turning challenges into
                solutions since our inception.
              </IntroText>
            </div>
          </motion.div>

          <motion.div className="mx-auto my-4 flex w-full flex-col gap-10 py-10">
            <WhyChooseItem
              title="Innovative Approach"
              subTitle="Pushing Creativity Boundaries"
              itemNumber={1}
              description="Embrace innovation with Codebility. Our team thinks outside the box, crafting revolutionary digital solutions that create new possibilities."
            />
            <WhyChooseItem
              title="Expert Team"
              subTitle="Digital Maestros Collective"
              itemNumber={2}
              description="At Codebility, our passionate experts, from developers to designers, bring their A-game to ensure top-notch results. Join forces with some of the industry's brightest minds."
            />
            <WhyChooseItem
              title="Customer-Centric Solutions"
              subTitle="Tailored for You"
              itemNumber={3}
              description="Your uniqueness is our focus. Codebility delivers diverse solutions, understanding your vision and aligning our services perfectly with your goals. Your satisfaction measures our success."
            />
          </motion.div>

          <motion.div
            variants={fadeInOutDownToUp}
            initial="hidden"
            whileInView="visible"
            className="mx-auto max-w-[650px] text-center"
          >
            <Paragraph>
              This revision aims to convey a sense of expertise, creativity, and client-focused service that Codebility
              offers. It highlights the company's strengths and commitment to delivering tailored solutions.
            </Paragraph>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default WhyChooseUs
