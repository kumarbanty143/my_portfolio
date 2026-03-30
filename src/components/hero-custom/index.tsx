import { Profile } from '../../interfaces/profile';

const Hero = ({ profile, intro, loading }: { profile: Profile | null, intro?: string, loading: boolean }) => {
  if (loading || !profile) return null;

  return (
    <section id="home" className="min-h-0 flex flex-col md:flex-row items-center justify-between px-[1.5rem] md:px-[4.5rem] py-[5rem] md:py-[6rem] relative overflow-hidden gap-[2.5rem] md:gap-[5rem]">
      <div className="hero-grid-bg"></div>
      <div className="hero-blob"></div>

      <div className="hero-left z-[1] flex-1 max-w-full">
        <div className="hero-tag flex items-center gap-[0.5rem] font-[var(--mono)] text-[0.62rem] text-[var(--accent)] tracking-[0.12em] uppercase mb-[1.2rem] px-[0.7rem] py-[0.32rem] border border-[rgba(232,255,107,0.18)] rounded-[2px] fade-up w-fit">
          <span className="w-[5px] h-[5px] bg-[var(--accent)] rounded-full animate-blink"></span>
          Available for opportunities
        </div>
        
        <h1 className="text-[clamp(1.8rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.035em] mb-[1rem] fade-up [animation-delay:0.1s] whitespace-nowrap">
          {profile.name.split(' ')[0]} <span className="font-[var(--serif)] italic font-normal text-[var(--accent)]">{profile.name.split(' ').slice(1).join(' ')}</span>
        </h1>

        <p className="font-[var(--mono)] text-[0.82rem] md:text-[0.9rem] text-[var(--muted)] mb-[1.4rem] fade-up [animation-delay:0.15s] tracking-[0.02em]">
          Full Stack Developer &nbsp;&middot;&nbsp; <em className="text-[var(--accent2)] not-italic font-medium">1.3+ Years Experience</em>
        </p>

        <div className="hero-desc-wrap max-w-full md:max-w-[850px] fade-up [animation-delay:0.2s]">
          <p className="text-[0.85rem] md:text-[0.95rem] leading-[1.7] text-[#aaa] mb-[1.6rem] whitespace-pre-line">
            {intro || profile.bio}
          </p>
        </div>

        <div className="flex gap-[0.8rem] flex-wrap fade-up [animation-delay:0.3s] mt-[0.85rem]">
          <a href="#contact" className="btn-hero-primary">Get in Touch →</a>
          <a href="#experience" className="btn-hero-outline">View Work ↓</a>
        </div>
      </div>

      <div className="hero-right hidden md:flex items-center z-[1] shrink-0 fade-up [animation-delay:0.25s]">
        <div className="profile-frame relative w-[220px] md:w-[320px] h-[260px] md:h-[400px]">
          <div className="profile-img-wrapper w-full h-full border border-[var(--border)] overflow-hidden relative bg-[var(--surface)] shadow-2xl">
            <img 
              src={profile.avatar} 
              alt={profile.name} 
              className="w-full h-full object-cover opacity-85 transition-all duration-500"
            />
            <div className="profile-corner pc-tl absolute top-[-1px] left-[-1px] border-t-2 border-l-2 border-[var(--accent)] w-[18px] h-[18px]"></div>
            <div className="profile-corner pc-tr absolute top-[-1px] right-[-1px] border-t-2 border-r-2 border-[var(--accent)] w-[18px] h-[18px]"></div>
            <div className="profile-corner pc-bl absolute bottom-[-1px] left-[-1px] border-b-2 border-l-2 border-[var(--accent)] w-[18px] h-[18px]"></div>
            <div className="profile-corner pc-br absolute bottom-[-1px] right-[-1px] border-b-2 border-r-2 border-[var(--accent)] w-[18px] h-[18px]"></div>
          </div>
          <div className="profile-badge absolute bottom-[-0.8rem] right-[-0.8rem] bg-[var(--surface2)] border border-[var(--border)] px-[0.9rem] py-[0.7rem] font-[var(--mono)] text-[0.62rem] text-[var(--muted)] shadow-xl">
            <strong className="block text-[1.2rem] text-[var(--accent)] font-[var(--display)] font-bold leading-[1]">1.3+</strong>
            Years Experience
          </div>
        </div>
      </div>

      <style>{`
        .btn-hero-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--accent);
          color: #0a0a0a;
          padding: 0.62rem 1.4rem;
          font-family: var(--mono);
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-decoration: none;
          text-transform: uppercase;
          transition: all 0.2s ease;
        }
        .btn-hero-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(232,255,107,0.2);
        }
        .btn-hero-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: 1px solid var(--border);
          color: var(--text);
          padding: 0.62rem 1.4rem;
          font-family: var(--mono);
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          text-decoration: none;
          text-transform: uppercase;
          transition: all 0.2s ease;
        }
        .btn-hero-outline:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(232,255,107,0.02);
        }
      `}</style>
    </section>
  );
};

export default Hero;
