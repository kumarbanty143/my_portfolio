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
      <Navbar profile={profile} />
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
