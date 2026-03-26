const Skills = ({ skills }: { skills: string[] }) => {
  // Use a hardcoded categorization since we want to match the UI exactly
  // and the user's config follows this pattern
  const categories = [
    {
      title: 'Frontend',
      items: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Microservices', 'WebSocket', 'Event-Driven Architecture']
    },
    {
      title: 'Databases & Caching',
      items: ['MySQL', 'Redis', 'MongoDB', 'Database Indexing', 'Query Optimization']
    },
    {
      title: 'Cloud & DevOps',
      items: ['AWS (EC2, S3)', 'Docker', 'PM2', 'GitHub Actions', 'Git', 'Postman']
    },
    {
      title: 'Languages',
      items: ['JavaScript', 'TypeScript', 'Java', 'SQL', 'C++']
    },
    {
      title: 'Core Concepts',
      items: ['Data Structures & Algorithms', 'System Design', 'Caching Strategies', 'Spring Boot', 'Apache Kafka']
    }
  ];

  return (
    <div id="skills" className="bg-[var(--surface)] px-[1.5rem] md:px-[6rem] py-[6rem]">
      <div className="max-w-[1200px] mx-auto">
        <div className="section-header flex items-baseline gap-[1.5rem] mb-[4rem]">
          <span className="section-num font-[var(--mono)] text-[0.75rem] text-[var(--accent)] tracking-[0.1em]">02</span>
          <h2 className="section-title text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.03em] leading-[1]">
            Technical <em className="font-[var(--serif)] italic font-normal">Skills</em>
          </h2>
          <div className="section-line flex-1 h-[1px] bg-[var(--border)] ml-auto"></div>
        </div>
        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5px] bg-[var(--border)] border border-[var(--border)]">
          {categories.map((cat, i) => (
            <div key={i} className="skill-card bg-[var(--surface)] p-[2rem] transition-colors duration-200 relative overflow-hidden group hover:bg-[var(--surface2)]">
              <div className="absolute top-0 left-0 w-[3px] h-0 bg-[var(--accent)] transition-all duration-300 group-hover:h-full"></div>
              <div className="skill-cat font-[var(--mono)] text-[0.7rem] text-[var(--accent)] tracking-[0.1em] uppercase mb-[1rem]">{cat.title}</div>
              <div className="skill-tags flex flex-wrap gap-[0.5rem]">
                {cat.items.map((skill, j) => (
                  <span key={j} className="skill-tag font-[var(--mono)] text-[0.72rem] text-[var(--muted)] bg-[var(--bg)] border border-[var(--border)] px-[0.6rem] py-[0.25rem] tracking-[0.05em] transition-colors duration-200 group-hover:text-[var(--text)] group-hover:border-[#333]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
