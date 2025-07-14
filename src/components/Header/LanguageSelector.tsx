/* src/components/Header/LanguageSelector.tsx */
import { useState, useRef, useEffect } from "react";
import styles from "./LanguageSelector.module.scss";
import "flag-icons/css/flag-icons.min.css";

interface Language {
  key: string;   // ISO-2 (en, tr, de…)
  name: string;  // Görünen ad
}

const LANGS: Language[] = [
  { key: "en", name: "English" },
  { key: "tr", name: "Türkçe" },
  { key: "de", name: "Deutsch" },
];

function FlagIcon({ countryCode }: { countryCode: string }) {
  if (countryCode === "en") countryCode = "gb"; // flag-icons'ta İngiliz bayrağı GB
  return (
    <span
      className={`fi fis fi-${countryCode} ${styles.fiCircle} mr-2 inline-block`}
    />
  );
}

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Language>(LANGS[0]);
  const wrapperRef = useRef<HTMLDivElement>(null);   // dış-tık hedefi

  /* -------- dış tık dinleyicisi -------- */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (open && wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleChange = (lang: Language) => {
    setCurrent(lang);
    setOpen(false);
    // ileride: i18n.changeLanguage(lang.key);
  };

  return (
    <div ref={wrapperRef} className="relative z-40">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
      >
        <FlagIcon countryCode={current.key} />
        {current.name}
        <svg className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.114l3.71-3.884a.75.75 0 011.08 1.04l-4.25 4.45a.75.75 0 01-1.08 0l-4.25-4.45a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Drop-down */}
      {open && (
        <ul className="absolute right-0 mt-2 w-40 rounded-lg border bg-white p-1 shadow-lg">
          {LANGS.map((lang) => (
            <li key={lang.key}>
              <button
                onClick={() => handleChange(lang)}
                className={`flex w-full items-center gap-2 rounded-md px-2 py-1 text-sm hover:bg-gray-100 ${
                  current.key === lang.key ? "bg-gray-100 font-semibold" : ""
                }`}
              >
                <FlagIcon countryCode={lang.key} />
                <span className="truncate">{lang.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
