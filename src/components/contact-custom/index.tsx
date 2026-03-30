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
    <div id="contact-wrap" className="max-w-full p-0 bg-[var(--surface)]">
      <div className="contact-inner max-w-[1200px] mx-auto px-[1.5rem] md:px-[3rem] py-[2.8rem] grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-start">
        <div className="contact-left reveal">
          <h2 className="text-[clamp(1.8rem,3.5vw,3.2rem)] font-extrabold tracking-[-0.04em] leading-[0.95] mb-[1rem]">
            Let&apos;s Build<br/>Something <em className="font-[var(--serif)] italic font-normal text-[var(--accent)]">Great</em>
          </h2>
          <p className="text-[0.85rem] text-[#999] leading-[1.7] mb-[1.6rem]">
            Open to full-time roles, freelance projects, and interesting collaborations. 
            If you have a problem worth solving, I&apos;d love to hear about it.
          </p>

          <div className="contact-info-list flex flex-col">
            {social.email && (
              <a href={`mailto:${social.email}`} className="contact-info-item group flex items-center gap-[0.8rem] font-[var(--mono)] text-[0.72rem] text-[var(--muted)] no-underline transition-colors duration-200 py-[0.85rem] border-b border-[var(--border)] last:border-none hover:text-[var(--accent)]">
                <div className="ci-icon w-[28px] h-[28px] border border-[var(--border)] flex items-center justify-center text-[0.75rem] shrink-0 transition-all duration-200 group-hover:border-[var(--accent)] group-hover:bg-[rgba(232,255,107,0.05)]">✉</div>
                {social.email}
              </a>
            )}
            {social.phone && (
              <a href={`tel:${social.phone}`} className="contact-info-item group flex items-center gap-[0.8rem] font-[var(--mono)] text-[0.72rem] text-[var(--muted)] no-underline transition-colors duration-200 py-[0.85rem] border-b border-[var(--border)] last:border-none hover:text-[var(--accent)]">
                <div className="ci-icon w-[28px] h-[28px] border border-[var(--border)] flex items-center justify-center text-[0.75rem] shrink-0 transition-all duration-200 group-hover:border-[var(--accent)] group-hover:bg-[rgba(232,255,107,0.05)]">☎</div>
                {social.phone}
              </a>
            )}
            {social.linkedin && (
              <a href={`https://linkedin.com/in/${social.linkedin}`} target="_blank" rel="noreferrer" className="contact-info-item group flex items-center gap-[0.8rem] font-[var(--mono)] text-[0.72rem] text-[var(--muted)] no-underline transition-colors duration-200 py-[0.85rem] border-b border-[var(--border)] last:border-none hover:text-[var(--accent)]">
                <div className="ci-icon w-[28px] h-[28px] border border-[var(--border)] flex items-center justify-center text-[0.75rem] shrink-0 transition-all duration-200 group-hover:border-[var(--accent)] group-hover:bg-[rgba(232,255,107,0.05)]">in</div>
                LinkedIn Profile
              </a>
            )}
            <div className="contact-info-item pointer-events-none flex items-center gap-[0.8rem] font-[var(--mono)] text-[0.72rem] text-[var(--muted)] py-[0.85rem] border-b border-[var(--border)] last:border-none">
              <div className="ci-icon w-[28px] h-[28px] border border-[var(--border)] flex items-center justify-center">📍</div>
              Bengaluru, Karnataka, India
            </div>
          </div>
        </div>

        <div className="reveal">
          <form className="contact-form flex flex-col gap-[0.75rem]" id="contactForm" onSubmit={handleSubmit}>
            <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-[0.75rem]">
              <div className="form-group flex flex-col gap-[0.28rem]">
                <label className="font-[var(--mono)] text-[0.62rem] text-[var(--muted)] tracking-[0.1em] uppercase">First Name</label>
                <input type="text" name="fname" placeholder="Rahul" className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] font-[var(--mono)] text-[0.78rem] px-[0.85rem] py-[0.72rem] outline-none transition-all duration-200 focus:border-[var(--accent)]" required />
              </div>
              <div className="form-group flex flex-col gap-[0.28rem]">
                <label className="font-[var(--mono)] text-[0.62rem] text-[var(--muted)] tracking-[0.1em] uppercase">Last Name</label>
                <input type="text" name="lname" placeholder="Sharma" className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] font-[var(--mono)] text-[0.78rem] px-[0.85rem] py-[0.72rem] outline-none transition-all duration-200 focus:border-[var(--accent)]" />
              </div>
            </div>
            <div className="form-group flex flex-col gap-[0.28rem]">
              <label className="font-[var(--mono)] text-[0.62rem] text-[var(--muted)] tracking-[0.1em] uppercase">Email</label>
              <input type="email" name="email" placeholder="you@company.com" className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] font-[var(--mono)] text-[0.78rem] px-[0.85rem] py-[0.72rem] outline-none transition-all duration-200 focus:border-[var(--accent)]" required />
            </div>
            <div className="form-group flex flex-col gap-[0.28rem]">
              <label className="font-[var(--mono)] text-[0.62rem] text-[var(--muted)] tracking-[0.1em] uppercase">Subject</label>
              <input type="text" name="subject" placeholder="Job opportunity / Collaboration" className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] font-[var(--mono)] text-[0.78rem] px-[0.85rem] py-[0.72rem] outline-none transition-all duration-200 focus:border-[var(--accent)]" />
            </div>
            <div className="form-group flex flex-col gap-[0.28rem]">
              <label className="font-[var(--mono)] text-[0.62rem] text-[var(--muted)] tracking-[0.1em] uppercase">Message</label>
              <textarea name="message" rows={5} placeholder="Tell me about your project..." className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] font-[var(--mono)] text-[0.78rem] px-[0.85rem] py-[0.72rem] outline-none transition-all duration-200 focus:border-[var(--accent)] resize-none" required></textarea>
            </div>
            <button type="submit" className="btn-submit mt-[0.2rem] bg-[var(--accent)] text-[#0a0a0a] border-none px-[1.8rem] py-[0.85rem] font-[var(--mono)] text-[0.76rem] font-medium tracking-[0.1em] uppercase transition-all duration-200 flex items-center justify-center gap-[0.4rem] w-full hover:translate-y-[-2px] hover:shadow-[0_8px_26px_rgba(232,255,107,0.2)]">
              Send Message &rarr;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
