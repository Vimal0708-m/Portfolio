import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "./sub/Logo";
import NavLinks from "./sub/NavLinks";
import Desktop from "./sub/Desktop";
import Mobilemenu from "./sub/Mobilemenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="backdrop-blur-xl bg-slate-950/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-15 flex items-center justify-between">
            <Logo />

            <ul className="hidden md:flex items-center gap-8">
              <NavLinks links={links} />
            </ul>

            <Desktop />

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        <Mobilemenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          links={links}
        />
      </nav>
    </header>
  );
};

export default Navbar;
