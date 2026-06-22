import ecommerce from "../assets/Screenshot 2026-06-07 044624.png"
import sukuti from  "../assets/Screenshot 2026-06-07 042607.png";
import netcatty from "../assets/Screenshot 2026-06-07 042222.png";
import nanatsu from  "../assets/Screenshot 2026-06-07 042309.png";

import nbk from "../assets/Screenshot 2026-06-07 042408.png";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Site",
      desc: "Shopping platform for clothes.",
      tech: ["React", "Tailwind CSS"],
      image:ecommerce,
      github: "",
      demo: "",
    },
    {
      id: 2,
      title: "SUKUTI",
      desc: "Platform to buy authentic Nepali meat pickles.",
      tech: ["Laravel PHP", "Tailwind CSS"],
      image:sukuti,
      github: "",
      demo: "",
    },
    {
      id: 3,
      title: "Netcatty Clone",
      desc: "A clone of the Netcatty website.",
      tech: ["React", "Tailwind CSS"],
      image:netcatty,
      github: "",
      demo: "",
    },
    {
      id: 4,
      title: "Nanatsu Sports Center",
      desc: "UI/UX design for Nanatsu Sports Center.",
      tech: ["Figma"],
      image:nanatsu,
      github:
        "https://www.figma.com/design/nPlU4vPTXRW7Lt3C8PcLM0/prototype_we033?node-id=0-1&p=f&t=9QbyCCYkF4yIDt3T-0",
      demo:
        "https://www.figma.com/design/nPlU4vPTXRW7Lt3C8PcLM0/prototype_we033?node-id=0-1&p=f&t=9QbyCCYkF4yIDt3T-0",
    },
    {
      id: 5,
      title: "NBK",
      desc: "Authentic Nepali food branding and UI design.",
      tech: ["Figma"],
      image:nbk,
      github:
        "https://www.figma.com/design/locm6qTzlLsHTt5I2BvFFs/24we033-%E3%83%93%E3%83%9E%E3%83%AB?node-id=5-292&t=iqpgIm8UqsYzB71c-0",
      demo:
        "https://www.figma.com/design/locm6qTzlLsHTt5I2BvFFs/24we033-%E3%83%93%E3%83%9E%E3%83%AB?node-id=5-292&t=iqpgIm8UqsYzB71c-0",
    },
  ];

  return (
    <section id="projects" className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Placeholder Image */}
              <div className="h-52 bg-slate-800 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-52 w-full object-cover object-top"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-400 mb-4">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

               {/*} <div className="flex gap-3">
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-slate-800 hover:bg-slate-700 py-2 rounded-lg transition"
                    >
                      GitHub
                    </a>
                  )}

                  {item.demo && (
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-cyan-500 hover:bg-cyan-600 py-2 rounded-lg transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>*/}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;