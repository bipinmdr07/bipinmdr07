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

// social media details with icon
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
    name: 'Github',
    icon: 'mdi:github',
    profileLink: 'https://github.com/bipinmdr07',
  },
]);

// my experiences
export const EXPERIENCES = Object.freeze([
  {
    company: 'Leapfrog Technology Nepal Pvt. Ltd.',
    startDate: '2018 Sept',
    endDate: 'Present',
    companyUrl: 'https://www.lftechnology.com/',
    logo: '/lf-logo.jpeg',
    roles: [
      {
        title: 'Senior Software Engineer',
        startDate: '2022 Jan',
        accomplishments: [
          'Lead the team for developing the application.',
          'Involve in the design and discovery process for application.',
          'Direct communication with clients to gather requirements and discuss the architecture of the application.',
          'Work with DevOps team for infrastructure setup and configure CI/CD.',
          'Led migration to microservices architecture reducing API latency by 40%.',
          'Mentored 15+ junior developers through code reviews and pair programming.',
          'Worked with DevOps team to implement CI/CD pipeline for pull request branch to improve the code review process.',
        ],
      },
      {
        title: 'Software Engineer',
        startDate: '2020 Jan',
        accomplishments: [
          'Design, build and maintain efficient, reusable, and reliable software.',
          'Designing and developing business logic using REST APIs in Express JS.',
          'Implementing new software features and maintaining existing features.',
          'Refactoring, debugging, testing, and implementing changes to existing applications to meet project requirements.',
          'Writing unit test for maintaining code integrity.',
          'Involve in the design and discovery process for application to finalize all the requirements and design before.',
          'starting the development of the application.',
          'Responsible for creating technical specifications and reports for new features.',
          'Worked on setting up the architecture of the application for both backend and frontend.',
          'Developed core payment processing module handling $2M+ daily transactions.',
          'Optimized database queries reducing response times by 30%.',
          'Introduced automated testing coverage increasing from 45% to 85%.',
        ],
      },
      {
        title: 'Associate Software Engineer',
        startDate: '2018 Sept',
        accomplishments: [
          'Rewrite the file upload and download service in S3 bucket using the presigned URL instead of using the public file upload.',
          'Designing of a database table for new requirements in collaboration with the Tech lead.',
          'Write unit tests using RSpec and strictly follow the convention set in the project.',
          'Remodel the structure of jQuery code to use the class definition instead of haphazardly using the $("class") all over the js file.',
          'Optimized database queries reducing response times from 10s to 1s',
          'Introduced automated testing coverage increasing from 45% to 80% and more.',
        ],
      },
      {
        title: 'Software Engineer Intern',
        startDate: '2018 July',
        accomplishments: [
          'Learned the structuring of the HTML components for writing more clear and maintainable HTML code.',
          'Learned the standard way of writing the CSS of the element.',
          'Learned the vanilla JS from scratch and created the HTML games and simple applications using only Vanilla JS.',
          'Created a basic post comment API using NodeJS, ExpressJS, JWT for authorization.',
          'Created a FrontEnd application for post comment API using ReactJs, Axios for API call.',
          'Learned about state management in ReactJs using redux.',
        ],
      },
    ],
  },
  {
    company: 'FourMB',
    endDate: '2018 June',
    startDate: '2017 Dec',
    companyUrl: 'https://www.facebook.com/fourmb/',
    logo: '/fourMB.png',
    roles: [
      {
        title: 'Junior Ruby on Rails developer',
        startDate: '2017 Dec',
        accomplishments: [
          'Worked on implementation of Payment service using API provided by CommBank of Australia.',
          'Learned to write the test code using RSpec for payment service.',
          'Worked on generating Invoice in pdf format using wicked pdf gem.',
        ],
      },
    ],
  },
]);

// my service details
export const SERVICES = Object.freeze([
  {
    id: 1,
    name: 'UX Design',
    icon: 'mdi:palette',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl.',
  },
  {
    id: 2,
    name: 'Web Development',
    icon: 'mdi:web',
    description: '* Aenean in sem ac leo mollis blandit.',
  },
  {
    id: 3,
    name: '3D Design',
    icon: 'mdi:unity',
    description: '* Aenean in sem ac leo mollis blandit.',
  },
]);

// expertise skills
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

