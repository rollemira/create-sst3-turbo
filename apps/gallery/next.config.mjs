// TODO: Importing env files here to validate on build
// import "./src/env.mjs";
// import "@acme/auth/env.mjs";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@acme/api", "@api/calcs", "@acme/db"],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: {
    domains: ["localhost", "daisyui.com", "rollemtech.app", "unsplash.com"],
  },
};

export default config;
