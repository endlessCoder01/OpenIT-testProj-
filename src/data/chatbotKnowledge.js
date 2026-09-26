import { company, services } from './openitContent';

export const chatbotKnowledge = {
  company: {
    description: 'OpenIT is a family-run technology business founded in 2005 in Marondera, Zimbabwe.',
    story: company.story,
    address: company.address,
    phone: company.phone,
    website: company.website,
    services: services.map((item) => item.title),
    team: ['Jarod Berry', 'Russel Berry', 'Jo Berry', 'Paul Mpofu'],
  },
  serviceMap: services.reduce((acc, service) => {
    acc[service.title.toLowerCase()] = service.description;
    return acc;
  }, {}),
  safeNavigation: {
    fallback: 'I can help with OpenIT’s services, location, contact details, team and navigation. Please rephrase your question or contact the OpenIT team.',
  },
};
