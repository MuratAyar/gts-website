/* src/components/Header/Header.tsx */
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import logo from "../../assets/GTS_logo.png";           // alias varsa @/assets; yoksa ../..

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [opacity, setOpacity] = useState(1);       // 1 = tam opak
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

  return (
    <header
      className="sticky top-0 z-40 shadow-sm backdrop-blur-sm transition-colors duration-200 bg-brand-500"
      style={{ backgroundColor: `rgba(18, 24, 39, ${opacity})` }} /* brand-600 */
    >
      {/* -------- NAV -------- */}
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8"
        aria-label="Global"
      >
        {/* logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">GTS</span>
            <img src={logo} alt="GTS" className="h-10 w-auto" />
          </Link>
        </div>

        {/* burger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="-m-2.5 flex lg:hidden items-center rounded-md p-2.5 text-white"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
          </svg>
        </button>

        {/* desktop links */}
        <div className="hidden lg:flex lg:gap-x-12">
          {/* About dropdown */}
          <div className="relative" ref={aboutRef}>
            <button
              onClick={() => setAboutOpen(p => !p)}
              className="flex items-center gap-x-1 text-sm font-semibold text-white hover:scale-105 transition-transform"
            >
              About
              <svg className="size-5 text-white/70" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.114l3.71-3.884a.75.75 0 011.08 1.04l-4.25 4.45a.75.75 0 01-1.08 0l-4.25-4.45a.75.75 0 01.02-1.06z" clipRule="evenodd"/>
              </svg>
            </button>
            {aboutOpen && (
              <div className="absolute left-1/2 z-10 mt-3 w-40 -translate-x-1/2 rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                <ul className="p-2">
                  {[
                    { label: "About", to: "/about" },
                    { label: "Contact Us", to: "/contact" },
                    { label: "FAQ",        to: "/faq" },
                    { label: "Blog",       to: "/blog" },
                  ].map(l => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="block rounded-md px-3 py-2 text-sm text-gray-900 hover:bg-gray-50"
                        onClick={() => setAboutOpen(false)}
                      >{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link to="/listings" className="text-sm font-semibold text-white hover:scale-105 transition-transform">Listings</Link>
          <Link to="/sell"      className="text-sm font-semibold text-white hover:scale-105 transition-transform">Sell Vehicle</Link>
        </div>

        {/* language selector + login */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end gap-6">
          <LanguageSelector />
          <button
            onClick={()=>navigate("/login")}
            className="text-sm font-semibold text-white hover:scale-105 transition-transform"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </nav>

      {/* -------- Mobile slide-over (değişmedi) -------- */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50" role="dialog" aria-modal="true">
          <div onClick={() => setMobileOpen(false)} className="fixed inset-0 bg-black/25"/>
          <div className="fixed inset-y-0 right-0 w-full max-w-sm overflow-y-auto bg-white p-6">
            {/* top bar */}
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5"><img src={logo} className="h-8 w-auto" alt="GTS" /></Link>
              <button onClick={() => setMobileOpen(false)} className="-m-2.5 p-2.5 text-gray-700">
                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
              </button>
            </div>
            {/* …diğer mobil linkler eskisi gibi… */}
          </div>
        </div>
      )}
    </header>
  );
}
