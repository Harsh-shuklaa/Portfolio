import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 sm:px-[8vw] lg:px-[18vw] font-sans"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center gap-14 lg:gap-24">
        {/* === Left: Text Content === */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Harsh Shukla
          </h2>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-[#8245ec]">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={['Fullstack Developer', 'Web Developer', 'Coder']}
              speed={100}
              eraseSpeed={60}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8">
            A tech enthusiast who loves building things with code. I enjoy
            solving problems, learning new tools, and turning ideas into
            real-world projects. Currently exploring DSA and always up for a
            challenge!
          </p>

          <a
            href="https://drive.google.com/file/d/1g4qYpxzQUGQsi-QuWqs5FCrAPbButbkD/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition-transform duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow:
                '0 0 4px #8245ec, 0 0 8px #8245ec, 0 0 20px #a855f7',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* === Right: Profile Image with Tilt === */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Tilt
            className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1200}
            scale={1.07}
            transitionSpeed={1500}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Harsh Shukla"
              className="w-full h-full object-cover rounded-full drop-shadow-[0_10px_30px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
