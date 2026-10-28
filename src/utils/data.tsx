import { nanoid } from 'nanoid';

import icoCss from '../assets/ico-CSS3.svg';
import icoGit from '../assets/ico-Git.svg';
import icoGitHub from '../assets/ico-GitHub.svg';
import icoGraphQL from '../assets/ico-GraphQL.svg';
import icoHTML5 from '../assets/ico-HTML5.svg';
import icoJavaScript from '../assets/ico-JavaScript.svg';
import icoNext from '../assets/ico-Next.js.svg';
import icoPostgresSQL from '../assets/ico-PostgresSQL.svg';
import icoPrisma from '../assets/ico-prisma.svg';
import icoReact from '../assets/ico-React.svg';
import icoTailwind from '../assets/ico-tailwind.svg';
import icoTypeScript from '../assets/ico-TypeScript.svg';
import icoVercel from '../assets/ico-vercel.svg';
import icoVsCode from '../assets/ico-vsCode.svg';
import icoRestApi from '../assets/ico-restApi.svg';
import icoVite from '../assets/ico-vite.svg';
import icoSupabase from '../assets/ico-supabase.svg';
import icoClerk from '../assets/ico-clerk.svg';
import icoFigma from '../assets/ico-figma.svg';
import icoContent from '../assets/ico-contentful.svg';
import icoShopify from '../assets/ico-shopify.svg';
import icoWordPress from '../assets/ico-wordpress.svg';
import icoConvert from '../assets/ico-convert.svg';
import icoAbTest from '../assets/ico-abtest.svg';
import icoBem from '../assets/ico-bem.svg';
import icoBootstrap from '../assets/ico-bootstrap.svg';
import icoPhp from '../assets/ico-php.svg';
import icoAcf from '../assets/ico-acf.svg';
import icoDivi from '../assets/ico-divi.svg';
import icoWoo from '../assets/ico-woo.svg';
import { AboutItem, ResumeData } from './types';

export const links = [
  { href: '/#about', text: 'About', id: 'about' },
  { href: '/#experience', text: 'Experience', id: 'experience' },
  { href: '/#projects', text: 'Projects', id: 'projects' },
  { href: '/#contact', text: 'Contact', id: 'contact' },
];

