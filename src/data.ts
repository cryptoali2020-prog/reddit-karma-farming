import { Service, PricingPlan, CryptoPayment, Testimonial, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'karma',
    title: 'Reddit Karma Farming',
    description: 'Boost your account credibility with high-quality, organic-looking karma. safe and secure methods.',
    icon: 'Zap'
  },
  {
    id: 'accounts',
    title: 'Account Buy & Sale',
    description: 'Instant access to aged Reddit accounts with established history and high karma.',
    icon: 'ShoppingBag'
  },
  {
    id: 'promotion',
    title: 'Reddit Brand Promotion',
    description: 'Get your brand noticed in the right subreddits with targeted organic promotion strategies.',
    icon: 'Target'
  },
  {
    id: 'aeo',
    title: 'Reddit AEO Ranking',
    description: 'Anti-Evil Operations (AEO) safe ranking services to ensure your content stays live and visible.',
    icon: 'Shield'
  },
  {
    id: 'geo',
    title: 'Reddit GEO Ranking',
    description: 'Target specific regions and countries to dominate local markets on Reddit.',
    icon: 'Globe'
  },
  {
    id: 'traffic',
    title: 'Reddit Traffic Campaigns',
    description: 'Drive high-quality, targeted traffic from Reddit directly to your website or landing page.',
    icon: 'BarChart'
  },
  {
    id: 'upvotes',
    title: 'Reddit Upvote Services',
    description: 'Boost visibility and hit the "Hot" section with our coordinated upvote campaigns.',
    icon: 'ArrowUpCircle'
  },
  {
    id: 'engagement',
    title: 'Engagement Services',
    description: 'Realistic comment threads and discussions to build trust and social proof around your brand.',
    icon: 'MessageSquare'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: '$99',
    delivery: '24-48 Hours',
    features: [
      '500+ Organic Karma',
      'Basic Subreddit Targeting',
      'Content Recommendation',
      'Standard Support'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    price: '$249',
    delivery: '3-5 Days',
    features: [
      '2500+ Organic Karma',
      'Advanced Niche Targeting',
      'Comment Engagement',
      'Priority Delivery',
      '24/7 Dedicated Support'
    ],
    recommended: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    price: 'Custom',
    delivery: 'Ongoing',
    features: [
      'Full Brand Domination',
      'Multi-Account Management',
      'AEO & GEO Optimization',
      'Direct Traffic Conversion',
      'Dedicated Strategy Manager'
    ]
  }
];

export const CRYPTO_PAYMENTS: CryptoPayment[] = [
  { name: 'USDT (TRC20)', symbol: 'USDT', icon: 'DollarSign', address: 'TXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', network: 'TRON' },
  { name: 'Bitcoin', symbol: 'BTC', icon: 'Bitcoin', address: '1XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', network: 'Legacy/SegWit' },
  { name: 'Solana', symbol: 'SOL', icon: 'Sun', address: 'SXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', network: 'Solana' },
  { name: 'Ethereum', symbol: 'ETH', icon: 'Coins', address: '0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', network: 'ERC20' },
  { name: 'Litecoin', symbol: 'LTC', icon: 'Zap', address: 'LXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', network: 'Litecoin' },
  { name: 'Binance Coin', symbol: 'BNB', icon: 'Diamond', address: '0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', network: 'BEP20' }
];

export const TESTIMONIALS: Testimonial[] = [
  { username: 'CryptoWhale_88', rating: 5, text: 'The GEO ranking service helped my token launch go viral in EU subreddits. Amazing results!' },
  { username: 'MarketingGuru', rating: 5, text: 'Best place for aged accounts. No bans, no issues. 100% recommended for agency use.' },
  { username: 'SaaSFounderX', rating: 4, text: 'Great traffic growth. Saw a 40% increase in signups from the targeted campaigns.' }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How fast is delivery?',
    answer: 'Most services like karma farming and account purchases are processed within 24-48 hours. Larger marketing campaigns may take 3-7 days to ramp up for maximum safety.'
  },
  {
    question: 'Which crypto payments do you accept?',
    answer: 'We accept USDT (TRC20), BTC, SOL, ETH, LTC, and BNB. All transactions are handled securely and anonymously.'
  },
  {
    question: 'Is the checkout process secure?',
    answer: 'Yes, we use an anonymous checkout flow. We never store personal data beyond what is strictly necessary to fulfill your campaign.'
  },
  {
    question: 'Do you provide support?',
    answer: 'Absolutely. We provide 24/7 support via WhatsApp, Telegram, and our website contact form.'
  },
  {
    question: 'Can I order custom Reddit campaigns?',
    answer: 'Yes, our Enterprise Plan is designed specifically for custom, large-scale brand dominance. Contact us for a tailored strategy.'
  }
];
