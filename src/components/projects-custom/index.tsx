import { SanitizedExternalProject } from '../../interfaces/sanitized-config';

const Projects = ({ projects }: { projects: SanitizedExternalProject[] }) => {
  return (
    <section id="projects" className="section-wrap px-[1.5rem] md:px-[3rem] py-[4rem] max-w-[1200px] mx-auto">
      <div className="section-header flex items-center gap-[1rem] mb-[2.2rem]">
        <span className="section-num font-[var(--mono)] text-[0.65rem] text-[var(--accent)] tracking-[0.1em]">04</span>
        <h2 className="section-title text-[clamp(1.6rem,3vw,2.4rem)] font-bold tracking-[-0.03em] leading-[1]">
          Featured <em className="font-[var(--serif)] italic">Projects</em>
        </h2>
        <div className="section-line flex-1 h-[1px] bg-[var(--border)] ml-auto"></div>
      </div>
      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[var(--border)] border border-[var(--border)]">
        {projects.map((project, i) => (
          <div 
            key={i} 
            className="project-card reveal bg-[var(--bg)] p-[1.8rem] relative overflow-hidden transition-colors duration-250 hover:bg-[var(--surface)]"
          >
            <div className="project-num font-[var(--mono)] text-[0.58rem] text-[#2a2a2a] tracking-[0.1em] mb-[1rem]">Project / 0{i + 1}</div>
            <div className="project-title text-[1.05rem] font-bold tracking-[-0.02em] mb-[0.3rem]">{project.title}</div>
            <div className="project-stack font-[var(--mono)] text-[0.64rem] text-[var(--accent2)] mb-[0.8rem] tracking-[0.04em]">
              {i === 0 ? 'Spring Boot · Kafka · Docker · MySQL' : i === 1 ? 'React.js · TypeScript · Node.js' : 'Node.js · SQL · OpenAI · AWS S3'}
            </div>
            <div className="project-desc text-[0.82rem] text-[#999] leading-[1.6] mb-[0.9rem]">
              {project.description}
            </div>
            <ul className="project-highlights list-none flex flex-col gap-[0.28rem] mb-[1.1rem]">
              <li className="font-[var(--mono)] text-[0.66rem] text-[var(--muted)] pl-[0.85rem] relative before:content-['▸'] before:absolute before:left-0 before:text-[var(--accent)]">
                {i === 0 ? 'Async communication via Apache Kafka' : i === 1 ? 'Alumni registration, login & profile creation' : 'Automated data pipeline for report generation'}
              </li>
              <li className="font-[var(--mono)] text-[0.66rem] text-[var(--muted)] pl-[0.85rem] relative before:content-['▸'] before:absolute before:left-0 before:text-[var(--accent)]">
                {i === 0 ? 'Saga Pattern for reliable transactions' : i === 1 ? 'Searchable directory with filters' : '60% SQL performance gain via indexing'}
              </li>
            </ul>
            <a href={project.link} target="_blank" rel="noreferrer" className="project-link font-[var(--mono)] text-[0.66rem] text-[var(--accent)] no-underline tracking-[0.08em] uppercase inline-flex items-center gap-[0.3rem] transition-all duration-200 hover:gap-[0.6rem]">
              {project.title.includes('Alumni') ? 'Visit Live Site →' : project.title.includes('EOD') ? 'Learn More →' : 'View on GitHub →'}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
