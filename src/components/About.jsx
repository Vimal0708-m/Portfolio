import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-slate-900 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold uppercase tracking-[0.2em]">
            About Me
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight">
            Turning Curiosity into Code.
          </h2>
        </div>

        <div className="grid gap-12 items-start">
          <div>
            <p className="text-lg text-slate-300 leading-8">
              I'm{" "}
              <span className="text-cyan-400 font-semibold">
                Bimal Kumar Murmu
              </span>
              , a vocational student and recent graduate from{" "}
              <span className="text-cyan-400 font-semibold">
                Chiba College of Information and Accounting
              </span>
              . I am passionate about web development and enjoy building modern,
              responsive, and user-friendly web applications that provide a
              great user experience.
            </p>
          </div>

          <div>
            <p className="text-lg text-slate-400 leading-8">
              My journey into programming began with a curiosity about how
              websites and applications work. Since then, I have been learning
              modern web technologies such as{" "}
              <span className="text-cyan-400 font-semibold">
                React, JavaScript, Tailwind CSS, and Laravel
              </span>{" "}
              while building real-world projects to strengthen my skills. I
              enjoy solving problems, exploring new technologies, and
              continuously improving as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
