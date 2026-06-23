import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto ">
        <div className="mb-20">
          <p className="text-cyan-400 font-medium mb-2">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Turning Curiosity into Code.
          </h2>
        </div>
        <div className="grid gap16">
          <div>
            <p className="text-lg text-slate-300 ">
              I'm
              <span className="text-white font-semibold">
                Bimal Kumar Murmu
              </span>
              ,a Computer science Student recently graduated from Vocation
              School in Japan.
            </p>
          </div>
          <div>
            <p className="mt-6 text-slate-400">
              My journey into programming started with curiosity about how
              websites and application work. since then, I've been learning
              mordern Web technologies and building projects to strengthen my
              skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
