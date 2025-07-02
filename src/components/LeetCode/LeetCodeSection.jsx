// src/components/LeetCodeSection.js
import React, { useEffect, useState } from "react";
import { leetcodeStats } from "../../constants.js";
import { SiLeetcode } from "react-icons/si"; // ✅ LeetCode Icon

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
      <section id="leetcode" className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans">
        <p className="text-center text-red-500 text-lg font-semibold">{error}</p>
      </section>
    );

  if (!stats)
    return (
      <section id="leetcode" className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans">
        <p className="text-center text-gray-400 text-lg font-semibold">Loading LeetCode stats...</p>
      </section>
    );

  return (
    <section
      id="leetcode"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">LEETCODE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
      {leetcodeStats.heading || "LeetCode stats fetched from live API using React"}
        </p>
      </div>

      {/* Profile Card Styled Like Portfolio Theme */}
      <div className="bg-gray-900 border border-purple-500 rounded-2xl shadow-2xl max-w-3xl mx-auto p-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-white text-2xl font-bold mb-2">Harsh</h3>
            <p className="text-purple-400 text-xl">{leetcodeStats.username}</p>
            <p className="text-gray-400 text-sm mt-1">
              Global Ranking: <span className="text-white font-semibold">{stats.ranking}</span>
            </p>
 <a
  href={leetcodeStats.profileUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 mt-4 bg-purple-600 hover:bg-purple-700 hover:shadow-purple-500/40 text-white px-5 py-2 rounded-lg text-sm font-bold transition-transform duration-300 transform hover:scale-105"
>
  <SiLeetcode className="text-xl" />
  View Full Profile
</a>


          </div>
          <div className="grid grid-cols-3 gap-4 w-full sm:w-auto ">
            <Stat label="Total" value={stats.totalSolved} color="text-purple-400" />
            <Stat label="Easy" value={stats.easySolved} color="text-green-600" />
            <Stat label="Medium" value={stats.mediumSolved} color="text-amber-500" />
            <Stat label="Hard" value={stats.hardSolved} color="text-rose-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ label, value, color }) => (
  <div className="flex flex-col items-center justify-center bg-[#251f38] p-4 rounded-xl shadow-inner">
    <h4 className="text-sm text-gray-400">{label}</h4>
    <p className={`text-2xl font-bold ${color}`}>{value}</p>
  </div>
);

export default LeetCodeSection;
