import { SanitizedEducation, SanitizedCertification } from '../../interfaces/sanitized-config';

const About = ({ educations, certifications }: { educations: SanitizedEducation[], certifications: SanitizedCertification[] }) => {
  return (
    <section id="about" className="px-[1.5rem] md:px-[3rem] py-[6rem] max-w-[1200px] mx-auto">
      <div className="section-header flex items-baseline gap-[1.5rem] mb-[4rem]">
        <span className="section-num font-[var(--mono)] text-[0.75rem] text-[var(--accent)] tracking-[0.1em]">05</span>
        <h2 className="section-title text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.03em] leading-[1]">
          Education & <em>Achievements</em>
        </h2>
        <div className="section-line flex-1 h-[1px] bg-[var(--border)] ml-auto"></div>
      </div>
      
      <div className="edu-grid grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[var(--border)] border border-[var(--border)] mb-[3rem]">
        {educations.map((edu, i) => (
          <div key={i} className="edu-card bg-[var(--bg)] p-[2.5rem] transition-colors duration-200 hover:bg-[var(--surface)]">
            <div className="edu-degree text-[1.1rem] font-bold tracking-[-0.01em] mb-[0.5rem]">{edu.degree}</div>
            <div className="edu-inst font-[var(--serif)] italic text-[var(--muted)] text-[0.95rem] mb-[1rem]">{edu.institution}</div>
            <div className="edu-meta flex gap-[1.5rem] flex-wrap font-[var(--mono)] text-[0.72rem] text-[var(--muted)] tracking-[0.06em]">
              <span className="edu-year">{edu.from} – {edu.to}</span>
              <span className="edu-gpa">GPA <strong className="text-[var(--accent)]">8.9</strong></span>
            </div>
          </div>
        ))}
      </div>

      <div className="achv-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[1rem]">
        {certifications.map((cert, i) => (
          <div key={i} className="achv-item flex gap-[1rem] items-start p-[1.5rem] border border-[var(--border)] transition-colors duration-200 hover:border-[var(--accent)]">
            <div className="achv-icon text-[1.5rem] flex-shrink-0 mt-[0.1rem]">⭐</div>
            <div className="achv-text text-[0.88rem] text-[#aaa] leading-[1.6]">
              <strong className="text-[var(--text)] block mb-[0.2rem]">{cert.name}</strong>
              {cert.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
