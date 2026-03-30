const Skills = ({ skills: _skills }: { skills: string[] }) => {
  const categories = [
    {
      title: 'Frontend',
      items: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Microservices', 'WebSocket', 'Event-Driven']
    },
    {
      title: 'Databases & Caching',
      items: ['MySQL', 'Redis', 'MongoDB', 'DB Indexing', 'Query Optimization']
    },
    {
      title: 'Cloud & DevOps',
      items: ['AWS EC2', 'AWS S3', 'Docker', 'PM2', 'GitHub Actions', 'Git', 'Postman']
    },
    {
      title: 'Languages',
      items: ['JavaScript', 'TypeScript', 'Java', 'SQL', 'C++']
    },
    {
      title: 'Core Concepts',
      items: ['DSA', 'System Design', 'Caching', 'Spring Boot', 'Apache Kafka']
    }
  ];

  return (
    <div id="skills" className="bg-[var(--surface)]">
      <div className="section-wrap px-[1.5rem] md:px-[3rem] py-[4rem] max-w-[1200px] mx-auto">
        <div className="section-header flex items-center gap-[1rem] mb-[2.2rem]">
          <span className="section-num font-[var(--mono)] text-[0.65rem] text-[var(--accent)] tracking-[0.1em]">02</span>
          <h2 className="section-title text-[clamp(1.6rem,3vw,2.4rem)] font-bold tracking-[-0.03em] leading-[1]">
            Technical <em className="font-[var(--serif)] italic">Skills</em>
          </h2>
          <div className="section-line flex-1 h-[1px] bg-[var(--border)] ml-auto"></div>
        </div>
        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[var(--border)] border border-[var(--border)] leading-none">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="skill-card reveal bg-[var(--surface)] p-[1.5rem] transition-colors duration-200 relative overflow-hidden group hover:bg-[var(--surface2)]"
            >
              <div className="skill-cat font-[var(--mono)] text-[0.62rem] text-[var(--accent)] tracking-[0.1em] uppercase mb-[0.8rem]">{cat.title}</div>
              <div className="skill-tags flex flex-wrap gap-[0.35rem]">
                {cat.items.map((skill, j) => (
                  <span key={j} className="skill-tag font-[var(--mono)] text-[0.65rem] text-[var(--muted)] bg-[var(--bg)] border border-[var(--border)] px-[0.48rem] py-[0.16rem] transition-all duration-200 group-hover:text-[var(--text)] group-hover:border-[#303030]">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="absolute top-0 left-0 w-[3px] h-0 bg-[var(--accent)] transition-all duration-300 group-hover:h-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
