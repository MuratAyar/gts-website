// src/components/SocialProofSection/SocialProofSection.tsx
import React from 'react';

const SocialProofSection = () => {
  return (
    <section className="mb-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 mb-10">
            Hear real stories from professionals who rely on CraneMarket every
            day.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Review Card 1 */}
          <div className="p-8 bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex gap-4 items-start">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="user avatar"
                width="400"
                height="400"
                loading="lazy"
              />
              <div className="flex-1 flex justify-between items-start">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">
                    Ahmed Doğan
                  </h6>
                  <p className="text-sm text-gray-500">Project Manager</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-gray-600">
              “Listing our cranes on CraneMarket took minutes, and we had
              qualified bids the same day. It’s transformed how we source
              projects.”
            </p>
          </div>

          {/* Review Card 2 */}
          <div className="p-8 bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex gap-4 items-start">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div className="flex-1 flex justify-between items-start">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">
                    Selin Kaya
                  </h6>
                  <p className="text-sm text-gray-500">Site Engineer</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-gray-600">
              “We found the exact crane capacity we needed, at a better rate
              than traditional brokers. The instant notifications are a
              lifesaver.”
            </p>
          </div>

          {/* Review Card 3 */}
          <div className="p-8 bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex gap-4 items-start">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/men/28.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div className="flex-1 flex justify-between items-start">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">
                    Mehmet Arslan
                  </h6>
                  <p className="text-sm text-gray-500">Fleet Owner</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-gray-600">
              “The platform keeps my cranes busy year-round. Secure payments and
              digital contracts give me complete peace of mind.”
            </p>
          </div>

          {/* Review Card 4 */}
          <div className="p-8 bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex gap-4 items-start">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/22.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div className="flex-1 flex justify-between items-start">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">
                    Fatma Çelik
                  </h6>
                  <p className="text-sm text-gray-500">Procurement Lead</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-gray-600">
              “CraneMarket’s review system helps us choose trustworthy suppliers.
              We’ve cut down procurement time by 40%.”
            </p>
          </div>

          {/* Review Card 5 */}
          <div className="p-8 bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex gap-4 items-start">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/men/44.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div className="flex-1 flex justify-between items-start">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">
                    Emre Yıldız
                  </h6>
                  <p className="text-sm text-gray-500">Contractor</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-gray-600">
              “The dashboard lets me track every crane on site. Transparent
              pricing and no hidden fees—highly recommended.”
            </p>
          </div>

          {/* Review Card 6 */}
          <div className="p-8 bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex gap-4 items-start">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/67.jpg"
                alt="user avatar"
                width="400"
                height="400"
                loading="lazy"
              />
              <div className="flex-1 flex justify-between items-start">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">
                    Zeynep Akın
                  </h6>
                  <p className="text-sm text-gray-500">Operations Director</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-gray-600">
              “From listing to payment, everything happens in one place. Our
              rental turnaround is faster than ever.”
            </p>
          </div>
        </div>

        {/* Bottom spacer */}
        <div className="mt-16"></div>
      </div>
    </section>
  );
};

export default SocialProofSection;