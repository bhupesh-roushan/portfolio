import React from 'react'
import { INTERNSHIPS } from '../constants'
import { motion } from 'framer-motion'

const Internships = () => {
  return (
    <section className='pt-20 w-full' id='internships'>
        <motion.h2
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
        className='text-center text-4xl font-semibold tracking-tighter'>
            Internships
        </motion.h2>
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,delay:0.5}}
        className='space-y-8 p-10'>{INTERNSHIPS.map((internships,index)=>(
            <motion.div
            initial={{opacity:0,x:-20}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1,delay:index*0.2}}
            key={index} className='rounded-xl border  border-stone-50/30 bg-white/10 p-4'>
                <h3 className='text-2xl font-semibold'>
                    {internships.title}
                </h3>
                <p className='text-xl'>{internships.company}</p>
                <p className='text-sm text-stone-300'>{internships.duration}</p>
                <p className='mt-2 text-base'>{internships.description}</p>
            </motion.div>
        ))}</motion.div>
    </section>
  )
}

export default Internships
