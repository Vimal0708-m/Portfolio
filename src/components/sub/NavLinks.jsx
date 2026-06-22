const NavLinks = ({ links, onClick }) => {
  return (
    <>
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            onClick={onClick}
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            {link.name}
          </a>
        </li>
      ))}
    </>
  );
};

export default NavLinks;