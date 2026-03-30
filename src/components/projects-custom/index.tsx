import { SanitizedExternalProject } from '../../interfaces/sanitized-config';

const Projects = ({ projects: _projects }: { projects: SanitizedExternalProject[] }) => {
  const featuredProject = {
    title: 'Scalable E-Commerce Microservices',
    stack: 'Java · Spring Boot · Kafka · Docker · MySQL',
    desc: 'High-availability distributed backend consisting of User, Order, Product, Inventory, and Payment services using a microservices architecture.',
    highlights: [
      'Built a distributed system using Spring Boot to handle orders, payments, and notifications.',
      'Used Apache Kafka for fast, asynchronous communication between services.',
      'Implemented the Saga Pattern to ensure data consistency and handle rollbacks.',
      'Integrated Zipkin for distributed tracing to monitor service performance.'
    ],
    link: 'https://github.com/kumarbanty143/nexus-cloud-commerce'
  };

  return (
    <section id="projects" className="section-wrap px-[1.5rem] md:px-[3rem] py-[2.8rem] max-w-[1200px] mx-auto">
      <div className="section-header flex items-center gap-[1rem] mb-[1.8rem]">
        <h2 className="section-title text-[clamp(1.6rem,3vw,2.4rem)] font-bold tracking-[-0.03em] leading-[1]">
          Featured <em className="font-[var(--serif)] italic">Project</em>
        </h2>
        <div className="section-line flex-1 h-[1px] bg-[var(--border)] ml-auto"></div>
      </div>
      
      <div className="max-w-[700px]">
        <div className="project-card reveal bg-[var(--surface)] p-[2rem] border border-[var(--border)] relative overflow-hidden transition-colors duration-250 hover:bg-[var(--surface2)] group">
          <div className="project-num font-[var(--mono)] text-[0.58rem] text-[#2a2a2a] tracking-[0.1em] mb-[1.2rem]">Project / 01</div>
          <div className="project-title text-[1.2rem] font-bold tracking-[-0.02em] mb-[0.4rem]">{featuredProject.title}</div>
          <div className="project-stack font-[var(--mono)] text-[0.68rem] text-[var(--accent2)] mb-[1.1rem] tracking-[0.04em]">
            {featuredProject.stack}
          </div>
          <div className="project-desc text-[0.85rem] text-[#999] leading-[1.65] mb-[1.2rem]">
            {featuredProject.desc}
          </div>
          <ul className="project-highlights list-none flex flex-col gap-[0.45rem] mb-[1.6rem]">
            {featuredProject.highlights.map((item, j) => (
              <li key={j} className="text-[0.82rem] text-[#aaa] pl-[1.1rem] relative before:content-['▸'] before:absolute before:left-0 before:text-[var(--accent)] group-hover:text-[var(--text)] transition-colors">
                {item}
              </li>
            ))}
          </ul>
          <a href={featuredProject.link} target="_blank" rel="noreferrer" className="project-link font-[var(--mono)] text-[0.72rem] text-[var(--accent)] no-underline tracking-[0.08em] uppercase inline-flex items-center gap-[0.35rem] transition-all duration-200 hover:gap-[0.7rem]">
            View on GitHub →
          </a>
          <div className="absolute top-0 right-0 p-[1.5rem] opacity-0 group-hover:opacity-20 transition-opacity">
            <svg className="w-[40px] h-[40px]" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
