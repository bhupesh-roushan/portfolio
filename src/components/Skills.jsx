import React from "react";
import { SKILLS } from "../constants";
import { motion, stagger, transform } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.1 },
  },
};

const Skills = () => {
  return (
    <div className="container mx-auto" id="skills">
      <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">Skills</h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="mx-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30"
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className={`py-6 flex items-center justify-center`}
          >
            <div className="flex items-center">
              {skill.icon}
              <h3 className="px-6 text-lg lg:text-2xl">{skill.name}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
