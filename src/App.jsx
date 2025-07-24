import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';
import LeetCodeSection from "./components/LeetCode/LeetCodeSection";

// ✅ AOS Import
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  // ✅ Initialize AOS on mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // only animate once
    });
  }, []);

  return (
    <div className="bg-[#050414]">

      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative pt-20">
        <Navbar />
        {/* ✨ Apply Scroll Animation to Sections */}
        <div data-aos="fade-up"><About /></div>
        <div data-aos="fade-up"><LeetCodeSection /></div>
        <div data-aos="fade-up"><Skills /></div>
        <div data-aos="fade-up"><Experience /></div>
        <div data-aos="fade-up"><Work /></div>
        <div data-aos="fade-up"><Education /></div>
        <div data-aos="fade-up"><Contact /></div>
        <Footer />
      </div>

    </div>
  );
};

export default App;
