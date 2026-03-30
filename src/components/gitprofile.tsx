import { useCallback, useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { formatDistance } from 'date-fns';
import {
  CustomError,
  GENERIC_ERROR,
  INVALID_CONFIG_ERROR,
  INVALID_GITHUB_USERNAME_ERROR,
  setTooManyRequestError,
} from '../constants/errors';
import '../index.css';
import { getSanitizedConfig, setupHotjar } from '../utils';
import { SanitizedConfig } from '../interfaces/sanitized-config';
import ErrorPage from './error-page';
import { Profile } from '../interfaces/profile';

// New Custom Components
import Nav from './nav-custom';
import Hero from './hero-custom';
import Ticker from './ticker-custom';
import Skills from './skills-custom';
import Experience from './experience-custom';
import Projects from './projects-custom';
import About from './about-custom';
import Contact from './contact-custom';
import Footer from './footer-custom';

const GitProfile = ({ config }: { config: Config }) => {
  const [sanitizedConfig] = useState<SanitizedConfig | Record<string, never>>(
    getSanitizedConfig(config),
  );
  const [error, setError] = useState<CustomError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<Profile | null>(null);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://api.github.com/users/${sanitizedConfig.github.username}`,
      );
      const data = response.data;

      setProfile({
        avatar: data.avatar_url,
        name: data.name || ' ',
        bio: data.bio || '',
        location: data.location || '',
        company: data.company || '',
      });
    } catch (error) {
      handleError(error as AxiosError | Error);
    } finally {
      setLoading(false);
    }
  }, [sanitizedConfig.github.username]);

  useEffect(() => {
    if (Object.keys(sanitizedConfig).length === 0) {
      setError(INVALID_CONFIG_ERROR);
    } else {
      setError(null);
      setupHotjar(sanitizedConfig.hotjar);
      loadData();
    }
  }, [sanitizedConfig, loadData]);

  const handleError = (error: AxiosError | Error): void => {
    console.error('Error:', error);

    if (error instanceof AxiosError) {
      try {
        const reset = formatDistance(
          new Date(error.response?.headers?.['x-ratelimit-reset'] * 1000),
          new Date(),
          { addSuffix: true },
        );

        if (typeof error.response?.status === 'number') {
          switch (error.response.status) {
            case 403:
              setError(setTooManyRequestError(reset));
              break;
            case 404:
              setError(INVALID_GITHUB_USERNAME_ERROR);
              break;
            default:
              setError(GENERIC_ERROR);
              break;
          }
        } else {
          setError(GENERIC_ERROR);
        }
      } catch (innerError) {
        setError(GENERIC_ERROR);
      }
    } else {
      setError(GENERIC_ERROR);
    }
  };

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
      <Nav profile={profile} />
      <main>
        <Hero 
          profile={profile} 
          intro={sanitizedConfig.intro} 
          loading={loading} 
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
