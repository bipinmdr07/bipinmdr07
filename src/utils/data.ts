export const ROUTES = Object.freeze([
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'Resume',
    path: '/resume',
  },
  {
    id: 3,
    name: 'Skills',
    path: '/skills',
  },
  {
    id: 4,
    name: 'Projects',
    path: '/projects',
  },
  { id: 5, name: 'Experience', path: '/experience' },
  {
    id: 6,
    name: 'Certifications',
    path: '/certifications',
  },
]);

// Social media details with icons
export const SOCIAL_MEDIA = Object.freeze([
  {
    id: 1,
    name: 'Instagram',
    icon: 'mdi:instagram',
    profileLink: 'https://www.instagram.com/bipinmdr07/',
  },
  {
    id: 2,
    name: 'Facebook',
    icon: 'mdi:facebook',
    profileLink: 'https://www.facebook.com/bipinmdr07/',
  },
  {
    id: 3,
    name: 'LinkedIn',
    icon: 'mdi:linkedin',
    profileLink: 'https://www.linkedin.com/in/bipin-manandhar-06573b169/',
  },
  {
    id: 4,
    name: 'GitHub',
    icon: 'mdi:github',
    profileLink: 'https://github.com/bipinmdr07',
  },
]);

// My experiences
export const EXPERIENCES = Object.freeze([
  {
    company: 'Leapfrog Technology Nepal Pvt. Ltd.',
    startDate: 'Sept 2018',
    endDate: 'Present',
    companyUrl: 'https://www.lftechnology.com/',
    logo: '/lf-logo.jpeg',
    roles: [
      {
        title: 'Senior Software Engineer',
        startDate: 'Jan 2022',
        accomplishments: [
          'Led the team in developing the application.',
          'Involved in the design and discovery process for the application.',
          'Directly communicated with clients to gather requirements and discuss the architecture of the application.',
          'Worked with the DevOps team for infrastructure setup and configured CI/CD.',
          'Led migration to a microservices architecture, reducing API latency by 40%.',
          'Mentored 15+ junior developers through code reviews and pair programming.',
          'Worked with the DevOps team to implement a CI/CD pipeline for pull request branches to improve the code review process.',
        ],
      },
      {
        title: 'Software Engineer',
        startDate: 'Jan 2020',
        accomplishments: [
          'Designed, built, and maintained efficient, reusable, and reliable software.',
          'Designed and developed business logic using REST APIs in Express.js.',
          'Implemented new software features and maintained existing features.',
          'Refactored, debugged, tested, and implemented changes to existing applications to meet project requirements.',
          'Wrote unit tests to maintain code integrity.',
          'Involved in the design and discovery process for the application to finalize all requirements and designs before starting development.',
          'Responsible for creating technical specifications and reports for new features.',
          'Worked on setting up the architecture of the application for both backend and frontend.',
          'Developed a core payment processing module handling $2M+ daily transactions.',
          'Optimized database queries, reducing response times by 30%.',
          'Introduced automated testing, increasing coverage from 45% to 85%.',
        ],
      },
      {
        title: 'Associate Software Engineer',
        startDate: 'Sept 2018',
        accomplishments: [
          'Rewrote the file upload and download service in S3 bucket using presigned URLs instead of public file upload.',
          'Designed database tables for new requirements in collaboration with the Tech Lead.',
          'Wrote unit tests using RSpec and strictly followed the conventions set in the project.',
          'Restructured jQuery code to use class definitions instead of haphazardly using `$("class")` throughout the JS file.',
          'Optimized database queries, reducing response times from 10s to 1s.',
          'Introduced automated testing, increasing coverage from 45% to 80% and beyond.',
        ],
      },
      {
        title: 'Software Engineer Intern',
        startDate: 'July 2018',
        accomplishments: [
          'Learned the structuring of HTML components for writing clearer and more maintainable HTML code.',
          'Learned the standard way of writing CSS for elements.',
          'Learned vanilla JS from scratch and created HTML games and simple applications using only Vanilla JS.',
          'Created a basic post-comment API using Node.js, Express.js, and JWT for authorization.',
          'Created a frontend application for the post-comment API using React.js and Axios for API calls.',
          'Learned about state management in React.js using Redux.',
        ],
      },
    ],
  },
  {
    company: 'FourMB',
    endDate: 'June 2018',
    startDate: 'Dec 2017',
    companyUrl: 'https://www.facebook.com/fourmb/',
    logo: '/fourMB.png',
    roles: [
      {
        title: 'Junior Ruby on Rails Developer',
        startDate: 'Dec 2017',
        accomplishments: [
          'Worked on implementing a payment service using the API provided by CommBank of Australia.',
          'Learned to write test code using RSpec for the payment service.',
          'Worked on generating invoices in PDF format using the Wicked PDF gem.',
        ],
      },
    ],
  },
]);

