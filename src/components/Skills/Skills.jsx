import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-6 md:px-12 lg:px-24 font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3"></div>
      <p className="text-gray-400 mt-5 text-base sm:text-lg font-medium max-w-2xl mx-auto">
        A collection of my technical skills and expertise honed through various projects and experiences.
      </p>
    </div>

    {/* Skill Category Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.02}
          transitionSpeed={800}
          gyroscope={true}
          className="bg-[#1a162a] border border-white rounded-2xl shadow-lg p-6 hover:shadow-purple-500/30 transition duration-300"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center border-b border-[#333] pb-3">
            {category.title}
          </h3>

          {/* Skills inside each card */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 bg-[#251f38] border border-gray-700 rounded-xl px-3 py-2 hover:border-purple-500 transition-all duration-300"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
                <span className="text-sm text-gray-200">{skill.name}</span>
              </div>
            ))}
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
