import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaLightbulb } from "react-icons/fa";

const Edu = () => {
  const education = [
    {
      year: "2024 - 2026",
      degree: "WEB DESIGNING",
      school: "千葉情報経理専門学校",
      icon: FaCode,
    },
    {
      year: "2022 - 2024",
      degree: "JAPANESE LANGUAGE SCHOOL",
      school: "四日市日本語",
      icon: FaLightbulb,
    },
    {
      year: "2018 - 2020",
      degree: "HIGH SCHOOL",
      school: "KANTIPUR SECONDARY SCHOOL",
      icon: FaGraduationCap,
    },
    {
      year: "2016 - 2017",
      degree: "SECONDARY SCHOOL",
      school: "KANTIPUR SECONDARY SCHOOL",
      icon: FaGraduationCap,
    },
  ];

  const skills = [
    { name: "React JS", level: 70, color: "from-blue-500 to-cyan-500" },
    { name: "Tailwind CSS", level: 60, color: "from-cyan-500 to-teal-500" },
    {
      name: "Responsive Design",
      level: 80,
      color: "from-purple-500 to-pink-500",
    },
    { name: "UX/UI", level: 80, color: "from-pink-500 to-rose-500" },
    { name: "JavaScript", level: 55, color: "from-yellow-500 to-orange-500" },
    { name: "Laravel Framework", level: 40, color: "from-red-500 to-pink-500" },
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Gradient Blobs */}
      <div className="absolute top-0 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-40 sm:w-72 h-40 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-5 sm:left-20 w-40 sm:w-72 h-40 sm:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Education & Skills
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            Learning & Growing Every Day
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="md:relative max-w-4xl mx-auto mb-12 sm:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-linear-to-b from-cyan-500 via-blue-500 to-purple-500 -translate-x-1/2"
            style={{ transformOrigin: "top" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {education.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center mb-8 sm:mb-12 gap-4 md:gap-0 ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
              >
                {/* Card */}
                <div className="w-full md:w-5/12 px-0 sm:px-4">
                  <motion.div
                    className="bg-linear-to-br from-slate-800 to-slate-700 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 group hover:shadow-cyan-500/20"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-xl sm:text-2xl text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon />
                      </div>
                      <p className="text-cyan-400 font-semibold text-sm sm:text-base">
                        {item.year}
                      </p>
                    </div>

                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mt-2 text-white">
                      {item.degree}
                    </h2>

                    <p className="text-gray-300 mt-2 text-sm sm:text-base">
                      {item.school}
                    </p>
                  </motion.div>
                </div>

                {/* Dot */}
                <motion.div
                  className="hidden md:block absolute left-1/2 w-6 h-6 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-slate-900 -translate-x-1/2 shadow-lg shadow-cyan-500/50"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  whileHover={{ scale: 1.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mt-16 sm:mt-24 md:mt-32 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto mb-8 sm:mb-12"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="group px-2 sm:px-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
                  <span className="font-semibold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </span>
                  <motion.span
                    className="text-cyan-400 font-bold text-sm sm:text-base"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.05 + 0.2 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-2 sm:h-3 overflow-hidden border border-slate-600 group-hover:border-cyan-400 transition-colors">
                  <motion.div
                    className={`h-full rounded-full bg-linear-to-r ${skill.color} shadow-lg`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Edu;
