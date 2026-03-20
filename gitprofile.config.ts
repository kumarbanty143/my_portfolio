// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'kumarbanty143', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Scalable E-Commerce Microservices (Backend Project)',
          description:
            'Built a distributed e-commerce backend with Spring Boot 3, splitting functionality into User, Order, Product, Inventory, Payment, and Notification services for better scalability. Implemented Async Messaging via Kafka, centralized API Gateway, JWT auth, and Distributed Tracing. Built reliable payments using Razorpay and the Saga Pattern for distributed transactions.',
          imageUrl: '',
          link: 'https://github.com/kumarbanty143/nexus-cloud-commerce',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Himanshu Kumar Patra',
    description: 'Full Stack Developer with 1.2+ years of experience',
    imageURL: '',
  },
  social: {
    linkedin: 'himanshu-kumar-patra-958199275',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '+91-7381631200',
    email: 'himanshukumarpatra.dev@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'React.js',
    'Redux Toolkit',
    'Tailwind CSS',
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Express.js',
    'REST APIs',
    'JWT',
    'Microservices',
    'WebSocket',
    'MySQL',
    'MongoDB',
    'Redis',
    'AWS (EC2, S3)',
    'Docker',
    'PM2',
    'Java',
    'Spring Boot',
    'SQL',
    'Git',
  ],
  experiences: [
    {
      company: 'Vedak: Expert Network',
      position: 'Full Stack Developer',
      from: 'Jan 2025',
      to: 'Present',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'CodeChef 4* Competitive Programmer',
      body: '4* Competitive Programmer with strong problem-solving skills in C++ and Java.',
      year: '',
      link: 'https://www.codechef.com/users/banty_dev_29',
    },
    {
      name: 'Alumni Coordinator at OUTR',
      body: 'Leading mentorship initiatives for 200+ alumni.',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Odisha University of Technology and Research',
      degree: 'Master of Computer Applications (MCA)',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'Fakir Mohan University',
      degree: 'Bachelor of Science in Mathematics',
      from: '2020',
      to: '2023',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: ['light', 'dark'],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
