export const company = {
  name: 'OpenIT',
  motto: 'Empowering Innovation.',
  founded: 2005,
  origin: 'Marondera, Zimbabwe',
  address: '5 Sir James Denham Rd, Marondera, Zimbabwe',
  phone: '+263 8677 008983',
  website: 'openit.co.zw',
  story: 'Open IT is a family-run business founded in 2005 in Marondera. Over time, the company has grown to cover IT consultancy, networking, cybersecurity, security and renewable-energy services for businesses and organisations.',
  values: [
    'Trusted Expertise',
    'Family Values',
    'Tailored Solutions',
    'Reliability',
    'Ongoing Support',
    'Future-Focused Technology',
  ],
};

export const services = [
  {
    id: 'managed-it',
    title: 'Managed IT',
    icon: 'faDesktop',
    description: 'Reliable IT services to enhance business efficiency.',
    detail: 'Managed IT services support day-to-day operations, service continuity, and business efficiency.',
  },
  {
    id: 'security',
    title: 'Security',
    icon: 'faShieldHalved',
    description: 'Reliable security services.',
    detail: 'Security solutions help organisations protect people, property and digital assets.',
  },
  {
    id: 'network',
    title: 'Network',
    icon: 'faNetworkWired',
    description: 'Tailored network design solutions.',
    detail: 'Network services include structured design, resilience planning and tailored connectivity solutions.',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: 'faLock',
    description: 'Protection of data through trusted cybersecurity solutions.',
    detail: 'Cybersecurity services focus on helping businesses safeguard data and digital systems.',
  },
  {
    id: 'renewable-energy',
    title: 'Renewable Energy',
    icon: 'faSolarPanel',
    description: 'Sustainable energy solutions.',
    detail: 'Renewable-energy solutions support practical, sustainable and future-ready power strategies.',
  },
  {
    id: 'consultancy',
    title: 'Consultancy',
    icon: 'faLightbulb',
    description: 'Tailored IT consultancy solutions.',
    detail: 'Consultancy supports organisations with informed technology advice and practical planning.',
  },
];

export const teamMembers = [
  { id: 'jarod', name: 'Jarod Berry', role: 'Founder & MD', bio: 'Founder and managing director of OpenIT.', image: null },
  { id: 'russel', name: 'Russel Berry', role: 'Founder', bio: 'Co-founder supporting the business vision and direction.', image: null },
  { id: 'jo', name: 'Jo Berry', role: 'Accountant', bio: 'Account support for the business and financial operations.', image: null },
  { id: 'paul', name: 'Paul Mpofu', role: 'Cloud Guru', bio: 'Cloud expertise supporting digital infrastructure.', image: null },
];

export const projectPlaceholders = [
  {
    id: 'project-1',
    title: 'Business Infrastructure Upgrade',
    category: 'Managed IT',
    description: 'Project details coming soon. Placeholder project card prepared for future customer work.',
    technologies: ['Networking', 'Support'],
    image: require('../gallery/project 1.jpeg'),
  },
  {
    id: 'project-2',
    title: 'Cybersecurity Review',
    category: 'Cybersecurity',
    description: 'Project details coming soon. This project entry is a placeholder for future case studies.',
    technologies: ['Risk review', 'Security'],
    image: require('../gallery/project2.jpeg'),
  },
  {
    id: 'project-3',
    title: 'Sustainable Power Initiative',
    category: 'Renewable Energy',
    description: 'Project details coming soon. Placeholder content for future renewable-energy work.',
    technologies: ['Energy', 'Planning'],
    image: require('../gallery/solar panels on roof.jpeg'),
  },
];

export const testimonials = [
  {
    id: 't-1',
    quote: 'Client testimonial content will be added here as OpenIT updates its public client feedback.',
    name: 'Client placeholder',
    category: 'Placeholder testimonial',
  },
  {
    id: 't-2',
    quote: 'More feedback and case studies will be published as part of future OpenIT updates.',
    name: 'Future client',
    category: 'Placeholder testimonial',
  },
];

export const galleryItems = [
  { id: 'g-1', title: 'OpenIT workspace', category: 'Professional', image: require('../gallery/people at work.jpeg') },
  { id: 'g-2', title: 'Network readiness', category: 'Network', image: require('../gallery/project2.jpeg') },
  { id: 'g-3', title: 'Solar panel installation', category: 'Renewable Energy', image: require('../gallery/solar panels on roof.jpeg') },
  { id: 'g-4', title: 'Project highlight', category: 'Project', image: require('../gallery/project3.jpeg') },
  { id: 'g-5', title: 'Certifications', category: 'Partners', image: require('../gallery/Molex Certificate.png') },
  { id: 'g-6', title: 'Partner logos', category: 'Partners', image: require('../gallery/MikroTik-logo-2021.png') },
  { id: 'g-7', title: 'Sophos recognition', category: 'Partners', image: require('../gallery/sophos-global-partner-program-silver.png') },
  { id: 'g-8', title: 'Molex', category: 'Partners', image: require('../gallery/Molex_large.png') },
  { id: 'g-9', title: 'Close-up coding', category: 'Professional', image: require('../gallery/close-up-of-a-person-coding-on-a-laptop-showcasing-web-development-and-programming-concepts.jpeg') },
  { id: 'g-10', title: 'Solar concept', category: 'Concept', image: require('../gallery/solar system.jpeg') },
  { id: 'g-11', title: 'Project sample', category: 'Project', image: require('../gallery/project 1.jpeg') },
];

// Primary app logo
export const appLogo = require('../gallery/OpenITNoBackgroundFinal.png');

export const onboardingSteps = [
  {
    id: 'step-1',
    title: 'Empowering Innovation',
    subtitle: 'Discover technology-driven solutions built around your needs.',
    icon: 'faRocket',
  },
  {
    id: 'step-2',
    title: 'Technology That Works',
    subtitle: 'Explore IT, networking, cybersecurity, security and renewable-energy solutions.',
    icon: 'faBolt',
  },
  {
    id: 'step-3',
    title: 'Meet OpenIT',
    subtitle: 'Learn about our services, projects, team and approach.',
    icon: 'faUsers',
  },
  {
    id: 'step-4',
    title: 'We’re Here to Help',
    subtitle: 'Use the in-app assistant or contact our team whenever you need guidance.',
    icon: 'faHeadset',
  },
];

export const chatbotSuggestions = [
  'What services does OpenIT offer?',
  'Where is OpenIT located?',
  'How can I contact OpenIT?',
  'What is OpenIT?',
  'What cybersecurity services do you provide?',
  'Do you offer networking services?',
  'Do you offer renewable energy solutions?',
];