export const aboutData: AboutItem[] = [
  {
    id: 'skills',
    label: 'skills',
    title: 'Skills Stack',
    description: [
      {
        type: 'skills',
        content: [
          {
            id: 'cro',
            title: 'CRO & Platforms',
            skills: [
              { name: 'Shopify Liquid', icon: icoShopify },
              { name: 'Convert.com', icon: icoConvert },
              { name: 'A/B Testing', icon: icoAbTest },
              { name: 'BEM', icon: icoBem },
              { name: 'Bootstrap', icon: icoBootstrap },
            ],
          },
          {
            id: 'wordpress',
            title: 'WordPress & PHP',
            skills: [
              { name: 'WordPress', icon: icoWordPress },
              { name: 'PHP', icon: icoPhp },
              { name: 'WordPress Themes', icon: icoWordPress },
              { name: 'Custom Plugins', icon: icoWordPress },
              { name: 'ACF', icon: icoAcf },
              { name: 'DIVI', icon: icoDivi },
              { name: 'WooCommerce', icon: icoWoo },
            ],
          },
          {
            id: 'frontend',
            title: 'Frontend Development',
            skills: [
              { name: 'React', icon: icoReact },
              { name: 'Next.js', icon: icoNext },
              { name: 'Tailwind CSS', icon: icoTailwind },
              { name: 'Framer Motion', icon: icoReact },
              { name: 'TypeScript', icon: icoTypeScript },
              { name: 'JavaScript', icon: icoJavaScript },
              { name: 'HTML', icon: icoHTML5 },
              { name: 'CSS', icon: icoCss },
              { name: 'Rest API', icon: icoRestApi },
            ],
          },
          {
            id: 'backend',
            title: 'Backend Development',
            skills: [
              { name: 'Prisma', icon: icoPrisma },
              { name: 'PostgreSQL', icon: icoPostgresSQL },
              { name: 'GraphQL', icon: icoGraphQL },
              { name: 'Supabase', icon: icoSupabase },
            ],
          },
          {
            id: 'tools',
            title: 'Tech Tools',
            skills: [
              { name: 'VS Code', icon: icoVsCode },
              { name: 'Vercel', icon: icoVercel },
              { name: 'Vite', icon: icoVite },
              { name: 'Clerk', icon: icoClerk },
              { name: 'Figma', icon: icoFigma },
              { name: 'Contentful', icon: icoContent },
              { name: 'Git', icon: icoGit },
              { name: 'GitHub', icon: icoGitHub },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'about-me',
    label: 'about me',
    title: 'Frontend developer, 10+ years in',
    description: [
      {
        type: 'text',
        content:
          "I'm a frontend developer with over a decade of experience building responsive, production-ready websites across Shopify, WordPress and modern JavaScript stacks. I turn designs, business goals and experiment ideas into clean code that works in every browser, and I'm most at home on complex, dynamic sites where the details matter.",
      },
    ],
  },
  {
    id: 'whats-going-on',
    label: "what's going on?",
    title: 'Building experiments that move the needle',
    description: [
      {
        type: 'text',
        content:
          "Right now I'm a CRO developer at Scalemessaging, building A/B tests and custom Shopify sections on complex storefronts and single-page apps. Outside work I keep sharpening my React, Next.js and TypeScript skills, and I'm building AI-assisted workflows that turn Figma designs into production sites faster.",
      },
    ],
  },
  {
    id: 'site-info',
    label: 'site info',
    title: 'Tech stack',
    description: [
      {
        type: 'text',
        content:
          "This portfolio showcases my web development expertise and commitment to creating high-quality websites. Feel free to reach out if you're interested in having one built as well. Here’s the tech stack I used for this project:",
      },
      {
        type: 'list',
        content: [
          'React: Efficient component-based architecture.',
          'TypeScript: Error prevention and code readability.',
          'Shadcn/ui: Customizable, responsive components.',
          'Tailwind CSS: Stylish designs without custom CSS.',
          'Vite + React Router: Fast builds and a lazy-loaded resume page.',
          'Contentful + TanStack Query: Projects managed in a CMS, cached on the client.',
        ],
      },
      {
        type: 'text',
        content: "I've also prioritized:",
      },
      {
        type: 'list',
        content: ['Accessibility.', 'Clean, modern UI.', 'Seamless UX.'],
      },
    ],
  },
];

export const timelineElements = [
  {
    id: 1,
    title: 'Freelance Web Developer',
    company: 'Upwork | Remote',
    description: ['Started freelancing as a web developer on Upwork.'],
    date: '2012',
    icon: 'school',
    color: 'blue',
    tech: ['JavaScript', 'HTML', 'CSS', 'PHP', 'WordPress'],
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Zeald | New Zealand | Remote',
    description: [
      'Maintained and improved the in-house CMS websites.',
      'Developed new user-facing features using HTML, CSS, JavaScript, and other relevant frameworks/libraries.',
      'Optimized websites for speed and scalability.',
      'Tested and debugged issues across different browsers and platforms.',
    ],
    date: '2014 - 2017',
    icon: 'work',
    color: 'purple',
    tech: ['JavaScript', 'HTML', 'CSS', 'PHP', 'CMS'],
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'Dash10 Manage Services | Davao, Philippines',
    description: [
      'Built websites from Figma into semantic HTML5/CSS3/JavaScript, integrated into an in-house CMS or WordPress/Shopify.',
      'WordPress custom theme development.',
      'Ensured the technical feasibility of UI/UX designs and adherence to SEO principles.',
      'Tested and debugged issues across different browsers and platforms.',
    ],
    date: '2017 - 2024',
    icon: 'work',
    color: 'purple',
    tech: ['JavaScript', 'HTML', 'CSS', 'PHP', 'WordPress', 'Shopify', 'Figma'],
  },
  {
    id: 4,
    title: 'Freelance Web Developer',
    company: 'Upwork | Remote',
    description: [
      'Build and optimize web applications using React.js and WordPress.',
      'Develop custom React components and manage state with Redux Toolkit.',
      'Customize WordPress themes and build custom JavaScript solutions — search features and API integrations.',
    ],
    date: '2024 - Present',
    icon: 'work',
    color: 'purple',
    tech: ['React', 'Redux Toolkit', 'Tailwind CSS', 'WordPress', 'JavaScript'],
  },
  {
    id: 5,
    title: 'CRO Developer',
    company: 'Scalemessaging | Remote',
    description: [
      'Build and deploy A/B tests and conversion-focused experiments using JavaScript, HTML, CSS, and Shopify Liquid.',
      'Develop custom Shopify theme sections and components based on CRO requirements.',
      'Implement experiments on complex Shopify, SPA, and JavaScript-heavy sites, including dynamically rendered content.',
      'Implement conversion tracking and QA experiments across desktop and mobile, including iOS Safari.',
    ],
    date: '2025 - 2026',
    icon: 'work',
    color: 'purple',
    tech: ['JavaScript', 'Shopify Liquid', 'Convert.com', 'A/B Testing', 'HTML', 'CSS'],
  },

  //  Personal Projects and Skills Development

  // July 2023 - Sept 2023: Developed a Personal Portfolio Website
  // - Created a dynamic portfolio using React, Next.js, and Tailwind CSS.
  // - Improved website performance, achieving a 95+ Lighthouse score.
  // - Integrated a blog feature to share development insights.

  // Oct 2023 - Dec 2023: Mastered Redux Toolkit and React Query
  // - Built a product filtering system for a mock e-commerce app.
  // - Implemented Redux-persist for state management in real-world scenarios.

  // Jan 2024: Learning Stripe API Integration
  // - Developing a payment gateway for an e-commerce site.
  // - Exploring secure payment workflows and error handling.
];

// export const skillsData = [
//   {
//     id: nanoid(),
//     title: 'Frontend Development',
//     skills: [
//       { name: 'React', icon: icoReact },
//       { name: 'Next.js', icon: icoNext },
//       { name: 'Tailwind CSS', icon: icoTailwind },
//       { name: 'Framer Motion', icon: icoReact },
//       { name: 'TypeScript', icon: icoTypeScript },
//       { name: 'JavaScript', icon: icoJavaScript },
//       { name: 'HTML', icon: icoHTML5 },
//       { name: 'CSS', icon: icoCss },
//       { name: 'Rest API', icon: icoRestApi },
//     ],
//   },
//   {
//     id: nanoid(),
//     title: 'Backend Development',
//     skills: [
//       { name: 'Prisma', icon: icoPrisma },
//       { name: 'PostgreSQL', icon: icoPostgresSQL },
//       { name: 'GraphQL', icon: icoGraphQL },
//       { name: 'Supabase', icon: icoSupabase },
//     ],
//   },
//   {
//     id: nanoid(),
//     title: 'Tech tools',
//     skills: [
//       { name: 'VS Code', icon: icoVsCode },
//       { name: 'Vercel', icon: icoVercel },
//       { name: 'Vite', icon: icoVite },
//       { name: 'Clerk', icon: icoClerk },
//       { name: 'Figma', icon: icoFigma },
//       { name: 'Contentful', icon: icoContent },
//       { name: 'Git', icon: icoGit },
//       { name: 'GitHub', icon: icoGitHub },
//     ],
//   },
// ];

// Resume — rendered at /resume and mirrored by public/resume.pdf.
// Deliberately omits the phone number, street address and the referee block that
// appear on the private PDF: this page is public and indexable.
export const resumeData: ResumeData = {
  name: 'Mark Phillip Las Piñas',
  role: 'Frontend Developer / CRO Developer',
  summary:
    'Frontend Developer with 10+ years of experience delivering responsive, production-ready web experiences across Shopify, WordPress, and modern JavaScript environments. Strong background in frontend development, Shopify Liquid, and CRO/A/B testing, with experience turning designs, business requirements, and experimentation hypotheses into reliable implementations. Skilled in working with complex and dynamic websites while maintaining clean, scalable, and cross-browser compatible code.',
  location: 'Bislig City, Philippines',
  email: 'mpclaspinas@gmail.com',
  pdfUrl: '/resume.pdf',
  skills: [
    'HTML/CSS',
    'JavaScript / React JS',
    'React / TypeScript',
    'TailwindCSS / DaisyUI / Shadcn',
    'Bootstrap',
    'BEM Methodology',
    'WordPress Custom Development / PHP / MySQL',
    'Shopify Liquid / Convert.com CRO tooling',
    'Figma to HTML/CSS/JavaScript',
    'SEO Principles',
    'Git/GitHub',
  ],
  experience: [
    {
      id: nanoid(),
      title: 'CRO Developer',
      company: 'Scalemessaging | Remote',
      date: '2025 - 2026',
      responsibilities: [
        'Build and deploy A/B tests and conversion-focused experiments using JavaScript, HTML, CSS, and Shopify Liquid.',
        'Develop custom Shopify theme sections, components, and page modifications based on CRO requirements.',
        'Implement experiments on complex Shopify, SPA, and JavaScript-heavy websites, including dynamically rendered and hydrated content.',
        'Implement conversion tracking and experiment goals to ensure user interactions are properly measured.',
        'Troubleshoot dynamic DOM elements, third-party integrations, responsive layouts, and browser-specific issues.',
        'QA experiments across desktop and mobile devices, including iOS Safari, before and after deployment.',
        'Write reusable and maintainable experiment code while ensuring variations are idempotent and resilient to dynamic page changes.',
        'Collaborate with the wider CRO team to improve experiment development workflows and deliver tests efficiently.',
      ],
    },
    {
      id: nanoid(),
      title: 'Freelance Web Developer',
      company: 'Upwork | Remote',
      date: '2024 - Present',
      responsibilities: [
        'Build and optimize web applications using React.js and WordPress.',
        'Develop custom React components and manage state with Redux Toolkit.',
        'Enhance UI/UX with Tailwind CSS.',
        'Customize WordPress themes and develop custom JavaScript solutions — search features and API integrations — to extend WordPress functionality.',
      ],
    },
    {
      id: nanoid(),
      title: 'Frontend Developer',
      company: 'Dash10 Manage Services | Davao, Philippines',
      date: '2017 - 2024',
      responsibilities: [
        'Collaborate with the project manager and designer to build websites from Figma into semantic HTML5/CSS3/JavaScript, incorporated into an in-house CMS or WordPress/Shopify.',
        'WordPress custom theme development.',
        'Ensure the technical feasibility of UI/UX designs.',
        'Good understanding of SEO principles and ensuring that applications adhere to them.',
        'Test and debug issues across different browsers and platforms.',
        'Develop new user-facing features using HTML, CSS, JavaScript, and other relevant frameworks/libraries.',
      ],
    },
    {
      id: nanoid(),
      title: 'Frontend Developer',
      company: 'Zeald | New Zealand | Remote',
      date: '2014 - 2017',
      responsibilities: [
        'Maintain and improve the in-house CMS websites.',
        'Develop new user-facing features using HTML, CSS, JavaScript, and other relevant frameworks/libraries.',
        'Test and debug issues across different browsers and platforms.',
      ],
    },
  ],
  education: [
    {
      id: nanoid(),
      qualification: 'BS in Information Technology',
      institution: 'De la Salle John Bosco College',
      date: '2007 - 2011',
    },
    {
      id: nanoid(),
      qualification: 'High School',
      institution: 'Saint Vincent de Paul College',
      date: '2001 - 2005',
    },
  ],
};
