import { useEffect, useState } from 'react';
import {
  CustomError,
  INVALID_CONFIG_ERROR,
} from '../constants/errors';
import '../index.css';
import { getSanitizedConfig, setupHotjar } from '../utils';
import { SanitizedConfig } from '../interfaces/sanitized-config';
import ErrorPage from './ErrorPage/ErrorPage';
import { Profile } from '../interfaces/profile';

import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Ticker from './Ticker/Ticker';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const GitProfile = ({ config }: { config: Config }) => {
  const [sanitizedConfig] = useState<SanitizedConfig | Record<string, never>>(
    getSanitizedConfig(config),
  );
  const [error, setError] = useState<CustomError | null>(null);
  const [profile] = useState<Profile>({
    avatar: '',
    name: 'Himanshu Kumar Patra',
    bio: 'Full Stack Developer with 1.4+ years of professional experience building scalable web applications.',
    location: 'Bengaluru, India',
    company: 'Vedak',
  });

  useEffect(() => {
    if (Object.keys(sanitizedConfig).length === 0) {
      setError(INVALID_CONFIG_ERROR);
    } else {
      setError(null);
      setupHotjar(sanitizedConfig.hotjar);
    }
  }, [sanitizedConfig]);

  if (error) {
    return (
      <ErrorPage
        status={error.status}
        title={error.title}
        subTitle={error.subTitle}
      />
    );
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-[#f0ede8] font-['Syne',sans-serif]">
      <Navbar profile={profile} />
      <main>
        <Hero
          profile={profile}
          intro={sanitizedConfig.intro}
          loading={false}
        />
        <Ticker skills={sanitizedConfig.skills} />
        <Skills skills={sanitizedConfig.skills} />
        <Experience experiences={sanitizedConfig.experiences} />
        <Projects projects={sanitizedConfig.projects.external.projects} />
        <About
          educations={sanitizedConfig.educations}
          certifications={sanitizedConfig.certifications}
        />
        <Contact
          social={sanitizedConfig.social}
          contact={sanitizedConfig.contact}
        />
      </main>
      <Footer social={sanitizedConfig.social} />
    </div>
  );
};

export default GitProfile;
