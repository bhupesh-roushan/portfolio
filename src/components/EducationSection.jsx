import React from "react";
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";
const EducationSection = () => {
  return (
    <section className="py-8" id="education">
      <motion.h2 
      initial={{opacity:0,y:-20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:1}}
      className="mb-4 text-center text-3xl font-bold">Education</motion.h2>
      {EDUCATION.map((education, index) => (
        <motion.div 
        initial={{opacity:0,x:-20}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1,delay:index*0.5}}
        key={index} className="mb-6 p-10">
          <h2 className="text-xl mt-3 text-center font-semibold">{education.degree}</h2>
          <p className="text-lg mt-3 text-center">{education.institution}</p>
          <p className="text-sm text-center text-stone-300">{education.duration}</p>
          <p className="mt-2 text-justify">{education.description}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default EducationSection;