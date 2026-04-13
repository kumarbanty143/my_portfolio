interface Github {
  username: string;
}

interface GitHubProjects {
  display?: boolean;
  header?: string;
  mode?: string;
  automatic?: {
    sortBy?: string;
    limit?: number;
    exclude?: {
      forks?: boolean;
      projects?: Array<string>;
    };
  };
  manual?: {
    projects?: Array<string>;
  };
}

interface ExternalProjects {
  header?: string;
  projects?: {
    title: string;
    description?: string;
    imageUrl?: string;
    link: string;
  }[];
}

interface Projects {
  github?: GitHubProjects;
  external?: ExternalProjects;
}

interface SEO {
  title?: string;
  description?: string;
  imageURL?: string;
}

interface Social {
  linkedin?: string;
  x?: string;
  instagram?: string;
  phone?: string;
  email?: string;
  leetcode?: string;
  codechef?: string;
}

interface Contact {
  email: string;
  emailJS?: {
    serviceId: string;
    templateId: string;
    autoReplyTemplateId?: string;
    publicKey: string;
  };
}

interface Resume {
  fileUrl?: string;
}

interface Experience {
  company?: string;
  position?: string;
  from: string;
  to: string;
  companyLink?: string;
  description?: string;
}

interface Certification {
  body?: string;
  name?: string;
  year?: string;
  link?: string;
}

interface Education {
  institution?: string;
  degree?: string;
  from: string;
  to: string;
}

interface Publication {
  title: string;
  conferenceName?: string;
  journalName?: string;
  authors?: string;
  link?: string;
  description?: string;
}

interface GoogleAnalytics {
  id?: string;
}

interface Hotjar {
  id?: string;
  snippetVersion?: number;
}

interface Blog {
  source?: string;
  username?: string;
  limit?: number;
}

interface ThemeConfig {
  defaultTheme?: string;
  disableSwitch?: boolean;
  respectPrefersColorScheme?: boolean;
  displayAvatarRing?: boolean;
  themes?: Array<string>;
}

interface Config {
  github: Github;
  base?: string;
  projects?: Projects;
  intro?: string;
  seo?: SEO;
  social?: Social;
  skills?: Array<string>;
  experiences?: Array<Experience>;
  certifications?: Array<Certification>;
  educations?: Array<Education>;
  publications?: Array<Publication>;
  resume?: Resume;
  googleAnalytics?: GoogleAnalytics;
  hotjar?: Hotjar;
  blog?: Blog;
  themeConfig?: ThemeConfig;
  footer?: string;
  contact?: Contact;
  enablePWA: boolean;
}

declare const CONFIG: Config;
