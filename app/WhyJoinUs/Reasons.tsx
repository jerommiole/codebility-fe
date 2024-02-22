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
    <div className="mx-auto flex flex-col gap-10 md:flex-row md:justify-evenly xl:w-full xl:justify-evenly">
      <motion.h1
        variants={fadeInOutLeftToRight}
        initial="hidden"
        whileInView="visible"
        className=" text-left text-2xl font-semibold uppercase text-primaryColor md:flex md:max-w-[200px] md:items-center md:justify-center md:text-4xl md:leading-tight"
      >
        {title}
      </motion.h1>
      <div className="flex max-w-md flex-col gap-3 p-4 md:flex-row">
        <motion.div
          variants={fadeInOutDownToUp}
          initial="hidden"
          whileInView="visible"
          className="flex md:h-48 md:w-28 md:items-center md:justify-center "
        >
          <h1 className="text-3xl font-semibold text-primaryColor">0{reasonNumber}</h1>
        </motion.div>
        <motion.div
          variants={fadeInOutRightToLeft}
          initial="hidden"
          whileInView="visible"
          className="items-left flex flex-1 flex-col justify-center p-1"
        >
          <div className="text-md font-bold text-darkBlueBgColor">{subTitle}</div>
          <p className="mr-2 text-sm text-secondaryColor">{description}</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Reasons
