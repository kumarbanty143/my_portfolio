const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] flex justify-between items-center px-[1.5rem] md:px-[3rem] py-[0.9rem] bg-[rgba(10,10,10,0.88)] backdrop-blur-[14px] border-b border-[var(--border)]">
      <a href="#home" className="nav-logo flex items-center no-underline font-[var(--mono)] text-[1rem] font-bold tracking-[-0.01em]">
        <span className="bracket text-[var(--accent)]">&lt;</span>
        <span className="name text-[var(--text)]">hkp</span>
        <span className="bracket text-[var(--accent)]">/&gt;</span>
      </a>
      <ul className="hidden md:flex gap-[2rem] list-none">
        <li><a href="#skills" className="nav-link-custom">Skills</a></li>
        <li><a href="#experience" className="nav-link-custom">Experience</a></li>
        <li><a href="#projects" className="nav-link-custom">Projects</a></li>
        <li><a href="#about" className="nav-link-custom">Education</a></li>
        <li><a href="#contact-wrap" className="nav-link-custom">Contact</a></li>
      </ul>
      <style>{`
        .nav-link-custom {
          font-family: var(--mono);
          font-size: 0.72rem;
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
