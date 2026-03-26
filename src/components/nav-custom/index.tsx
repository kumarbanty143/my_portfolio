const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-[3rem] py-[1.5rem] bg-[rgba(10,10,10,0.85)] backdrop-blur-[12px] border-b border-[var(--border)]">
      <a href="#home" className="font-[var(--mono)] text-[0.85rem] text-[var(--accent)] tracking-[0.1em] no-underline uppercase">HKP.DEV</a>
      <ul className="flex gap-[2.5rem] list-none hidden md:flex">
        <li><a href="#about" className="nav-link-custom">About</a></li>
        <li><a href="#skills" className="nav-link-custom">Skills</a></li>
        <li><a href="#experience" className="nav-link-custom">Experience</a></li>
        <li><a href="#projects" className="nav-link-custom">Projects</a></li>
        <li><a href="#contact" className="nav-link-custom">Contact</a></li>
      </ul>
      <style>{`
        .nav-link-custom {
          font-family: var(--mono);
          font-size: 0.8rem;
          color: var(--muted);
          text-decoration: none;
          letter-spacing: 0.08em;
          transition: color 0.2s;
          text-transform: uppercase;
        }
        .nav-link-custom:hover { color: var(--accent); }
      `}</style>
    </nav>
  );
};

export default Nav;
