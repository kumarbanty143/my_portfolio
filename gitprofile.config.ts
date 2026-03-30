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
      display: false, // Display GitHub projects?
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
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio of Himanshu Kumar Patra',
    description: 'Full Stack Developer with 1.3+ years of experience',
    imageURL: '',
  },
  social: {
    linkedin: 'himanshu-kumar-patra-sde',
    x: 'Himansh40017967',
    leetcode: 'himanshukumar2910',
    codechef: 'banty_dev_29',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'the_banty_cs',
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
    'JavaScript (ES6+)',
    'TypeScript',
    'Node.js',
    'Express.js',
    'REST APIs',
    'JWT Authentication',
    'Microservices',
    'WebSocket',
    'Event-Driven Architecture',
    'MySQL',
    'MongoDB',
    'Redis',
    'AWS (EC2, S3)',
    'Docker',
    'PM2',
    'GitHub Actions',
    'Java',
    'Spring Boot',
    'SQL',
    'Git',
    'Postman',
    'JIRA',
    'Data Structures & Algorithms',
    'System Design',
    'Database Indexing',
    'Caching',
  ],
  intro: 'Full Stack Developer with 1.3+ years of professional experience building scalable web applications using Node.js, React, and SQL. Experienced in microservices architecture, REST API development, and improving database performance.\n\nBuilt responsive frontend interfaces and improved performance by reducing bundle size. Currently learning Java and Spring Boot, along with Docker and MongoDB.',
  experiences: [
    {
      company: 'Vedak: Expert Network',
      position: 'Full Stack Developer',
      from: 'Jan 2025',
      to: 'Present',
      companyLink: 'https://vedak.com',
      description: '• Contributed to production microservices systems, building backend services with Node.js and SQL.\n• Built a web application from scratch for 1000+ users using React.js, Node.js, and SQL based on business requirements\n• Developed secure REST APIs and improved communication between services.\n• Developed an automated End of Day (EOD) reporting system, reducing manual reporting effort by 80%.\n• Integrated OpenAI-based transcription and AWS S3 storage to automate audio-to-text workflows.\n• Optimized SQL queries and using indexing to improve report generation performance by 60%.\n• Worked with AWS EC2 for application deployment and used PM2 for process management.',
    },
    {
      company: 'Zigbee Student Developers’ Club (OUTR)',
      position: 'Full Stack Developer (Volunteer)',
      from: 'June 2024',
      to: 'Nov 2024',
      companyLink: 'https://zigbeeoutr.in',
      description: '• Developed the alumni portal (zigbeeoutr.in) using React.js, TypeScript, and Node.js.\n• Built a searchable alumni directory enabling students to connect with 1000+ alumni.\n• Implemented authentication and optimized backend APIs for improved performance and scalability.\n• Collaborated with team to design and deploy features.',
    },
  ],
  certifications: [
    {
      name: 'CodeChef 4* Competitive Programmer',
      body: '4* Competitive Programmer with strong problem-solving skills in Data Structures and Algorithms (C++/Java).',
      year: '',
      link: 'https://www.codechef.com/users/banty_dev_29',
    },
    {
      name: 'OJEE (MCA) Rank 34',
      body: 'Secured All Odisha Rank 34 in OJEE (MCA).',
      year: '2023',
      link: '',
    },
    {
      name: 'AIR 147 in Coding World Cup',
      body: 'Secured AIR 147 in Coding World Cup.',
      year: '2023',
      link: '',
    },
    {
      name: 'Alumni Coordinator at OUTR',
      body: 'Lead mentorship initiatives for 200+ students.',
      year: '2023-2025',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Odisha University of Technology and Research',
      degree: 'Master of Computer Applications (MCA), CGPA: 8.9',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'Fakir Mohan University',
      degree: 'Bachelor of Science in Mathematics, CGPA: 7.9',
      from: '2020',
      to: '2023',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  contact: {
    email: 'himanshukumarpatra.dev@gmail.com',
    emailJS: {
      serviceId: '', // To find this, visit https://www.emailjs.com/
      templateId: '', // To find this, visit https://www.emailjs.com/
      publicKey: '', // To find this, visit https://www.emailjs.com/
    },
  },
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
    defaultTheme: 'dracula',
    disableSwitch: true,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: ['dracula'],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with ❤️ by <a class="text-primary" href="https://github.com/kumarbanty143" target="_blank" rel="noreferrer">Himanshu</a>`,

  enablePWA: true,
};

export default CONFIG;
