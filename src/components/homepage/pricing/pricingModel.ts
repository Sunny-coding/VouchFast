const pricingModel = [
  {
    heading: "Free Tier",
    price: "0",
    audience: "Starters",
    features: [
      "3 free testimonials",
      "Invite upto 3 clients",
      "Dashboard access",
    ],
    active: false,
  },
  {
    heading: "Starter",
    price: 10,
    audience: "Freelancers",
    features: [
      "Upto 10 testimonials",
      "Invite 5 clients/mo",
      "Basic API access",
      "Full dashboard features",
      "Custom profile page URL",
    ],
    active: false,
  },
  {
    heading: "Professional",
    price: 29,
    audience: "Small Agencies",
    features: [
      "Unlimited testimonials",
      "Invite 100 clients/mo",
      "Advanced API access",
      "Analytics",
      "Multi-user access",
      "Priority Customer Support",
    ],
    active: true,
  },
  // {
  //   heading: "Enterprise",
  //   price: 299,
  //   audience: "Large Enterprises",
  //   features: [
  //     "White-label solutions",
  //     "Unlimited clients",
  //     "Custom API integrations",
  //     "Premium Analytics",
  //     "Dedicated Manager",
  //     "Advanced Security",
  //     "Unlimited team members",
  //   ],
  //   active: false,
  // },
];

export default pricingModel;
