import { useState } from 'react';
import { Profile } from '../../interfaces/profile';

const Nav = ({ profile }: { profile: Profile | null }) => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[200] flex justify-between items-center px-[1.5rem] md:px-[3rem] py-[0.9rem] bg-[rgba(10,10,10,0.85)] backdrop-blur-[12px] border-b border-[rgba(255,255,255,0.02)] transition-all duration-300">
        <a href="#home" className="nav-logo flex items-center no-underline font-[var(--mono)] text-[1rem] font-bold tracking-[-0.01em]">
          <span className="bracket text-[var(--accent)]">&lt;</span>
          <span className="name text-[var(--text)]">hkp</span>
          <span className="bracket text-[var(--accent)]">/&gt;</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-[2rem] list-none">
          <li><a href="#skills" className="nav-link-custom">Skills</a></li>
          <li><a href="#experience" className="nav-link-custom">Experience</a></li>
          <li><a href="#projects" className="nav-link-custom">Projects</a></li>
          <li><a href="#about" className="nav-link-custom">Education</a></li>
          <li><a href="#contact-wrap" className="nav-link-custom">Contact</a></li>
        </ul>

        {/* Mobile Gallery Trigger */}
        <div className="md:hidden">
          <button 
            onClick={() => setShowGallery(true)}
            className="flex items-center gap-[0.4rem] font-[var(--serif)] italic text-[0.88rem] text-[var(--accent)] bg-none border-none outline-none cursor-pointer group"
          >
            <span>Wanna see me?</span>
            <span className="text-[0.6rem] transition-transform group-hover:scale-125">✨</span>
          </button>
        </div>

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

      {/* Gallery Overlay */}
      {showGallery && (
        <div 
          className="fixed inset-0 z-[999] bg-[rgba(0,0,0,0.92)] backdrop-blur-[10px] flex flex-col items-center justify-center p-[2rem] animate-fade-in"
          onClick={() => setShowGallery(false)}
        >
          <button 
            className="absolute top-[1.5rem] right-[1.5rem] text-[var(--text)] font-[var(--mono)] text-[0.8rem] bg-none border border-[var(--border)] px-[0.7rem] py-[0.3rem] opacity-60 hover:opacity-100"
            onClick={() => setShowGallery(false)}
          >
            CLOSE [×]
          </button>

          <div 
            className="relative w-full max-w-[400px] aspect-[3/4] border border-[rgba(255,255,255,0.05)] shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
             <img 
               src={profile?.avatar} 
               alt="Himanshu" 
               className="w-full h-full object-cover grayscale-[20%] sepia-[10%]"
             />
             <div className="absolute bottom-0 left-0 right-0 p-[1.5rem] bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent">
                <div className="text-[1.2rem] font-bold text-[var(--accent)] font-[var(--serif)] italic">Himanshu</div>
                <div className="text-[var(--mono)] text-[0.65rem] text-[var(--muted)] tracking-[0.1em] uppercase">Full Stack Developer</div>
             </div>
          </div>
          
          <p className="mt-[2rem] font-[var(--mono)] text-[0.6rem] text-[var(--muted)] tracking-[0.05em] uppercase text-center opacity-40">
            Swipe left/right to view more (Placeholder)
          </p>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease forwards;
        }
      `}</style>
    </>
  );
};

export default Nav;
