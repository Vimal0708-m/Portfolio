import React from "react";

const HeroBtn = () => {
  return (
    <div className="flex gap-4 mt-8">
      <a
        href="#projects"
        className="px-6 py-3 bg-slate-950 rounded-full font-semibold"
      >
        View Projects
      </a>

      <a href="#contact" className="px-6 py-3 bg-cyan-500 rounded-full">
        Contact Me
      </a>
    </div>
  );
};

export default HeroBtn;
