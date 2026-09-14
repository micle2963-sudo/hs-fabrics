import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CONTACT } from "../../data/products";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="bg-[#f8f7f3]">
        <section className="bg-black px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-[1440px]">
            <p className="text-[9px] uppercase tracking-[0.35em] text-white/40">
              We're here to help
            </p>

            <h1 className="mt-5 max-w-3xl text-5xl font-medium tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Contact us
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              Have a question about an order, product, size or custom request?
              Get in touch with HS Fabrics.
            </p>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-[1100px] gap-4 md:grid-cols-2">
            <a
              href={`https://wa.me/${CONTACT.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-black/10 bg-white p-7 transition hover:border-black/30 sm:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
                  <WhatsAppIcon />
                </span>

                <Arrow />
              </div>

              <p className="mt-10 text-[9px] uppercase tracking-[0.25em] text-black/40">
                WhatsApp
              </p>

              <h2 className="mt-2 text-xl font-medium">
                {CONTACT.whatsappDisplay}
              </h2>

              <p className="mt-3 text-sm leading-6 text-black/50">
                Fastest way to contact us about orders and product questions.
              </p>
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="group border border-black/10 bg-white p-7 transition hover:border-black/30 sm:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
                  <MailIcon />
                </span>

                <Arrow />
              </div>

              <p className="mt-10 text-[9px] uppercase tracking-[0.25em] text-black/40">
                Email
              </p>

              <h2 className="mt-2 break-all text-xl font-medium">
                {CONTACT.email}
              </h2>

              <p className="mt-3 text-sm leading-6 text-black/50">
                Send us your questions or detailed business enquiries.
              </p>
            </a>
          </div>
        </section>

        <section className="border-y border-black/10 bg-[#efeee9] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[1100px]">
            <div className="grid gap-10 md:grid-cols-3">
              <Info
                number="01"
                title="Location"
                text={CONTACT.location}
              />

              <Info
                number="02"
                title="Delivery"
                text={CONTACT.delivery}
              />

              <Info
                number="03"
                title="Support"
                text="Product, order and custom apparel assistance."
              />
            </div>
          </div>
        </section>

        <section className="px-5 py-20 text-center sm:px-8 sm:py-24">
          <p className="text-[9px] uppercase tracking-[0.35em] text-black/40">
            Follow HS Fabrics
          </p>

          <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
            Stay connected.
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <SocialLink
              href={CONTACT.instagram}
              label="Instagram"
            />

            <SocialLink
              href={CONTACT.facebook}
              label="Facebook"
            />

            <SocialLink href="#" label="TikTok" />
          </div>

          <Link
            href="/shop"
            className="mt-10 inline-flex bg-black px-8 py-3.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white"
          >
            Explore collection
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

function Info({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div>
      <span className="text-[9px] text-black/30">{number}</span>

      <h3 className="mt-6 text-base font-medium">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-black/50">{text}</p>
    </div>
  );
}

function SocialLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target={href !== "#" ? "_blank" : undefined}
      rel={href !== "#" ? "noopener noreferrer" : undefined}
      className="border border-black/10 bg-white px-6 py-3 text-[9px] font-semibold uppercase tracking-[0.17em] transition hover:border-black hover:bg-black hover:text-white"
    >
      {label}
    </a>
  );
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
    >
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
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
      className="h-5 w-5"
    >
      <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
      <path d="M8.7 8.2c.2-.4.4-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c.5 1 1.2 1.7 2.2 2.2l.6-.5c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.3.6-.1.7-.5 1.2-1.2 1.4-1 .3-2.7-.4-4.1-1.7-1.4-1.3-2.3-3-2.2-4.2.1-.4.3-.8.4-1.1Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}