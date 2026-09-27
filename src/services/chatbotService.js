import { chatbotKnowledge } from '../data/chatbotKnowledge';

const normalize = (input) => input.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();

export const answerQuestion = (rawQuestion) => {
  const question = normalize(rawQuestion || '');
  if (!question) {
    return chatbotKnowledge.safeNavigation.fallback;
  }

  if (question.includes('what is openit') || question.includes('who is openit') || question.includes('openit')) {
    return chatbotKnowledge.company.description;
  }

  if (question.includes('where') && (question.includes('located') || question.includes('address') || question.includes('find ') || question.includes('location'))) {
    return `OpenIT is located at ${chatbotKnowledge.company.address}. I can also open the Find Us map for you.`;
  }

  if (question.includes('contact') || question.includes('phone') || question.includes('call') || question.includes('website')) {
    return `OpenIT can be reached at ${chatbotKnowledge.company.phone}. Website: ${chatbotKnowledge.company.website}.`;
  }

  if (question.includes('service') || question.includes('offer')) {
    return `OpenIT lists Managed IT, Security, Network, Cybersecurity, Renewable Energy and Consultancy among its services.`;
  }

  if (question.includes('cybersecurity')) {
    return `OpenIT provides cybersecurity solutions focused on protecting data through trusted cybersecurity services.`;
  }

  if (question.includes('network')) {
    return `OpenIT offers network services, including tailored network design solutions.`;
  }

  if (question.includes('renewable') || question.includes('energy')) {
    return `OpenIT offers renewable-energy solutions as part of its sustainable energy services.`;
  }

  if (question.includes('team') || question.includes('founder') || question.includes('who')) {
    return `OpenIT’s publicly listed team includes Jarod Berry, Russel Berry, Jo Berry and Paul Mpofu.`;
  }

  if (question.includes('feedback') || question.includes('complaint')) {
    return 'You can submit feedback or a complaint from the More menu after completing the local demo authentication step.';
  }

  for (const [key, value] of Object.entries(chatbotKnowledge.serviceMap)) {
    if (question.includes(key)) {
      return `OpenIT offers ${value}`;
    }
  }

  return chatbotKnowledge.safeNavigation.fallback;
};
