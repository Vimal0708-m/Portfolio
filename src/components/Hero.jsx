import { motion } from "framer-motion";
import React from "react";
import HeroContext from "./sub/HeroContext";
import ProfileImg from "./sub/Pofileimg";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="min-h-screen bg-slate-950 text-white flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <HeroContext />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ProfileImg />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
