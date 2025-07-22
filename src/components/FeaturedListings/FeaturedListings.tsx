/*  src/components/Home/FeaturedListings.tsx  */
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

/* --- Mock veriler (≥18) --- */
const demoListings = [
  { id:"caterpillar-320", title:"Caterpillar 320D Paletli Vinç – 2019", image:"https://picsum.photos/seed/crane1/640/480", capacity:"20 ton", location:"İstanbul", price:265_000 },
  { id:"liebherr-ltm1100", title:"Liebherr LTM 1100 Mobil Vinç – 2017", image:"https://picsum.photos/seed/crane2/640/480", capacity:"100 ton", location:"Bursa", price:795_000 },
  { id:"xcmg-qy25k", title:"XCMG QY25K5-I Teleskopik Vinç – 2021", image:"https://picsum.photos/seed/crane3/640/480", capacity:"25 ton", location:"Ankara", price:415_000 },
  { id:"grove-gmk3060", title:"Grove GMK3060 All-Terrain – 2018", image:"https://picsum.photos/seed/crane4/640/480", capacity:"60 ton", location:"İzmir", price:679_000 },
  { id:"tadano-gr700ex", title:"Tadano GR-700EX Arazi Vinç – 2020", image:"https://picsum.photos/seed/crane5/640/480", capacity:"70 ton", location:"Kocaeli", price:548_000 },
  { id:"zoomlion-zat6000h", title:"Zoomlion ZAT6000H Paletli Vinç – 2016", image:"https://picsum.photos/seed/crane6/640/480", capacity:"600 ton", location:"Adana", price:1_140_000 },
  { id:"manitowoc-18000", title:"Manitowoc 18000 Paletli Vinç – 2015", image:"https://picsum.photos/seed/crane7/640/480", capacity:"600 ton", location:"Samsun", price:1_250_000 },
  { id:"terex-ac100", title:"Terex AC 100/4L Mobil Vinç – 2019", image:"https://picsum.photos/seed/crane8/640/480", capacity:"100 ton", location:"Gaziantep", price:725_000 },
  { id:"sennebogen-1100r", title:"Sennebogen 1100R Paletli Vinç – 2018", image:"https://picsum.photos/seed/crane9/640/480", capacity:"50 ton", location:"Kayseri", price:515_000 },
  { id:"kobelco-ck1600g", title:"Kobelco CK1600G Paletli Vinç – 2022", image:"https://picsum.photos/seed/crane10/640/480", capacity:"160 ton", location:"Konya", price:1_010_000 },
  { id:"liebherr-lr1500", title:"Liebherr LR1500 Paletli Vinç – 2019", image:"https://picsum.photos/seed/crane11/640/480", capacity:"500 ton", location:"Eskişehir", price:1_600_000 },
  { id:"xcmg-xca220", title:"XCMG XCA220 All-Terrain – 2021", image:"https://picsum.photos/seed/crane12/640/480", capacity:"220 ton", location:"Trabzon", price:980_000 },
  { id:"tadano-faun-atf90", title:"Tadano-Faun ATF90-4 – 2017", image:"https://picsum.photos/seed/crane13/640/480", capacity:"90 ton", location:"Antalya", price:835_000 },
  { id:"grove-gmk5150", title:"Grove GMK5150L All-Terrain – 2020", image:"https://picsum.photos/seed/crane14/640/480", capacity:"150 ton", location:"Mersin", price:1_120_000 },
  { id:"sany-scc4000a", title:"Sany SCC4000A Paletli Vinç – 2018", image:"https://picsum.photos/seed/crane15/640/480", capacity:"400 ton", location:"Denizli", price:1_390_000 },
  { id:"zoomlion-zcc9800w", title:"Zoomlion ZCC9800W Paletli Vinç – 2016", image:"https://picsum.photos/seed/crane16/640/480", capacity:"800 ton", location:"Şanlıurfa", price:2_050_000 },
  { id:"kobelco-sl6000", title:"Kobelco SL6000 Jib – 2015", image:"https://picsum.photos/seed/crane17/640/480", capacity:"600 ton", location:"Sivas", price:1_750_000 },
  { id:"terex-cc8800", title:"Terex-Demag CC8800-1 – 2014", image:"https://picsum.photos/seed/crane18/640/480", capacity:"1600 ton", location:"Zonguldak", price:3_500_000 },
];

/* --- Fiyat biçimleyici --- */
const fmt = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

/* --- Kolon sayısı --- */
function getCols(width: number) {
  if (width >= 1024) return 6;   // lg ve üstü
  if (width >= 768)  return 4;   // md
  if (width >= 640)  return 3;   // sm
  return 2;                      // xs
}

export default function FeaturedListings() {
  const [cols, setCols] = useState(getCols(window.innerWidth));
  const [page, setPage] = useState(0); // 0-based

  /* Ekran yeniden boyutlanınca kolon sayısını güncelle */
  useEffect(() => {
    const handler = () => {
      const newCols = getCols(window.innerWidth);
      setCols((prev) => {
        if (prev !== newCols) setPage(0); // Boyut değişince başa dön
        return newCols;
      });
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  /* Sayfa başına kart sayısı (2 satır) */
  const pageSize = useMemo(() => cols * 2, [cols]);
  const totalPages = Math.ceil(demoListings.length / pageSize);

  const visibleListings = useMemo(() => {
    const start = page * pageSize;
    return demoListings.slice(start, start + pageSize);
  }, [page, pageSize]);

  const next = () => setPage((p) => (p + 1) % totalPages);
  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  return (
    <section className="relative bg-gray-50 py-4 lg:py-6">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="mb-6 text-center text-3xl font-extrabold tracking-tight text-gray-900">
          Featured&nbsp;Listings
        </h2>

        {/* Ok düğmeleri */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-100 focus:outline-none"
          aria-label="Önceki vitrin"
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
        </button>

        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-100 focus:outline-none"
          aria-label="Sonraki vitrin"
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-600" />
        </button>

        {/* Ürün ızgarası */}
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
            gridTemplateRows: "repeat(2, auto)",
          }}
        >
          {visibleListings.map((l) => (
            <Link
              key={l.id}
              to={`/listings/${l.id}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="h-32 w-full overflow-hidden">
                <img
                  src={l.image}
                  alt={l.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-3">
                <div>
                  <h3 className="line-clamp-2 text-sm font-semibold text-gray-900">
                    {l.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-gray-500">
                    {l.capacity} • {l.location}
                  </p>
                </div>

                <p className="mt-2 text-base font-extrabold text-brand-600">
                  {fmt.format(l.price)}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Daha fazla göster */}
        <div className="mt-8 text-center">
          <Link
            to="/listings?featured=true"
            className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-gray-900 transition hover:bg-gray-100 hover:text-primary-700 focus:outline-none focus:ring-4 focus:ring-gray-200"
          >
            Show more
          </Link>
        </div>
      </div>
    </section>
  );
}
