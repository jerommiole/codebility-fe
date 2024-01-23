"use client"
import { motion } from "framer-motion"
import {
  box,
  item,
  fadeInOutRightToLeft,
  fadeInOutLeftToRight,
  fadeInOutUpToDown,
  fadeInOutDownToUp,
} from "../../Components/FramerAnimation/Framer"

interface ReasonProps {
  title: string
  subTitle: string
  reasonNumber: number
  description: string
}

const Reasons = ({ title, reasonNumber, description, subTitle }: ReasonProps) => {
  return (
    <div className="flex flex-col gap-10 md:mx-auto md:flex-row md:justify-evenly xl:w-3/4 xl:justify-evenly">
      <motion.h1
        variants={fadeInOutLeftToRight}
        initial="hidden"
        whileInView="visible"
        className=" text-xl md:flex md:max-w-[200px] md:items-center md:justify-center md:text-center md:text-4xl md:leading-tight"
      >
        {title}
      </motion.h1>
      <div className="flex max-w-sm gap-3 p-4">
        <motion.div
          variants={fadeInOutDownToUp}
          initial="hidden"
          whileInView="visible"
          className="flex h-48 w-28 items-center justify-center "
        >
          <h1 className="text-3xl font-semibold text-secondaryColor">0{reasonNumber}</h1>
        </motion.div>
        <motion.div
          variants={fadeInOutRightToLeft}
          initial="hidden"
          whileInView="visible"
          className="flex flex-1 flex-col  p-1"
        >
          <div className=" text-sm font-bold text-primaryColor">{subTitle}</div>
          <p className=" mr-2 text-sm text-secondaryColor">{description}</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Reasons
