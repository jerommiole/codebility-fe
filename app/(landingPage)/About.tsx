"use client"
import React, { useRef } from "react"
import Image from "next/image"
import Card from "./ServiceCard"
import { motion } from "framer-motion"
import {
  fadeInOutRightToLeft,
  fadeInOutLeftToRight,
  fadeInOutUpToDown,
  fadeInOutDownToUp,
} from "../../Components/FramerAnimation/Framer"
const Services = () => {
  //dummy
  const Text = [
    {
      num: "01",
      title: "Web Development",
    },
    {
      num: "02",
      title: "Mobile Development",
    },
    {
      num: "03",
      title: "UI/UX Design",
    },
    {
      num: "04",
      title: "Digital Marketing",
    },
  ]

  const textParentVariant = {
    hover: {},
  }
  const textChildVariant = {
    hover: {
      width: "50px",
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.section
      id="about"
      className="relative mx-auto my-0 flex max-w-7xl flex-col  items-center justify-center bg-backgroundColor px-3.5 pb-4"
    >
      {/*Moon Image*/}

      <div className="mt-32 flex max-w-7xl flex-col justify-center gap-10 lg:mt-0 lg:flex-row">
        {/*What We Do Column*/}
        <motion.div className="w-full">
          <motion.div variants={fadeInOutDownToUp} initial="hidden" whileInView="visible" className="relative">
            <Image
              src="/Moon.png"
              alt="Moon"
              className="md-top-56 absolute -right-10 -top-48 h-[200px] w-[200px] scale-x-[-1] transform md:h-[300px] md:w-[300px] lg:-left-20 lg:-top-72 lg:transform-none  xl:-left-56 xl:-top-60"
              width={200}
              height={200}
            />

            <p className=" text-primaryColor">Our Services</p>
            <h1 className="text-5xl font-semibold text-primaryColor">What We Do</h1>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=""
            ></motion.div>
            <motion.p variants={fadeInOutDownToUp} className="mt-2 text-secondaryColor ">
              In an era where digital landscapes are constantly evolving, Codebility stands as a beacon of innovation
              and opportunity. We've transcended the boundaries of traditional practices. Here, we don't just teach
              coding; we ignite a passion for technology and innovation. <br />
              <br />
              Our approach is not just about learning code; it's about immersing in the culture of coding. We mimic
              real-world company standards, providing an environment that's not just about acquiring skills but about
              understanding the heartbeat of the tech industry.Our learners dive into the essence of coding discipline,
              mirroring the professional environments they will soon thrive in. Our programs are more than courses;
              they're gateways to new horizons.
            </motion.p>
          </motion.div>
          <motion.div
            variants={fadeInOutLeftToRight}
            initial="hidden"
            whileInView="visible"
            className="mt-10 flex flex-col gap-3"
          >
            {Text.map((item, index) => (
              <motion.div
                key={index}
                variants={textParentVariant}
                className="parent-hover flex cursor-pointer gap-4 duration-500 "
                whileHover="hover"
              >
                <p className="font-semibold text-primaryColor hover:text-primaryColor">{item.num}</p>
                <motion.div
                  variants={textChildVariant}
                  className=" border-element w-[20px]  -translate-y-3 border-b-2 border-white "
                ></motion.div>
                <p className="whitespace-nowrap text-primaryColor">{item.title}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p variants={fadeInOutDownToUp} className="mt-2 text-secondaryColor ">
            We believe in the transformative power of coding – it's not just a skill, it's a tool for building a
            brighter, more empowered future. At Codebility, we're not just teaching code; we're sculpting the architects
            of tomorrow's digital world. Embrace the journey with us. Together, we can unlock the code to a better
            future.
          </motion.p>
          <motion.p
            variants={fadeInOutLeftToRight}
            initial="hidden"
            whileInView="visible"
            className="mt-10 text-primaryColor"
          >
            Explore the limitless possibilities of what we do, as we turn dreams into code and aspirations into reality.
          </motion.p>
        </motion.div>

        <div className="flex flex-col items-center justify-center gap-2 py-10 md:flex-row md:gap-3 lg:mt-0">
          {/* Cards Column */}
          <div className="flex max-w-md flex-col gap-2 md:gap-3">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Card
                title="Skill Mastery"
                description="Committed to empowering individuals to become Full Stack Developers."
                imageUrl="mastery.png"
                CardColor="#0D0D0D"
                Align="center"
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
              <Card
                title="Community Building"
                description="Committed to empowering individuals to become 
            Full Stack Developers."
                imageUrl="community.png"
                CardColor="#111111"
                Align="center"
              />
            </motion.div>
          </div>
          {/* Cards Column Translate-y*/}
          <div className="flex max-w-md flex-col gap-2 md:-translate-y-10 md:gap-3">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Card
                title="Innovation"
                description="We serve as a dynamic hub for innovation, fostering a creative environment "
                imageUrl="innovation.png"
                CardColor="#111111"
                Align="center"
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
              <Card
                title="Skill Mastery"
                description="Committed to empowering individuals to become 
            Full Stack Developers."
                imageUrl="Bulb.png"
                CardColor="#0D0D0D"
                Align="center"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Services
