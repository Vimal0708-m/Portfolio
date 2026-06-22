import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", to: "hero" },
    { label: "About", to: "about" },
    { label: "Education", to: "education" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  const socialIcons = [
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaEnvelope, href: "mailto:murmuv776@gmail.com", label: "Email" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-linear-to-t from-slate-950 to-slate-900 text-white border-t border-slate-700">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="sm:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Crafting beautiful web experiences with modern technologies
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-cyan-400">
              Quick Links
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-cyan-400">
              Services
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
              <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                Web Design
              </li>
              <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                UI/UX Design
              </li>
              <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                Responsive Design
              </li>
              <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                Front-end Development
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-cyan-400">
              Connect
            </h4>
            <div className="flex gap-2 sm:gap-3 flex-wrap">
              {socialIcons.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-linear-to-br hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all duration-300 shrink-0"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    title={social.label}
                  >
                    <Icon size={16} className="sm:scale-100 scale-90" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-slate-700 to-transparent mb-6 sm:mb-8"></div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-xs sm:text-sm"
          >
            &copy; {currentYear} All Rights Reserved | Designed & Developed with
            ❤️
          </motion.p>

          {/* Back to Top Button */}
          <motion.div variants={itemVariants}>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="flex items-center justify-center sm:justify-start gap-2 px-3 sm:px-4 py-2 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg text-white cursor-pointer hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-xs sm:text-sm font-semibold"
            >
              <span>Back to Top</span>
              <FaArrowUp size={12} className="sm:scale-100 scale-90" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="relative h-1 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-30 blur-sm"></div>
    </footer>
  );
};

export default Footer;
