import { SanitizedExperience } from '../../interfaces/sanitized-config';

const Experience = ({ experiences }: { experiences: SanitizedExperience[] }) => {
  return (
    <section id="experience" className="px-[1.5rem] md:px-[3rem] py-[6rem] max-w-[1200px] mx-auto">
      <div className="section-header flex items-baseline gap-[1.5rem] mb-[4rem]">
        <span className="section-num font-[var(--mono)] text-[0.75rem] text-[var(--accent)] tracking-[0.1em]">03</span>
        <h2 className="section-title text-[clamp(2.5rem,5vw,5rem)] font-extrabold tracking-[-0.04em] leading-[0.95]">
          Work <em className="font-[var(--serif)] italic font-normal text-[var(--accent)]">Experience</em>
        </h2>
        <div className="section-line flex-1 h-[1px] bg-[var(--border)] ml-auto"></div>
      </div>
      <div className="exp-list flex flex-col gap-0">
        {experiences.map((exp, i) => (
          <div key={i} className="exp-item grid grid-cols-1 md:grid-cols-[200px,1fr] gap-[3rem] py-[3rem] border-bottom border-[var(--border)] relative group hover:border-b hover:border-[var(--accent)] transition-all duration-400">
            <div className="exp-meta pt-[0.2rem]">
              <div className="exp-period font-[var(--mono)] text-[0.72rem] text-[var(--muted)] tracking-[0.05em] mb-[0.5rem]">{exp.from} – {exp.to}</div>
              <br />
              <span className="exp-type font-[var(--mono)] text-[0.65rem] text-[var(--accent2)] uppercase tracking-[0.1em] px-[0.5rem] py-[0.2rem] border border-[rgba(107,255,212,0.3)]">Full-Time</span>
            </div>
            <div className="exp-content">
              <div className="exp-role text-[1.3rem] font-bold tracking-[-0.02em] mb-[0.3rem]">{exp.position}</div>
              <div className="exp-company font-[var(--serif)] italic text-[1rem] text-[var(--muted)] mb-[1.2rem]">{exp.company}</div>
              <ul className="exp-bullets list-none flex flex-col gap-[0.6rem]">
                {exp.description?.split('\n').map((bullet, j) => (
                  <li key={j} className="text-[0.9rem] text-[#aaa] leading-[1.6] pl-[1.2rem] relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[0.8rem]">
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
