'use client'
import Reasons from "./Reasons"
import { motion } from "framer-motion";

const WhyJoinUs = () => {
  return (
    <section className="flex flex-col gap-10 py-20 bg-backgroundColor text-primaryColor">
      <div className="mx-5 max-w-7xl md:mx-16 xl:w-[70%] xl:mx-auto">
        <p className="xl:ml-11 w-max">Codebility</p>
        <motion.div className="flex flex-col gap-12 mt-7 md:gap-6 lg:flex-row lg:justify-between xl:justify-evenly">
          <h1 className="text-4xl font-bold md:ml-12 md:text-5xl lg:ml-0">Why Join Us?</h1>
          <p className="max-w-lg text-sm text-primaryColor md:ml-24 lg:max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
        </motion.div>
      </div>
      <div className="mx-5 my-5 py-10 flex max-w-7xl flex-col gap-5 md:mx-16  xl:w-[70%] xl:mx-auto">
        <Reasons
          title="LOREM IPSUM"
          reasonNumber={1}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s."
        />
        <Reasons
          title="LOREM IPSUM"
          reasonNumber={2}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s."
        />
        <Reasons
          title="LOREM IPSUM"
          reasonNumber={3}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s."
        />
      </div>
      <div className="mx-5 mt-5 flex max-w-7xl items-center justify-center md:mx-16 md:justify-end lg:justify-center xl:w-[70%] xl:mx-auto">
        <p className="max-w-sm text-xs text-center lg:max-w-3xl lg:text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s.
        </p>
      </div>
    </section>
  )
}

export default WhyJoinUs
