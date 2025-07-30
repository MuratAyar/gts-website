/* --------------------------------------------------------------------------
   src/components/ListingDetailComponents/SellerInformationSection.tsx
   -------------------------------------------------------------------------- */
import { useState } from "react";

export default function SellerInformationSection() {
  const [form, setForm] = useState({
    message:
      "Merhaba, ilanınız ile ilgileniyorum. Lütfen benimle iletişime geçin.",
    name: "",
    company: "",
    email: "",
    phone: "",
    code: "",
  });

  return (
    <section className="mx-auto mt-12 max-w-7xl px-4 rounded-lg border border-gray-200 bg-white p-6 lg:flex lg:gap-8 lg:p-10">
      {/* -------- LEFT : Seller info ---------------------------------- */}
      <div className="w-full max-w-md flex-shrink-0 space-y-8">
        <h3 className="text-xl font-semibold text-gray-900">
          Satıcı iletişim bilgileri
        </h3>

        {/* ----- company card ----- */}
        <div className="space-y-4 rounded-lg border border-gray-100 p-5">
          {/* üst logo + ad */}
          <div className="flex items-start gap-3">
            <img
              src="https://via.placeholder.com/64x64?text=Logo"
              alt="Lider Tower Crane"
              className="h-14 w-14 rounded object-cover"
            />
            <div>
              <p className="text-lg font-bold text-gray-900">
                Lider Tower Crane
              </p>

              <span className="inline-flex items-center gap-1 rounded bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.157c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.961c.3.921-.755 1.688-1.539 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.783.57-1.838-.197-1.539-1.118l1.287-3.961a1 1 0 00-.364-1.118L2.02 9.389c-.783-.57-.38-1.81.588-1.81h4.157a1 1 0 00.95-.69l1.286-3.962z" />
                </svg>
                Doğrulanmış üretici
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-700">
            Stokta: <span className="font-medium">5 ilan</span>
          </p>
          <p className="text-sm text-gray-700">
            Machineryline'da <span className="font-medium">1 yıl</span>
          </p>
          <a
            href="#"
            className="flex items-center gap-1 text-sm text-brand-600 hover:underline"
          >
            <svg
              className="h-4 w-4 shrink-0 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 20l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 12l9-5-9-5-9 5 9 5z"
              />
            </svg>
            site1717590698705287374.machineryline.com.tr
          </a>

          <button className="w-full rounded border border-gray-300 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Satıcıya abone olun
          </button>

          <hr className="my-4" />

          {/* ----- contact block ----- */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="https://via.placeholder.com/48x48?text=Logo"
                alt="Lider Kule Vinç"
                className="h-12 w-12 object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">Lider Kule Vinç</p>
                <p className="text-sm text-gray-600">Diller: Türkçe, İngilizce</p>
              </div>
            </div>

            <div className="flex items-start gap-2 text-sm text-gray-700">
              <span className="mt-0.5 text-gray-400">📞</span>
              <span className="flex-1">
                <span className="font-medium text-gray-900">
                  +90 533&nbsp;571…
                </span>{" "}
                • <a href="#" className="text-brand-600 hover:underline">Göster</a>
              </span>
            </div>

            <button className="flex w-max items-center gap-1 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-700">
              WhatsApp
            </button>

            <a
              href="https://www.liderkulevinc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-brand-600 hover:underline"
            >
              🌐 www.liderkulevinc.com/
            </a>

            <hr />

            <div>
              <h4 className="mb-1 font-semibold text-gray-900">Adres</h4>
              <p className="text-sm text-gray-700">
                Türkiye, Marmara Bölgesi, 34956, Barnak Sk., 4
              </p>
              <a href="#" className="text-sm text-brand-600 hover:underline">
                Haritayı göster
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* -------- RIGHT : Message form -------------------------------- */}
      <div className="mt-10 w-full lg:mt-0">
        <h3 className="mb-4 text-xl font-semibold text-gray-900">
          Mesaj gönder
        </h3>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-4 rounded-lg bg-orange-50 p-6"
        >
          <Textarea
            label="Mesaj"
            rows={4}
            value={form.message}
            onChange={(v) => setForm({ ...form, message: v })}
          />
          <Input
            label="Adınız"
            value={form.name}
            onChange={(v) => setForm({ ...form, name: v })}
          />
          <Input
            label="Şirket"
            value={form.company}
            onChange={(v) => setForm({ ...form, company: v })}
          />
          <Input
            label="E-posta"
            type="email"
            value={form.email}
            onChange={(v) => setForm({ ...form, email: v })}
          />
          <Input
            label="Telefon"
            value={form.phone}
            onChange={(v) => setForm({ ...form, phone: v })}
          />

          <div className="flex items-center gap-3">
            <Input
              label="Doğrulama kodu"
              className="flex-1"
              value={form.code}
              onChange={(v) => setForm({ ...form, code: v })}
            />
            <span className="select-none rounded bg-gray-200 px-3 py-2 text-lg font-mono">
              2 1 3
            </span>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-brand-500 py-3 font-semibold text-white hover:bg-brand-600"
          >
            Gönder
          </button>

          <p className="pt-2 text-xs text-gray-500">
            Buraya tıklayarak, <a className="underline">gizlilik politikamızı</a>{" "}
            ve <a className="underline">kullanıcı anlaşmamızı</a> kabul etmiş
            olursunuz.
          </p>
        </form>
      </div>
    </section>
  );
}

/* ------------ helper components ----------------------------------- */
function Input({
  label,
  type = "text",
  value,
  onChange,
  className = "",
}: {
  label: string;
  type?: "text" | "email";
  value?: string;
  onChange?: (v: string) => void;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-600 focus:ring-brand-600"
      />
    </div>
  );
}

function Textarea({
  label,
  rows,
  value,
  onChange,
}: {
  label: string;
  rows?: number;
  value?: string;
  onChange?: (v: string) => void;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        rows={rows}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-600 focus:ring-brand-600"
      />
    </div>
  );
}
