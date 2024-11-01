import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <section className="pt-10 flex flex-col items-center w-full" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10 text-center text-3xl font-bold lg:text-4xl"
      >
        Projects
      </motion.h2>

      <div className="w-full grid grid-cols-1 gap-1 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            key={project.id}
            className="group relative max-h-[300px] overflow-scroll rounded-3xl flex items-center justify-center p-10"
          >
            <a href={project.projectLink}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={project.image}
              alt=""
              className="w-[200px] h-[200px] transition-transform duration-500 group-hover:scale-110 p-10"
            />
            </a>

            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100"
            >
              <h3 className="mb-2 font-bold text-xl text-center">
                {project.name}
              </h3>
              <p className="mb-2 p-4 text-justify">{project.description}</p>
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
              >
                <div className="flex items-center">
                  <span>View Live</span>
                </div>
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
