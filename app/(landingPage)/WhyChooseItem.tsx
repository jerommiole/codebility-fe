"use client"
import { motion } from "framer-motion"
import { fadeInOutDownToUp, fadeInOutLeftToRight, fadeInOutRightToLeft } from "../../Components/FramerAnimation/Framer"

interface ItemProps {
  title: string
  subTitle: string
  itemNumber: number
  description: string
}

const WhyChooseItem = ({ title, itemNumber, description, subTitle }: ItemProps) => {
  return (
    <div className="mx-auto flex w-full flex-col gap-2 rounded-lg bg-[#0D0D0D] p-4 lg:flex-row lg:bg-transparent">
      <div className="m-auto flex basis-2/5 pl-5">
        <motion.h3
          variants={fadeInOutLeftToRight}
          initial="hidden"
          whileInView="visible"
          className="max-w-auto m-auto text-left text-2xl font-semibold uppercase text-primaryColor lg:max-w-[200px]  lg:text-3xl"
        >
          {title}
        </motion.h3>
      </div>
      <div className="basis-3/5">
        <div className="m-auto flex max-w-md flex-col gap-1 px-4 lg:flex-row lg:gap-10">
          <motion.div
            variants={fadeInOutDownToUp}
            initial="hidden"
            whileInView="visible"
            className="mx-auto flex lg:items-center"
          >
            <p className="text-3xl font-semibold text-primaryColor">0{itemNumber}</p>
          </motion.div>
          <motion.div
            variants={fadeInOutRightToLeft}
            initial="hidden"
            whileInView="visible"
            className="flex flex-1 flex-col justify-center gap-1 p-1 text-center lg:text-left"
          >
            <p className="text-md font-bold text-darkBlueBgColor">{subTitle}</p>
            <p className="mr-2 text-sm text-secondaryColor">{description}</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseItem
