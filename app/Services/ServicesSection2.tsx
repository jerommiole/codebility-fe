'use client'
import React from 'react'
import Image from "next/image"
import Card from "../../Components/Card"
import { motion } from "framer-motion";
import {
  fadeInOutRightToLeft,
  fadeInOutLeftToRight,
  fadeInOutUpToDown,
  fadeInOutDownToUp,
} from "../../Components/FramerAnimation/Framer";
const ServicesSection2 = () => {
  return (
    <div
    id='services'
    className='bg-backgroundColor px-3.5'>
         <div className="flex flex-col w-full gap-10 mt-32 mb-16 md:mt-56 ">
        <div>
          <motion.div
            variants={fadeInOutDownToUp}
            initial="hidden"
            whileInView="visible"
            className="">
            <h1 className="z-10 text-4xl font-bold tracking-wider text-center services md:text-5xl">SERVICES</h1>
            <h1 className="services -translate-y-[50px] text-center text-6xl font-bold tracking-wider opacity-5 md:-translate-y-[75px] md:text-8xl">
              SERVICES
            </h1>
          </motion.div>

          <motion.p
            variants={fadeInOutDownToUp}
            initial="hidden"
            whileInView="visible"
            className="text-center text-secondaryColor ">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.{" "}
          </motion.p>
        </div>
        {/* Services Cards */}


        <div className="flex flex-col justify-center gap-5 xl:px-20 bg-backgroundColor md:mx-0 md:flex-row xl:gap-20 lg:mt-10">
          <motion.div
            variants={fadeInOutLeftToRight}
            initial="hidden"
            whileInView="visible"
          >
            <Card
              title="Web Design"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
              imageUrl="WebIcon.png"
              link="Read More"
              icon="Arrow.png"
              CardColor=""
            />
          </motion.div>
          <motion.div
            variants={fadeInOutDownToUp}
            initial="hidden"
            whileInView="visible">
            <Card
              title="Graphic Design"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
              imageUrl="SharpIcon.png"
              link="Read More"
              icon="Arrow.png"
              CardColor=""
            />
          </motion.div>
          <motion.div
            variants={fadeInOutRightToLeft}
            initial="hidden"
            whileInView="visible">
            <Card
              title="CMS"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
              imageUrl="Cms.png"
              link="Read More"
              icon="Arrow.png"
              CardColor=""
            />
          </motion.div>
        </div>


        <motion.p
          variants={fadeInOutDownToUp}
          initial="hidden"
          whileInView="visible"
          className="mx-auto mt-10 max-w-[550px] text-sm text-secondaryColor md:text-center">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.{" "}
        </motion.p>
      </div>
    </div>
  )
}

export default ServicesSection2
