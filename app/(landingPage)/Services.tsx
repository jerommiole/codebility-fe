"use client"

import Heading2 from "Components/landingPage/Heading2"
import IntroText from "Components/landingPage/IntroText"
import SectionWrapper from "Components/landingPage/SectionWrapper"
import { SvgCMS, SvgGraphicDesign, SvgWebDesign } from "public/assets/icons"
import { motion } from "framer-motion"
import { fadeInOutDownToUp } from "../../Components/FramerAnimation/Framer"
import Card from "./ServiceCard"

const Services = () => {
  return (
    <>
      <div id="services"></div>
      <SectionWrapper>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-6">
            <motion.div variants={fadeInOutDownToUp} initial="hidden" whileInView="visible" className="mx-auto">
              <Heading2>Services</Heading2>
            </motion.div>
            <motion.div
              variants={fadeInOutDownToUp}
              initial="hidden"
              whileInView="visible"
              className="mx-auto max-w-[600px] text-center text-secondaryColor"
            >
              <IntroText>
                We lead in digital innovation and design, offering tailored services to make your digital presence stand
                out and achieve impactful results.
              </IntroText>
            </motion.div>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row">
            <Card
              icon={<SvgWebDesign />}
              title="Web Design"
              desc="We create stunning, user-friendly websites that blend aesthetics with functionality, ensuring a seamless, responsive, and brand-aligned experience. Let us help you make a lasting online impression."
              url="/web-design"
            />
            <Card
              icon={<SvgGraphicDesign />}
              title="Graphic Design"
              desc="Our creative team turns your vision into compelling visuals, from logos to brochures. Let us tell your brand's story with striking graphics that captivate and communicate effectively."
              url="/graphic-design"
            />
            <Card
              icon={<SvgCMS />}
              title="Content Management System"
              desc="Our CMS solutions provide ease and flexibility, empowering you to update and manage digital content seamlessly. Whether it's a blog or an ecommerce platform, gain control without technical hassles."
              url="/cms"
            />
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}

export default Services
