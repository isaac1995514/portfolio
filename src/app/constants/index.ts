import creator from 'public/images/creator.png'
import backend from 'public/images/backend.png'
import web from 'public/images/web.png'
import dropbox from 'public/images/company/dropbox.svg'
import mstr from 'public/images/company/mstr.svg'
import ups from 'public/images/company/ups.svg'
import carrent from 'public/images/carrent.png'
import jobit from 'public/images/jobit.png'
import tripguide from 'public/images/tripguide.png'
import lifeIcon from 'public/images/life.png'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Fullstack Developer',
    icon: backend,
  },
  {
    title: 'Personal Trainer',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    imgUrl: '/images/tech/html.png',
  },
  {
    name: 'CSS 3',
    imgUrl: '/images/tech/css.png',
  },
  {
    name: 'JavaScript',
    imgUrl: '/images/tech/javascript.png',
  },
  {
    name: 'TypeScript',
    imgUrl: '/images/tech/typescript.png',
  },
  {
    name: 'React JS',
    imgUrl: '/images/tech/reactjs.png',
  },
  {
    name: 'Redux Toolkit',
    imgUrl: '/images/tech/redux.png',
  },
  {
    name: 'Tailwind CSS',
    imgUrl: '/images/tech/tailwind.png',
  },
  {
    name: 'Node JS',
    imgUrl: '/images/tech/nodejs.png',
  },
  {
    name: 'Three JS',
    imgUrl: '/images/tech/threejs.svg',
  },
  {
    name: 'git',
    imgUrl: '/images/tech/git.png',
  },
]

const experiences = [
  {
    title: 'Looking for my next challenge',
    company_name: 'The Journey of Life',
    icon: lifeIcon,
    iconBg: '#E6DEDD',
    date: 'May 2023 - Present',
    points: [],
  },
  {
    title: 'Frontend Product Engineer',
    company_name: 'Dropbox',
    icon: dropbox,
    iconBg: '#E6DEDD',
    date: 'June 2022 - May 2023',
    points: [
      'Optimized and enhanced user experience in multimedia file navigation by leading the redesign and implementation of audio/video file previews and editing in Dropbox web and mobile.',
      'Developed high-quality user interfaces for video editing and transcription, empowering users to make swift edits seamlessly and improving the overall usability of Dropbox Preview.',
      'Optimized web performance (TTVC and Core Web Vitals) in Preview by collaborating with cross-functional teams to strategically restructure critical resources while optimizing content rendering.',
      'Conducted engineering review meetings to evaluate, document, and outline engineering needs and actionable tasks for each sprint',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company_name: 'MicroStrategy',
    icon: mstr,
    iconBg: '#E6DEDD',
    date: 'Feb 2019 - May 2022',
    points: [
      'Orchestrated and implemented the user interface redesign in MicroStrategy Workstation to deliver a user-friendly experience in managing assets like users and subscriptions for BI reporting.',
      'Oversaw the development and maintenance of an internal React component library of 30+ UI components which supports feature development in 5+ teams across the company. (Typescript.',
      'Minimized regression issues in 8+ features by developing shared unit test and E2E automation infrastructures to verify common user workflows, ensuring a consistent customer experience.',
      'Enabled parallel data fetching and pagination in the UI workflow by designing and implementing REST API endpoints to retrieve project states from underlying SOAP based web services.',
      'Designed and optimized data retrieval workflows fetching 18000+ objects from backend service and reduced overall querying time by 45% on average.',
    ],
  },
  {
    title: 'Software Engineer Co-op',
    company_name: 'UPS',
    icon: ups,
    iconBg: '#E6DEDD',
    date: 'Feb 2018 - Nov 2018',
    points: [
      'Developed a cross-platform desktop application prototype to demonstrate the potential business use case of creating offline shipping labels at locations without internet connections.',
      'Implemented entity data models and MVC model bindings for the HTTP responses of UPS’s shipping history page for U.S. customers.',
      'Facilitated collection of the output of the Protractor automation script by developing a WPF application for the QA teams to enable output collection and visualization of the difference in execution results.',
      'Eliminated defects and bugs in software products by implementing automation test cases to validate the E2E workflow of shipment management.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
]

const overviewText =
  "👋 Hello, I'm Isaac, a Frontend Engineer/Software Engineer with over 5 years of hands-on experience crafting dynamic websites and web applications. My expertise revolves around Javascript/Typescript, and I'm well-versed in various frontend frameworks and tools, with React being a true passion of mine."

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  overviewText,
}
