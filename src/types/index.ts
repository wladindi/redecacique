export interface Station {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  lat: number;
  lng: number;
  services: string[];
  hours: string;
  hasConvenience: boolean;
  hasLubrificants: boolean;
  imageUrl?: string;
  isActive: boolean;
}

export interface Banner {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
  isActive: boolean;
  order: number;
}

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
}

export interface FidelityBenefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Metric {
  value: string;
  label: string;
  suffix?: string;
}
