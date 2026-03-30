import { SanitizedExperience } from '../../interfaces/sanitized-config';

const Experience = ({ experiences }: { experiences: SanitizedExperience[] }) => {
  return (
    <section id="experience" className="section-wrap px-[1.5rem] md:px-[3rem] py-[4rem] max-w-[1200px] mx-auto">
      <div className="section-header flex items-center gap-[1rem] mb-[2.2rem]">
        <span className="section-num font-[var(--mono)] text-[0.65rem] text-[var(--accent)] tracking-[0.1em]">03</span>
        <h2 className="section-title text-[clamp(1.6rem,3vw,2.4rem)] font-bold tracking-[-0.03em] leading-[1]">
          Work <em className="font-[var(--serif)] italic text-[var(--accent)]">Experience</em>
        </h2>
        <div className="section-line flex-1 h-[1px] bg-[var(--border)] ml-auto"></div>
      </div>
      <div className="exp-list flex flex-col">
        {experiences.map((exp, i) => (
          <div 
            key={i} 
            className="exp-item reveal grid grid-cols-1 md:grid-cols-[160px,1fr] gap-[2rem] py-[2rem] border-bottom border-[var(--border)] relative group transition-all"
          >
            <div className="exp-meta">
              <div className="exp-period font-[var(--mono)] text-[0.65rem] text-[var(--muted)] tracking-[0.04em] mb-[0.5rem] leading-[1.4]">{exp.from} – {exp.to}</div>
              <span className="exp-badge font-[var(--mono)] text-[0.58rem] text-[var(--accent2)] uppercase tracking-[0.1em] px-[0.4rem] py-[0.15rem] border border-[rgba(107,255,212,0.28)] inline-block">
                {exp.to === 'Present' ? 'Full-Time' : 'Volunteer'}
              </span>
            </div>
            <div className="exp-content">
              <div className="exp-role text-[1.1rem] font-bold tracking-[-0.02em] mb-[0.2rem]">{exp.position}</div>
              <div className="exp-company font-[var(--serif)] italic text-[0.88rem] text-[var(--muted)] mb-[0.85rem]">{exp.company}</div>
              <ul className="exp-bullets list-none flex flex-col gap-[0.4rem]">
                {exp.description?.split('\n').map((bullet, j) => (
                  <li key={j} className="text-[0.83rem] text-[#aaa] leading-[1.58] pl-[1rem] relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[0.7rem] before:top-[0.06rem]">
                    {bullet.replace(/^•\s*/, '')}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute bottom-[-1px] left-0 w-0 h-[1px] bg-[var(--accent)] transition-all duration-400 group-hover:w-full"></div>
          </div>
        ))}
      </div>
      <style>{`
        .border-bottom { border-bottom: 1px solid var(--border); }
      `}</style>
    </section>
  );
};

export default Experience;
