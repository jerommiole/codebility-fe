'use client'

import { motion } from "framer-motion"
import Image from 'next/image'
import { useState } from 'react'

type TodoProps = {
    title: string,
    body: string,
    dueTime?: string,
    id: number
}

const Todo = ({ title, body, dueTime, id }:TodoProps) => {
    const [modal, setModal] = useState<boolean>(false)
    const [check, setCheck] = useState<boolean>(false)

    const toggleModal = () => {
      setModal(!modal)
    }

  return (
    <div className='py-3 px-3 bg-[#151515] md:bg-[#131313] rounded-md' key={id}>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='w-5 h-5 border-[1px] border-white p-[3px] rounded-[3px] cursor-pointer hover:opacity-90' onClick={() => setCheck(!check)}> {/* Checkbox input button */}
            <div className={`${check ? 'bg-cyan-400' : ''} w-full h-full`}>
              {/* Check status */}
            </div>
          </div>
          <div className={`flex flex-col justify-center ${dueTime ? 'gap-0' : ''}`}>
            <div className='text-white'>
              {title}
            </div>
            <div className='text-[#828282] text-xs'>
              {dueTime}
            </div>
          </div>
        </div>
        <div className='text-sm text-[#6a78f2] cursor-pointer hover:scale-105 duration-75' onClick={toggleModal}>
          View
        </div>
      </div>
      {modal && (  
          <motion.div className='w-[100vw] h-[100vh] content-normal bg-gray-300 opacity-40 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-40' 
            onClick={toggleModal} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.1 }}
          >

          </motion.div>
        )}
      {modal && (
        <motion.div className='absolute top-[50%] left-[47%] translate-x-[-47%] translate-y-[-50%] w-10/12 overflow-auto sm:w-[350px] max-h-[400px]  md:w-[475px] md:h-[350px] bg-[#0e0e0e] py-[2.2rem] px-[2rem] rounded-md z-40' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
          <Image className='cursor-pointer hover:scale-110 absolute top-[1.3rem] right-[1rem]'
          src="/Close.svg" 
          alt="close" 
          width={13} 
          height={13} 
          onClick={toggleModal} 
        />
          <div className='flex flex-col gap-5 w-full h-full'>
            <div className='flex items-center gap-4'>
              <div className='w-5 h-5 border-[1px] border-white p-[3px] rounded-[3px] cursor-pointer hover:opacity-90' onClick={() => setCheck(!check)}> {/* Checkbox input button */}
                <div className={`${check ? 'bg-cyan-400' : ''} w-full h-full`}>
                  {/* Check status */}
                </div>
              </div>
              <div className={`flex flex-col justify-center ${dueTime ? 'gap-0' : ''}`}>
                <div className='text-white'>
                  {title}
                </div>
                <div className='text-[#828282] text-xs'>
                  {dueTime}
                </div>
              </div>
            </div>
            <div className='text-[#8e8e8e] pl-[2rem] pb-[0.75rem]'>
              {body}
                <br />
                <br />
              {body}
                <br />
                <br />
              {body}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Todo