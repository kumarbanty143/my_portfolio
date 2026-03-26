import { SanitizedExternalProject } from '../../interfaces/sanitized-config';

const Projects = ({ projects }: { projects: SanitizedExternalProject[] }) => {
  return (
    <section id="projects" className="px-[1.5rem] md:px-[3rem] py-[6rem] max-w-[1200px] mx-auto">
      <div className="section-header flex items-baseline gap-[1.5rem] mb-[4rem]">
        <span className="section-num font-[var(--mono)] text-[0.75rem] text-[var(--accent)] tracking-[0.1em]">04</span>
        <h2 className="section-title text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.03em] leading-[1]">
          Featured <em className="font-[var(--serif)] italic font-normal">Projects</em>
        </h2>
        <div className="section-line flex-1 h-[1px] bg-[var(--border)] ml-auto"></div>
      </div>
      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[var(--border)] border border-[var(--border)]">
        {projects.map((project, i) => (
          <div key={i} className="project-card bg-[var(--bg)] p-[2.5rem] relative overflow-hidden transition-colors duration-300 hover:bg-[var(--surface)]">
            <div className="project-num font-[var(--mono)] text-[0.65rem] text-[var(--border)] tracking-[0.1em] mb-[1.5rem]">Project / 0{i + 1}</div>
            <div className="project-title text-[1.3rem] font-bold tracking-[-0.02em] mb-[0.5rem]">{project.title}</div>
            <div className="project-stack font-[var(--mono)] text-[0.7rem] text-[var(--accent2)] mb-[1.2rem] tracking-[0.05em]">Spring Boot · Kafka · Docker · MySQL</div>
            <div className="project-desc text-[0.88rem] text-[#999] leading-[1.65] mb-[1.5rem]">
              {project.description}
            </div>
            <ul className="project-highlights list-none flex flex-col gap-[0.4rem] mb-[1.5rem]">
              <li className="font-[var(--mono)] text-[0.72rem] text-[var(--muted)] pl-[1rem] relative before:content-['▸'] before:absolute before:left-0 before:text-[var(--accent)]">
                Key Microservices Architecture
              </li>
              <li className="font-[var(--mono)] text-[0.72rem] text-[var(--muted)] pl-[1rem] relative before:content-['▸'] before:absolute before:left-0 before:text-[var(--accent)]">
                Real-time processing with Kafka
              </li>
            </ul>
            <a href={project.link} target="_blank" rel="noreferrer" className="project-link font-[var(--mono)] text-[0.72rem] text-[var(--accent)] no-underline tracking-[0.08em] uppercase inline-flex items-center gap-[0.4rem] transition-all duration-200 hover:gap-[0.8rem]">View on GitHub →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
