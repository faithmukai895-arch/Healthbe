import { Product, ProductCategory } from '../types';

export const categories: ProductCategory[] = [
  {
    id: '1',
    name: 'Skin Care Solutions',
    slug: 'skin-care',
    description: 'Medical-grade skin care products for acne, fungal infections, and eczema',
    icon: 'droplet'
  },
  {
    id: '2',
    name: 'Nutrition & Supplements',
    slug: 'nutrition',
    description: 'Quality supplements for all ages - babies, mothers, and elderly',
    icon: 'apple'
  },
  {
    id: '3',
    name: 'Mental Wellness Products',
    slug: 'mental-wellness',
    description: 'Support for stress, anxiety, and emotional wellbeing',
    icon: 'heart'
  },
  {
    id: '4',
    name: 'Doctor-Recommended Kits',
    slug: 'doctor-kits',
    description: 'Curated health kits recommended by our clinical team',
    icon: 'package'
  },
  {
    id: '5',
    name: 'Digital Wellness Products',
    slug: 'digital-products',
    description: 'Educational PDFs, meal plans, and wellness guides',
    icon: 'book-open'
  }
];

export const products: Product[] = [
  {
    id: '1',
    categoryId: '1',
    name: 'Acne Treatment Bundle',
    description: 'Complete acne treatment kit including cleanser, spot treatment, and moisturizer. Suitable for mild to moderate acne.',
    price: 2500,
    imageUrl: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400',
    isFeatured: true,
    isActive: true,
    medicalDisclaimer: 'For external use only. Consult with our dermatologist if condition persists.'
  },
  {
    id: '2',
    categoryId: '2',
    name: 'Prenatal Multivitamin',
    description: 'Essential vitamins and minerals for pregnant and breastfeeding mothers. 90 capsules.',
    price: 1800,
    imageUrl: 'https://images.pexels.com/photos/3683097/pexels-photo-3683097.jpeg?auto=compress&cs=tinysrgb&w=400',
    isFeatured: true,
    isActive: true,
    medicalDisclaimer: 'Supplements do not replace a balanced diet. Consult your healthcare provider before use.'
  },
  {
    id: '3',
    categoryId: '3',
    name: 'Stress Relief & Sleep Support',
    description: 'Natural herbal blend to support relaxation and healthy sleep patterns. 60 capsules.',
    price: 1500,
    imageUrl: 'https://images.pexels.com/photos/3683051/pexels-photo-3683051.jpeg?auto=compress&cs=tinysrgb&w=400',
    isFeatured: true,
    isActive: true,
    medicalDisclaimer: 'Not for use in children. May cause drowsiness. Consult before use if on medication.'
  },
  {
    id: '4',
    categoryId: '4',
    name: 'Complete Wellness Kit',
    description: 'Comprehensive kit including multivitamins, probiotics, and immune support. 30-day supply.',
    price: 3500,
    imageUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400',
    isFeatured: true,
    isActive: true,
    medicalDisclaimer: 'Recommended by our clinical team. Follow dosage instructions carefully.'
  },
  {
    id: '5',
    categoryId: '5',
    name: 'Meal Planning Guide for Diabetes',
    description: 'Comprehensive PDF guide with 30 days of meal plans for diabetes management.',
    price: 500,
    imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    isFeatured: false,
    isActive: true,
    medicalDisclaimer: 'Digital product. Instant download after payment confirmation.'
  },
  {
    id: '6',
    categoryId: '1',
    name: 'Eczema Relief Cream',
    description: 'Soothing cream for eczema and sensitive skin. Fragrance-free and dermatologist-tested.',
    price: 1200,
    imageUrl: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=400',
    isFeatured: false,
    isActive: true,
    medicalDisclaimer: 'For external use only. Discontinue if irritation occurs.'
  },
  {
    id: '7',
    categoryId: '2',
    name: 'Baby Nutrition Formula',
    description: 'Gentle nutrition supplement for babies 6 months and older. Supports healthy growth.',
    price: 2200,
    imageUrl: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=400',
    isFeatured: false,
    isActive: true,
    medicalDisclaimer: 'Consult pediatrician before use. Not a replacement for breast milk or formula.'
  },
  {
    id: '8',
    categoryId: '3',
    name: 'Anxiety Relief Tea',
    description: 'Calming herbal tea blend with chamomile, lavender, and passionflower. 30 tea bags.',
    price: 800,
    imageUrl: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400',
    isFeatured: false,
    isActive: true,
    medicalDisclaimer: 'Natural supplement. Not for use during pregnancy without medical advice.'
  }
];
