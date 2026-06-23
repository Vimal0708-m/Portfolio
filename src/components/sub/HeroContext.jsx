import { motion } from "framer-motion";
import React from "react";
import Typewriter from "./Typewriter";
import HeroBtn from "./HeroBtn";

const HeroContext = () => {
  return (
    <motion.div
      className="mt-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p className="text-cyan-400">Hi, I'm</p>
      <h1 className="text-5xl md:text-6xl font-bold">Bimal Kumar Murmu</h1>

      <Typewriter />

      <p className="mt-6 text-slate-400 max-w-xl">
        Passionate about web development and continuously learning modern
        technologies.
      </p>

      <HeroBtn />
    </motion.div>
  );
};

export default HeroContext;
