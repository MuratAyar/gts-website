import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const SubscriptionPricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const location = useLocation();

  const handlePlanClick = (planLink: string): void => {
    if (location.pathname === planLink) {
      window.scrollTo({ top: 0, behavior: "instant" });
      window.location.reload();
    } else {
      window.location.href = planLink;
    }
  };

  return (
    <section className="bg-white font-sans py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <h1 className="mb-12 mt-5 text-center text-3xl font-bold text-gray-900 md:text-4xl ">
          Listing&nbsp;Subscription&nbsp;Plans
        </h1>

        {/* Monthly / Yearly toggle */}
        <div className="mb-10 flex items-center justify-center gap-4">
          <div className="flex overflow-hidden rounded-lg border border-gray-200 p-0.5">
            <button
              onClick={() => setIsYearly(false)}
              className={`rounded-md px-5 py-1.5 text-sm font-medium focus:outline-none ${
                !isYearly
                  ? "bg-gray-100 text-gray-800"
                  : "bg-white text-gray-500 hover:bg-gray-50"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`ml-1 rounded-md px-5 py-1.5 text-sm font-medium focus:outline-none ${
                isYearly
                  ? "bg-gray-100 text-gray-800"
                  : "bg-white text-gray-500 hover:bg-gray-50"
              }`}
            >
              Yearly
            </button>
          </div>
          <span className="text-sm font-medium text-brand-500">
            Save&nbsp;up&nbsp;to&nbsp;33%
          </span>
        </div>

        {/* Cards */}
        <div className="flex flex-row justify-between gap-6">
          {[
            {
              title: "Standard",
              price: "€49",
              oldPrice: "€99",
              yearlyPrice: "€490",
              yearlyOldPrice: "€990",
              description: "Perfect for getting started with single listings.",
              features: [
                "1 crane listing at a time",
                "No commission fees",
                "Regional & international reach",
                "Up to 50 photos + 1 video",
                "Dealer profile page",
                "12-month term",
              ],
              buttonText: "View Standard",
              borderClass: "border border-gray-200",
              link: "/subscriptions/standard",
            },
            {
              title: "Professional",
              price: "€99",
              oldPrice: "€199",
              yearlyPrice: "€990",
              yearlyOldPrice: "€1990",
              description:
                "Our most-popular plan for active dealers with multiple cranes.",
              features: [
                "10 simultaneous listings",
                "Your listings on your own site too",
                "Money-back guarantee",
                "Automatic data import",
                "Priority email support",
              ],
              buttonText: "Choose Professional",
              borderClass: "relative border-2 border-brand-500",
              recommended: true,
              link: "/subscriptions/professional",
            },
            {
              title: "Enterprise",
              price: "€249",
              oldPrice: "€499",
              yearlyPrice: "€2490",
              yearlyOldPrice: "€4990",
              description:
                "Unlimited reach for large fleets and rental companies.",
              features: [
                "50 listings simultaneously",
                "Premium marketing placements",
                "Logo shown in every listing",
                "Automatic data import API",
                "Dedicated account manager",
                "Premium phone support",
              ],
              buttonText: "Contact Sales",
              borderClass: "border border-gray-200",
              link: "/contact-sales",
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`flex min-w-[280px] flex-1 flex-col rounded-lg bg-white p-6 lg:p-8 ${plan.borderClass}`}
            >
              {plan.recommended && (
                <span className="absolute right-6 top-4 rounded-full bg-brand-500 px-2.5 py-0.5 text-xs font-bold text-white">
                  MOST&nbsp;POPULAR
                </span>
              )}

              <h2 className="mb-1 text-xl font-semibold text-gray-900">
                {plan.title}
              </h2>
              <p className="mb-4 min-h-[48px] text-sm text-gray-600">
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900 lg:text-4xl">
                  {isYearly ? plan.yearlyPrice : plan.price}
                </span>
                <span className="text-sm text-gray-500">
                  {" "}
                  / {isYearly ? "year" : "month"}
                </span>
                {(isYearly ? plan.yearlyOldPrice : plan.oldPrice) && (
                  <span className="ml-2 rounded-sm bg-brand-500 px-1.5 py-0.5 text-xs line-through text-white">
                    {isYearly ? plan.yearlyOldPrice : plan.oldPrice}
                  </span>
                )}
              </div>

              <button
                onClick={() => handlePlanClick(plan.link)}
                className={`mb-8 w-full rounded-lg py-2.5 text-center font-semibold transition duration-200 ${
                  plan.recommended
                    ? "bg-brand-500 text-white hover:bg-brand-600"
                    : "border border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
              >
                {plan.buttonText}
              </button>

              <div>
                <h3 className="mb-4 text-sm font-medium text-gray-800">
                  Key features:
                </h3>
                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <i className="fas fa-check mr-2 mt-1 shrink-0 text-brand-500"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mx-auto mt-10 mb-10 text-center text-xs text-gray-500">
          * VAT included. Subscriptions renew automatically and can be cancelled
          at any time.
        </p>
      </div>
    </section>
  );
};

export default SubscriptionPricingSection;
