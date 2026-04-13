import { useState, useEffect, useCallback } from 'react';
import { Profile } from '../../interfaces/profile';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

const imageModules = import.meta.glob('/public/images/*.{png,jpg,jpeg,gif,webp,svg}', { eager: true });
const HERO_IMAGES = Object.keys(imageModules).map((path) => path.replace('/public', '')).sort();

const Hero = ({ profile, intro, loading }: { profile: Profile | null, intro?: string, loading: boolean }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMobileImage, setShowMobileImage] = useState(false);
  const images = HERO_IMAGES;

  const nextSlide = useCallback(() => {
    if (images.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    if (images.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleDownloadResume = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/kumarbanty143/Himanshu-s-Resume/main/himanshu_fullstack_dev.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Himanshu_Kumar_Patra_Resume.pdf');
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      window.open('https://raw.githubusercontent.com/kumarbanty143/Himanshu-s-Resume/main/himanshu_fullstack_dev.pdf', '_blank');
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  if (loading || !profile) return null;

  return (
    <section id="home" className="min-h-0 flex flex-col md:flex-row items-center justify-between px-[1.5rem] md:px-[4.5rem] py-[5rem] md:py-[6rem] relative overflow-hidden gap-[2.5rem] md:gap-[5rem]">
      <div className="hero-grid-bg"></div>
      <div className="hero-blob"></div>

      <div className="hero-left z-[1] flex-1 max-w-full">
        <div className="hero-tag flex items-center gap-[0.5rem] font-[var(--mono)] text-[0.62rem] text-[var(--accent)] tracking-[0.12em] uppercase mb-[1.2rem] px-[0.7rem] py-[0.32rem] border border-[rgba(232,255,107,0.18)] rounded-[2px] fade-up w-fit">
          <span className="w-[5px] h-[5px] bg-[var(--accent)] rounded-full animate-blink"></span>
          Available for opportunities
        </div>
        
        <h1 className="text-[clamp(1.8rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.035em] mb-[1rem] fade-up [animation-delay:0.1s] whitespace-nowrap">
          {profile.name.split(' ')[0]} <span className="font-[var(--serif)] italic font-normal text-[var(--accent)]">{profile.name.split(' ').slice(1).join(' ')}</span>
        </h1>

        <p className="font-[var(--mono)] text-[0.82rem] md:text-[0.9rem] text-[var(--muted)] mb-[1.4rem] fade-up [animation-delay:0.15s] tracking-[0.02em]">
          Full Stack Developer &nbsp;&middot;&nbsp; <em className="text-[var(--accent2)] not-italic font-medium">1.4+ Years Experience</em>
        </p>

        <div className="hero-desc-wrap max-w-full md:max-w-[850px] fade-up [animation-delay:0.2s]">
          <p className="text-[0.85rem] md:text-[0.95rem] leading-[1.7] text-[var(--muted)] mb-[1.6rem] whitespace-pre-line">
            {intro || profile.bio}
          </p>
        </div>

        <div className="flex gap-[0.8rem] flex-wrap fade-up [animation-delay:0.3s] mt-[0.85rem]">
          <a href="#contact" className="btn-hero-primary cursor-pointer text-center">
            Get in Touch <FiArrowRight />
          </a>
          <button 
            onClick={handleDownloadResume} 
            className="btn-hero-outline cursor-pointer outline-none bg-transparent border-[var(--border)] text-inherit text-center"
          >
            Download Resume <FiDownload />
          </button>
        </div>

        {!showMobileImage && (
          <div className="mt-[1.8rem] md:hidden fade-up [animation-delay:0.35s]">
            <button 
              onClick={() => setShowMobileImage(true)}
              className="text-[0.75rem] font-[var(--mono)] text-[var(--accent)] border-b border-[var(--accent)] pb-0.5 cursor-pointer hover:opacity-80 transition-opacity uppercase tracking-[0.1em]"
            >
              Want to see me?
            </button>
          </div>
        )}
      </div>

      <div className={`hero-right items-center z-[1] shrink-0 fade-up [animation-delay:0.25s] ${showMobileImage ? 'flex' : 'hidden md:flex'}`}>
        <div className="profile-frame relative w-[280px] md:w-[320px] h-[340px] md:h-[400px]">
          <div className="profile-img-wrapper w-full h-full border border-[var(--border)] overflow-hidden relative bg-[var(--surface)] shadow-2xl group">
            {images.map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${currentSlide === idx ? 'opacity-90' : 'opacity-0'}`}
              />
            ))}
            
            {images.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={prevSlide} className="w-8 h-8 rounded-full bg-[rgba(0,0,0,0.5)] text-white flex items-center justify-center cursor-pointer hover:bg-[var(--accent)] hover:text-black transition-all">←</button>
                <button onClick={nextSlide} className="w-8 h-8 rounded-full bg-[rgba(0,0,0,0.5)] text-white flex items-center justify-center cursor-pointer hover:bg-[var(--accent)] hover:text-black transition-all">→</button>
              </div>
            )}

            <div className="profile-corner pc-tl absolute top-[-1px] left-[-1px] border-t-2 border-l-2 border-[var(--accent)] w-[18px] h-[18px]"></div>
            <div className="profile-corner pc-tr absolute top-[-1px] right-[-1px] border-t-2 border-r-2 border-[var(--accent)] w-[18px] h-[18px]"></div>
            <div className="profile-corner pc-bl absolute bottom-[-1px] left-[-1px] border-b-2 border-l-2 border-[var(--accent)] w-[18px] h-[18px]"></div>
            <div className="profile-corner pc-br absolute bottom-[-1px] right-[-1px] border-b-2 border-r-2 border-[var(--accent)] w-[18px] h-[18px]"></div>
          </div>
          <div className="profile-badge absolute bottom-[-0.8rem] right-[-0.8rem] bg-[var(--surface2)] border border-[var(--border)] px-[0.9rem] py-[0.7rem] font-[var(--mono)] text-[0.62rem] text-[var(--muted)] shadow-xl z-10">
            <strong className="block text-[1.2rem] text-[var(--accent)] font-[var(--display)] font-bold leading-[1]">1.4+</strong>
            Years Experience
          </div>
        </div>
      </div>

      <style>{`
        .btn-hero-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--accent);
          color: #0a0a0a;
          padding: 0.62rem 1.4rem;
          font-family: var(--mono);
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-decoration: none;
          text-transform: uppercase;
          transition: all 0.2s ease;
          border: none;
        }
        .btn-hero-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(232,255,107,0.2);
        }
        .btn-hero-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: 1px solid var(--border);
          color: var(--text);
          padding: 0.62rem 1.4rem;
          font-family: var(--mono);
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          text-decoration: none;
          text-transform: uppercase;
          transition: all 0.2s ease;
        }
        .btn-hero-outline:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(232,255,107,0.02);
        }
      `}</style>
    </section>
  );
};

export default Hero;
