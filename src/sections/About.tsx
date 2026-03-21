import { motion } from "framer-motion";
import { aboutData } from "../data/about";

const About: React.FC = () => {
  return (
    <section
      id="intro"
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
            Introduction
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold text-[#023E8A]">
            {aboutData.heading}
          </h2>
        </motion.div>

        {/* Content */}
        <div className="max-w-3xl space-y-6 md:space-y-8">
          {aboutData.paragraphs.map((para, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              className="text-sm md:text-base text-[#5D5D5A] leading-relaxed"
            >
              {para}
            </motion.p>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;