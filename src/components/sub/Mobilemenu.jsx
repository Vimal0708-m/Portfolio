import NavLinks from "./NavLinks";
import { FaGithub } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

const MobileMenu = ({ menuOpen, setMenuOpen, links }) => {
  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ${
        menuOpen ? "max-h-[500px]" : "max-h-0"
      }`}
    >
      <div className="bg-slate-950 px-6 py-6 border-t border-white/10">
        <ul className="flex flex-col gap-6">
          <NavLinks
            links={links}
            onClick={() => setMenuOpen(false)}
          />
        </ul>

        <div className="flex gap-5 mt-8">
          <a
            href="https://github.com/Vimal0708-m"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-cyan-400"
          >
            <FaGithub size={22} />
          </a>
        </div>

        <a
          href="/resume.pdf"
          download
          className="mt-6 flex justify-center items-center gap-2 bg-cyan-500 text-slate-950 font-semibold py-3 rounded-full"
        >
          <HiOutlineDocumentArrowDown />
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;