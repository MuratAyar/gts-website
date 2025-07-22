import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home/HomePage";
import ContactPage  from "../pages/Contact/ContactPage";   // <-- EKLE
import FaqPage from "../pages/FAQ/FAQPage";
import AboutPage from "../pages/About/AboutPage";
import TermsAndConditionsPage from "../pages/TermsAndConditions/TermsAndConditionsPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicy/PrivacyPolicyPage";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage"; // <-- EKLE

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
        { path: "/", element: <HomePage /> },
        { path: "/contact", element: <ContactPage /> },     // <-- EKLE
        { path: "/faq", element: <FaqPage /> },               // <-- EKLE
        { path: "/about", element: <AboutPage /> },             // <-- EKLE
        { path: "/terms-and-conditions", element: <TermsAndConditionsPage /> }, // <-- EKLE
        { path: "/privacy-policy", element: <PrivacyPolicyPage /> }, // <-- EKLE
        { path: "/login", element: <LoginPage /> }, // <-- EKLE
        { path: "/register", element: <RegisterPage /> }, // <-- EKLE
    ],
  },
]);
