"use client";

export default function PricingPage() {
  return (
    <div className="mt-12">
      <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      {/* @ts-expect-error - This comes from the stripe script */}
      <stripe-pricing-table
        pricing-table-id="prctbl_1O74C5CBEtovZpANIkSUyeUV"
        publishable-key="pk_live_51M0UvCCBEtovZpANUlZxiwgx50WjO5D4Axyr8qB9uuXBgrzaKjAnCB4iSQwxqu6xK8AixNFyfBi69QdExkHAUQE800VFpdlMGT"
      />
      <div className="p-12 text-center text-xl">
        All ready a customer?{" "}
        <a
          className="link-primary link"
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
