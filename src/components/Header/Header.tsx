/* src/components/Header/Header.tsx */
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import logo from "../../assets/GTS_logo.png";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const aboutRef = useRef<HTMLDivElement>(null);
  const navigate  = useNavigate();

  /* ---- Close About on outside-click ---- */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        aboutOpen &&
        aboutRef.current &&
        !aboutRef.current.contains(e.target as Node)
      ) {
        setAboutOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [aboutOpen]);

  /* ---- Scroll opacity handler ---- */
  useEffect(() => {
    function handleScroll() {
      // 0 px → 1  |  200 px+ → 0.6
      const y = window.scrollY;
      const newOpacity = y < 200 ? 1 - y / 500 : 0.6;
      setOpacity(Number(newOpacity.toFixed(2)));
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Hâlihazırda anasayfadaysak sayfayı tepeye kaydır
    if (location.pathname === "/") {
      e.preventDefault();                       // aynı sayfaya yeniden gitmeyi engelle
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className="sticky top-0 z-40 shadow-sm backdrop-blur-sm transition-colors duration-200 bg-brand-500"
      style={{ backgroundColor: `rgba(24, 33, 54, ${opacity})` }} /* brand-600 */
    >
      {/* ------------ NAV BAR ------------ */}
      <nav   className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
        {/* logo */}
        <Link to="/" onClick={handleLogoClick} className="-m-1.5 p-1.5">
          <img src={logo} alt="GTS" className="h-10 w-auto" />
        </Link>

        {/* burger / close */}
        <button
          onClick={() => setMobileOpen((p) => !p)}
          className="-m-2.5 flex lg:hidden items-center rounded-md p-2.5 text-white"
        >
          <span className="sr-only">Open main menu</span>
          {mobileOpen ? (
            /* X icon */
            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            /* burger icon */
            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        {/* -------- DESKTOP LİNKLER (ortalanmış) -------- */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-x-12">
          {/* About dropdown */}
          <div className="relative" ref={aboutRef}>
            <button
              onClick={() => setAboutOpen((p) => !p)}
              className="flex items-center gap-x-1 text-sm font-semibold text-white hover:scale-105 transition-transform"
            >
              About
              <svg className="size-5 text-white/70" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.114l3.71-3.884a.75.75 0 011.08 1.04l-4.25 4.45a.75.75 0 01-1.08 0l-4.25-4.45a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {aboutOpen && (
              <div className="absolute left-1/2 z-10 mt-3 w-40 -translate-x-1/2 rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                <ul className="p-2">
                  {[
                    { label: 'About',      to: '/about' },
                    { label: 'Contact Us', to: '/contact' },
                    { label: 'FAQ',        to: '/faq' },
                    { label: 'Blog',       to: '/blog' },
                  ].map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        onClick={() => setAboutOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm text-gray-900 hover:bg-gray-50"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Listings */}
          <Link
            to="/listings"
            className="inline-flex items-center text-sm font-semibold text-white hover:scale-105 transition-transform"
          >
            Listings
          </Link>

          {/* Sell Vehicle */}
          <Link
            to="/sell"
            className="inline-flex items-center rounded-md bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-600 hover:scale-105 transition-transform"
          >
            Sell&nbsp;Vehicle
          </Link>
        </div>


        {/* -------- DESKTOP LINKS (değişmedi) -------- */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-12">
          {/* …About dropdown, Listings, Sell Vehicle… */}
        </div>

        {/* language + login (desktop) */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end gap-6">
          <LanguageSelector />
          <button
            onClick={() => navigate("/login")}
            className="text-sm font-semibold text-white hover:scale-105 transition-transform hover:text-brand-500"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </nav>

      {/* ------------ MOBILE DROP-DOWN ------------ */}
      {mobileOpen && (
        <div className="lg:hidden w-full bg-brand-500 text-white shadow-md">
          <ul className="space-y-2 px-4 py-4 text-base font-medium">
            {[
              { label: "About",       to: "/about" },
              { label: "Contact Us",  to: "/contact" },
              { label: "FAQ",         to: "/faq" },
              { label: "Blog",        to: "/blog" },
              { label: "Listings",    to: "/listings" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2 hover:bg-white/10"
                >
                  {l.label}
                </Link>
              </li>
            ))}

            {/* Sell Vehicle */}
            <li>
              <Link
                to="/sell"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-white/10 px-4 py-2 hover:bg-white/20"
              >
                Sell&nbsp;Vehicle
              </Link>
            </li>

            {/* Language selector */}
            <li className="pt-2">
              <LanguageSelector />
            </li>

            {/* Log in */}
            <li>
              <button
                onClick={() => {
                  navigate("/login");
                  setMobileOpen(false);
                }}
                className="mt-2 flex w-full items-center justify-between rounded-md px-3 py-2 hover:bg-white/10"
              >
                <span>Log in</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
            </li>
          </ul>
        </div>
      )}



    </header>
  );
}
