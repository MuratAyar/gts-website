import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "./hero-bg.jpg";

type Tab = "cranes" | "equipment" | "parts";

const CRANE_CATS = ["All Terrain", "Crawler", "Rough Terrain"];
const EQUIP_CATS = ["Loader", "Excavator", "Forklift"];
const PARTS_CATS = ["Hydraulics", "Engine", "Boom Sections"];

const MANUFACTURERS = ["Liebherr", "Terex", "Grove"];
const MODELS        = ["Model A", "Model B", "Model C"];

export default function Hero() {
  const [tab, setTab] = useState<Tab>("cranes");
  const [category, setCategory] = useState("");
  const [make, setMake]        = useState("");
  const [model, setModel]      = useState("");

  const navigate  = useNavigate();
  const redirect  = (path: string) => navigate(path);

  const currentCategories =
    tab === "cranes"    ? CRANE_CATS   :
    tab === "equipment" ? EQUIP_CATS   :
                          PARTS_CATS;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Search: ${tab} | ${category} | ${make} | ${model}`);
  };

  return (
    <section
      className="relative bg-cover bg-center py-20 sm:py-24"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* karartma */}
      <div className="absolute inset-0 bg-black/50" />

      {/* --------- İçerik --------- */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-24 sm:pt-28 text-white">
        <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          The Leading Crane&nbsp;&amp;&nbsp;Equipment Marketplace
        </h1>
        <p className="mb-8 max-w-2xl text-base sm:text-lg">
          Buy, sell or rent construction equipment — quickly and safely.
        </p>

        {/* --------- Search Island --------- */}
        <div className="rounded-t bg-brand-800/80 backdrop-blur-md">
          {/* Tabs */}
          <div className="flex flex-wrap">
            {[
              { id: "cranes",     label: "Cranes" },
              { id: "equipment",  label: "Other Equipment" },
              { id: "parts",      label: "Parts" },
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id as Tab)}
                className={`px-6 py-3 text-sm font-semibold transition
                  ${tab === t.id
                    ? "bg-brand-900/90 text-white"
                    : "text-white hover:bg-brand-900/40"}`}
              >
                {t.label}
              </button>
            ))}

            <button
              onClick={() => redirect("/search?filter=new")}
              className="ml-auto px-6 py-3 text-sm font-semibold text-white hover:bg-brand-900/40"
            >
              Newly Listed
            </button>
            <button
              onClick={() => redirect("/search?filter=reduced")}
              className="px-6 py-3 text-sm font-semibold text-white hover:bg-brand-900/40"
            >
              Price Reduced
            </button>
          </div>

          {/* Filters */}
          <form
            onSubmit={handleSearch}
            className="grid gap-4 bg-brand-900/90 p-6 lg:grid-cols-4"
          >
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              required
              className="rounded border-gray-300 p-2 text-sm text-gray-900"
            >
              <option value="">Sub-Category</option>
              {currentCategories.map(c => <option key={c}>{c}</option>)}
            </select>

            <select
              value={make}
              onChange={e => setMake(e.target.value)}
              className="rounded border-gray-300 p-2 text-sm text-gray-900"
            >
              <option value="">Manufacturer</option>
              {MANUFACTURERS.map(m => <option key={m}>{m}</option>)}
            </select>

            <select
              value={model}
              onChange={e => setModel(e.target.value)}
              className="rounded border-gray-300 p-2 text-sm text-gray-900"
            >
              <option value="">Model</option>
              {MODELS.map(m => <option key={m}>{m}</option>)}
            </select>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded bg-brand-500 px-4 py-2 font-semibold text-white hover:bg-brand-700"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"
                   viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M21 21l-4.35-4.35m-3.65 1.85a7 7 0 110-14 7 7 0 010 14z"/>
              </svg>
              Search
            </button>
          </form>
        </div>

        {/* --------- BUY / SELL / RENT Buttons --------- */}
        {/* grid-3 ile kenarlara yaslanmış, mobilde tek sütun */}
        <div className="mt-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
            { label: "BUY",  link: "/search" },
            { label: "SELL", link: "/sell"   },
            { label: "RENT", link: "/rent"   },
            ].map(btn => (
            <button
                key={btn.label}
                onClick={() => redirect(btn.link)}
                className="w-full rounded-md bg-brand-500 px-4 py-3 text-base font-bold tracking-wide
                        text-white transition hover:bg-brand-800 active:scale-95"
            >
                {btn.label}
            </button>
            ))}
        </div>
        </div>

      </div>
    </section>
  );
}
