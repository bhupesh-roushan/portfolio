import React from 'react'
import title from "../assets/title.svg"
import { SOCIAL_MEDIA_LINKS } from '../constants'
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <div className='mb-8 mt-20'>
      <div className='flex items-center justify-center'>
        {/* <img src={logo} alt="" width={200} className='my-20'/> */}
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5,delay:0.5}}
        className='flex flex-row items-center gap-3'>
            <motion.img
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.5,delay:0.5}}
            src={title} alt="" className='animate-spin'/>
            <motion.h1
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.5,delay:0.5}}
            className='text-xl font-bold'>Bhupesh Roushan</motion.h1>
        </motion.div>
      </div>

      <div className='flex items-center justify-center mt-10 gap-8'>
            {SOCIAL_MEDIA_LINKS.map((link,index)=>(
                <motion.a 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.2,delay:index*0.5}}
                key={index} href={link.href} target='_blank' rel='noopener noreferrer'>
                    {link.icon}
                </motion.a>
            ))}
      </div>
      <p className='mt-8 text-center text-sm tracking-wide text-gray-400'>
        &copy; Bhupesh Roushan. All Rights Reserved. 2024
      </p>
    </div>
  )
}

export default Footer