// Expertise skills
export const EXPERTISE_AREA = Object.freeze([
  {
    id: 1,
    name: 'Web Development',
    icon: 'mdi:web',
  },
  {
    id: 2,
    name: 'API Development',
    icon: 'mdi:api',
  },
  {
    id: 3,
    name: 'Mobile Development',
    icon: 'mdi:cellphone',
  },
  {
    id: 4,
    name: 'UI/UX Design',
    icon: 'mdi:pencil-ruler',
  },
  {
    id: 5,
    name: 'Performance Optimization',
    icon: 'mdi:speedometer',
  },
  {
    id: 6,
    name: 'Unit Testing',
    icon: 'mdi:test-tube',
  },
  {
    id: 7,
    name: 'System Design',
    icon: 'mdi:aws',
  },
]);

// Languages and tools
export const LANGUAGES_AND_TOOLS = Object.freeze({
  FRONTEND: [
    {
      name: 'HTML5',
      icon: 'mdi:language-html5',
    },
    {
      name: 'CSS3',
      icon: 'mdi:language-css3',
    },
    {
      name: 'JavaScript',
      icon: 'mdi:language-javascript',
    },
    {
      name: 'TypeScript',
      icon: 'mdi:language-typescript',
    },
    {
      name: 'React',
      icon: 'mdi:react',
    },
    {
      name: 'Next.js',
      icon: 'catppuccin:next',
    },
    {
      name: 'Vue.js',
      icon: 'mdi:vuejs',
    },
    {
      name: 'jQuery',
      icon: 'mdi:jquery',
    },
    {
      name: 'Tailwind',
      icon: 'mdi:tailwind',
    },
    {
      name: 'Bootstrap',
      icon: 'mdi:bootstrap',
    },
    {
      name: 'LitElement',
      icon: 'simple-icons:lit',
    },
    {
      name: 'Polymer.js',
      icon: 'mdi:polymer',
    },
  ],
  BACKEND: [
    {
      name: 'Node.js',
      icon: 'mdi:nodejs',
    },
    {
      name: 'Express.js',
      icon: 'lineicons:expressjs',
    },
    {
      name: 'Ruby on Rails',
      icon: 'mdi:language-ruby-on-rails',
    },
    {
      name: 'Python',
      icon: 'mdi:language-python',
    },
    {
      name: 'Micronaut',
      icon: 'simple-icons:micronaut',
    },
  ],
  LIBRARIES_AND_FRAMEWORKS: [
    {
      name: 'Redux',
      icon: 'cib:redux',
    },
    {
      name: 'React Query',
      icon: 'simple-icons:reactquery',
    },
    {
      name: 'Vuetify',
      icon: 'mdi:vuetify',
    },
    {
      name: 'MUI (Material-UI)',
      icon: 'simple-icons:mui',
    },
  ],
  DATABASES: [
    {
      name: 'MySQL',
      icon: 'cib:mysql',
    },
    {
      name: 'PostgreSQL',
      icon: 'cib:postgresql',
    },
    {
      name: 'MongoDB',
      icon: 'devicon-plain:mongodb-wordmark',
    },
    {
      name: 'Mongoose',
      icon: 'simple-icons:mongoose',
    },
    {
      name: 'Firebase',
      icon: 'cib:firebase',
    },
    {
      name: 'DynamoDB',
      icon: 'simple-icons:amazondynamodb',
    },
    {
      name: 'OracleDB',
      icon: 'simple-icons:oracle',
    },
  ],
  DEVOPS_AND_TOOLS: [
    {
      name: 'Git',
      icon: 'mdi:git',
    },
    {
      name: 'GitHub',
      icon: 'mdi:github',
    },
    {
      name: 'GitLab',
      icon: 'mdi:gitlab',
    },
    {
      name: 'AWS',
      icon: 'mdi:aws',
    },
    {
      name: 'Docker',
      icon: 'cib:docker',
    },
    {
      name: 'Nginx',
      icon: 'cib:nginx',
    },
    {
      name: 'CircleCI',
      icon: 'cib:circleci',
    },
    {
      name: 'Bash Script',
      icon: 'mdi:bash',
    },
  ],
  DESIGN_AND_TESTING: [
    {
      name: 'Figma',
      icon: 'cib:figma',
    },
    {
      name: 'Storybook',
      icon: 'simple-icons:storybook',
    },
    {
      name: 'Jest',
      icon: 'cib:jest',
    },
    {
      name: 'RSpec',
      icon: 'devicon:rspec',
    },
    {
      name: 'Sentry',
      icon: 'simple-icons:sentry',
    },
    {
      name: 'Datadog',
      icon: 'simple-icons:datadog',
    },
  ],
  COLLABORATION_TOOLS: [
    {
      name: 'Jira',
      icon: 'cib:jira',
    },
    {
      name: 'Trello',
      icon: 'cib:trello',
    },
    {
      name: 'Slack',
      icon: 'cib:slack',
    },
    {
      name: 'Microsoft Teams',
      icon: 'fluent-color:people-team-20',
    },
    {
      name: 'Zoom',
      icon: 'cib:zoom',
    },
    {
      name: 'Google Meet',
      icon: 'fluent:meet-now-24-filled',
    },
    {
      name: 'Confluence',
      icon: 'cib:confluence',
    },
    {
      name: 'Notion',
      icon: 'cib:notion',
    },
    {
      name: 'Miro',
      icon: 'cib:miro', // TODO: fix icon
    },

    // LUcid chart
  ],
  METHODOLOGIES: [
    {
      name: 'Agile Methodology',
      icon: 'iconoir:agile',
    },
    {
      name: 'Scrum',
      icon: 'iconoir:agile',
    },
    {
      name: 'Kanban',
      icon: 'bi:kanban',
    },
    {
      name: 'Pair Programming',
      icon: 'ion:people-circle',
    },
    {
      name: 'Code Reviews',
      icon: 'gg:git-pull',
    },
    {
      name: 'CI/CD',
      icon: 'famicons:git-merge',
    },
  ],
});

