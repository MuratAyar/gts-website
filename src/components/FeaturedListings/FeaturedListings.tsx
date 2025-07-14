/* src/components/Home/FeaturedListings.tsx */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* --- Mock veriler (en az 10 adet, çalışan resim URL’leri) --- */
const demoListings = [
  {
    id: "caterpillar-320",
    title: "Caterpillar 320D Paletli Vinç – 2019",
    image: "https://picsum.photos/seed/crane1/640/480",
    capacity: "20 ton",
    location: "İstanbul",
    price: 265_000,
  },
  { id: "liebherr-ltm1100", title: "Liebherr LTM 1100 Mobil Vinç – 2017", image: "https://picsum.photos/seed/crane2/640/480", capacity: "100 ton", location: "Bursa", price: 795_000 },
  { id: "xcmg-qy25k", title: "XCMG QY25K5-I Teleskopik Vinç – 2021", image: "https://picsum.photos/seed/crane3/640/480", capacity: "25 ton", location: "Ankara", price: 415_000 },
  { id: "grove-gmk3060", title: "Grove GMK3060 All-Terrain – 2018", image: "https://picsum.photos/seed/crane4/640/480", capacity: "60 ton", location: "İzmir", price: 679_000 },
  { id: "tadano-gr700ex", title: "Tadano GR-700EX Arazi Vinç – 2020", image: "https://picsum.photos/seed/crane5/640/480", capacity: "70 ton", location: "Kocaeli", price: 548_000 },
  { id: "zoomlion-zat6000h", title: "Zoomlion ZAT6000H Paletli Vinç – 2016", image: "https://picsum.photos/seed/crane6/640/480", capacity: "600 ton", location: "Adana", price: 1_140_000 },
  { id: "manitowoc-18000", title: "Manitowoc 18000 Paletli Vinç – 2015", image: "https://picsum.photos/seed/crane7/640/480", capacity: "600 ton", location: "Samsun", price: 1_250_000 },
  { id: "terex-ac100", title: "Terex AC 100/4L Mobil Vinç – 2019", image: "https://picsum.photos/seed/crane8/640/480", capacity: "100 ton", location: "Gaziantep", price: 725_000 },
  { id: "sennebogen-1100r", title: "Sennebogen 1100R Paletli Vinç – 2018", image: "https://picsum.photos/seed/crane9/640/480", capacity: "50 ton", location: "Kayseri", price: 515_000 },
  { id: "kobelco-ck1600g", title: "Kobelco CK1600G Paletli Vinç – 2022", image: "https://picsum.photos/seed/crane10/640/480", capacity: "160 ton", location: "Konya", price: 1_010_000 },
];

/* Basit fiyat biçimleyici */
const fmt = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

/* --- Ekran genişliğine göre kolon sayısını hesapla --- */
function getCols(width: number) {
  if (width >= 1024) return 5;   // lg >= 1024 px
  if (width >= 768) return 4;    // md >= 768 px
  if (width >= 640) return 3;    // sm >= 640 px
  return 2;                      // xs
}

export default function FeaturedListings() {
  const [cols, setCols] = useState(getCols(window.innerWidth));

  /* resize dinleyicisi */
  useEffect(() => {
    const handler = () => setCols(getCols(window.innerWidth));
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  /* İki satırda gösterilecek toplam kart sayısı */
  const visibleListings = demoListings.slice(0, cols * 2);

  return (
    <section className="bg-gray-50 py-4 lg:py-4">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Başlık */}
        <h2 className="mb-6 text-center text-3xl font-extrabold tracking-tight text-gray-900">
          Featured&nbsp;Listings
        </h2>

        {/* Responsive 2 × cols ızgara */}
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
              {/* görsel */}
              <div className="h-32 w-full overflow-hidden">
                <img
                  src={l.image}
                  alt={l.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* detaylar */}
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

        {/* “Show more” */}
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
