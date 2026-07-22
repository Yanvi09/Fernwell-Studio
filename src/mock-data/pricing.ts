export interface PricingTier {
  id: string;
  name: string;
  price: number;
  priceId: string;
  description: string;
}

export const pricingTiers: PricingTier[] = [
  { id: "dropin", name: "Drop-in", price: 28, priceId: "price_test_dropin", description: "One class, no commitment." },
  { id: "fivepack", name: "5-Class Pack", price: 120, priceId: "price_test_fivepack", description: "Best for occasional practice." },
  { id: "unlimited", name: "Unlimited Monthly", price: 159, priceId: "price_test_unlimited", description: "Unlimited classes, cancel anytime." },
];
