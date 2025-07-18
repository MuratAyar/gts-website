import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import FooterSection from "../components/Footer/FooterSection";

/*  Root <div> artık flex kolon + bg-brand-600.
    flex-1 sayesinde <main> kalan yüksekliği dolduruyor. */
export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* İçerik bölümü  */}
      <main className="flex-1">
        <Outlet />
      </main>

      <FooterSection />
    </div>
  );
}
