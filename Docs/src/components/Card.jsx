import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react"

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scaleX: 1.1}} dragElastic={0.1} className='relative flex-shrink-0 w-50 h-68 rounded-[40px] bg-zinc-900/90 text-white px-6 py-8 overflow-hidden'>
      <FaRegFileAlt/>   
      <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
      <div className='absolute bottom-0 left-0 w-full'>
        <div className='flex items-center justify-between px-4 mb-4'>
            <h5>{data.fileSize}</h5>
            <span className='w-7 h-7 flex items-center justify-center rounded-full bg-zinc-600'>
              {data.close ? <IoClose/> : <LuDownload size=".8em"/> }
            </span>
        </div>
        {data.tag.isOpen && (
          <div className={`w-full py-3 ${data.tag.tagColor === "blue" ? "bg-blue-500": "bg-green-500"} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
          </div>)
        }
      </div>
    </motion.div>
  )
}

export default Card
