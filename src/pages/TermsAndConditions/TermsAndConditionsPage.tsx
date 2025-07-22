// src/pages/TermsAndConditions.tsx
import { Link } from "react-router-dom";

/**
 * Long-form Terms & Conditions page for GTS Cranes marketplace.
 * – Light‐gray background (bg-gray-100) fills the viewport.
 * – Content organised into semantically structured sections.
 * You can adjust text later as needed; the overall layout & styling
 * match other pages (max-w-4xl centred, responsive typography).
 */
export default function TermsAndConditions() {
  return (
    <main className="bg-gray-100 py-12 lg:py-20">
      <article className="mx-auto max-w-4xl space-y-10 px-6 text-gray-800">
        {/* --- HERO / TITLE --- */}
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-base/7 text-gray-600">
            Last updated: <time dateTime="2025-07-21">July&nbsp;21,&nbsp;2025</time>
          </p>
        </header>

        {/* --- INTRODUCTION --- */}
        <section id="introduction" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">1. Introduction</h2>
          <p>
            Welcome to <strong>GTS Cranes</strong> ("<em>GTS</em>", "<em>we</em>",
            "<em>our</em>", or "<em>us</em>"). By accessing or using&nbsp;
            <Link to="/" className="text-brand-600 underline hover:text-brand-700">
              gtscranes.com
            </Link>
            , our mobile applications, APIs, or any related services
            (collectively, the "<em>Service</em>"), you agree to be bound by
            these Terms &amp; Conditions (the "<em>Terms</em>"). If you do not
            agree to these Terms, please do not use the Service.
          </p>
          <p>
            These Terms apply to all visitors, users, buyers, sellers, and
            others who access the Service (collectively, "<em>Users</em>"). We
            may modify these Terms at any time. If we make material changes we
            will use reasonable efforts to provide notice—e.g.&nbsp;by posting a
            banner on the homepage or emailing registered account holders. Your
            continued use of the Service after changes go live constitutes your
            acceptance of the updated Terms.
          </p>
        </section>

        {/* --- GENERAL PROVISIONS --- */}
        <section id="general" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">2. General Provisions</h2>
          <p>
            GTS provides an online marketplace for buyers and sellers of cranes,
            heavy equipment, attachments, and related parts. Listings are
            supplied by the seller and are presented for informational purposes
            only. Although we strive for accuracy, <strong>errors may occur</strong>.
            You agree to independently verify any information that is material
            to your purchasing decision—including but not limited to price,
            availability, specifications, hours, and condition—before
            proceeding with any transaction.
          </p>
          <p>
            <strong>Inspection recommended.</strong> We highly recommend that
            buyers personally inspect—or commission a third‑party professional
            to inspect—any equipment prior to purchase. GTS does not guarantee
            the performance, condition, or fitness of any equipment listed on
            the Service and is not liable for discrepancies between a listing
            and the actual item.
          </p>
        </section>

        {/* --- BUYING & SELLING --- */}
        <section id="transactions" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">3. Buying &amp; Selling</h2>
          <p>
            GTS connects potential buyers and sellers but <em>does not</em>
            own, re‑sell, or take title to equipment unless explicitly stated.
            All transaction terms—including final price, taxes, transport,
            payment method, and transfer of ownership—are negotiated directly
            between buyer and seller. Sellers must:
          </p>
          <ul className="list-inside list-disc space-y-1 pl-4">
            <li>Have the legal right and ability to transfer title.</li>
            <li>Provide accurate, non‑misleading descriptions and images.</li>
            <li>Promptly mark listings as <em>Sold</em> once unavailable.</li>
          </ul>
          <p>
            Buyers are expected to exercise due diligence and common sense. GTS
            is not responsible for verifying payment validity, escrow, or the
            authenticity of documents exchanged between Users.
          </p>
        </section>

        {/* --- FEES & PAYMENTS --- */}
        <section id="fees" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">4. Fees &amp; Payments</h2>
          <p>
            Listing packages, subscription tiers, and advertising upgrades are
            offered on a prepaid basis. <strong>All fees are non‑refundable</strong>
            unless expressly stated otherwise in a separate written agreement.
            Recurring packages renew automatically until cancelled. You
            authorise us (or our payment processor) to charge the payment
            method on file at each renewal cycle.
          </p>
        </section>

        {/* --- INTELLECTUAL PROPERTY --- */}
        <section id="ip" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">5. Intellectual Property</h2>
          <p>
            All content, trademarks, logos, photographs, videos, text, and code
            on the Service (excluding User‑provided content) are the property
            of GTS Cranes or its licensors, protected by international
            copyright laws. You may not reproduce, distribute, or create
            derivative works without prior written consent. Limited printing or
            downloading for personal, non‑commercial use is permitted.
          </p>
        </section>

        {/* --- WARRANTIES & LIABILITY --- */}
        <section id="warranty" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">6. Disclaimer of Warranties</h2>
          <p>
            The Service is provided on an "<em>as‑is</em>" and "<em>as‑available</em>"
            basis without warranties of any kind, either express or implied.
            GTS disclaims all warranties including, but not limited to, title,
            merchantability, fitness for a particular purpose, non‑infringement,
            and accuracy.
          </p>
        </section>

        <section id="liability" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">7. Limitation of Liability</h2>
          <p>
            In no event shall GTS Cranes, its directors, employees, or agents be
            liable for any indirect, incidental, special, consequential, or
            punitive damages arising from or related to your use of the
            Service. Our cumulative liability to any User will not exceed the
            greater of (a) total fees paid to GTS in the preceding six months
            or (b) one hundred U.S. dollars (US&nbsp;$100).
          </p>
        </section>

        {/* --- GOVERNING LAW --- */}
        <section id="law" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">8. Governing Law &amp; Dispute Resolution</h2>
          <p>
            These Terms are governed by the laws of the State of Texas, USA,
            without regard to conflict‑of‑law provisions. Any dispute not
            resolved informally will be submitted to binding arbitration on an
            individual basis in Austin, Texas, in accordance with the rules of
            the American Arbitration Association. <strong>No class actions</strong>
            are permitted.
          </p>
        </section>

        {/* --- CONTACT --- */}
        <section id="contact" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">9. Contact Us</h2>
          <p>
            For questions about these Terms, please email&nbsp;
            <a
              href="mailto:support@gtscranes.com"
              className="font-medium text-brand-600 underline hover:text-brand-700"
            >
              support@gtscranes.com
            </a>
            or write to GTS Cranes, 701 Brazos St, Suite 300, Austin, TX 78701,
            USA.
          </p>
        </section>
      </article>
    </main>
  );
}
