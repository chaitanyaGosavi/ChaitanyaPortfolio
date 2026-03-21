import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const heading = "CRAFTING DIGITAL NARRATIVES".split(" ");

const Hero: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // 🌊 Subtle parallax (reduced intensity)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 6;
      const y = (e.clientY / window.innerHeight - 0.5) * 6;

      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 bg-sand"
    >
      {/* 🌊 Parallax Background */}
      <motion.div
        className="absolute inset-0"
        animate={{ x: offset.x, y: offset.y }}
        transition={{ type: "spring", stiffness: 30, damping: 25 }}
      />

      {/* 🧾 Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* 🔥 Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight text-[#023E8A]">
          {heading.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-2 md:mr-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.12,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* 👤 Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: heading.length * 0.12 + 0.2 }}
          className="mt-6 text-sm sm:text-base md:text-xl text-[#5D5D5A] max-w-2xl mx-auto leading-relaxed"
        >
          Chaitanya Gosavi — Frontend Engineer building scalable, modern web experiences
        </motion.p>

        {/* ⬇️ Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 1.8 }}
          className="mt-16 flex flex-col items-center gap-2 text-xs tracking-widest text-[#48CAE4]"
        >
          <span>SCROLL</span>

          {/* Animated line */}
          <motion.div
            className="w-[1px] h-6 bg-[#48CAE4]"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;