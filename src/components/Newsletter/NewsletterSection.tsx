// components/NewslatterSection/NewslatterSection.tsx
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

/**
 * Newsletter section – now includes a Name field and a vertical gradient
 * from brand‑800 (top) to brand‑900 (bottom).
 * Functional behaviour (form submission) is unchanged.
 */
export default function NewslatterSection() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-brand-800 to-brand-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          {/* ----------- Left column ----------- */}
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-white">
              Stay up‑to‑date with the crane market
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Get fresh listings, price insights and industry tips delivered weekly to your inbox.
            </p>
            <form className="mt-6 flex w-full max-w-md flex-wrap gap-4 sm:flex-nowrap">
              {/* Name */}
              <label htmlFor="newsletter-name" className="sr-only">
                Your name
              </label>
              <input
                id="newsletter-name"
                name="name"
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
                className="min-w-0 flex-1 rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-white/60 outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-300 sm:text-sm/6"
              />
              {/* Email */}
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-1 rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-white/60 outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-300 sm:text-sm/6"
              />
              {/* Subscribe */}
              <button
                type="submit"
                className="w-full flex-none rounded-md bg-brand-500 hover:bg-brand-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-brand-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300 sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* ----------- Right column ----------- */}
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/10 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="size-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">Weekly listings</dt>
              <dd className="mt-2 text-base text-white/70">
                Be the first to see freshly added cranes, parts and equipment every week.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/10 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="size-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">No spam</dt>
              <dd className="mt-2 text-base text-white/70">
                We send only relevant updates — unsubscribe anytime with a single click.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Decorative background blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          className="aspect-[1155/678] w-[288.75rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
}