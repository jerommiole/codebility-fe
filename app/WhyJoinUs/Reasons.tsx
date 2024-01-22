'use client'
import {motion} from "framer-motion"
import {
  box, item, fadeInOutRightToLeft,
  fadeInOutLeftToRight,
  fadeInOutUpToDown,
  fadeInOutDownToUp,
} from "../../Components/FramerAnimation/Framer";

interface ReasonProps {
    title: string;
    reasonNumber: number;
    description: string;
}

const Reasons = ({title, reasonNumber, description} : ReasonProps) => {
  return (
    <div className="flex flex-col gap-10 md:flex-row md:justify-evenly md:mx-auto xl:w-3/4 xl:justify-evenly">
      <motion.h1 
       variants={fadeInOutLeftToRight}
       initial="hidden"
       whileInView="visible"
      className="text-xl md:max-w-[200px] md:flex md:items-center md:justify-center md:text-center md:text-5xl md:leading-tight">
        {title}
      </motion.h1>
      <div className="flex max-w-sm gap-3 p-4">
        <motion.div 
            variants={fadeInOutDownToUp}
            initial="hidden"
            whileInView="visible"
        className="flex items-center justify-center h-48 w-28 ">
          <h1 className="text-3xl font-semibold text-secondaryColor">0{reasonNumber}</h1>
        </motion.div>
        <motion.div 
        variants={fadeInOutRightToLeft}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col justify-between flex-1 p-1">
          <p className="text-sm text-secondaryColor">
            {description}
          </p>
          <div className="flex justify-between text-sm text-secondaryColor">
            <p>Lorem</p>
            <p>Lorem Ipsum</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Reasons
