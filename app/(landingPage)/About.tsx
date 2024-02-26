"use client"
import H2 from "@/Components/landingPage/H2"
import IntroText from "Components/landingPage/IntroText"
import SectionWrapper from "Components/landingPage/SectionWrapper"
import { SvgCommunity, SvgInnovation, SvgRealWorld, SvgSkillMastery } from "public/assets/icons"
import moon from "public/assets/images/moon.png"
import { motion } from "framer-motion"
import Image from "next/image"
import AboutCard from "./AboutCard"

export const services = [
  {
    number: "01",
    label: "Web Development",
  },
  {
    number: "02",
    label: "Mobile Development",
  },
  {
    number: "03",
    label: "UI/UX Design",
  },
  {
    number: "04",
    label: "Digital Marketing",
  },
]

const AboutSection = () => {
  const textChildVariant = {
    hover: {
      width: "50px",
      transition: { duration: 0.3 },
    },
  }

  return (
    <>
      <div id="about"></div>
      <SectionWrapper>
        <div className="relative">
          <Image
            src={moon}
            alt="Moon"
            className="invisible absolute -left-72 -top-60 lg:visible"
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="flex basis-1/2 flex-col justify-center gap-6">
            <div>
              <H2 className="text-primaryColor">What We Do</H2>
              <IntroText>
                Codebility sparks a passion for technology and innovation. Beyond teaching coding, we immerse learners
                in the coding culture, replicating real-world company standards. Our programs go beyond skill
                acquisition, offering gateways to new horizons in the tech industry.
              </IntroText>
            </div>

            <div className="flex flex-col gap-4">
              {services.map((service, index) => (
                <motion.div key={index} className="flex flex-row gap-4" whileHover="hover">
                  <p className="font-semibold text-[#8E8E8E]">{service.number}</p>
                  <motion.div
                    variants={textChildVariant}
                    className="w-[20px] -translate-y-3 border-b-2 border-[#8E8E8E]"
                  ></motion.div>
                  <p className="text-[#8E8E8E]">{service.label}</p>
                </motion.div>
              ))}
            </div>

            <IntroText>
              We believe in the transformative power of coding. With Codebility, you won't just learn coding; you'll
              wield a tool for a brighter future. Join us in sculpting your path as tomorrow's digital architect.
            </IntroText>
          </div>
          <div className="basis-1/2">
            <div className="flex flex-col gap-6 py-10 lg:flex-row">
              <div className="flex flex-1 flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <AboutCard
                    icon={<SvgSkillMastery />}
                    title="Skill Mastery"
                    desc="Committed to empowering individuals to become Full Stack Developers."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <AboutCard
                    icon={<SvgCommunity />}
                    title="Community Building"
                    desc="We connect like-minded individuals, providing a supportive network"
                  />
                </motion.div>
              </div>

              <div className="flex flex-1 flex-col gap-6 lg:-translate-y-14">
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <AboutCard
                    icon={<SvgInnovation />}
                    title="Innovation"
                    desc="We serve as a dynamic hub for innovation, fostering a creative environment"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <AboutCard
                    icon={<SvgRealWorld />}
                    title="Real-world Applications"
                    desc="Beyond theoretical knowledge, our focus is on practical, real-world applications of coding"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}

export default AboutSection
