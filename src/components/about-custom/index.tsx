import { SanitizedEducation, SanitizedCertification } from '../../interfaces/sanitized-config';

const About = ({ educations, certifications }: { educations: SanitizedEducation[], certifications: SanitizedCertification[] }) => {
  return (
    <section id="about" className="section-wrap px-[1.5rem] md:px-[3rem] py-[2.8rem] max-w-[1200px] mx-auto">
      <div className="section-header flex items-center gap-[1rem] mb-[1.8rem]">
        <h2 className="section-title text-[clamp(1.6rem,3vw,2.4rem)] font-bold tracking-[-0.03em] leading-[1]">
          Education &amp; <em>Achievements</em>
        </h2>
        <div className="section-line flex-1 h-[1px] bg-[var(--border)] ml-auto"></div>
      </div>
      
      <div className="edu-achv-grid grid grid-cols-1 md:grid-cols-2 gap-[2.5rem]">
        {/* LEFT: Education timeline */}
        <div className="reveal">
          <div className="edu-col-title font-[var(--mono)] text-[0.62rem] text-[var(--accent)] tracking-[0.1em] uppercase mb-[1rem]">Academic Background</div>
          <div className="edu-timeline flex flex-col gap-0">
            {educations.map((edu, i) => (
              <div key={i} className={`edu-entry flex gap-[1rem] py-[1.2rem] border-b border-[var(--border)] relative ${i === 0 ? 'pt-0' : ''} ${i === educations.length - 1 ? 'border-b-0' : ''}`}>
                <div className="edu-dot-col flex flex-col items-center pt-[0.2rem] flex-shrink-0">
                  <div className="edu-dot w-[10px] h-[10px] border-2 border-[var(--accent)] rounded-full bg-[var(--bg)] flex-shrink-0"></div>
                  {i < educations.length - 1 && <div className="edu-line w-[1px] flex-1 bg-[var(--border)] mt-[4px]"></div>}
                </div>
                <div className="edu-content flex-1 pb-[0.5rem]">
                  <div className="edu-degree-name text-[0.95rem] font-bold tracking-[-0.01em] mb-[0.2rem]">{edu.degree}</div>
                  <div className="edu-inst-name font-[var(--serif)] italic text-[0.85rem] text-[var(--muted)] mb-[0.5rem]">{edu.institution}</div>
                  <div className="edu-chips flex gap-[0.5rem] flex-wrap">
                    <span className="edu-chip year font-[var(--mono)] text-[0.62rem] text-[var(--muted)] px-[0.55rem] py-[0.18rem] border border-[var(--border)] tracking-[0.05em]">{edu.from} – {edu.to}</span>
                    <span className="edu-chip gpa font-[var(--mono)] text-[0.62rem] text-[var(--accent)] px-[0.55rem] py-[0.18rem] border border-[rgba(232,255,107,0.25)] bg-[rgba(232,255,107,0.04)] tracking-[0.05em]">GPA {i === 0 ? '8.9' : '7.9'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Achievements column */}
        <div className="reveal">
          <div className="achv-col-title font-[var(--mono)] text-[0.62rem] text-[var(--accent)] tracking-[0.1em] uppercase mb-[1rem]">Achievements &amp; Recognition</div>
          <div className="achv-stack flex flex-col gap-[0.6rem]">
            {certifications.map((cert, i) => (
              <div key={i} className="achv-card reveal flex items-start gap-[0.85rem] p-[1rem] border border-[var(--border)] bg-[var(--bg)] transition-all duration-200 relative overflow-hidden group hover:border-[rgba(232,255,107,0.2)] hover:bg-[var(--surface)]">
                <div className="achv-icon-box w-[32px] h-[32px] border border-[var(--border)] flex items-center justify-center font-size-[0.9rem] flex-shrink-0 bg-[var(--surface2)]">
                  {i === 0 ? '⭐' : i === 1 ? '🏆' : i === 2 ? '🌍' : '🎓'}
                </div>
                <div className="achv-body flex-1">
                  <div className="achv-title text-[0.85rem] font-bold text-[var(--text)] mb-[0.18rem] tracking-[-0.01em]">{cert.name}</div>
                  <div className="achv-desc font-[var(--mono)] text-[0.64rem] text-[var(--muted)] leading-[1.5] letter-spacing-[0.02em]">{cert.body}</div>
                </div>
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--accent)] transform scale-y-0 transition-transform duration-300 origin-bottom group-hover:scale-y-100"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
