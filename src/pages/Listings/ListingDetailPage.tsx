import { useState } from "react";
import SellerInformationSection from "../../components/ListingDetailComponents/SellerInformationSection";

/* ------------------------------------------------------------------
   TEMP-MOCK DATA – replace with real API data later
------------------------------------------------------------------- */
const mockListing = {
  id: "jaso-j110n-j118",
  title: "Jaso J110N-J118 Tower Crane",
  brand: "Jaso",
  model: "J110N-J118",
  type: "Tower crane",
  year: 2006,
  capacity: "8 000 kg",
  boomRadius: "60 m",
  liftingHeight: "45 m",
  location: "Türkiye / İstanbul",
  listingDate: "24 Jul 2025",
  price: "Price on request",
  images: [
    "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=900&q=70",
    "https://images.unsplash.com/photo-1601381023678-6ff450b734ba?auto=format&fit=crop&w=900&q=70",
    "https://images.unsplash.com/photo-1576689036665-3220c72126b1?auto=format&fit=crop&w=900&q=70",
    "https://images.unsplash.com/photo-1511958566-6cdb6e3c4a32?auto=format&fit=crop&w=900&q=70",
    "https://images.unsplash.com/photo-1567960600194-c24efeaf19e7?auto=format&fit=crop&w=900&q=70",
    "https://images.unsplash.com/photo-1508898578281-774ac4893f34?auto=format&fit=crop&w=900&q=70",
    "https://images.unsplash.com/photo-1494412651403-3e79c93d7d1a?auto=format&fit=crop&w=900&q=70",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=70",
    "https://images.unsplash.com/photo-1530893609608-32a9af3aa7ff?auto=format&fit=crop&w=900&q=70",
    "https://images.unsplash.com/photo-1481214110143-ef1e41cbb0c4?auto=format&fit=crop&w=900&q=70",
  ],
  /* ↓ extra mock sections */
  technical: [
    ["Gearing type", "automatic"],
    ["Fuel type", "diesel"],
    ["Color", "blue"],
    ["First registration", "03/2018"],
    ["Equipment", "cabin"],
  ],
  offer: {
    id: "A195-80-856",
    update: "16.07.2025",
  },
  description: `= Additional options and accessories =
- 3rd valve
- 4th valve
- 5th valve
- Rear work lights
- Front work lights
- Roof cover

= Further information =
The crane is in excellent working condition with full service history.`,
  /* mock coords to centre map roughly on Istanbul */
  mapQuery: "41.0082,28.9784",
};
/* ------------------------------------------------------------------ */

export default function ListingDetailPage() {
  /* image gallery */
  const [idx, setIdx] = useState(0);
  const imgs = mockListing.images;
  const prev = () => setIdx((i) => (i === 0 ? imgs.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === imgs.length - 1 ? 0 : i + 1));

  /* contact-seller modal */
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ─────────── TOP SECTION (gallery + headline) ─────────── */}
      <section className="mx-auto max-w-7xl px-4 py-10 lg:py-16 space-y-10">
        {/* row-1: gallery + basic facts */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* gallery */}
          <div>
            <div className="relative">
              <img
                src={imgs[idx]}
                alt={mockListing.title}
                className="h-96 w-full rounded-lg object-cover sm:h-[32rem]"
              />
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-gray-700 shadow hover:bg-white"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-gray-700 shadow hover:bg-white"
              >
                ›
              </button>
            </div>

            <div className="mt-4 flex gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300">
              {imgs.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setIdx(i)}
                  className={`h-20 w-28 flex-shrink-0 overflow-hidden rounded-md ring-2 ${
                    i === idx ? "ring-brand-600" : "ring-transparent"
                  }`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* headline & quick facts (right of gallery) */}
          <div className="space-y-6">
            <h1 className="text-3xl font-extrabold text-gray-900">
              {mockListing.title}
            </h1>

            <p className="text-2xl font-semibold text-brand-600">
              {mockListing.price}
            </p>
            <button
                onClick={() => setOpen(true)}
                className="w-full rounded-lg bg-brand-600 px-6 py-3 text-lg font-semibold text-white hover:bg-brand-600/90"
            >
                Contact seller
            </button>

            <ul className="divide-y divide-gray-200 overflow-hidden rounded-md border border-gray-200">
              <Detail label="Brand" value={mockListing.brand} />
              <Detail label="Model" value={mockListing.model} />
              <Detail label="Type" value={mockListing.type} />
              <Detail label="Year" value={mockListing.year} />
              <Detail label="Capacity" value={mockListing.capacity} />
              <Detail label="Boom radius" value={mockListing.boomRadius} />
              <Detail label="Lifting height" value={mockListing.liftingHeight} />
              <Detail label="Location" value={mockListing.location} />
              <Detail label="Listing date" value={mockListing.listingDate} />
            </ul>
          </div>
        </div>

        {/* ─────────── SECOND ROW (info panels + map) ─────────── */}
        <div className="gap-8 lg:flex">
        {/* SOL KOLON – paneller */}
        <div className="flex-1 space-y-6">
            <Panel title="Technical details">
            {mockListing.technical.map(([k, v]) => (
                <Detail key={k} label={k} value={v} />
            ))}
            </Panel>

            <Panel title="Details about the offer">
            <Detail label="Listing ID" value={mockListing.offer.id} />
            <Detail label="Update"     value={mockListing.offer.update} />
            </Panel>

            <Panel title="Description">
            <pre className="whitespace-pre-wrap break-words text-sm text-gray-700">
                {mockListing.description}
            </pre>
            </Panel>
        </div>

        {/* SAĞ KOLON – harita + buton (tam yükseklik) */}
        <div className="flex flex-1 flex-col space-y-6">
            <div className="flex-1 overflow-hidden rounded-lg shadow-lg">
            <iframe
                title="Listing location"
                className="h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                src={`https://maps.google.com/maps?q=${mockListing.mapQuery}&z=10&output=embed`}
                allowFullScreen
            />
            </div>

            {/* buton alt kenarda kalır */}
            <button
            onClick={() => setOpen(true)}
            className="w-full rounded-lg bg-brand-600 px-6 py-3 text-lg font-semibold text-white hover:bg-brand-600/90"
            >
            Contact seller
            </button>
        </div>
        </div>

      </section>

      {/* seller info strip (full-width) */}
      <SellerInformationSection />

      {/* ─────────── Contact-seller modal ─────────── */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-lg bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold">Contact Seller</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <form className="space-y-4">
              <Input label="Name" />
              <Input label="Company" />
              <Input label="Email" type="email" />
              <Input label="Phone" />
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-600 focus:ring-brand-600"
                  defaultValue={`Hi, I'm interested in your ${mockListing.title}. Please get back to me.`}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-brand-600 px-4 py-3 font-semibold text-white hover:bg-brand-600/90"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

/* ─────────── Small helper components ─────────── */

function Detail({ label, value }: { label: string; value: any }) {
  return (
    <li className="grid grid-cols-3 gap-4 px-4 py-3 text-sm">
      <span className="col-span-1 font-medium text-gray-500">{label}</span>
      <span className="col-span-2 font-semibold text-gray-900">{value}</span>
    </li>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-md border border-gray-200">
      <div className="bg-gray-50 px-4 py-2 font-semibold text-gray-900">
        {title}
      </div>
      <ul>{children}</ul>
    </div>
  );
}

function Input({
  label,
  type = "text",
}: {
  label: string;
  type?: "text" | "email";
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-600 focus:ring-brand-600"
      />
    </div>
  );
}