// Projects
export const PROJECTS = Object.freeze([
  {
    id: 1,
    github: '',
    projectUrl: 'https://paxsafe.com.au',
    title: 'Paxsafe',
    imageUrl: '/paxsafe.jpg',
    technologies: ['Ruby on Rails', 'jQuery', 'PostgreSQL', 'AWS'],
    tags: ['Booking'],
    description: `Paxsafe is an Australian-based company offering private apartment accommodations near Sydney's iconic Hyde Park. These apartments provide guests with a comfortable and centrally located stay.`,
    contributions: [
      'Integrated CommBank API for handling payments through ATM cards from the admin panel.',
      'Worked on generating downloadable invoices in PDF format using the Wicked PDF gem.',
      'Wrote unit tests using RSpec.',
    ],
    company: ['FourMB'],
  },
  {
    id: 2,
    github: '',
    projectUrl: 'https://www.languagescientific.com/',
    imageUrl: '/language-scientific.png',
    title: 'Language Scientific R3',
    technologies: ['Ruby on Rails', 'jQuery', 'PostgreSQL', 'AWS'],
    tags: ['Language Translation'],
    description:
      'Language Scientific is a U.S.-based company that provides specialized translation and localization services for medical, scientific, and technical industries. They deliver high-quality translations for medical documents, software localization, eLearning, and more.',
    contributions: [
      'Led the development team of 4 people.',
      'Worked on optimizing the Vendor list page, reducing loading time from 5 seconds to 0.5 seconds.',
      'Worked on visually representing each step of the file translation process for each project in the projects dashboard, adding the capability for users to view project details easily.',
      'Implemented the thread concept to import projects from .mer files from cron jobs, reducing import time by 20x.',
      'Worked on writing a CKEditor plugin to embed email attachments as inline images sent from email.',
      'Restructured jQuery to use ES6 classes for code readability and maintainability.',
      'Revamped the dashboard page to include all project steps and information in the dashboard with suitable colors for status and added the capability to navigate to a particular step directly from the dashboard.',
    ],
    company: ['Leapfrog', 'Language Scientific'],
  },
  {
    id: 3,
    github: '',
    projectUrl: 'https://informeddna.com',
    title: 'gWell.health',
    imageUrl: '/gwell.png',
    technologies: ['React', 'Redux', 'MongoDB', 'Strapi', 'Node.js', 'Docker', 'AWS', 'React Native'],
    tags: ['Health'],
    description:
      "gWell Health is a digital health, genomics, and wellness company focused on improving individuals' overall well-being by providing personalized wellness plans based on DNA analysis, health history, and lifestyle.",
    contributions: [
      'Involved in the Design and Discovery phase of the application and finalized the tech stack to be used for development.',
      'Led the development team of 7 members and defined the conventions to follow during development.',
      'Worked on application architecture design and database modeling with the help of experienced senior developers.',
      'Worked on the initial project setup and configured the application to use custom models with Mongoose to have common methods for data retrieval, maintaining consistency throughout the application.',
      'Worked with the cross-platform team to leverage the maximum capacity of the entire team.',
      'Worked closely with the Design Team and Client to improve user experience and understand the value of the product.',
      'Worked with the DevOps team to set up the application infrastructure.',
      'Introduced the facade pattern to save common information into two databases with necessary manipulation for the mobile app to consume.',
      'Documented all possible APIs required and possible payload formats using OpenAPI before starting development, helping the team understand the exact purpose of each API.',
      "Added the patient's well-being graph to visualize the wellness score of the patient based on the survey form filled out by the patient through the mobile application.",
    ],
    company: ['Leapfrog', 'gWell'],
  },
  {
    id: 4,
    github: '',
    projectUrl: 'https://innovaccer.com/',
    title: 'Innovaccer Referral',
    imageUrl: '/innovaccer.png',
    technologies: ['React', 'Redux', 'MongoDB', 'AWS', 'Django'],
    tags: ['Health'],
    description:
      'Innovaccer Referral Management is a web application developed by Leapfrog Technologies in collaboration with Innovaccer Inc. The application is used to connect or refer patients to different doctors/specialists in various medical fields within or outside the network, according to the needs of the patients.',
    company: ['Leapfrog', 'Innovaccer'],
    contributions: [
      'Led the frontend team and worked with teams from different geographical locations.',
      'Introduced Finite State Machine implementation as the patient detail page was heavily driven by the status of the patient.',
      'Wrote GitLab CI/CD to address deployment to the temporary server after a pull request is created in coordination with the DevOps team.',
      'Effectively used the design system they already had in place to maintain design consistency throughout the application.',
    ],
  },
  {
    id: 5,
    github: '',
    projectUrl: 'https://aspen-elements.web.app/?path=/story/components-asp-kanban-board--board',
    title: 'Aspen Elements',
    imageUrl: '/aspen-elements.png',
    technologies: ['LitElement', 'Storybook', 'Design System', 'MUI'],
    description:
      'A design system designed for developing modular and reusable UI components tailored for drug discovery. This incorporates Material UI web components for consistent and intuitive design, focusing on creating customizable and accessible UI elements. Aspen Elements streamlines the development of scalable, user-friendly interfaces for complex drug discovery platforms.',
    company: ['Leapfrog', 'Aspen Bioscience'],
  },
  {
    id: 6,
    github: '',
    projectUrl: 'https://aspenbiosciences.com/products/pipeline/',
    title: 'Aspen Pipeline',
    imageUrl: '/aspen-pipeline.webp',
    technologies: ['LitElement', 'OracleDB', 'Micronaut', 'MUI', 'Drug Discovery'],
    description:
      'Aspen Pipeline is a web application aimed at providing scientists involved in the drug discovery process with a proper way to manage information systematically.',
    company: ['Leapfrog', 'Aspen Bioscience'],
    contributions: [
      'Led the frontend team of 12 members.',
      'Actively involved in the Design and Discovery (DND) process to gather requirements and sync with the project manager to break requirements into doable tasks.',
      'Introduced the concept of a design system and added Storybook for components and documentation to maintain design consistency across different projects of the organization.',
      'Introduced the concept of adding a schema for tables to control sorting, searching, filtering, and custom methods without needing to change the table code, giving developers full capability to customize the table with just a few more props.',
      'Integrated the feature to create JIRA tickets on the support board by adding a report feature on the error popup, which creates JIRA tickets with necessary information like URL, error traces, user info, etc., for easy debugging.',
    ],
  },
  {
    id: 7,
    github: '',
    projectUrl: 'https://trayt.health/',
    title: 'Trayt.Health',
    imageUrl: '/trayt.png',
    technologies: ['React', 'Redux', 'Node.js', 'DynamoDB', 'AWS'],
    tags: ['Health'],
    description:
      'Trayt is an AI-powered, multifactorial data analytics and clinical decision support platform that expands access to care and helps clinics dramatically improve diagnosis and treatment accuracy for patients with neuropsychiatric and medical health conditions.',
    company: ['Leapfrog', 'Trayt.Health'],
    contributions: [
      'Worked with a cross-functional team to better understand requirements and prioritize features accordingly.',
      'Introduced the concept of policy middleware for checking user access to perform certain actions on specific routes.',
      'Configured global error handling with Sentry and Datadog integration.',
      'Created the response page to show user engagement charts using Nivo charts, which received significant recognition from Texas and Vermont states.',
      'Added user flow diagrams to the documentation for one complex feature in the application, which took around 3-4 working days.',
      'Actively participated in knowledge-sharing sessions.',
      'Worked on creating the architecture design for the document upload feature using polymorphic associations to store documents related to multiple tables in a single place.',
    ],
  },
]);

