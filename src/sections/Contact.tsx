import { motion } from "framer-motion";
import { contactData } from "../data/socialLinks";
import {
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiBriefcase,
} from "react-icons/fi";

const getIcon = (label: string) => {
  switch (label) {
    case "Phone":
      return <FiPhone size={18} />;
    case "LinkedIn":
      return <FiLinkedin size={18} />;
    case "GitHub":
      return <FiGithub size={18} />;
    case "Naukri":
      return <FiBriefcase size={18} />;
    default:
      return null;
  }
};

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-card text-primary dark:bg-dark dark:text-[#E6EAF2] py-20 md:py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-[#5D5D5A] dark:text-[#9CA3AF] mb-2">
            {contactData.subheading}
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold text-cyan dark:text-teal">
            {contactData.heading}
          </h2>
        </motion.div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-10 mb-16">
          {contactData.links.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3"
              whileHover={{ y: -3 }}
            >
              {/* Icon */}
              <div className="p-2 rounded-full bg-sand dark:bg-white/5 text-[#023E8A] dark:text-[#48CAE4] border border-transparent dark:border-white/10 backdrop-blur-md group-hover:bg-[#48CAE4] group-hover:text-[#0A111F] transition">
                {getIcon(link.label)}
              </div>

              {/* Text */}
              <div>
                <span className="text-xs text-[#5D5D5A] dark:text-[#9CA3AF] block">
                  {link.label}
                </span>

                <span className="text-sm md:text-base font-medium relative text-[#0A111F] dark:text-[#E6EAF2]">
                  {link.value}

                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#48CAE4] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href={contactData.resume.href}
          download
          className="relative inline-flex items-center gap-2 px-8 py-3 border border-[#0A111F] dark:border-white/10 text-[#0A111F] dark:text-[#E6EAF2] overflow-hidden group rounded-md backdrop-blur-md bg-white/40 dark:bg-white/5"
          whileHover={{ scale: 1.04 }}
        >
          {/* Fill */}
          <span className="absolute inset-0 bg-[#48CAE4] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

          {/* Icon */}
          <span className="relative z-10">
            <FiBriefcase size={18} />
          </span>

          {/* Text */}
          <span className="relative z-10 font-medium group-hover:text-[#0A111F]">
            {contactData.resume.label}
          </span>
        </motion.a>

      </div>
    </section>
  );
};

export default Contact;