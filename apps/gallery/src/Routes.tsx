import { Route, Routes } from "react-router-dom";

import AboutPage from "./pages/About.tsx";
import ArchivePage from "./pages/Archive.tsx";
import CallbackPage from "./pages/Callback.tsx";
import DashboardHomePage from "./pages/dashboard/Index.tsx";
import HomePage from "./pages/Home.tsx";
import LogoutPage from "./pages/Logout.tsx";
import NotFoundPage from "./pages/NotFound.tsx";
import PricingPage from "./pages/Pricing.tsx";

export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/archive" element={<ArchivePage />} />
      <Route path="/callback" element={<CallbackPage />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/dashboard" element={<DashboardHomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
