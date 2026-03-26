import { SanitizedSocial, SanitizedContact } from '../../interfaces/sanitized-config';

const Contact = ({ social, contact: _contact }: { social: SanitizedSocial, contact: SanitizedContact }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const fname = formData.get('fname');
    const lname = formData.get('lname');
    const email = formData.get('email');
    const subject = formData.get('subject') || 'Portfolio Contact';
    const message = formData.get('message');

    const body = `Hi Himanshu,\n\nName: ${fname} ${lname}\nEmail: ${email}\n\n${message}`;
    const mailtoLink = `mailto:himanshukumarpatra.dev@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div id="contact" className="max-w-full p-0 bg-[var(--surface)]">
      <div className="contact-inner max-w-[1200px] mx-auto px-[1.5rem] md:px-[3rem] py-[6rem] grid grid-cols-1 md:grid-cols-2 gap-[6rem] items-start">
        <div className="contact-left">
          <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-extrabold tracking-[-0.04em] leading-[0.95] mb-[1.5rem]">
            Let&apos;s Build<br/>Something <em className="font-[var(--serif)] italic font-normal text-[var(--accent)]">Great</em>
          </h2>
          <p className="text-[0.95rem] text-[#999] leading-[1.7] mb-[2.5rem]">
            Open to full-time roles, freelance projects, and interesting collaborations. 
            If you have a problem worth solving, I&apos;d love to hear about it.
          </p>

          <div className="contact-info-list flex flex-col gap-[1.2rem]">
            {social.email && (
              <a href={`mailto:${social.email}`} className="contact-info-item group flex items-center gap-[1rem] font-[var(--mono)] text-[0.82rem] text-[var(--muted)] no-underline transition-colors duration-200 pb-[1.2rem] border-b border-[var(--border)] last:border-none hover:text-[var(--accent)]">
                <div className="contact-info-icon w-[36px] h-[36px] border border-[var(--border)] flex items-center justify-center text-[0.9rem] shrink-0 transition-all duration-200 group-hover:border-[var(--accent)] group-hover:bg-[rgba(232,255,107,0.05)]">✉</div>
                {social.email}
              </a>
            )}
            {social.phone && (
              <a href={`tel:${social.phone}`} className="contact-info-item group flex items-center gap-[1rem] font-[var(--mono)] text-[0.82rem] text-[var(--muted)] no-underline transition-colors duration-200 pb-[1.2rem] border-b border-[var(--border)] last:border-none hover:text-[var(--accent)]">
                <div className="contact-info-icon w-[36px] h-[36px] border border-[var(--border)] flex items-center justify-center text-[0.9rem] shrink-0 transition-all duration-200 group-hover:border-[var(--accent)] group-hover:bg-[rgba(232,255,107,0.05)]">☎</div>
                {social.phone}
              </a>
            )}
            {social.linkedin && (
              <a href={`https://linkedin.com/in/${social.linkedin}`} target="_blank" rel="noreferrer" className="contact-info-item group flex items-center gap-[1rem] font-[var(--mono)] text-[0.82rem] text-[var(--muted)] no-underline transition-colors duration-200 pb-[1.2rem] border-b border-[var(--border)] last:border-none hover:text-[var(--accent)]">
                <div className="contact-info-icon w-[36px] h-[36px] border border-[var(--border)] flex items-center justify-center text-[0.9rem] shrink-0 transition-all duration-200 group-hover:border-[var(--accent)] group-hover:bg-[rgba(232,255,107,0.05)]">in</div>
                LinkedIn Profile
              </a>
            )}
            <div className="contact-info-item pointer-events-none flex items-center gap-[1rem] font-[var(--mono)] text-[0.82rem] text-[var(--muted)] no-underline transition-colors duration-200 pb-[1.2rem] border-b border-[var(--border)] last:border-none">
              <div className="contact-info-icon w-[36px] h-[36px] border border-[var(--border)] flex items-center justify-center text-[0.9rem] shrink-0">📍</div>
              Bengaluru, Karnataka, India
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form flex flex-col gap-[1rem]" id="contactForm" onSubmit={handleSubmit}>
            <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
              <div className="form-group flex flex-col gap-[0.4rem]">
                <label className="font-[var(--mono)] text-[0.7rem] text-[var(--muted)] tracking-[0.1em] uppercase">First Name</label>
                <input type="text" placeholder="Rahul" className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] font-[var(--mono)] text-[0.85rem] px-[1rem] py-[0.9rem] outline-none transition-all duration-200 focus:border-[var(--accent)]" required />
              </div>
              <div className="form-group flex flex-col gap-[0.4rem]">
                <label className="font-[var(--mono)] text-[0.7rem] text-[var(--muted)] tracking-[0.1em] uppercase">Last Name</label>
                <input type="text" placeholder="Sharma" className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] font-[var(--mono)] text-[0.85rem] px-[1rem] py-[0.9rem] outline-none transition-all duration-200 focus:border-[var(--accent)]" />
              </div>
            </div>
            <div className="form-group flex flex-col gap-[0.4rem]">
              <label className="font-[var(--mono)] text-[0.7rem] text-[var(--muted)] tracking-[0.1em] uppercase">Email Address</label>
              <input type="email" placeholder="you@company.com" className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] font-[var(--mono)] text-[0.85rem] px-[1rem] py-[0.9rem] outline-none transition-all duration-200 focus:border-[var(--accent)]" required />
            </div>
            <div className="form-group flex flex-col gap-[0.4rem]">
              <label className="font-[var(--mono)] text-[0.7rem] text-[var(--muted)] tracking-[0.1em] uppercase">Subject</label>
              <input type="text" placeholder="Job opportunity / Collaboration" className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] font-[var(--mono)] text-[0.85rem] px-[1rem] py-[0.9rem] outline-none transition-all duration-200 focus:border-[var(--accent)]" />
            </div>
            <div className="form-group flex flex-col gap-[0.4rem]">
              <label className="font-[var(--mono)] text-[0.7rem] text-[var(--muted)] tracking-[0.1em] uppercase">Message</label>
              <textarea rows={5} placeholder="Tell me about your project..." className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] font-[var(--mono)] text-[0.85rem] px-[1rem] py-[0.9rem] outline-none transition-all duration-200 focus:border-[var(--accent)] resize-none" required></textarea>
            </div>
            <button type="submit" className="btn-submit mt-[0.5rem] bg-[var(--accent)] color-[#0a0a0a] border-none px-[2rem] py-[1rem] font-[var(--mono)] text-[0.82rem] font-medium tracking-[0.1em] uppercase transition-all duration-200 flex items-center justify-center gap-[0.5rem] hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(232,255,107,0.25)]">
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
