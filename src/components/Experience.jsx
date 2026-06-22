import { motion } from "framer-motion";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      company: "Web Development Internship",
      position: "Frontend Developer",
      duration: "2025 - Present",
      location: "Japan",
      description:
        "Building responsive web applications using React and Tailwind CSS. Contributing to UI/UX improvements and collaborating with design team.",
      skills: ["React", "Tailwind CSS", "JavaScript", "UI/UX"],
      type: "Internship",
    },
    {
      company: "Freelance Projects",
      position: "Web Designer & Developer",
      duration: "2024 - 2025",
      location: "Remote",
      description:
        "Designed and developed custom websites for clients. Focused on responsive design, performance optimization, and user experience.",
      skills: ["React", "Tailwind CSS", "Figma", "HTML/CSS"],
      type: "Freelance",
    },
    {
      company: "Educational Projects",
      position: "Full Stack Developer",
      duration: "2023 - 2024",
      location: "Online",
      description:
        "Completed multiple web development projects as part of vocational training. Built projects using modern web technologies and best practices.",
      skills: ["React", "Laravel", "Database Design", "Responsive Design"],
      type: "Education",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Gradient Blobs */}
      <div className="absolute top-0 right-5 sm:right-10 w-40 sm:w-72 h-40 sm:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 right-20 w-40 sm:w-72 h-40 sm:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            My professional journey and accomplishments
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="space-y-6 sm:space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="hidden md:block absolute left-6 top-20 w-0.5 h-24 bg-linear-to-b from-cyan-500 to-transparent"></div>
              )}

              <div className="flex gap-4 sm:gap-6">
                {/* Timeline dot */}
                <motion.div
                  className="relative shrink-0 mt-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/50">
                    <FaBriefcase size={18} className="sm:scale-100 scale-90" />
                  </div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className="flex-1 bg-linear-to-br from-slate-800 to-slate-700 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 group hover:shadow-cyan-500/20 hover:shadow-lg"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.position}
                      </h3>
                      <p className="text-sm sm:text-base text-cyan-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs sm:text-sm rounded-full border border-cyan-500/50">
                      {exp.type}
                    </span>
                  </div>

                  {/* Duration and Location */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-4 text-xs sm:text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-cyan-400" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-cyan-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-slate-600 text-cyan-300 text-xs rounded-full border border-cyan-400/30 hover:border-cyan-400 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-300 mb-4 text-sm sm:text-base">
            Want to collaborate or learn more about my work?
          </p>
          <a
            href="#contact"
            className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-sm sm:text-base"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
