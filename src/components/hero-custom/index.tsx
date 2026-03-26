import { Profile } from '../../interfaces/profile';

const Hero = ({ profile, intro, loading }: { profile: Profile | null, intro?: string, loading: boolean }) => {
  if (loading || !profile) return null;

  return (
    <section id="home" className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-[1.5rem] md:px-[3rem] py-[8rem] md:py-[8rem] relative overflow-hidden">
      <div className="hero-grid-bg"></div>
      <div className="hero-blob"></div>

      <div className="hero-left z-[1]">
        <div className="hero-tag flex items-center gap-[0.5rem] font-[var(--mono)] text-[0.75rem] text-[var(--accent)] tracking-[0.12em] uppercase mb-[1.5rem] px-[0.8rem] py-[0.4rem] border border-[rgba(232,255,107,0.3)] rounded-[2px] fade-up">
          <span className="w-[6px] h-[6px] bg-[var(--accent)] rounded-full animate-blink"></span>
          Available for opportunities
        </div>
        <h1 className="text-[clamp(3.5rem,7vw,7rem)] font-extrabold leading-[0.95] tracking-[-0.03em] mb-[1rem] fade-up [animation-delay:0.1s]">
          {profile.name.split(' ')[0]}<br/>
          <span className="font-[var(--serif)] italic font-normal text-[var(--accent)]">
            {profile.name.split(' ').slice(1).join(' ')}
          </span>
        </h1>
        <p className="font-[var(--mono)] text-[1rem] text-[var(--muted)] mb-[2rem] fade-up [animation-delay:0.2s]">
          Full Stack Developer · <em className="text-[var(--accent2)] not-italic">1.3+ Years Experience</em>
        </p>
        <p className="text-[1rem] leading-[1.7] text-[#aaa] max-w-[500px] mb-[2.5rem] fade-up [animation-delay:0.3s] whitespace-pre-line">
          {intro || profile.bio}
        </p>
        <div className="flex gap-[1rem] flex-wrap fade-up [animation-delay:0.4s]">
          <a href="#contact" className="btn-custom-primary">Get in Touch →</a>
          <a href="#experience" className="btn-custom-outline">View Work ↓</a>
        </div>
      </div>

      <div className="hero-right flex justify-center items-center z-[1] fade-up [animation-delay:0.2s] mt-12 md:mt-0">
        <div className="profile-frame relative w-[240px] md:w-[340px] h-[280px] md:h-[400px]">
          <div className="profile-img-wrapper w-full h-full border border-[var(--border)] overflow-hidden relative bg-[var(--surface)]">
            <img 
              src={profile.avatar} 
              alt={profile.name} 
              className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="pc-tl profile-corner absolute top-[-1px] left-[-1px] border-t-2 border-l-2 border-[var(--accent)] w-[20px] h-[20px]"></div>
            <div className="pc-tr profile-corner absolute top-[-1px] right-[-1px] border-t-2 border-r-2 border-[var(--accent)] w-[20px] h-[20px]"></div>
            <div className="pc-bl profile-corner absolute bottom-[-1px] left-[-1px] border-b-2 border-l-2 border-[var(--accent)] w-[20px] h-[20px]"></div>
            <div className="pc-br profile-corner absolute bottom-[-1px] right-[-1px] border-b-2 border-r-2 border-[var(--accent)] w-[20px] h-[20px]"></div>
          </div>
          <div className="profile-badge absolute bottom-[-1rem] right-[-1rem] bg-[var(--surface2)] border border-[var(--border)] px-[1rem] py-[0.8rem] font-[var(--mono)] text-[0.7rem] text-[var(--muted)]">
            <strong className="block text-[1.3rem] text-[var(--accent)] font-[var(--display)] font-bold leading-[1]">1.3+</strong>
            Years of Experience
          </div>
        </div>
      </div>

      <style>{`
        .btn-custom-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--accent);
          color: #0a0a0a;
          padding: 0.85rem 1.8rem;
          font-family: var(--mono);
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-decoration: none;
          text-transform: uppercase;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-custom-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(232,255,107,0.3);
        }
        .btn-custom-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: 1px solid var(--border);
          color: var(--text);
          padding: 0.85rem 1.8rem;
          font-family: var(--mono);
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-decoration: none;
          text-transform: uppercase;
          transition: border-color 0.2s, color 0.2s;
        }
        .btn-custom-outline:hover { border-color: var(--accent); color: var(--accent); }
      `}</style>
    </section>
  );
};

export default Hero;
