import { FaGithub } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

const Desktop = () => {
  return (
    <div className="hidden md:flex items-center gap-5">
      <a
        href="https://github.com/Vimal0708-m"
        target="_blank"
        rel="noreferrer"
        className="text-slate-300 hover:text-cyan-400 transition"
      >
        <FaGithub size={22} />
      </a>

      <a
        href="/resume.pdf"
        download
        className="flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition"
      >
        <HiOutlineDocumentArrowDown />
        Resume
      </a>
    </div>
  );
};

export default Desktop;