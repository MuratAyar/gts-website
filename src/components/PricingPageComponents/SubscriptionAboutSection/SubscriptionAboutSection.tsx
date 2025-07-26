import React from "react";
import { ShoppingBag, Camera, BarChart2 } from "lucide-react";

const SubscriptionAboutSection: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-8 py-12">
        {/* TOP HEADING */}
        <h1 className="mb-10 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          How Do Our Subscription Plans Work?
        </h1>

        <div className="flex flex-row flex-nowrap items-center justify-center gap-12">
          {/* LEFT COLUMN – coloured icons + copy */}
          <div className="flex flex-col gap-6">
            {/* card 1 */}
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/10">
                <ShoppingBag className="h-8 w-8 text-brand-500" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">
                  Zero Commission
                </h4>
                <p className="text-sm text-gray-600">
                  List cranes, parts or attachments at a flat monthly fee – keep
                  100 % of the sale price when you close a deal.
                </p>
              </div>
            </div>

            {/* card 2 */}
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/10">
                <Camera className="h-8 w-8 text-brand-500" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">
                  Rich Media Listings
                </h4>
                <p className="text-sm text-gray-600">
                  Upload up to&nbsp;50 photos and a full-HD walk-around video so
                  buyers see every angle before they call.
                </p>
              </div>
            </div>

            {/* card 3 */}
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/10">
                <BarChart2 className="h-8 w-8 text-brand-500" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">
                  Data-Driven Insights
                </h4>
                <p className="text-sm text-gray-600">
                  Track impressions, clicks and enquiry rates in real time – fine
                  tune your listings for maximum exposure.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN – description */}
          <div className="max-w-md">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              About&nbsp;GTS&nbsp;Cranes Subscriptions
            </h2>
            <p className="mb-6 text-base text-gray-600">
              Our plans are designed for crane dealers, rental companies and parts
              suppliers who need predictable monthly pricing with no hidden fees.
            </p>
            <p className="text-base text-gray-600">
              Choose the package that matches your inventory size today – upgrade
              anytime as your fleet grows. Operator job listings and
              “wanted&nbsp;ads” are coming soon and will be included free of
              charge for active subscribers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionAboutSection;
