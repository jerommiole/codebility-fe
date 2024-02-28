import { socialIcons } from "@/constants"
import { motion } from "framer-motion"
import { SocialContainer, item } from "../FramerAnimation/Framer"
import Link from "next/link"

import React from "react"

const SocialIcons = () => {
  return (
    <div>
      <motion.div
        className="flex gap-5 pt-16 md:mt-16"
        variants={SocialContainer}
        initial="hidden"
        whileInView="visible"
      >
        {socialIcons.map((social, i) => (
          <Link key={`socialIcons-${i}`} href={social.socialUrl} target="_blank" rel="noopener noreferrer">
            <motion.div
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
              {social.icon}
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  )
}

export default SocialIcons
