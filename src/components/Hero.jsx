import React from "react";
import { HERO } from "../constants";
import bhupesh from "../assets/bhupesh.png"
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="flex justify-center min-h-screen flex-wrap items-center">
      <motion.div
      initial={{opacity:0,x:-50}}
      animate={{opacity:1,x:0}}
      transition={{duration:1}}
      className="w-full md:w-1/2">
         <p className="p-1 text-3xl mt-24 tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <h2 className="my-8 p-1 text-4xl  font-bold md:text-5xl lg:text-[5rem]">
          {HERO.name}
        </h2>
       
        <p className="mb-8 p-1 text-xl text-justify font-normal">{HERO.description1}</p>
        <p className="mb-8 p-1 text-xl text-justify font-normal">{HERO.description2}</p>
        <p className="mb-8 p-1 text-xl text-justify font-normal">{HERO.description3}</p>
      </motion.div>
      <motion.div 
      initial={{opacity:0,scale:0.8}}
      animate={{opacity:1,scale:1}}
      transition={{duration:1}}
      className="w-full md:w-1/2 lg:p-8">
            <div className="flex flex-col justify-between items-center">
                    <motion.img 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1}}
                    src={bhupesh} width={350} height={350} alt="Bhupesh Roushan" className="rounded-full shadow-lg shadow-blue-900 border-white border-2" />
                    <a href="#">
                    <button className="mt-20 bg-white text-black p-2 rounded-lg shadow-md border hover:scale-105 transition-transform delay-120 ease-in-out shadow-blue-900 duration-500">Download Resume</button>
                    </a>
            </div>
      </motion.div>
    </section>
  );
};

export default Hero;
