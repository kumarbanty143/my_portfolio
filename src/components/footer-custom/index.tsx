import { SanitizedSocial } from '../../interfaces/sanitized-config';

const Footer = ({ social }: { social: SanitizedSocial }) => {
  return (
    <footer className="border-t border-[var(--border)] px-[1.5rem] md:px-[3rem] py-[2rem] flex flex-col md:row justify-between items-center gap-[1rem] md:flex-row">
      <span className="footer-copy font-[var(--mono)] text-[0.72rem] text-[var(--muted)] tracking-[0.06em]">© 2025 Himanshu Kumar Patra · Built with craft</span>
      <div className="footer-links flex gap-[2rem]">
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
