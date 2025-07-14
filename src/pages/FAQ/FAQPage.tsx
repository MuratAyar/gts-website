/* ----------  src/pages/FaqPage.tsx  ---------- */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/** FAQ içeriğini iki gruba ayırdık */
const buyerFaq = [
  {
    question: "GTS Cranes nedir ve nasıl çalışır?",
    answer:
      "GTS Cranes; vinç ve ağır ekipmanı güvenli, komisyonsuz biçimde satın alabileceğiniz çevrim-içi pazaryeridir."
  },
  {
    question: "Komisyon veya gizli ücret öder miyim?",
    answer: "Hayır. Alıcıların ödediği herhangi bir komisyon veya listelenme ücreti yoktur."
  },
  {
    question: "Güvenli ödeme nasıl sağlanıyor?",
    answer:
      "Satış bedeli emanet hesabımıza aktarılır, ekipman teslim alınıp onaylandığında satıcıya aktarılır."
  },
  {
    question: "Satıcı ile nasıl iletişime geçerim?",
    answer:
      "İlan detay sayfasındaki “Mesaj Gönder” veya “Ara” butonlarını kullanabilirsiniz."
  },
  {
    question: "Destek ekibine nasıl ulaşabilirim?",
    answer: (
      <>
        7/24 canlı sohbet veya{" "}
        <a href="mailto:support@gtscranes.com" className="underline">
          support@gtscranes.com
        </a>
      </>
    )
  }
];

const sellerFaq = [
  {
    question: "Bir vinci ücretsiz yayınlayabilir miyim?",
    answer:
      "Evet, tek seferlik ilanlar ücretsizdir. Daha fazla ilan için Profesyonel hesaba geçmeniz gerekir."
  },
  {
    question: "İlanım ne kadar süre yayında kalır?",
    answer: "Standart ilanlar 60 gün yayında kalır ve kontrol panelinden tek tıkla yenilenebilir."
  },
  {
    question: "İlanımı nasıl öne çıkarabilirim?",
    answer:
      "“Featured Listing” paketini satın alarak ana sayfa ve arama sonuçlarında daha görünür kılabilirsiniz."
  },
  {
    question: "Profesyonel hesap özellikleri nelerdir?",
    answer: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Sınırsız ilan &amp; ekip yönetimi</li>
        <li>Detaylı görüntülenme / tıklama analitiği</li>
        <li>API ile stok entegrasyonu</li>
      </ul>
    )
  },
  {
    question: "Ekspertiz raporu sağlayabiliyor musunuz?",
    answer: (
      <>
        Evet.{" "}
        <Link to="/contact" className="underline">
          İletişim formu
        </Link>{" "}
        üzerinden ekspertiz talebinizi iletebilirsiniz.
      </>
    )
  }
];

const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [navbarH, setNavbarH] = useState(0);
  const [role, setRole] = useState<"buyer" | "seller">("buyer");

  // Navbar yüksekliğini yalnızca ilk render’da ölç
  useEffect(() => {
    const nav = document.querySelector("nav");
    if (nav) setNavbarH(nav.getBoundingClientRect().height);
  }, []);

  // Seçilen role göre içerik
  const faqItems = role === "buyer" ? buyerFaq : sellerFaq;

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-brand-600 text-white">
      {/* Header ile çakışmayı önleyen spacer */}
      {navbarH > 0 && <div style={{ height: navbarH }} />}

      <div className="mx-auto max-w-4xl px-5 pb-10">
        {/* ------- Başlık & Sekmeler ------- */}
        <h2 className="text-center text-4xl font-extrabold mb-4">
          Sıkça Sorulan Sorular
        </h2>

        <div className="mb-6 flex justify-center gap-4">
          {(["buyer", "seller"] as const).map((r) => (
            <button
              key={r}
              onClick={() => {
                setRole(r);
                setOpenIndex(null); // sekme değişince açık soruyu kapat
              }}
              className={`rounded-md px-4 py-2 text-sm font-semibold transition
                          ${role === r ? "bg-white/20" : "bg-white/10 hover:bg-white/20"}`}
            >
              {r === "buyer" ? "Buyer" : "Seller"}
            </button>
          ))}
        </div>

        {/* ------- SSS Kartları ------- */}
        <div className="space-y-3">
          {faqItems.map((item, idx) => {
            const opened = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-lg border border-white/60 bg-brand-500/60"
              >
                {/* Soru */}
                <button
                  onClick={() => toggle(idx)}
                  className={`flex w-full items-center justify-between p-4 text-left font-medium
                              transition ${opened ? "bg-brand-500/60" : "hover:bg-brand-500/40"}`}
                >
                  <span>{item.question}</span>
                  <svg
                    className={`h-5 w-5 transform transition-transform ${
                      opened ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Cevap */}
                <div
                  className={`px-4 pb-4 pt-2 text-sm ${
                    opened ? "block" : "hidden"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
