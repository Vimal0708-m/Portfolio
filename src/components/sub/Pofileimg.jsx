import { motion } from "framer-motion";
import React from "react";
import Bimal from "../../assets/Bimal.png";

const ProfileImg = () => {
  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative w-80 h-80">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-yellow-500 to-cyan-500 animate-spin-fast p-1">
          <div className="w-full h-full rounded-full bg-slate-950"></div>
        </div>

        <img
          src={Bimal}
          alt="Bimal"
          className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default ProfileImg;
