export default function PricingPage() {
  return (
    <div className="mt-12">
      {/* @ts-expect-error - This comes from the stripe script */}
      <stripe-pricing-table
        pricing-table-id="prctbl_1O74C5CBEtovZpANIkSUyeUV"
        publishable-key={import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY}
      />
      <div className="p-12 text-center text-xl">
        All ready a customer?{" "}
        <a
          className="text-[#8d56fc] underline"
          href="https://billing.stripe.com/p/login/6oE29s1yv2B17iUfYY"
          target="_blank"
          rel="noreferrer"
        >
          Go to our customer portal to manage your subscription
        </a>
        .
      </div>
    </div>
  );
}
