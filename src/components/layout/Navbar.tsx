import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = ["home", "intro", "skills", "projects", "experience", "contact"];

const Navbar: React.FC = () => {
  const [active, setActive] = useState(0);

  // 🔥 Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((id, index) => {
        const el = document.getElementById(id);
        if (!el) return;

        const { offsetTop, offsetHeight } = el;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActive(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Smooth scroll
  const handleClick = (id: string, index: number) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(index);
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      <div className="relative flex items-center justify-between">

        {/* Base line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#5D5D5A]/30 -translate-y-1/2" />

        {/* Active line */}
        <motion.div
          className="absolute top-1/2 left-0 h-[2px] bg-[#48CAE4] -translate-y-1/2"
          animate={{
            width: `${(active / (sections.length - 1)) * 100}%`,
          }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        />

        {/* Dots */}
        {sections.map((id, index) => {
          const isActive = index <= active;

          return (
            <div
              key={id}
              onClick={() => handleClick(id, index)}
              className="relative flex flex-col items-center cursor-pointer"
            >
              {/* Dot */}
              <motion.div
                className={`rounded-full ${
                  isActive
                    ? "w-3 h-3 bg-[#48CAE4]"
                    : "w-2.5 h-2.5 bg-[#5D5D5A]/40"
                }`}
                whileHover={{ scale: 1.4 }}
              />

              {/* Label (no background now) */}
              <span
                className={`absolute top-5 text-[10px] md:text-xs capitalize transition ${
                  isActive
                    ? "text-[#023E8A]"
                    : "text-[#5D5D5A]"
                }`}
              >
                {id}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;