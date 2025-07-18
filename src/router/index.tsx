import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home/HomePage";
import ContactPage  from "../pages/Contact/ContactPage";   // <-- EKLE
import FaqPage from "../pages/FAQ/FAQPage";
import AboutPage from "../pages/About/AboutPage";


export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
        { path: "/", element: <HomePage /> },
        { path: "/contact", element: <ContactPage /> },     // <-- EKLE
        { path: "/faq", element: <FaqPage /> },               // <-- EKLE
        { path: "/about", element: <AboutPage /> },             // <-- EKLE
    ],
  },
]);