export const OPENSOURCE_PROJECTS = Object.freeze([
  {
    id: 1,
    imageUrl: '/bharyang.webp',
    projectUrl: 'https://github.com/pratishshr/bharyang-vscode',
    title: 'bharyang-vscode',
    technologies: ['JavaScript', 'VSCode'],
    tags: ['Open Source'],
    description:
      'A VS Code extension for sorting lines by their length and grouping imports to maintain a ladder import structure, making code visually appealing.',
    contributions: ['Defined a keyboard shortcut to execute the sorting function in ascending and descending order.'],
  },
  {
    id: 2,
    projectUrl: 'https://github.com/surazregmi/litelement-extension',
    imageUrl: '/lit-element-extension.gif',
    title: 'LitElement-extension',
    technologies: ['JavaScript', 'VSCode'],
    tags: ['Open Source'],
    description: 'A VS Code extension for providing snippets to define a class or function for LitElement.',
    contributions: [
      'Added snippets for adding properties, classes, and functions for developers to write JSDoc immediately after defining them.',
    ],
  },
  {
    id: 3,
    projectUrl: 'https://github.com/kritish-dhaubanjar/dynamodb-dashboard',
    imageUrl: '/dynamodb-dashboard.png',
    title: 'DynamoDB-dashboard',
    technologies: ['Vue.js', 'DynamoDB', 'Docker', 'AWS'],
    tags: ['Open Source'],
    description: 'A web application for viewing local and remote DynamoDB data.',
    contributions: [
      'Worked closely with the author to define requirements and request features.',
      'Provided feedback to the author and requested improvements.',
      'Requested the feature to restore the local database from a remote database, with the ability to back up specific tables.',
      'Introduced the event emitter pattern to handle backing up database tables (a few tables at once) to avoid frequent failures when using `Promise.all` for backing up all tables at once.',
    ],
  },
]);

export const CERTIFICATIONS = Object.freeze([
  {
    title: 'AWS Certified Solutions Architect Associate',
    issuer: 'Amazon Web Services',
    date: 'Dec 29, 2024',
    description: 'Demonstrated expertise in designing systems on AWS.',
    link: 'https://www.credly.com/badges/c9095c60-ad00-4aba-a110-98e45d1ac163',
    file: '/certifications/AWS.pdf',
  },
  {
    title: 'Communication Training',
    issuer: 'Leapfrog Technology Pvt. Ltd.',
    date: '',
    description: 'Advanced communication training for leaders.',
    link: '',
    file: '/certifications/communication-training.pdf',
  },
  {
    title: 'Datadog 101: Developer',
    issuer: 'Datadog',
    date: '',
    description: 'Datadog 101: Developer',
    link: '',
    file: '/certifications/datadog-101.pdf',
  },
  {
    title: 'Introduction to Observability',
    issuer: 'Datadog',
    date: '',
    description: 'Introduction to Observability',
    link: '',
    file: '/certifications/datadog-observability.pdf',
  },
]);
