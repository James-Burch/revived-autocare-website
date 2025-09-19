export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export const services: Service[] = [
  {
    id: 'deep-clean',
    title: 'Deep Clean Detail',
    description:
      'Complete interior and exterior restoration for heavily soiled vehicles.',
    price: 'From £80',
    features: [
      'Full interior vacuum & steam clean',
      'Exterior wash & clay bar treatment',
      'Engine bay cleaning',
      'Tyre shine & trim restoration',
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance Wash',
    description:
      "Regular upkeep to maintain your vehicle's appearance and protection.",
    price: 'From £45',
    features: [
      'Exterior hand wash',
      'Interior vacuum',
      'Windows cleaned',
      'Quick tyre shine',
    ],
    popular: true,
  },
  {
    id: 'ceramic-coating',
    title: 'Ceramic Coating',
    description:
      'Long-lasting paint protection with superior gloss and hydrophobic properties.',
    price: 'From £350',
    features: [
      'Paint correction & prep',
      '5-year ceramic coating',
      'Hydrophobic protection',
      'Enhanced gloss & depth',
    ],
  },
];
