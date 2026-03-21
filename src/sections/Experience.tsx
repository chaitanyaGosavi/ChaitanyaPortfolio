import { useState } from "react";
import { experienceData } from "../data/experience";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = experienceData.length;

  const progress = (activeIndex / (total - 1)) * 100;

  return (
    <section
      id="experience"
      className="bg-sand text-primary py-20 md:py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm text-[#5D5D5A] mb-2">Experience</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#023E8A]">
            My Journey.
          </h2>
        </motion.div>

        {/* Layout */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">

          {/* ================= TIMELINE ================= */}
          <div className="relative w-full md:w-auto">

            {/* ---------- MOBILE (LEFT → RIGHT) ---------- */}
            <div className="md:hidden relative w-full py-4">

              {/* Base Line */}
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#EADDC9] -translate-y-1/2" />

              {/* Active Line */}
              <motion.div
                className="absolute top-1/2 left-0 h-[2px] bg-[#48CAE4] -translate-y-1/2"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />

              {/* Nodes */}
              <div className="relative flex justify-between items-center">
                {experienceData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div
                      className={`w-4 h-4 rounded-full transition-all ${
                        index <= activeIndex
                          ? "bg-[#48CAE4] scale-110"
                          : "bg-[#EADDC9]"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* ---------- DESKTOP (BOTTOM → TOP) ---------- */}
            <div className="hidden md:flex relative flex-col items-center justify-between h-[350px]">

              {/* Base Line */}
              <div className="absolute bottom-0 left-1/2 w-[2px] h-full bg-[#EADDC9] -translate-x-1/2" />

              {/* Active Line */}
              <motion.div
                className="absolute bottom-0 left-1/2 w-[2px] bg-[#48CAE4] -translate-x-1/2"
                animate={{ height: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />

              {/* Nodes (REVERSED ONLY FOR DESKTOP) */}
              {[...experienceData].reverse().map((_, i) => {
                const index = total - 1 - i;

                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div
                      className={`w-4 h-4 rounded-full transition-all ${
                        index <= activeIndex
                          ? "bg-[#48CAE4] scale-110"
                          : "bg-[#EADDC9]"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================= CARD ================= */}
          <motion.div
            key={activeIndex}
            className="bg-card p-5 md:p-6 rounded-2xl shadow-sm w-full max-w-2xl"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={experienceData[activeIndex].logo}
                alt="company logo"
                className="w-9 h-9 md:w-10 md:h-10 object-contain rounded-md bg-white p-1"
              />
              <div className="text-sm text-[#5D5D5A]">
                {experienceData[activeIndex].company}
              </div>
            </div>

            {/* Role */}
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              {experienceData[activeIndex].role}
            </h3>

            {/* Duration */}
            <p className="text-[#5D5D5A] text-sm mb-4">
              {experienceData[activeIndex].duration}
            </p>

            {/* Points */}
            <ul className="text-sm text-[#5D5D5A] space-y-2">
              {experienceData[activeIndex].points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;