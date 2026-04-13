import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { SanitizedSocial, SanitizedContact } from '../../interfaces/sanitized-config';

const Contact = ({ social, contact }: { social: SanitizedSocial, contact: SanitizedContact }) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentForm = e.currentTarget;

    const formData = new FormData(currentForm);
    const userName = formData.get('user_name') as string;
    const userEmail = formData.get('user_email') as string;

    const templateParams = {
      user_name: userName,
      name: userName,
      user_email: userEmail,
      email: userEmail,
      subject: formData.get('subject'),
      message: formData.get('message'),
    };
    
    if (contact.emailJS) {
      setLoading(true);
      setStatus('idle');

      try {
        await emailjs.send(
          contact.emailJS.serviceId,
          contact.emailJS.templateId,
          templateParams,
          contact.emailJS.publicKey
        );

        if (contact.emailJS.autoReplyTemplateId) {
          try {
            await emailjs.send(
              contact.emailJS.serviceId,
              contact.emailJS.autoReplyTemplateId,
              templateParams,
              contact.emailJS.publicKey
            );
          } catch (autoReplyError) {
            console.warn('Auto-reply failed:', autoReplyError);
          }
        }

        setStatus('success');
        currentForm.reset();
      } catch (error) {
        console.error('EmailJS Error:', error);
        setStatus('error');
      } finally {
        setLoading(false);
      }
    } else {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const name = formData.get('user_name');
      const email = formData.get('user_email');
      const subject = formData.get('subject') || 'New Portfolio Message';
      const message = formData.get('message');

      const body = `Hi Himanshu,\n\nName: ${name}\nEmail: ${email}\n\nMessage: ${message}`;
      const mailtoLink = `mailto:${social.email}?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <div id="contact" className="max-w-full p-0 bg-[var(--surface)]">
      <div className="contact-inner max-w-[1200px] mx-auto px-[1.5rem] md:px-[3rem] py-[2.8rem] grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-start">
        <div className="contact-left reveal">
          <h2 className="text-[clamp(1.8rem,3.5vw,3.2rem)] font-extrabold tracking-[-0.04em] leading-[0.95] mb-[1rem]">
            Let&apos;s Build<br/>Something <em className="font-[var(--serif)] italic font-normal text-[var(--accent)]">Great</em>
          </h2>
          <p className="text-[0.88rem] text-[var(--muted)] leading-[1.75] mb-[1.8rem]">
            I&apos;m currently hunting for my next big challenge. Whether it&apos;s a <strong>full-time role</strong>, a high-impact <strong>freelance project</strong>, or just a technical deep-dive over coffee, I&apos;m all ears.
          </p>

          <div className="contact-info-list flex flex-col">
            {social.email && (
              <a href={`mailto:${social.email}`} className="contact-info-item group flex items-center gap-[0.8rem] font-[var(--mono)] text-[0.72rem] text-[var(--muted)] no-underline transition-colors duration-200 py-[0.85rem] border-b border-[var(--border)] last:border-none hover:text-[var(--accent)] hover:cursor-pointer">
                <div className="ci-icon w-[28px] h-[28px] border border-[var(--border)] flex items-center justify-center text-[0.75rem] shrink-0 transition-all duration-200 group-hover:border-[var(--accent)] group-hover:bg-[rgba(232,255,107,0.05)]">✉</div>
                {social.email}
              </a>
            )}
            {social.linkedin && (
              <a href={`https://linkedin.com/in/${social.linkedin}`} target="_blank" rel="noreferrer" className="contact-info-item group flex items-center gap-[0.8rem] font-[var(--mono)] text-[0.72rem] text-[var(--muted)] no-underline transition-colors duration-200 py-[0.85rem] border-b border-[var(--border)] last:border-none hover:text-[var(--accent)] hover:cursor-pointer">
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
            <div className="form-group flex flex-col gap-[0.28rem]">
              <label className="font-[var(--mono)] text-[0.62rem] text-[var(--muted)] tracking-[0.1em] uppercase">Full Name</label>
              <input type="text" name="user_name" placeholder="Jon Doe" className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] font-[var(--mono)] text-[0.78rem] px-[0.85rem] py-[0.72rem] outline-none transition-all duration-200 focus:border-[var(--accent)]" required />
            </div>
            
            <div className="form-group flex flex-col gap-[0.28rem]">
              <label className="font-[var(--mono)] text-[0.62rem] text-[var(--muted)] tracking-[0.1em] uppercase">Email</label>
              <input type="email" name="user_email" placeholder="your@email.com" className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] font-[var(--mono)] text-[0.78rem] px-[0.85rem] py-[0.72rem] outline-none transition-all duration-200 focus:border-[var(--accent)]" required />
            </div>

            <div className="form-group flex flex-col gap-[0.28rem]">
              <label className="font-[var(--mono)] text-[0.62rem] text-[var(--muted)] tracking-[0.1em] uppercase">Subject</label>
              <input type="text" name="subject" placeholder="Coffee, code, or just a chat?" className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] font-[var(--mono)] text-[0.78rem] px-[0.85rem] py-[0.72rem] outline-none transition-all duration-200 focus:border-[var(--accent)]" />
            </div>

            <div className="form-group flex flex-col gap-[0.28rem]">
              <label className="font-[var(--mono)] text-[0.62rem] text-[var(--muted)] tracking-[0.1em] uppercase">Message</label>
              <textarea name="message" rows={5} placeholder="What's on your mind?" className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] font-[var(--mono)] text-[0.78rem] px-[0.85rem] py-[0.72rem] outline-none transition-all duration-200 focus:border-[var(--accent)] resize-none" required></textarea>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className={`btn-submit mt-[0.2rem] bg-[var(--accent)] text-[#0a0a0a] border-none px-[1.8rem] py-[0.85rem] font-[var(--mono)] text-[0.76rem] font-medium tracking-[0.1em] uppercase transition-all duration-200 flex items-center justify-center gap-[0.4rem] w-full cursor-pointer hover:cursor-pointer ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:translate-y-[-2px] hover:shadow-[0_8px_26px_rgba(232,255,107,0.2)]'}`}
            >
              {loading ? 'Sending...' : 'Send Message →'}
            </button>
            {status === 'success' && <p className="text-green-500 font-[var(--mono)] text-[0.7rem] text-center mt-2">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-500 font-[var(--mono)] text-[0.7rem] text-center mt-2">Failed to send message. Please check console (F12) for details.</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
