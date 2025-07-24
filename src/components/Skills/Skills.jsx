import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const skillVariant = {
  hidden: (i) => ({
    opacity: 0,
    x: [ -40, 40, 0, 0 ][i % 4],
    y: [ 0, 0, -40, 40 ][i % 4],
    scale: 0.95,
  }),
  visible: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  }),
};

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-6 md:px-12 lg:px-24 font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Header */}
    <div className="text-center mb-20">
      <h2 className="text-4xl font-extrabold tracking-tight text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded" />
      <p className="text-gray-400 mt-5 text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
        Technologies I’ve worked with across different projects, reflecting a blend of backend, frontend, and tooling experience.
      </p>
    </div>

    {/* Skills Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      {SkillsInfo.map((category, index) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.03}
          transitionSpeed={800}
          gyroscope={true}
          className="bg-[#1a162a] rounded-2xl p-6 shadow-[0_10px_30px_-10px_rgba(130,69,236,0.3)] border border-[#2e2b3f]"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center border-b border-[#333] pb-3">
            {category.title}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {category.skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={skillVariant}
                className="flex items-center gap-2 bg-[#241d35] border border-gray-700 rounded-xl px-3 py-2 hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 transition-all duration-300"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                />
                <span className="text-sm sm:text-[15px] text-gray-200 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
