import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useEffect, useState } from "react";

const name = "Chaitanya Gosavi".split("");

const Hero: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // 🌊 Subtle parallax
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
      className="relative min-h-screen flex items-center px-6 bg-sand dark:bg-dark overflow-hidden"
    >
      {/* 🌊 Parallax Background */}
      <motion.div
        className="absolute inset-0"
        animate={{ x: offset.x, y: offset.y }}
        transition={{ type: "spring", stiffness: 30, damping: 25 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

          <div className="text-center md:text-left">

            {/* NAME (LETTER ANIMATION) */}
            <h1 className="text-3xl md:text-5xl font-semibold text-cyan dark:text-teal">
              {name.map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.4,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>

            {/* ROLE */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-3 text-sm md:text-base text-textSecondary"
            >
              Frontend Engineer · React · Angular · Next.js
            </motion.p>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-4 max-w-xl text-sm md:text-base text-textSecondary leading-relaxed"
            >
              I build fast, scalable, and maintainable web applications with
              modern UI/UX. Focused on performance, clean architecture, and
              delivering impactful user experiences.
            </motion.p>

            {/* SOCIALS */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center md:justify-start gap-4 mt-6"
            >
              <a
                href="https://github.com/chaitanyaGosavi"
                className="text-textSecondary hover:text-accent transition"
              >
                <FiGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/chaitanya-gosavi-5b66b21b7/"
                className="text-textSecondary hover:text-accent transition"
              >
                <FiLinkedin size={20} />
              </a>

              <a
                href="mailto:chaitanya.gosavi.241101@gmail.com"
                className="text-textSecondary hover:text-accent transition"
              >
                <FiMail size={20} />
              </a>
            </motion.div>

            {/* CTA */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              whileHover={{ scale: 1.05 }}
              className="
                inline-block mt-6
                px-6 py-3
                rounded-lg
                border border-textSecondary
                text-textSecondary
                bg-transparent
                hover:bg-accent/10
                transition
              "
            >
              Work With Me
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;