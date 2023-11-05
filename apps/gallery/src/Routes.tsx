import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { Route, Routes, useNavigate } from "react-router-dom";

import SiteFooter from "./components/footer.tsx";
import SiteHeader from "./components/header.tsx";
import AboutPage from "./pages/About.tsx";
import ArchivePage from "./pages/Archive.tsx";
import CallbackPage from "./pages/Callback.tsx";
import DashboardHomePage from "./pages/dashboard/Index.tsx";
import HomePage from "./pages/Home.tsx";
import NotFoundPage from "./pages/NotFound.tsx";
import PricingPage from "./pages/Pricing.tsx";
import { TRPCReactProvider } from "./providers.tsx";

export default function Links() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      navigate={(to) => navigate(to)}
    >
      <TRPCReactProvider>
        <SiteHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/callback" element={<CallbackPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route
            path="/dashboard/*"
            element={
              <>
                <SignedIn>
                  <DashboardHomePage />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn redirectUrl="/callback" />
                </SignedOut>
              </>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <SiteFooter />
      </TRPCReactProvider>
    </ClerkProvider>
  );
}
