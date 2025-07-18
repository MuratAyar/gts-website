// src/components/AboutSection/AboutSection.tsx
import React from 'react';

import craneHero from '../../../assets/about/crane-hero.jpg';
import craneTeam from '../../../assets/about/crane-team.jpg';
import craneWork from '../../../assets/about/crane-work.jpg';

const AboutSection = () => {
  return (
    <div className="mx-auto px-8 py-12 max-w-6xl">
      <div className="flex flex-nowrap flex-row items-center justify-center gap-12">
        {/* Left: Staggered Images */}
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-4">
            <img
              src={craneHero}
              alt="Crane hero"
              className="w-48 h-40 object-cover rounded-xl shadow-md"
            />
            <img
              src={craneTeam}
              alt="Crane team"
              className="w-48 h-40 object-cover rounded-xl shadow-md"
            />
          </div>
          <div className="mt-auto mb-auto">
            <img
              src={craneWork}
              alt="Crane at work"
              className="w-48 h-40 object-cover rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Right: Copy */}
        <div className="max-w-md">
          <span className="block mb-3 text-lg font-semibold text-blue-600">
            Why CraneMarket?
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Find the perfect crane for your project in just a few clicks
          </h2>

          <p className="mb-3 text-base text-gray-600">
            CraneMarket is Turkey&apos;s first comprehensive crane marketplace,
            bringing together rental and for-sale cranes for construction and
            industrial projects on a single platform. Enjoy a transparent,
            commission-free, and trustworthy experience.
          </p>

          <p className="mb-3 text-base text-gray-600">
            <strong>Real-time quote notifications</strong> and{' '}
            <strong>detailed equipment reports</strong> help you quickly choose
            the best crane for your budget and timeline.
          </p>

          <div className="mb-6 space-y-2">
            <div className="flex items-start">
              <svg
                className="w-5 h-5 mt-1 mr-2 text-green-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-600">
                Compare cranes tailored to your project
              </span>
            </div>
            <div className="flex items-start">
              <svg
                className="w-5 h-5 mt-1 mr-2 text-green-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-600">
                Commission-free rentals and purchases
              </span>
            </div>
            <div className="flex items-start">
              <svg
                className="w-5 h-5 mt-1 mr-2 text-green-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-600">
                Trusted seller and operator reviews
              </span>
            </div>
            <div className="flex items-start">
              <svg
                className="w-5 h-5 mt-1 mr-2 text-green-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-600">
                Fast booking and hassle-free contracts
              </span>
            </div>
          </div>

          <a
            href="/cranes"
            className="inline-flex items-center justify-center py-3 px-6 text-base font-medium text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-lg"
          >
            Browse Cranes
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
