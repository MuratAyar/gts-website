// src/pages/ContactPage.tsx
import React, { useState } from "react";

const ContactPage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };

  return (
    /* Tüm arka plan turuncu */
    <section className="bg-brand-600 py-6">
      <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-10 px-4 lg:grid-cols-2">
        {/* ----------------- GOOGLE MAPS ----------------- */}
        <div className="relative h-[640px] lg:h-[680px] w-full overflow-hidden rounded-lg shadow-lg">
          <iframe
            title="Google Map"
            className="absolute inset-0 h-full w-full pointer-events-auto"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448.29468073371487!2d29.177498716653066!3d40.899186247306965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac3868c5f56ff%3A0x7de81282c4aa8bff!2sTedi!5e0!3m2!1str!2str!4v1745164945304!5m2!1str!2str"
          />
          {/* Bilgi kutusu – sol-alt */}
          <div className="absolute bottom-4 left-4 z-10 max-w-xs rounded bg-gray-900/90 px-6 py-5 text-white shadow-md">
            <p>
              Petrol İş Mah., Mesire Sk., No: 8 D:3
              <br />
              Kartal / İstanbul
            </p>

            <a
              href="mailto:ayar.murat55@gmail.com"
              className="mt-4 inline-block text-blue-400 underline"
            >
              ayar.murat55@gmail.com
            </a>

            <h2 className="mt-4 text-xs font-semibold tracking-widest">
              PHONE
            </h2>
            <p>+90 531 715 80 68</p>
          </div>
        </div>

        {/* ----------------- İLETİŞİM FORMU ----------------- */}
        <form
          onSubmit={handleSubmit}
          className="flex h-[640px] lg:h-[680px] w-full flex-col justify-between rounded-lg bg-white p-8 shadow-lg"
        >
          {/* ÜST – Form alanları */}
          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-gray-900">Bizlere Ulaşın!</h2>
            <p className="text-gray-600">
              Hizmetlerimiz hakkında bilgi almak için bizimle ücretsiz bir şekilde
              iletişime geçin.
            </p>

            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-600">
                İsim Soyisim
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded border border-gray-300 px-3 py-2 text-gray-700
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-600">
                E-posta
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded border border-gray-300 px-3 py-2 text-gray-700
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-600">
                Telefon Numarası (5xx)-xxx-xx-xx
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full rounded border border-gray-300 px-3 py-2 text-gray-700
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-600">
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                className="min-h-[140px] w-full resize-none rounded border border-gray-300 px-3 py-2 text-gray-700
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          {/* ALT – Gönder butonu & info */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full rounded bg-blue-500 px-6 py-2 text-lg text-white transition hover:bg-blue-600"
            >
              Gönder
            </button>
            <p className="mt-4 text-center text-xs text-gray-500">
              İlgili ekibimiz sizlere en kısa zaman içerisinde ulaşacaktır.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
