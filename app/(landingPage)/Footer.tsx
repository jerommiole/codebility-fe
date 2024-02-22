"use client"
import Image from "next/image"
import Contacts from "./Contacts"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  fadeInOutLeftToRight,
  fadeInOutRightToLeft,
  fadeInOutDownToUp,
  item,
} from "../../Components/FramerAnimation/Framer"
import { delay } from "lodash"
const socials = [
  {
    socialUrl: "#facebook",
    alt: "facebook",
    icon: "ri_facebook-fill.svg",
  },
  {
    socialUrl: "#twitter",
    alt: "twitter",
    icon: "mdi_twitter.svg",
  },
  {
    socialUrl: "#github",
    alt: "github",
    icon: "mdi_github.svg",
  },
  {
    socialUrl: "#linkedin",
    alt: "linkedin",
    icon: "mdi_linkedin.svg",
  },
  {
    socialUrl: "#slack",
    alt: "slack",
    icon: "ri_slack-fill.svg",
  },
]

// dummy data
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

const SocialContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}
const Footer = () => {
  return (
    <footer id="footer" className="flex items-center justify-center bg-backgroundColor text-primaryColor">
      <div className="mt-28 w-screen">
        {/* TOP */}
        <div className="grid w-full max-w-7xl grid-cols-1 place-items-center gap-16 px-10 lg:mx-10 lg:grid-cols-3 xl:mx-auto ">
          <motion.div variants={fadeInOutDownToUp} initial="hidden" whileInView="visible">
            <Contacts
              imageUrl="/carbon_location-filled.svg"
              alt="Find us"
              name="Find us"
              description="With our global team operating remotely from all corners of the world."
            />
          </motion.div>

          <motion.div variants={fadeInOutDownToUp} initial="hidden" whileInView="visible">
            <Contacts
              imageUrl="/material-symbols_call.svg"
              alt="Contact us"
              name="Contact us"
              description="Connect with Codebility’s friendly team for efficient and swift responses to all your inquiries."
            />
          </motion.div>

          <motion.div variants={fadeInOutDownToUp} initial="hidden" whileInView="visible">
            <Contacts
              imageUrl="/mingcute_mail-open-fill.svg"
              alt="Mail us"
              name="Mail us"
              description="Drop a line to Codebility’s inbox for direct, thoughtful communication with our dedicated support team."
            />
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
                <Image src="/companyLogo.png" alt="Codebility" width={250} height={30} />
              </Link>
            </div>
          </motion.div>

          <div className="flex flex-col items-center gap-4">
            <motion.div
              variants={fadeInOutDownToUp}
              initial="hidden"
              whileInView="visible"
              className="flex flex-col items-center gap-4"
            >
              <h1 className="text-sm ">CONNECT WITH US</h1>
              <div className="relative flex max-w-sm">
                <input
                  type="text"
                  placeholder="Email Address..."
                  className="h-10 w-80 rounded-full bg-inputColor px-7 pr-14 text-sm focus:outline-none"
                />
                <Image
                  src="/send.svg"
                  alt="send"
                  width={53}
                  height={53}
                  className="absolute -right-3 hover:cursor-pointer"
                />
              </div>
              <h2 className="text-md font-semibold">Follow us</h2>
            </motion.div>
            <motion.div variants={SocialContainer} initial="hidden" whileInView="visible" className="flex gap-5">
              {socials.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.5, rotate: 360 }}
                  transition={{
                    duration: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  whileTap={{
                    scale: 0.8,
                    rotate: -90,
                    borderRadius: "100%",
                  }}
                  variants={item}
                >
                  <Link key={`social-${index}`} href={social.socialUrl}>
                    <Image src={social.icon} alt={social.alt} width={30} height={30} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeInOutRightToLeft}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col gap-4"
          >
            <h1 className="text-xl font-semibold">Menu</h1>
            <div className="grid grid-cols-2 gap-x-10 gap-y-1">
              {footerLinks.map((footerLink, index) => (
                <Link
                  href={footerLink.footerUrl}
                  key={index}
                  className="text-base font-light text-secondaryColor duration-100 hover:scale-105 hover:text-tealColor"
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
          <p className="text-sm text-secondaryColor">
            Copyright &copy; All Right Reserved{" "}
            <Link href="/">
              <span className="font-bold text-primaryColor hover:underline">CODEBILITY</span>
            </Link>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