// languages and tools
export const LANGUAGES_AND_TOOLS = Object.freeze([
  {
    name: 'HTML5',
    icon: 'mdi:language-html5',
  },
  {
    name: 'CSS3',
    icon: 'mdi:language-css3',
  },
  {
    name: 'Bootstrap',
    icon: 'mdi:bootstrap',
  },
  {
    name: 'Tailwind',
    icon: 'mdi:tailwind',
  },
  {
    name: 'JQuery',
    icon: 'mdi:jquery',
  },
  {
    name: 'Javascript',
    icon: 'mdi:language-javascript',
  },
  {
    name: 'Typescript',
    icon: 'mdi:language-typescript',
  },
  {
    name: 'React',
    icon: 'mdi:react',
  },
  {
    name: 'Redux',
    icon: 'cib:redux',
  },
  {
    name: 'React Query',
    icon: 'simple-icons:reactquery',
  },
  {
    name: 'NextJS',
    icon: 'catppuccin:next',
  },
  {
    name: 'VueJS',
    icon: 'mdi:vuejs',
  },
  {
    name: 'Vuetify',
    icon: 'mdi:vuetify',
  },
  {
    name: 'PolymerJS',
    icon: 'mdi:polymer',
  },
  {
    name: 'LitElement',
    icon: 'simple-icons:lit',
  },
  {
    name: 'Ruby',
    icon: 'mdi:language-ruby',
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
    name: 'Nodejs',
    icon: 'mdi:nodejs',
  },
  {
    name: 'ExpressJS',
    icon: 'lineicons:expressjs',
  },
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
    name: 'Nginx',
    icon: 'cib:nginx',
  },
  {
    name: 'CircleCI',
    icon: 'cib:circleci',
  },
  {
    name: 'Jest',
    icon: 'cib:jest',
  },
  {
    name: 'Bash Script',
    icon: 'mdi:bash',
  },
  {
    name: 'Figma',
    icon: 'cib:figma',
  },
]);

