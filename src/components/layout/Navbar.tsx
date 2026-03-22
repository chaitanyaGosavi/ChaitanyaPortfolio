import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../hooks/useTheme";

const sections = ["home", "intro", "skills", "projects", "experience", "contact"];

const Navbar: React.FC = () => {
  const [active, setActive] = useState(0);
  const { theme, toggleTheme } = useTheme();

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
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 flex flex-col items-center">

      {/* ===== NAV LINE ===== */}
      <div className="relative w-full flex items-center justify-between">

        {/* Base line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-textSecondary/30 -translate-y-1/2" />

        {/* Active line */}
        <motion.div
          className="absolute top-1/2 left-0 h-[2px] bg-accent -translate-y-1/2"
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
                    ? "w-3 h-3 bg-accent"
                    : "w-2.5 h-2.5 bg-textSecondary/40"
                }`}
                whileHover={{ scale: 1.4 }}
              />

              {/* Label */}
              <span
                className={`
                  absolute top-5 text-[10px] md:text-xs capitalize transition
                  ${isActive ? "text-teal" : "text-textSecondary"}
                  block
                `}
              >
                {id}
              </span>
            </div>
          );
        })}
      </div>

      {/* ===== THEME BUTTON (FIXED POSITION BELOW LINE) ===== */}
      <div className="mt-10 flex justify-end w-full">
        <button
          onClick={toggleTheme}
          className="
            w-9 h-9 md:w-10 md:h-10
            flex items-center justify-center
            rounded-full
            bg-gray/10
            backdrop-blur-md
            border border-borderSubtle
            hover:shadow-glass
            transition
          "
        >
          {theme === "dark" ? (
            <FiMoon className="text-textPrimary" />
          ) : (
            <FiSun className="text-accent" />
          )}
        </button>
      </div>

    </div>
  );
};

export default Navbar;