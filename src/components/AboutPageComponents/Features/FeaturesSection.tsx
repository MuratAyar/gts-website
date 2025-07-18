// src/components/FeaturesSection/FeaturesSection.tsx
import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: 'Smart Matching Engine',
      description:
        'Our AI-driven platform connects your crane listing with the most relevant projects and contractors, delivering high-quality leads in seconds.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      ),
      bgColor: 'bg-blue-100',
    },
    {
      id: 2,
      title: 'Instant Notifications',
      description:
        'Receive real-time alerts whenever a contractor submits a bid or message, so you never miss an opportunity.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
      bgColor: 'bg-green-100',
    },
    {
      id: 3,
      title: 'Easy Listing Workflow',
      description:
        'Create and publish a rental or sale listing in minutes—drag-and-drop photos, set availability, and you’re live.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      bgColor: 'bg-purple-100',
    },
    {
      id: 4,
      title: '24/7 Expert Support',
      description:
        'Our crane specialists are available around the clock to answer questions and resolve issues quickly.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-yellow-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      bgColor: 'bg-yellow-100',
    },
    {
      id: 5,
      title: 'Secure Payments',
      description:
        'All transactions are protected with encrypted payment gateways and escrow, ensuring funds are safe until the crane is delivered.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      bgColor: 'bg-red-100',
    },
    {
      id: 6,
      title: 'Continuous Updates',
      description:
        'We roll out new marketplace features every month, keeping you ahead with the latest innovations in crane rental and sales.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      bgColor: 'bg-indigo-100',
    },
  ];

  return (
    <div className="bg-gray-50 mt-10 mb-10">
      <section className="pt-10 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Key Features
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 mb-10">
              Discover what makes CraneMarket different from traditional brokers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white p-6 sm:p-6 lg:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className={`w-14 h-14 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16" />
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
