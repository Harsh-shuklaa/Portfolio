import React, { useEffect, useState } from "react";
import { leetcodeStats } from "../../constants.js";
import { SiLeetcode } from "react-icons/si";
import leetcodeLogo from "../../assets/tech_logo/leetCode.png";
import LeetCodeSkeleton from "./LeetCodeSkelton.jsx";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";

const LeetCodeSection = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ✅ Initialize AOS on component mount
    AOS.init({ duration: 1000, once: true });

    const fetchStats = async () => {
      try {
        const res = await fetch(leetcodeStats.apiUrl);
        const data = await res.json();

        if (data.status === "error") {
          setError("Profile not found");
        } else {
          const totalQuestions = data.totalEasy + data.totalMedium + data.totalHard;
          setStats({ ...data, totalQuestions });
        }
      } catch (err) {
        setError("API Error");
      }
    };

    fetchStats();
  }, []);

  if (error)
    return (
      <section id="leetcode" className="py-24 px-6 font-sans">
        <p className="text-center text-red-500 text-lg font-semibold">{error}</p>
      </section>
    );

  if (!stats)
    return (
      <section id="leetcode" className="py-24 px-6 font-sans">
        <LeetCodeSkeleton />
      </section>
    );

  return (
    <section
      id="leetcode"
      className="py-24 px-6 sm:px-[12vw] font-sans relative"
      data-aos="fade-up"
    >
      {/* Section Title */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h2 className="text-4xl font-bold text-white">LEETCODE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          {leetcodeStats.heading || "LeetCode stats fetched from live API using React"}
        </p>
      </div>

      {/* ✅ Profile Card with Tilt */}
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        scale={1.02}
        transitionSpeed={800}
        gyroscope={true}
        className="max-w-4xl mx-auto"
      >
        <div
          className="bg-[#15121e] rounded-2xl shadow-2xl p-6 sm:p-10 transition duration-300 hover:shadow-purple-500/30"
          data-aos="zoom-in"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Left Side */}
            <div
              className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 flex-1"
              data-aos="fade-right"
            >
              <img
                src={leetcodeLogo}
                alt="Harsh Shukla"
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover ring-4 ring-purple-500 drop-shadow-md"
              />
              <div>
                <h3 className="text-white text-2xl font-bold">Harsh</h3>
                <p className="text-purple-500 text-lg font-semibold">
                  {leetcodeStats.username}
                </p>
                <p className="text-gray-400 text-sm">
                  Global Ranking:{" "}
                  <span className="text-white font-semibold">
                    {stats.ranking}
                  </span>
                </p>
              </div>
              <a
                href={leetcodeStats.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 bg-purple-600 hover:bg-purple-700 hover:shadow-purple-500/40 text-white px-5 py-2 rounded-full text-sm font-bold transition-transform duration-300 transform hover:scale-105"
                style={{
                  background: "linear-gradient(90deg, #8245ec, #a855f7)",
                  boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
                }}
              >
                <SiLeetcode className="text-xl" />
                View Full Profile
              </a>
            </div>

            {/* Right Side: Stats */}
            <div
              className="flex flex-col gap-6 flex-1 items-center w-full"
              data-aos="fade-left"
            >
              {/* Circular Total Progress */}
              <div className="w-24 h-24">
                <CircularProgressbar
                  value={(stats.totalSolved / stats.totalQuestions) * 100}
                  text={`${Math.round(
                    (stats.totalSolved / stats.totalQuestions) * 100
                  )}%`}
                  styles={buildStyles({
                    textColor: "#fff",
                    pathColor: "#f97316",
                    trailColor: "#333",
                    textSize: "16px",
                  })}
                />
              </div>
              <p className="text-white text-sm text-center">
                <span className="text-2xl font-bold">{stats.totalSolved}</span>{" "}
                / {stats.totalQuestions} Completed
              </p>

              {/* Difficulty Breakdown */}
              <div className="w-full space-y-4">
                <LevelStat
                  label="Easy"
                  solved={stats.easySolved}
                  total={stats.totalEasy}
                  color="bg-green-500"
                />
                <LevelStat
                  label="Medium"
                  solved={stats.mediumSolved}
                  total={stats.totalMedium}
                  color="bg-yellow-400"
                />
                <LevelStat
                  label="Hard"
                  solved={stats.hardSolved}
                  total={stats.totalHard}
                  color="bg-red-500"
                />
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </section>
  );
};

// Difficulty Bar Component
const LevelStat = ({ label, solved, total, color }) => {
  const percentage = (solved / total) * 100;

  return (
    <div>
      <div className="flex justify-between mb-1 text-sm text-gray-300">
        <span>{label}</span>
        <span>
          {solved} / {total} completed
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className={`${color} h-2 rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LeetCodeSection;
