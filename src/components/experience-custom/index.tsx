import { SanitizedExperience } from '../../interfaces/sanitized-config';

const Experience = ({ experiences }: { experiences: SanitizedExperience[] }) => {
  return (
    <section id="experience" className="section-wrap px-[1.5rem] md:px-[3rem] py-[2.8rem] max-w-[1200px] mx-auto">
      <div className="section-header flex items-center gap-[1rem] mb-[1.8rem]">
        <h2 className="section-title text-[clamp(1.6rem,3vw,2.4rem)] font-bold tracking-[-0.03em] leading-[1]">
          Work <em className="font-[var(--serif)] italic text-[var(--accent)]">Experience</em>
        </h2>
        <div className="section-line flex-1 h-[1px] bg-[var(--border)] ml-auto"></div>
      </div>
      <div className="exp-list flex flex-col gap-[3rem]">
        {experiences.map((exp, i) => (
          <div 
            key={i} 
            className="exp-item reveal flex flex-col group transition-all"
          >
            {/* Header: Role/Company on Left, Date/Badge on Right */}
            <div className="exp-header flex flex-col md:flex-row justify-between items-start md:items-center gap-[1rem] mb-[1.2rem] border-b border-[var(--border)] pb-[1.2rem] relative">
              <div className="exp-role-info">
                <div className="exp-role text-[1.25rem] font-bold tracking-[-0.02em] mb-[0.2rem] text-[var(--text)]">{exp.position}</div>
                <div className="exp-company font-[var(--serif)] italic text-[0.95rem] text-[var(--muted)]">{exp.company}</div>
              </div>
              <div className="exp-meta flex flex-row md:flex-col items-center md:items-end gap-[0.8rem] md:gap-[0.4rem]">
                <div className="exp-period font-[var(--mono)] text-[0.72rem] text-[var(--muted)] tracking-[0.04em] whitespace-nowrap">{exp.from} – {exp.to}</div>
                <span className="exp-badge font-[var(--mono)] text-[0.6rem] text-[var(--accent2)] uppercase tracking-[0.1em] px-[0.5rem] py-[0.18rem] border border-[rgba(107,255,212,0.25)] inline-block">
                  {exp.to === 'Present' ? 'Full-Time' : 'Volunteer'}
                </span>
              </div>
              <div className="absolute bottom-[-1px] left-0 w-0 h-[1px] bg-[var(--accent)] transition-all duration-400 group-hover:w-full"></div>
            </div>

            {/* Content: Full width bullets */}
            <div className="exp-content">
              <ul className="exp-bullets list-none flex flex-col gap-[0.55rem]">
                {exp.description?.split('\n').map((bullet, j) => (
                  <li key={j} className="text-[0.88rem] text-[#aaa] leading-[1.65] pl-[1.2rem] relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[0.7rem] before:top-[0.2rem] max-w-full">
                    {bullet.replace(/^•\s*/, '')}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
