export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  delivery: string;
  features: string[];
  recommended?: boolean;
}

export interface CryptoPayment {
  name: string;
  symbol: string;
  icon: string;
  address: string;
  network: string;
}

export interface Testimonial {
  username: string;
  rating: number;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
