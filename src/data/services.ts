import { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Dermatology Consultation',
    description: 'Expert care for acne, skin infections, fungal conditions, and eczema',
    price: 499,
    practitioner: 'lewis',
    category: 'dermatology'
  },
  {
    id: '2',
    name: 'Reproductive Health Consultation',
    description: 'Confidential support for sexual health, STIs, and family planning',
    price: 499,
    practitioner: 'lewis',
    category: 'reproductive'
  },
  {
    id: '3',
    name: 'General Clinical Consultation',
    description: 'General medical advice and health guidance',
    price: 399,
    practitioner: 'lewis',
    category: 'general'
  },
  {
    id: '4',
    name: 'Nutrition Consultation',
    description: 'Personalized meal plans for babies, mothers, elderly, and chronic conditions',
    price: 699,
    practitioner: 'faith',
    category: 'nutrition'
  },
  {
    id: '5',
    name: 'Mental Health Counseling',
    description: 'Confidential support for stress, anxiety, depression, and relationships',
    price: 699,
    practitioner: 'faith',
    category: 'mental-health'
  },
  {
    id: '6',
    name: 'Nutrition Follow-up',
    description: 'Follow-up session to track progress and adjust meal plans',
    price: 299,
    practitioner: 'faith',
    category: 'nutrition'
  }
];
