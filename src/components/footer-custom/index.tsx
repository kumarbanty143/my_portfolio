import { SanitizedSocial } from '../../interfaces/sanitized-config';

const Footer = ({ social }: { social: SanitizedSocial }) => {
  return (
    <footer className="border-t border-[var(--border)] px-[1.5rem] md:px-[3rem] py-[1.4rem] flex flex-col md:flex-row justify-between items-center gap-[0.9rem]">
      <span className="footer-copy font-[var(--mono)] text-[0.65rem] text-[var(--muted)] tracking-[0.05em]">&copy; 2025 Himanshu Kumar Patra</span>
      <div className="footer-links flex gap-[1.8rem] flex-wrap justify-center">
        {social.linkedin && <a href={`https://linkedin.com/in/${social.linkedin}`} target="_blank" rel="noreferrer" className="footer-link-custom">LinkedIn</a>}
        <a href="https://github.com/kumarbanty143" target="_blank" rel="noreferrer" className="footer-link-custom">GitHub</a>
        {social.leetcode && <a href={`https://leetcode.com/u/${social.leetcode}`} target="_blank" rel="noreferrer" className="footer-link-custom">LeetCode</a>}
        {social.codechef && <a href={`https://www.codechef.com/users/${social.codechef}`} target="_blank" rel="noreferrer" className="footer-link-custom">CodeChef</a>}
      </div>
      <style>{`
        .footer-link-custom {
          font-family: var(--mono);
          font-size: 0.72rem;
          color: var(--muted);
          text-decoration: none;
          letter-spacing: 0.06em;
          transition: color 0.2s;
          text-transform: uppercase;
        }
        .footer-link-custom:hover { color: var(--accent); }
      `}</style>
    </footer>
  );
};

export default Footer;
