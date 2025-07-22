// src/components/WhyChooseUs.tsx
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import banner from "../../assets/whychooseus.jpg";           // alias varsa @/assets; yoksa ../..


export default function WhyChooseUs() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl items-center gap-8 px-4 py-12 md:grid-cols-2 lg:px-6 sm:py-20">
        {/* Görsel ------------------------------------------------------- */}
        {/* Tercihen public klasörünüze koyacağınız bir vinç görseli kullanın */}
        <img
          src={banner}
          alt="GTS Cranes dashboard mock-up"
          className="w-full dark:hidden"
        />
        <img
          src="/assets/why-choose-gts-dark.svg"
          alt="GTS Cranes dashboard mock-up (dark)"
          className="hidden w-full dark:block"
        />

        {/* Metin alanı -------------------------------------------------- */}
        <div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Why choose&nbsp;<span className="text-brand-600">GTS&nbsp;Cranes</span>?
          </h2>

          <p className="mb-8 max-w-prose font-light text-gray-600 dark:text-gray-400 md:text-lg">
            From our global network of verified sellers to a rigorous inspection
            process, we make buying, selling&nbsp;and renting cranes simple,
            secure&nbsp;and transparent. Our dedicated support team is with you
            every step of the way.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center rounded-lg bg-brand-500 px-6 py-3 text-sm font-medium
                       text-white transition hover:bg-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-300
                       dark:focus:ring-brand-800"
          >
            Learn more about us
            <ArrowRightIcon className="ml-2 h-5 w-5 shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  );
}