// PROJECTS
export const PROJECTS = Object.freeze([
  {
    id: 1,
    github: '',
    projectUrl: 'https://paxsafe.com.au',
    title: 'Paxsafe',
    imageUrl: '/paxsafe.jpg',
    technologies: ['Ruby on Rails', 'jQuery', 'PostgreSQL', 'AWS'],
    tags: ['Booking'],
    description: `Paxsafe is an Australian base company offereing the private apartment accomodations near to Sydney's iconic Hyde Park.
This apartments provide guests with a comfortable and centrally located stay.`,
    contributions: [
      'Integration of Commbank API for handling the payment through ATM cards from admin panel.',
      'Worked on generating downloadable Invoice in PDF format using wickedpdf gem.',
      'Write unit tests using RSpec.',
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
      'Language Scientific is a U.S.-based company that provided specialized translation and localization service for medical, scientific, and technical industries. They delivery high-quality translations for medical documents, software localization, eLearning and more.',
    contributions: [
      'Lead the development team of 4 people.',
      'Worked on optimization of the Vendor list page, reducing the loading time from 5 sec to 0.5 sec.',
      'Worked on visually representing the each step of the file translation process for each project in the projects dashboard, adding the capability for user to view project details easily.',
      'Implemented the thread concept to import project from .mer files from cron jobs, reducing the import time by 20x times.',
      'Worked on writing the CKeditor plugin to embed the email attachments as inline image sent from email.',
      'Remodel the structure of jQuery to use ES6 class for code readability and maintainability of the code.',
      'Revamped the dashboard page to include all the project steps and infromation in the dashboard with suitable color for status and add capability to navigate to particular step directly from dashbaord.',
    ],
    company: ['Leapfrog', 'Language Scientific'],
  },
  {
    id: 3,
    github: '',
    projectUrl: 'https://informeddna.com',
    title: 'gWell.health',
    imageUrl: '/gwell.png',
    technologies: ['React', 'Redux', 'MongoDB', 'strapi', 'nodejs', 'docker', 'AWS', 'React Native'],
    tags: ['Health'],
    description:
      "gWell Health is a digital health, genomics, and wellness company focused on improving individuals' overall well-bing by providing personalized wellness plans based on DNA analysis, health history, and lifestyle.",
    contributions: [
      'Involved in the Design and Discovery phase of the application and finalize the tech stack to be used for development.',
      'Lead the development team of 7 members and define the conventions to follow during development.',
      'Worked on application architecture design, and database modeling taking help from experiences senior developer.',
      'Worked on initial project setup and setup the application to use the custom model with mongoose to have common methods for data retrieval maintaining the consistency throughout the application',
      'Worked with cross-platform team and collaborate to leverage the maximum capacity of the whole team.',
      'Worked closely with Design Team and Client to improve the user experience, and understand the value of the product.',
      'Worked with DevOps team to setup the application infrastructure.',
      'Introduced the facade pattern to save common information into two databases with necessary manipulation for mobile app to consume.',
      'Document all possible API required and possible payload format using openAPI before starting the development, helping the team to know the exact purpose of each API.',
      "Added the patient's well being graph to visualize the wellness score of the patient on the basis of survey form filled by patient through mobile application.",
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
      'Innovaccer referral management is a web application developed by Leapfrog Technologies in collaboration with Innovaccer Inc. The application is used to connect or refer patients to different doctors/specialists in different medical fields inside for outside network, according to the needs of the patients.',
    company: ['Leapfrog', 'Innovaccer'],
    contributions: [
      'Lead the front end team and work with team from different geographical location.',
      'Introduced the Finite State Machine implementation as the patient detai page was heavely driven by the status of the patient.',
      'Wrote the gitlab CI/CD to address the deployment to the temporary server after pull request is created in coordication with the DevOps team',
      'Effectively used the design system they already had in place to maintain the design consistency throughout the application',
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
    projectUrl: ' https://aspenbiosciences.com/products/pipeline/',
    title: 'Aspen Pipeline',
    imageUrl: '/aspen-pipeline.webp',
    technologies: ['LitElement', 'OracleDB', 'Micronaut', 'MUI', 'Drug Discovery'],
    description:
      'Aspen Pipeline is a web application aims to provide the scientist involved in drug discovery process with the proper way to manage the information in a systematic way.',
    company: ['Leapfrog', 'Aspen Bioscience'],
    contributions: [
      'Lead the frontend team of 12 members',
      'Actively involved in the design and discovery (DND) process to gather the requirements and sycn with project manager to break the requirements into doable tasks.',
      'Introduced the concept of design system and add storybook for the components and documentations to maintain the design consistency across the different projects of organization.',
      'Introduced the concept of adding the schema for tablel to control the sorting, searching, filtering, and custom methods without needing to change the table code, giving developer full capability to customize the table just with few more props.',
      'Integrate the feature to create JIRA ticket on support board by adding the report feature on error popup, which create JIRA ticket with necessary information like URL, error traces, user info, etc for eacy debugging.',
    ],
  },
  {
    id: 7,
    github: '',
    projectUrl: 'https://trayt.health/',
    title: 'Trayt.Health',
    imageUrl: '/trayt.png',
    technologies: ['React', 'Redux', 'nodejs', 'Dynamodb', 'AWS'],
    tags: ['Health'],
    description:
      'Trayt is an AI-powered, multifactorial data analytics and clinical decision support platform that expands access to care and help clinics dramatically improve diagnosis and treatment accuracy for patients with neuropsychiatric and medical health conditions.',
    company: ['Leapfrog', 'Trayt.Health'],
    contributions: [
      'Worked with cross functional team to understand the requirement better and prioritize features accordingly',
      'Introduced the concept of policy middleware for checking the user access to perform certain action on specific route.',
      'Configure global error handline with sentry and datadog integration',
      'Made the response page to show the user engagement chart using Nivo charts which got lots of recognization from Texas and Vermont state.',
      'Add the user flow diagram in the documenation for one complex feature in the application, that took me around 3-4 working days.',
      'Actively participate in Knowledge sharing session.',
      'Worked on creating the architecture design for document upload feature using polymerphic association to store document related to multiple tables in single place',
    ],
  },
]);

export const OPENSOURCE_PROJECTS = Object.freeze([
  {
    id: 1,
    imageUrl: '/bharyang.webp',
    projectUrl: 'https://github.com/pratishshr/bharyang-vscode',
    title: 'bharyang-vscode',
    technologies: ['javascript', 'vscode'],
    tags: ['Open Source'],
    description:
      'A vs-code extension for sorting the line by its length and grouping the imports to maintain the ladder import structure and make code look visually appealing.',
    contributions: ['Define a keyboard shortcut to execute the sorting function in ascending and descenting order.'],
  },
  {
    id: 2,
    projectUrl: 'https://github.com/surazregmi/litelement-extension',
    imageUrl: '/lit-element-extension.gif',
    title: 'LitElement-extension',
    technologies: ['javascript', 'vscode'],
    tags: ['Open Source'],
    description: 'A vs-code extension for providing a snippet defining a class or function for lit-element.',
    contributions: [
      'Added the snippet for adding property, class and function for developer to write the jsdoc immediately after defining it',
    ],
  },
  {
    id: 3,
    projectUrl: 'https://github.com/kritish-dhaubanjar/dynamodb-dashboard',
    imageUrl: '/dynamodb-dashboard.png',
    title: 'Dynamodb-dashboard',
    technologies: ['vuejs', 'Dynamodb', 'docker', 'AWS'],
    tags: ['Open Source'],
    description: 'A web application for view the local and remote dynamodb data.',
    contributions: [
      'Work closely with the author to define the requirements and request features.',
      'Provider feedback to the author and asked for improvements.',
      'Requested the feature to restore local database from remote database, with ability to backup specific table.',
      'Introduce the event emitter pattern to handle the backing up of database tables (few tables at once) to avoid getting failed issue which was frequently faced when using Promise.all for backing up all tables at once',
    ],
  },
]);

export const CERTIFICATIONS = Object.freeze([
  {
    title: 'AWS Certified Solutions Architect Associate',
    issuer: 'Amazon Web Services',
    date: 'Dec 29, 2024',
    description: 'Demonstrated expertise in designing system on AWS.',
    link: 'https://www.credly.com/badges/c9095c60-ad00-4aba-a110-98e45d1ac163',
    file: '/certifications/AWS.pdf',
  },
  {
    title: 'Communication Training',
    issuer: 'Leapfrog Technology Pvt. Ltd.',
    date: '',
    description: 'Advanced communication training for Leaders',
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
