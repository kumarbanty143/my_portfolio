const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] flex justify-between items-center px-[1.5rem] md:px-[3rem] py-[0.9rem] bg-[rgba(10,10,10,0.88)] backdrop-blur-[14px] border-b border-[var(--border)]">
      <a href="#home" className="nav-logo flex items-center gap-0 no-underline">
        <div className="nav-logo-mark w-[38px] h-[38px] bg-[var(--accent)] flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[26px] h-[18px]">
            {/* H */}
            <rect x="0" y="0" width="2" height="13" fill="#0a0a0a"/>
            <rect x="0" y="5.5" width="5.2" height="1.8" fill="#0a0a0a"/>
            <rect x="3.2" y="0" width="2" height="13" fill="#0a0a0a"/>
            {/* K */}
            <rect x="7.5" y="0" width="2" height="13" fill="#0a0a0a"/>
            <polygon points="9.5,6.5 14.5,0 17,0 11.5,6.8 17,13 14.5,13" fill="#0a0a0a"/>
            {/* P */}
            <rect x="19.5" y="0" width="2" height="13" fill="#0a0a0a"/>
            <path d="M21.5 0 H24.5 Q26 0 26 3.2 Q26 6.4 24.5 6.4 H21.5 Z" fill="#0a0a0a"/>
          </svg>
        </div>
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
