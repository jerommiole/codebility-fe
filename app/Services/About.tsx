'use client'
import React, { useRef } from 'react';
import Image from "next/image"
import Card from "../../Components/Card"
import { motion } from "framer-motion";
import {
  fadeInOutRightToLeft,
  fadeInOutLeftToRight,
  fadeInOutUpToDown,
  fadeInOutDownToUp,
} from "../../Components/FramerAnimation/Framer";
const Services = () => {
  //dummy
  const Text = [
    {
      num: "01",
      title: "Lorem Ipsum ",
    },
    {
      num: "02",
      title: "Lorem Ipsum ",
    },
    {
      num: "03",
      title: "Lorem Ipsum ",
    },
    {
      num: "04",
      title: "Ipsum Lorem ",
    },
  ]


  return (

    <motion.section
      id="about"
      className="relative flex flex-col items-center justify-center px-3.5 min-h-screen bg-backgroundColor lg:pt-48 xl:px-56 "
    >

      {/*Moon Image*/}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="">
        <Image
          src="/Moon.png"
          alt="Moon"
          className="absolute -top-10 right-0 h-[200px] w-[200px] scale-x-[-1] transform md:h-[300px] md:w-[300px] lg:-top-10   lg:left-24 lg:transform-none"
          width={200}
          height={200}
        />
      </motion.div>


      <div className="flex flex-col justify-center mt-32 lg:mt-0 lg:flex-row lg:gap-16">
        {/*What We Do Column*/}
        <motion.div className="xl:w-1/2">
          <motion.div
            variants={fadeInOutDownToUp}
            initial="hidden"
            whileInView="visible"
          >
            <p className=" text-primaryColor">Our Services</p>
            <h1 className="text-5xl font-semibold">What We Do</h1>
            <motion.p
              variants={fadeInOutDownToUp}
              className="mt-2 text-secondaryColor">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
            </motion.p>
          </motion.div>
          <motion.div
            variants={fadeInOutLeftToRight}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col gap-3 mt-10">
            {Text.map((item, index) => (
              <motion.div
                
                key={index} className="flex w-[180px] justify-end gap-5  duration-500 hover:w-[200px]">
                <p className="font-semibold hover:text-primaryColor">{item.num}</p>
                <div className="w-[25px] -translate-y-2 border-b-2 border-white "></div>
                <p>{item.title}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            variants={fadeInOutLeftToRight}
            initial="hidden"
            whileInView="visible"
            className="mt-10">
            Explore the limitless possibilities of what we do, as we turn dreams into code and aspirations into reality.
          </motion.p>
        </motion.div>

        <div className="flex gap-2 mt-32 md:gap-3 lg:mt-0 ">
          {/* Cards Column */}
          <div className="flex flex-col gap-2 md:gap-3">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}>
              <Card
                title="Skill Mastery"
                description="Committed to empowering individuals to become Full Stack Developers."
                imageUrl="mastery.png"
                CardColor="#0D0D0D"
                Align="center"

              />
            </motion.div >
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}>
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
          <div className="flex flex-col gap-2 -translate-y-10 md:gap-3">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}>
              <Card
                title="Innovation"
                description="We serve as a dynamic hub for innovation, fostering a creative environment "
                imageUrl="innovation.png"
                CardColor="#111111"
                Align="center"
              /></motion.div>
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}>
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
