// src/components/LeetCodeSkeleton.jsx
import React from "react";

const LeetCodeSkeleton = () => {
  return (
    <section id="leetcode" className="py-24 px-6 sm:px-[12vw] font-sans relative">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">LEETCODE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          LeetCode stats fetched from live API using React
        </p>
      </div>

      {/* Skeleton Profile Card */}
      <div className="bg-[#15121e] border border-[#ffffff1a] rounded-2xl shadow-2xl max-w-4xl mx-auto p-6 sm:p-10 animate-pulse">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Left Side Skeleton */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 flex-1">
            <div className="w-32 h-32 rounded-full bg-[#2e2b3a]" />

            <div className="space-y-2">
              <div className="h-5 w-24 bg-[#2e2b3a] rounded-md"></div>
              <div className="h-4 w-36 bg-[#2e2b3a] rounded-md"></div>
              <div className="h-3 w-40 bg-[#2e2b3a] rounded-md"></div>
            </div>

            <div className="h-8 w-40 bg-[#2e2b3a] rounded-full mt-2"></div>
          </div>

          {/* Right Side Skeleton Stats */}
          <div className="grid grid-cols-2 gap-4 flex-1 w-full max-w-[300px] sm:max-w-none">
            {[...Array(4)].map((_, idx) => (
              <div
                key={idx}
                className="bg-[#251f38] p-4 rounded-xl shadow-inner flex flex-col items-center justify-center min-w-[100px]"
              >
                <div className="h-4 w-16 bg-[#3d3654] rounded-md mb-2"></div>
                <div className="h-6 w-10 bg-[#3d3654] rounded-md"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeetCodeSkeleton;
