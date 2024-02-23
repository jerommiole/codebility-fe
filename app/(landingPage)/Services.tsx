"use client"
import { motion } from "framer-motion"
import Card from "../../Components/Card"
import { fadeInOutDownToUp, fadeInOutLeftToRight, fadeInOutRightToLeft } from "../../Components/FramerAnimation/Framer"
import SectionWrapper from "Components/landingPage/SectionWrapper"

const Services = () => {
  return (
    <>
      <div id="services"></div>
      <SectionWrapper>
        <div></div>
      </SectionWrapper>
      <div id="services" className="bg-backgroundColor px-3.5">
        <div className="mx-auto mb-16 flex w-full max-w-7xl flex-col gap-10 ">
          <div className="flex flex-col items-center justify-center">
            <motion.div variants={fadeInOutDownToUp} initial="hidden" whileInView="visible" className="h-24 ">
              <h1 className="services z-10 text-center text-4xl font-bold tracking-wider text-primaryColor md:text-5xl">
                SERVICES
              </h1>
              <h1 className="services -translate-y-[50px] text-center text-6xl font-bold  tracking-wider text-primaryColor opacity-5 md:-translate-y-[75px] md:text-8xl">
                SERVICES
              </h1>
            </motion.div>

            <motion.div
              variants={fadeInOutDownToUp}
              initial="hidden"
              whileInView="visible"
              className="max-w-[800px]  text-secondaryColor md:text-center "
            >
              <p className="text-xl text-primaryColor">Empowering Your Digital Presence</p>
              <br />
              In the ever-evolving world of digital technology, we stand at the forefront of innovation and design. Our
              services are tailored to meet your unique needs, ensuring that your digital footprint not only stands out
              but also delivers impactful results.
            </motion.div>
          </div>
          {/* Services Cards */}

          <div className="flex flex-col justify-center gap-8 bg-backgroundColor md:mx-0 md:flex-row lg:mt-10 xl:gap-6 xl:px-20">
            <motion.div variants={fadeInOutLeftToRight} initial="hidden" whileInView="visible">
              <Card
                title="Web Design"
                description="Our web design services focus on creating stunning, user-friendly websites that resonate with your audience. We blend aesthetics with functionality, ensuring your website is not only visually appealing but also easy to navigate, responsive, and aligned with your brand identity. Let us help you make that first impression count."
                imageUrl="WebIcon.png"
                link="Read More"
                icon="Arrow.png"
                CardColor=""
              />
            </motion.div>
            <motion.div variants={fadeInOutDownToUp} initial="hidden" whileInView="visible">
              <Card
                title="Graphic Design"
                description="Graphic design is more than just visuals; it's about communicating your brand's story. Our team of creative designers works to bring your vision to life with striking graphics that capture attention and convey your message effectively. From logos to brochures, we've got all your graphic needs covered. "
                imageUrl="SharpIcon.png"
                link="Read More"
                icon="Arrow.png"
                CardColor=""
              />
            </motion.div>
            <motion.div variants={fadeInOutRightToLeft} initial="hidden" whileInView="visible">
              <Card
                title="CMS"
                description="In the age of content, managing it efficiently is key. Our CMS solutions offer you the ease and flexibility to update and manage your digital content without any technical hassles. Whether it's a blog or an ecommerce platform, our CMS services are designed to empower you with control and simplicity."
                imageUrl="Cms.png"
                link="Read More"
                icon="Arrow.png"
                CardColor=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
