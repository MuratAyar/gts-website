// src/components/DoubleCallToAction.tsx
import { Link } from "react-router-dom";
import {
  ArrowLongRightIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/solid";

/** Çift CTA – “Listele” & “Kayıt Ol” */
export default function DoubleCallToAction() {
  return (
    <section className="w-full bg-brand-900 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 px-4 md:flex-row md:gap-0">
        {/* -------- SOL -------- */}
        <div className="group relative flex w-full flex-col items-center text-center md:w-1/2 xl:w-1/3">
          <p className="text-lg font-semibold text-white md:text-xl">
            Would you like to <br />
            <span className="highlight px-0.5 text-white">
              sell&nbsp;a&nbsp;crane once?
            </span>
          </p>

          <Link
            to="/list-your-crane"
            className="mt-4 inline-flex items-center gap-2 rounded bg-brand-500 px-6 py-3 font-semibold text-white shadow transition
                       hover:bg-brand-600"
          >
            List now
            <ArrowLongRightIcon className="h-4 w-4" />
          </Link>

          {/* dekoratif ok – içe bakıyor */}
          <ArrowLongRightIcon
            className="pointer-events-none absolute -left-24 top-1/2 hidden h-32 w-32 -translate-y-1/2 rotate-[15deg] text-white
                       transition-transform duration-300 ease-out
                       group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]
                       xl:block"
            aria-hidden
          />
        </div>

        {/* dikey ayırıcı (md ve üzeri) */}
        <div className="hidden h-28 w-px bg-white/70 md:block" />

        {/* -------- SAĞ -------- */}
        <div className="group relative flex w-full flex-col items-center text-center md:w-1/2 xl:w-1/3">
          <p className="text-lg font-semibold text-white md:text-xl">
            Create a professional account <br />
            <span className="highlight px-0.5 text-white">
              and&nbsp;sell&nbsp;your&nbsp;entire&nbsp;offer!
            </span>
          </p>

          <Link
            to="/register"
            className="mt-4 inline-flex items-center gap-2 rounded bg-brand-500 px-6 py-3 font-semibold text-white shadow transition
                       hover:bg-brand-600"
          >
            Register now
            <ArrowLongRightIcon className="h-4 w-4" />
          </Link>

          {/* dekoratif ok – içe bakıyor */}
          <ArrowLongLeftIcon
            className="pointer-events-none absolute -right-24 top-1/2 hidden h-32 w-32 -translate-y-1/2 -rotate-[15deg] text-white
                       transition-transform duration-300 ease-out
                       group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]
                       xl:block"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
