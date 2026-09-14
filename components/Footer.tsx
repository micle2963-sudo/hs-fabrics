import Link from "next/link";
import { CONTACT } from "../data/products";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4"
    >
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-[18px] w-[18px]"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.7"
        r="0.8"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-[18px] w-[18px]"
    >
      <path d="M14 21v-8h2.8l.5-3H14V8.1c0-.9.3-1.6 1.7-1.6h1.8V3.8c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.6V10H7.5v3H10v8" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-[18px] w-[18px]"
    >
      <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
      <path d="M8.7 8.2c.2-.4.4-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c.5 1 1.2 1.7 2.2 2.2l.6-.5c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.3.6-.1.7-.5 1.2-1.2 1.4-1 .3-2.7-.4-4.1-1.7-1.4-1.3-2.3-3-2.2-4.2.1-.4.3-.8.4-1.1Z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-[#0b0b0b] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] lg:gap-10">

          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="inline-block">
              <div className="text-3xl font-semibold tracking-[-0.06em]">
                HS
              </div>

              <div className="mt-1 text-[8px] uppercase tracking-[0.4em] text-white/45">
                Fabrics
              </div>
            </Link>

            <p className="mt-7 text-sm leading-7 text-white/55">
              Premium hoodies and sweatshirts made for everyday comfort,
              effortless style and personal expression.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-white/45">
                Premium Quality
              </span>

              <span className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-white/45">
                COD Available
              </span>
            </div>

            {/* Social */}
            <div className="mt-8 flex items-center gap-2">

              {/* Instagram */}
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <InstagramIcon />
              </a>

              {/* Facebook */}
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <FacebookIcon />
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${CONTACT.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <WhatsAppIcon />
              </a>

            </div>
          </div>

          {/* Shop */}
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/35">
              Shop
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              <Link
                href="/men"
                className="group flex items-center justify-between text-sm text-white/60 transition hover:text-white"
              >
                <span>Men</span>
                <ArrowIcon />
              </Link>

              <Link
                href="/women"
                className="group flex items-center justify-between text-sm text-white/60 transition hover:text-white"
              >
                <span>Women</span>
                <ArrowIcon />
              </Link>

              <Link
                href="/shop"
                className="group flex items-center justify-between text-sm text-white/60 transition hover:text-white"
              >
                <span>All Products</span>
                <ArrowIcon />
              </Link>

              <Link
                href="/custom"
                className="group flex items-center justify-between text-sm text-white/60 transition hover:text-white"
              >
                <span>Custom Studio</span>
                <ArrowIcon />
              </Link>
            </nav>
          </div>

          {/* Help */}
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/35">
              Help
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              <Link
                href="/contact"
                className="group flex items-center justify-between text-sm text-white/60 transition hover:text-white"
              >
                <span>Contact Us</span>
                <ArrowIcon />
              </Link>

              <Link
                href="/cart"
                className="group flex items-center justify-between text-sm text-white/60 transition hover:text-white"
              >
                <span>Your Cart</span>
                <ArrowIcon />
              </Link>

              <Link
                href="/wishlist"
                className="group flex items-center justify-between text-sm text-white/60 transition hover:text-white"
              >
                <span>Wishlist</span>
                <ArrowIcon />
              </Link>

              <Link
                href="/account"
                className="group flex items-center justify-between text-sm text-white/60 transition hover:text-white"
              >
                <span>My Account</span>
                <ArrowIcon />
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/35">
              Contact
            </p>

            <div className="mt-6 space-y-5">

              <div>
                <p className="text-[9px] uppercase tracking-[0.15em] text-white/30">
                  WhatsApp
                </p>

                <a
                  href={`https://wa.me/${CONTACT.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm text-white/70 transition hover:text-white"
                >
                  {CONTACT.whatsappDisplay}
                </a>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.15em] text-white/30">
                  Email
                </p>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="mt-1 block break-all text-sm text-white/70 transition hover:text-white"
                >
                  {CONTACT.email}
                </a>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.15em] text-white/30">
                  Location
                </p>

                <p className="mt-1 text-sm text-white/70">
                  {CONTACT.location}
                </p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.15em] text-white/30">
                  Delivery
                </p>

                <p className="mt-1 text-sm text-white/70">
                  {CONTACT.delivery}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">

          <p className="text-[9px] uppercase tracking-[0.16em] text-white/30">
            © {currentYear} HS Fabrics. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span className="text-[9px] uppercase tracking-[0.16em] text-white/30">
              Sargodha, Pakistan
            </span>

            <span className="h-1 w-1 rounded-full bg-white/20" />

            <span className="text-[9px] uppercase tracking-[0.16em] text-white/30">
              Delivery Across Pakistan
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}