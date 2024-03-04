"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { fadeInOutDownToUp, fadeInOutLeftToRight, fadeInOutRightToLeft } from "../../Components/FramerAnimation/Framer"

import SocialIcons from "@/Components/shared/SocialIcons"
import { IconEmail, IconMapPin, IconTelephone } from "@/public/assets/svgs"

const footerLinks = [
  {
    name: "Privacy Policy",
    footerUrl: "#link2",
  },
  {
    name: "Co Devs",
    footerUrl: "#link3",
  },
  {
    name: "Terms and Condition",
    footerUrl: "#link4",
  },

  {
    name: "Why Choose Us?",
    footerUrl: "#link5",
  },
  {
    name: "",
    footerUrl: "#link5",
  },

  {
    name: "About",
    footerUrl: "#link2",
  },

  {
    name: "",
    footerUrl: "#link5",
  },
  {
    name: "Services",
    footerUrl: "#link4",
  },
]

const Footer = () => {
  return (
    <footer id="footer" className="flex items-center justify-center bg-backgroundColor text-primaryColor">
      <div className="mt-28 w-screen">
        {/* TOP */}
        <div className="grid w-full max-w-7xl grid-cols-1 place-items-center gap-16 px-10 lg:mx-10 lg:grid-cols-3 xl:mx-auto ">
          <motion.div variants={fadeInOutDownToUp} initial="hidden" whileInView="visible" className="flex gap-4">
            <IconMapPin className="my-auto justify-center text-3xl text-[#9747FF]" />
            <p className="text-sm">With our global team operating remotely from all corners of the world</p>
          </motion.div>

          <motion.div variants={fadeInOutDownToUp} initial="hidden" whileInView="visible" className="flex gap-4">
            <IconTelephone className="my-auto justify-center text-4xl text-[#9747FF]" />
            <p className="text-sm">
              Connect with Codebility’s friendly team for efficient and swift responses to all your inquiries.
            </p>
          </motion.div>

          <motion.div variants={fadeInOutDownToUp} initial="hidden" whileInView="visible" className="flex gap-4">
            <IconEmail className="my-auto justify-center text-5xl text-[#9747FF]" />
            <p className="text-sm">
              Drop a line to Codebility’s inbox for direct, thoughtful communication with our dedicated support team.
            </p>
          </motion.div>
        </div>
        <hr className="mx-5 my-16 max-w-7xl opacity-25 lg:mx-10 xl:mx-auto" />

        {/* MIDDLE */}
        <div className="mx-5 mb-28 mt-10 grid max-w-7xl grid-cols-1 place-items-center gap-16 lg:mx-10 lg:grid-cols-3 xl:mx-auto ">
          <motion.div
            variants={fadeInOutLeftToRight}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col gap-2"
          >
            <div>
              <Link href="/">
                <Image src="/assets/svgs/codebility-white.svg" alt="Codebility" width={250} height={30} />
              </Link>
            </div>
          </motion.div>

          <div className="flex flex-col items-center gap-4">
            <div className="text-center">
              <p className="mb-2 text-sm uppercase">Connect with us</p>
              <input
                type="text"
                placeholder="Email"
                className="h-10 w-80 rounded-full bg-inputColor px-7 pr-14 text-sm focus:outline-none"
              />
            </div>
            <div className="text-center">
              <p className="mb-2">Follow us</p>
              <SocialIcons />
            </div>
          </div>

          <motion.div
            variants={fadeInOutRightToLeft}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col gap-4"
          >
            <p className="text-xl font-semibold">Menu</p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-1">
              {footerLinks.map((footerLink, index) => (
                <Link
                  href={footerLink.footerUrl}
                  key={index}
                  className="hover:text-tealColor text-base font-light text-secondaryColor duration-100 hover:scale-105"
                >
                  {footerLink.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <motion.div
          variants={fadeInOutDownToUp}
          initial="hidden"
          whileInView="visible"
          className="flex h-20 items-center justify-center bg-footerColor"
        >
          <p className="text-sm text-secondaryColor">&copy; 2024 CODEBILITY. All Right Reserved </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
