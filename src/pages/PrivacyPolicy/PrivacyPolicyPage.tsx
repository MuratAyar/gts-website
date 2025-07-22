/* ----------  src/pages/PrivacyPolicy.tsx  ---------- */
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="bg-gray-100 text-gray-800">
      <div className="mx-auto max-w-5xl px-6 py-12 lg:py-20">
        <h1 className="mb-10 text-center text-4xl font-extrabold">
          Privacy Policy
        </h1>

        {/* INTRODUCTION ---------------------------------------------------- */}
        <p className="mb-6">
          Your privacy is important to us. This policy explains how{" "}
          <strong>GTS Cranes Marketplace</strong> (“GTS Cranes,” “we,” “our,”
          “us”) collects, uses, discloses, and safeguards your information when
          you visit or use our website, mobile application, and any other
          services we own and operate (collectively, the “Service”).
        </p>

        <hr className="my-8 border-gray-300" />

        {/* 1. INFORMATION WE COLLECT --------------------------------------- */}
        <h2 className="mt-8 text-2xl font-semibold">1&nbsp;· Information We Collect</h2>

        <h3 className="mt-4 text-lg font-semibold">1.1 Personally Identifiable Information (PII)</h3>
        <p className="mt-2">
          When you register, list equipment, make a purchase, subscribe to our
          newsletter, or interact with the Service, we may ask you to supply:
        </p>
        <ul className="list-disc pl-6">
          <li>Name, company, and job title</li>
          <li>Postal address and country of residence</li>
          <li>Email address and phone number</li>
          <li>Billing or credit-card details (for paid services)</li>
          <li>
            Transaction data (ads placed, crane purchases, invoices, logistics
            orders, etc.)
          </li>
        </ul>

        <h3 className="mt-6 text-lg font-semibold">1.2 Non-PII & Device Data</h3>
        <p className="mt-2">
          We automatically collect certain information sent by your browser or
          device, such as:
        </p>
        <ul className="list-disc pl-6">
          <li>IP address and approximate geolocation</li>
          <li>Browser type, version, and language settings</li>
          <li>
            Pages visited, referring/exit URLs, click-stream data, and time
            spent on pages
          </li>
          <li>Device identifiers, operating system, and screen resolution</li>
          <li>Error logs and diagnostic information</li>
        </ul>

        {/* 2. WHEN WE COLLECT --------------------------------------------- */}
        <h2 className="mt-10 text-2xl font-semibold">2&nbsp;· When We Collect Information</h2>
        <ul className="mt-2 list-disc pl-6">
          <li>When you create or update an account</li>
          <li>When you list, buy, sell, or rent equipment</li>
          <li>
            When you complete webforms, surveys, promotions, or live-chat
            sessions
          </li>
          <li>When you subscribe to email updates or SMS alerts</li>
          <li>Automatically — whenever you browse our sites or apps</li>
        </ul>

        {/* 3. HOW WE USE IT ------------------------------------------------ */}
        <h2 className="mt-10 text-2xl font-semibold">3&nbsp;· How We Use Your Information</h2>
        <ul className="mt-2 list-disc pl-6">
          <li>Deliver, operate, and maintain the Service’s core features</li>
          <li>
            Process payments, invoices, shipping, and logistics for equipment
            transactions
          </li>
          <li>Personalize content, search results, and ad placements</li>
          <li>Respond to customer-service requests and dispute inquiries</li>
          <li>Send newsletters, product updates, and marketing offers</li>
          <li>
            Detect, prevent, and mitigate fraud, abuse, and security threats
          </li>
          <li>
            Conduct analytics, market research, and product-development
            activities
          </li>
        </ul>

        {/* 4. COOKIES ------------------------------------------------------ */}
        <h2 className="mt-10 text-2xl font-semibold">4&nbsp;· Cookies & Tracking Technologies</h2>
        <p className="mt-2">
          We and selected partners use cookies, pixels, local storage, and
          similar technologies to:
        </p>
        <ul className="list-disc pl-6">
          <li>Remember your session and shopping-cart items</li>
          <li>Save language and preference settings</li>
          <li>Measure traffic patterns, conversions, and campaign success</li>
          <li>Show relevant ads via remarketing networks (e.g., Google Ads)</li>
        </ul>
        <p className="mt-2">
          You can control cookie behaviour in your browser settings; disabling
          cookies may limit certain features.
        </p>

        {/* 5. DISCLOSURE --------------------------------------------------- */}
        <h2 className="mt-10 text-2xl font-semibold">5&nbsp;· Disclosure of Information</h2>
        <p className="mt-2">
          We do <strong>not</strong> sell or rent your PII. We may share data —
          under confidentiality agreements — with:
        </p>
        <ul className="list-disc pl-6">
          <li>
            Hosting providers, payment processors (e.g., Stripe), analytics
            vendors, and logistics partners
          </li>
          <li>
            Law-enforcement or government agencies when required by applicable
            law
          </li>
          <li>
            Successors in the event of a merger, acquisition, or asset sale
          </li>
          <li>
            Other users, when you publicly post listings, reviews, or forum
            comments
          </li>
        </ul>

        {/* 6. SECURITY ----------------------------------------------------- */}
        <h2 className="mt-10 text-2xl font-semibold">6&nbsp;· Security</h2>
        <p className="mt-2">
          We maintain technical and organizational measures such as SSL/TLS
          encryption, firewall isolation, malware scanning, and role-based
          access controls. Nevertheless, no online transmission or storage
          system is guaranteed 100 % secure.
        </p>

        {/* 7. YOUR CHOICES ------------------------------------------------- */}
        <h2 className="mt-10 text-2xl font-semibold">
          7&nbsp;· Your Rights & Choices
        </h2>
        <ul className="list-disc pl-6">
          <li>Access, correct, or delete your personal data</li>
          <li>Opt out of marketing emails via the “unsubscribe” link</li>
          <li>
            Disable cookies or reset advertising identifiers in your browser
          </li>
          <li>
            Request data portability or place data-processing restrictions (if
            required by law)
          </li>
        </ul>

        {/* 8. CHILDREN ----------------------------------------------------- */}
        <h2 className="mt-10 text-2xl font-semibold">
          8&nbsp;· Children’s Privacy
        </h2>
        <p className="mt-2">
          Our Service is not directed to children under 13, and we do not
          knowingly collect data from them. If we discover we have inadvertently
          received such information, we will delete it promptly.
        </p>

        {/* 9. INTERNATIONAL TRANSFERS ------------------------------------- */}
        <h2 className="mt-10 text-2xl font-semibold">
          9&nbsp;· International Data Transfers
        </h2>
        <p className="mt-2">
          We may process and store data in the United States or other countries
          where we or our service providers operate. We implement safeguards
          (such as Standard Contractual Clauses) when transferring data from the
          EU/EEA or other regions with similar regulations.
        </p>

        {/* 10. CHANGES ----------------------------------------------------- */}
        <h2 className="mt-10 text-2xl font-semibold">
          10&nbsp;· Changes to This Policy
        </h2>
        <p className="mt-2">
          We may update this Privacy Policy periodically. Material changes will
          be announced via email or prominent notice on the site. The “Last
          updated” date at the bottom will indicate the most recent revision.
        </p>

        {/* 11. CONTACT ----------------------------------------------------- */}
        <h2 className="mt-10 text-2xl font-semibold">11&nbsp;· Contact Us</h2>
        <p className="mt-2">
          If you have questions about privacy at GTS Cranes, please contact our
          Data Protection Officer:
        </p>
        <address className="mt-2 not-italic">
          <strong>GTS Cranes Marketplace</strong> <br />
          Attn: Privacy Team <br />
          701 Brazos St., Suite 300, Austin, TX 78701 USA <br />
          Email:&nbsp;
          <a href="mailto:privacy@gtscranes.com" className="text-brand-600">
            privacy@gtscranes.com
          </a>
        </address>

        <p className="mt-12 text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
