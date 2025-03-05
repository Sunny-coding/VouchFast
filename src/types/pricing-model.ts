export type PricingBoxProps = {
  heading: string;
  price: string | number;
  originalPrice?: string | number;
  description: string;
  features: string[];
  subheading: string;
  active?: boolean;
  link: string;
};
