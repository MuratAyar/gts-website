// src/components/Footer/FooterSection.tsx
import { Link } from "react-router-dom";
import logo from "../../assets/GTS_logo.png";

/* ----------------------------- SVG ikonları ----------------------------- */
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path d="M17.525 0h-15.05A2.48 2.48 0 0 0 0 2.475v15.05A2.48 2.48 0 0 0 2.475 20H10v-7.738H7.468V9.2H10V7.08c0-3 1.791-4.546 4.473-4.546 1.316 0 2.443.096 2.772.14v3.216h-1.903c-1.494 0-1.784.708-1.784 1.752V9.2h3.562l-.465 3.062h-3.097V20h3.967A2.48 2.48 0 0 0 20 17.525V2.475A2.48 2.48 0 0 0 17.525 0Z" />
  </svg>
);

/* Instagram (yeni) */
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    {/* dış çerçeve */}
    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3z" />
    {/* kamera lensi */}
    <path d="M12 7.8a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4zm0 6.6a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8z" />
    {/* küçük köşe noktası */}
    <circle cx="17.5" cy="6.5" r="1.2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.954 4.569a10.004 10.004 0 0 1-2.825.775 4.932 4.932 0 0 0 2.163-2.723 10.148 10.148 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.953 13.953 0 0 1 1.671 3.149a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.229-.616v.06a4.916 4.916 0 0 0 3.946 4.814 4.996 4.996 0 0 1-2.224.085 4.936 4.936 0 0 0 4.6 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.056 0 14.009-7.496 14.009-13.986 0-.21-.006-.423-.017-.633a9.935 9.935 0 0 0 2.414-2.534z" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.186a2.99 2.99 0 0 0-2.107-2.118C19.379 3.5 12 3.5 12 3.5s-7.379 0-9.391.568A2.99 2.99 0 0 0 .502 6.186 31.06 31.06 0 0 0 0 12a31.06 31.06 0 0 0 .502 5.814 2.99 2.99 0 0 0 2.107 2.118C4.621 20.5 12 20.5 12 20.5s7.379 0 9.391-.568a2.99 2.99 0 0 0 2.107-2.118A31.06 31.06 0 0 0 24 12a31.06 31.06 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554V14.83c0-1.341-.026-3.064-1.868-3.064-1.868 0-2.154 1.46-2.154 2.963v5.723h-3.554V9h3.415v1.561h.05c.476-.899 1.637-1.848 3.368-1.848 3.599 0 4.268 2.368 4.268 5.455v6.284zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.813 20.452H3.861V9h2.952v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.546C0 23.227.792 24 1.771 24h20.451C23.207 24 24 23.227 24 22.273V1.727C24 .774 23.207 0 22.225 0z" />
  </svg>
);

/* ----------------------------- Footer ----------------------------- */
const FooterSection = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-600 text-white">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-8 lg:py-12">
        {/* üst satır */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <div>
            <Link to="/" className="flex items-center">
              <img src={logo} alt="GTS Cranes Logo" className="me-3 h-10" />
              <span className="text-2xl font-semibold whitespace-nowrap">
                GTS Cranes
              </span>
            </Link>
          </div>

          {/* Link blokları */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {[
              {
                title: "Resources",
                links: [
                  { to: "/search", label: "Browse cranes" },
                  { to: "/sell", label: "Sell a crane" },
                  { to: "/rent", label: "Rent a crane" },
                ],
              },
              {
                title: "Company",
                links: [
                  { to: "/about", label: "About us" },
                  { to: "/contact", label: "Contact" },
                  { to: "/blog", label: "Blog" },
                ],
              },
              {
                title: "Legal",
                links: [
                  { to: "/privacy-policy", label: "Privacy Policy" },
                  { to: "/terms-and-conditions", label: "Terms & Conditions" },
                  { to: "/faq", label: "FAQ" },
                ],
              },
            ].map((block) => (
              <div key={block.title}>
                <h2 className="mb-6 text-sm font-semibold uppercase">
                  {block.title}
                </h2>
                <ul className="space-y-4">
                  {block.links.map(({ to, label }) => (
                    <li key={to}>
                      <Link to={to} className="hover:underline">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-8 border-white/30" />

        {/* alt satır */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <span className="text-sm">
            © {year}{" "}
            <Link to="/" className="font-medium hover:underline">
              GTS Cranes™
            </Link>
            . All rights reserved.
          </span>

          <div className="flex space-x-6">
            <a
              aria-label="Facebook"
              href="https://facebook.com/yourpage"
              className="transition hover:text-white/80"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              aria-label="Instagram"
              href="https://instagram.com/yourpage"
              className="transition hover:text-white/80"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              aria-label="Twitter"
              href="https://twitter.com/yourpage"
              className="transition hover:text-white/80"
            >
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a
              aria-label="YouTube"
              href="https://youtube.com/yourpage"
              className="transition hover:text-white/80"
            >
              <YoutubeIcon className="h-5 w-5" />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://linkedin.com/company/yourpage"
              className="transition hover:text-white/80"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
