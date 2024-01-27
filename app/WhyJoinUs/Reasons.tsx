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
    <div className="flex flex-col gap-10 mx-auto md:flex-row md:justify-evenly xl:w-full xl:justify-evenly">
      <motion.h1
        variants={fadeInOutLeftToRight}
        initial="hidden"
        whileInView="visible"
        className=" text-2xl text-primaryColor md:flex md:max-w-[200px] font-semibold uppercase md:items-center md:justify-center text-left md:text-4xl md:leading-tight"
      >
        {title}
      </motion.h1>
      <div className="flex flex-col max-w-md gap-3 p-4 md:flex-row">
        <motion.div
          variants={fadeInOutDownToUp}
          initial="hidden"
          whileInView="visible"
          className="flex md:justify-center md:items-center md:h-48 md:w-28 "
        >
          <h1 className="text-3xl font-semibold text-primaryColor">0{reasonNumber}</h1>
        </motion.div>
        <motion.div
          variants={fadeInOutRightToLeft}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col justify-center flex-1 p-1 items-left"
        >
          <div className="font-bold text-md text-darkBlueBgColor">{subTitle}</div>
          <p className="mr-2 text-sm text-secondaryColor">{description}</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Reasons
