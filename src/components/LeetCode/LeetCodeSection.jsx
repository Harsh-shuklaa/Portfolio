import React, { useEffect, useState } from "react";
import { leetcodeStats } from "../../constants.js";
import { SiLeetcode } from "react-icons/si";
import leetcodeLogo from "../../assets/tech_logo/leetCode.png";
import LeetCodeSkeleton from "./LeetCodeSkelton.jsx"; 

const LeetCodeSection = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(leetcodeStats.apiUrl);
        const data = await res.json();

        if (data.status === "error") {
          setError("Profile not found");
        } else {
          setStats(data);
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
        <p className="text-center text-red-500 text-lg font-semibold">
          {error}
        </p>
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
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">LEETCODE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          {leetcodeStats.heading ||
            "LeetCode stats fetched from live API using React"}
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-[#15121e] border border-white rounded-2xl shadow-2xl max-w-4xl mx-auto p-6 sm:p-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Left Side */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 flex-1">
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
                background:
                  "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow:
                  "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
              }}
            >
              <SiLeetcode className="text-xl" />
              View Full Profile
            </a>
          </div>

          {/* Right Side: Stats Grid */}
          <div className="grid grid-cols-2 gap-4 flex-1 justify-center w-full max-w-[300px] sm:max-w-none">
            <Stat
              label="Total"
              value={stats.totalSolved}
              color="text-purple-500"
            />
            <Stat
              label="Easy"
              value={stats.easySolved}
              color="text-green-500"
            />
            <Stat
              label="Medium"
              value={stats.mediumSolved}
              color="text-yellow-400"
            />
            <Stat
              label="Hard"
              value={stats.hardSolved}
              color="text-red-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ label, value, color }) => (
  <div className="flex flex-col items-center justify-center bg-[#251f38] p-4 rounded-xl shadow-inner min-w-[100px]">
    <h4 className="text-sm text-gray-400">{label}</h4>
    <p className={`text-2xl font-bold ${color}`}>{value}</p>
  </div>
);

export default LeetCodeSection;
