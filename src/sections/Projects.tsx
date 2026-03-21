import { useEffect, useRef, useState } from "react";
import { projectsData } from "../data/projects";
import { motion } from "framer-motion";

const GAP = 24;

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(280);
  const [offset, setOffset] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);

  // ✅ Responsive card width
  useEffect(() => {
    const updateSizes = () => {
      const width = window.innerWidth;

      if (width < 640) setCardWidth(260);
      else if (width < 1024) setCardWidth(300);
      else setCardWidth(320);
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  // ✅ Center active card
  useEffect(() => {
    const calculateOffset = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const centerOffset = containerWidth / 2 - cardWidth / 2;

      setOffset(centerOffset);
    };

    calculateOffset();
    window.addEventListener("resize", calculateOffset);

    return () => window.removeEventListener("resize", calculateOffset);
  }, [cardWidth]);

  const next = () => {
    setActiveIndex((prev) =>
      prev === projectsData.length - 1 ? prev : prev + 1
    );
  };

  const prev = () => {
    setActiveIndex((prev) => (prev === 0 ? prev : prev - 1));
  };

  return (
    <section
      id="projects"
      className="bg-sand text-primary py-20 md:py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-[#5D5D5A] mb-2">
            Projects
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold text-[#023E8A]">
            Selected Work.
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="relative overflow-hidden"
        >
          {/* Track */}
          <motion.div
            className="flex gap-6"
            animate={{
              x: offset - activeIndex * (cardWidth + GAP),
            }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
          >
            {projectsData.map((project, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: cardWidth }}
                  animate={{
                    scale: isActive ? 1 : 0.85,
                    opacity: isActive ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-card p-4 rounded-2xl shadow-sm h-[420px] flex flex-col">

                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-xl mb-4 h-[160px] object-cover"
                    />

                    {/* Content */}
                    <div className="flex flex-col flex-grow">

                      <h3 className="text-lg font-semibold mb-2">
                        {project.title}
                      </h3>

                      <p className="text-sm text-[#5D5D5A] mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 bg-[#48CAE4]/20 text-[#023E8A] rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="mt-auto">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#48CAE4] text-sm hover:underline"
                        >
                          View Project →
                        </a>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Controls */}
          <div className="flex justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-[#48CAE4] transition"
            >
              ←
            </button>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-[#48CAE4] transition"
            >
              →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;