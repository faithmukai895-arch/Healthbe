export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  isFeatured: boolean;
  isActive: boolean;
  medicalDisclaimer?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  practitioner: 'lewis' | 'faith';
  category: string;
}

export type PageName = 'home' | 'services' | 'pricing' | 'shop' | 'how-it-works' | 'about' | 'contact' | 'privacy' | 'terms' | 'disclaimer';
