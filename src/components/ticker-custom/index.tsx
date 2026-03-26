const Ticker = ({ skills }: { skills: string[] }) => {
  // Duplicate skills to make a continuous loop
  const displaySkills = [...skills, ...skills];

  return (
    <div className="ticker-wrap overflow-hidden border-t border-b border-[var(--border)] py-[0.8rem] bg-[var(--surface)]">
      <div className="flex whitespace-nowrap animate-ticker gap-0 w-max">
        {displaySkills.map((skill, index) => (
          <span key={index} className="ticker-item font-[var(--mono)] text-[0.75rem] tracking-[0.1em] text-uppercase text-[var(--muted)] px-[2rem] flex items-center shrink-0">
            <span className="text-[var(--accent)] mr-[2rem] text-sm md:text-base">★</span> {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
