// src/sections/Skills.tsx

import { motion } from "framer-motion";
import { skillsData } from "../data/skills";

const SkillBadge = ({ skill, index }: any) => {
  const Icon = skill.icon;

  return (
    <motion.div
      className="flex items-center gap-2 px-3 py-2 bg-card rounded-xl border border-white/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{ y: [0, -3, 0] }}
      transition={{
        delay: index * 0.05,
        duration: (index % 2),
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        y: -6,
        scale: 1.05,
      }}
    >
      <Icon className="text-sm text-[#023E8A]" />
      <span className="text-xs text-[#5D5D5A]">{skill.name}</span>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-sand text-primary py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm text-[#5D5D5A] mb-2">Skills</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#023E8A]">
            A Focus on Clarity.
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT — Frontend (BIG BLOCK) */}
          <div>
            <h3 className="text-sm text-[#5D5D5A] mb-4">
              Core Frontend
            </h3>

            <div className="flex flex-wrap gap-3">
              {skillsData.frontend.map((skill, i) => (
                <SkillBadge key={i} skill={skill} index={i} />
              ))}
            </div>
          </div>

          {/* RIGHT — Languages */}
          <div>
            <h3 className="text-sm text-[#5D5D5A] mb-4">
              Languages
            </h3>

            <div className="flex flex-wrap gap-3">
              {skillsData.languages.map((skill, i) => (
                <SkillBadge key={i} skill={skill} index={i} />
              ))}
            </div>
          </div>

          {/* FULL WIDTH — Tools */}
          <div className="md:col-span-2">
            <h3 className="text-sm text-[#5D5D5A] mb-4">
              Tools & Workflow
            </h3>

            <div className="flex flex-wrap gap-3">
              {skillsData.tools.map((skill, i) => (
                <SkillBadge key={i} skill={skill} index={i} />
              ))}
            </div>
          </div>

          {/* SMALL BLOCK — Libraries */}
          <div>
            <h3 className="text-sm text-[#5D5D5A] mb-4">
              Libraries
            </h3>

            <div className="flex flex-wrap gap-3">
              {skillsData.libraries.map((skill, i) => (
                <SkillBadge key={i} skill={skill} index={i} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;