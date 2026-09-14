
"use client";

import { FormEvent, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CONTACT } from "../../data/products";

type ProductType = "Hoodie" | "Sweatshirt";
type Size = "S" | "M" | "L" | "XL";

export default function CustomPage() {
  const [productType, setProductType] =
    useState<ProductType>("Hoodie");

  const [size, setSize] = useState<Size>("M");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");

  const [error, setError] = useState("");

  const submitRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!name.trim() || !phone.trim() || !details.trim()) {
      setError("Please complete all required fields.");
      return;
    }

    const message = [
      `*HS FABRICS CUSTOM ORDER*`,
      ``,
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Product: ${productType}`,
      `Size: ${size}`,
      ``,
      `Design details:`,
      details.trim(),
      ``,
      `I will share any reference/design files in WhatsApp.`,
    ].join("\n");

    const url = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Header />

      <main className="bg-[#f8f7f3] text-[#171717]">

        {/* Premium Custom Studio Hero */}
        <section className="px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-12 lg:px-12 lg:pb-20 lg:pt-16">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid overflow-hidden rounded-[2px] bg-[#e9e7e0] lg:grid-cols-2">

              {/* Text */}
              <div className="flex flex-col justify-center px-7 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-black/40">
                  HS Fabrics · Custom Studio
                </p>

                <h1 className="mt-5 max-w-xl text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
                  Create something
                  <br />
                  <span className="text-black/45">made for you.</span>
                </h1>

                <p className="mt-6 max-w-lg text-sm leading-7 text-black/55 sm:text-base">
                  Bring your idea to life with a custom hoodie or sweatshirt.
                  Add your own text, artwork, logo, print or embroidery and
                  create a piece that feels uniquely yours.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#custom-form"
                    className="inline-flex items-center justify-center bg-black px-7 py-3.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-black/80"
                  >
                    Start customizing
                  </a>

                  <a
                    href="#how-it-works"
                    className="inline-flex items-center justify-center border border-black/15 bg-white px-7 py-3.5 text-[9px] font-semibold uppercase tracking-[0.2em] transition hover:border-black/40"
                  >
                    How it works
                  </a>
                </div>

                <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[9px] font-medium uppercase tracking-[0.15em] text-black/40">
                  <span>Custom Print</span>
                  <span>Embroidery</span>
                  <span>Personalized Designs</span>
                </div>
              </div>

              {/* Image */}
              <div className="relative min-h-[420px] overflow-hidden sm:min-h-[520px] lg:min-h-[650px]">
                <img
                  src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1400&q=90"
                  alt="Custom HS Fabrics hoodie"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.3em] text-white/60">
                      Custom collection
                    </p>

                    <p className="mt-2 text-lg font-medium">
                      Your idea. Your style.
                    </p>
                  </div>

                  <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/30 backdrop-blur-sm sm:flex">
                    <span className="text-lg">↗</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro strip */}
        <section className="border-y border-black/10 bg-white px-5 py-10 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-[1200px] gap-8 sm:grid-cols-3 sm:gap-6">
            <Feature
              number="01"
              title="Choose your piece"
              text="Start with a hoodie or sweatshirt in your preferred size."
            />

            <Feature
              number="02"
              title="Share your design"
              text="Tell us about your colors, artwork, text or embroidery."
            />

            <Feature
              number="03"
              title="Made for you"
              text="We confirm the details and create your custom apparel."
            />
          </div>
        </section>

        {/* Form */}
        <section
          id="custom-form"
          className="mx-auto grid max-w-[1200px] scroll-mt-24 gap-10 px-5 py-14 sm:px-8 sm:py-18 lg:grid-cols-[1fr_400px] lg:px-12 lg:py-24"
        >
          <div>
            <div className="border-b border-black/10 pb-6">
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-black/40">
                Start your request
              </p>

              <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                Tell us what you want.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-black/50">
                Complete the details below and we will continue your custom
                order through WhatsApp.
              </p>
            </div>

            <form onSubmit={submitRequest} className="mt-8">

              {/* Product */}
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.17em]">
                  Product type
                </p>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  {(["Hoodie", "Sweatshirt"] as ProductType[]).map(
                    (item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setProductType(item)}
                        className={`border py-4 text-[9px] font-semibold uppercase tracking-[0.17em] transition ${
                          productType === item
                            ? "border-black bg-black text-white"
                            : "border-black/10 bg-white hover:border-black/40"
                        }`}
                      >
                        {item}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Size */}
              <div className="mt-7">
                <p className="text-[9px] font-semibold uppercase tracking-[0.17em]">
                  Size
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {(["S", "M", "L", "XL"] as Size[]).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSize(item)}
                      className={`flex h-11 min-w-11 items-center justify-center border px-4 text-[9px] font-semibold transition ${
                        size === item
                          ? "border-black bg-black text-white"
                          : "border-black/10 bg-white hover:border-black/40"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal details */}
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field
                  label="Name *"
                  value={name}
                  onChange={setName}
                  placeholder="Your name"
                />

                <Field
                  label="Phone *"
                  value={phone}
                  onChange={setPhone}
                  placeholder="03XX XXXXXXX"
                  type="tel"
                />
              </div>

              {/* Design details */}
              <div className="mt-5">
                <label>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.17em]">
                    Design details *
                  </span>

                  <textarea
                    value={details}
                    onChange={(event) => setDetails(event.target.value)}
                    rows={7}
                    placeholder="Tell us about the color, text, print, embroidery, artwork or any other requirements..."
                    className="mt-3 w-full resize-none border border-black/10 bg-white px-4 py-4 text-sm leading-6 outline-none transition focus:border-black/40"
                  />
                </label>
              </div>

              {/* Reference info */}
              <div className="mt-5 border border-black/10 bg-white p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#efeee9] text-sm">
                    +
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em]">
                      Have a reference image?
                    </p>

                    <p className="mt-2 text-xs leading-5 text-black/45">
                      Send your reference image, logo or artwork directly in
                      the WhatsApp conversation after opening your request.
                    </p>
                  </div>
                </div>
              </div>

              {error && (
                <div className="mt-5 border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-3 bg-black py-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-black/80"
              >
                Send request via WhatsApp
                <span className="text-base">→</span>
              </button>
            </form>
          </div>

          {/* Side card */}
          <aside className="h-fit lg:sticky lg:top-28">
            <div className="overflow-hidden border border-black/10 bg-white">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#e9e7e0]">
                <img
                  src="https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=1000&q=90"
                  alt="Custom sweatshirt"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-black/35">
                  Your idea
                </p>

                <h3 className="mt-3 text-2xl font-medium tracking-[-0.035em]">
                  Designed around you.
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/50">
                  From a simple name or quote to a complete artwork, tell us
                  what you have in mind and we will help turn it into apparel.
                </p>

                <div className="mt-6 border-t border-black/10 pt-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.15em]">
                    Available options
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <MiniTag text="Text Print" />
                    <MiniTag text="Artwork" />
                    <MiniTag text="Embroidery" />
                    <MiniTag text="Logo" />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="scroll-mt-24 border-y border-black/10 bg-[#efeee9] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
        >
          <div className="mx-auto max-w-[1100px]">
            <div className="text-center">
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-black/40">
                Simple process
              </p>

              <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                From idea to apparel.
              </h2>
            </div>

            <div className="mt-10 grid gap-px border border-black/10 bg-black/10 md:grid-cols-3">
              <Step
                number="01"
                title="Share your idea"
                text="Tell us what you want and send your reference artwork."
              />

              <Step
                number="02"
                title="Confirm details"
                text="We discuss sizing, colors, placement and pricing."
              />

              <Step
                number="03"
                title="We create it"
                text="Your custom piece is prepared and delivered across Pakistan."
              />
            </div>
          </div>
        </section>

        {/* Bulk orders */}
        <section className="px-5 py-16 text-center sm:px-8 sm:py-20">
          <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-black/40">
            Bulk & team orders
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
            Need multiple custom pieces?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-black/50">
            Contact us for team, event, business and bulk custom apparel
            requirements.
          </p>

          <a
            href={`https://wa.me/${CONTACT.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex bg-black px-8 py-3.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-black/80"
          >
            Contact us
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* Field */
function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <label>
      <span className="text-[9px] font-semibold uppercase tracking-[0.17em]">
        {label}
      </span>

      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="mt-3 w-full border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-black/40"
      />
    </label>
  );
}

/* Feature */
function Feature({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-black/10 sm:border-r sm:px-6 sm:last:border-r-0">
      <span className="text-[9px] font-medium text-black/30">
        {number}
      </span>

      <h3 className="mt-3 text-sm font-medium">{title}</h3>

      <p className="mt-2 text-xs leading-5 text-black/45">{text}</p>
    </div>
  );
}

/* Mini tag */
function MiniTag({ text }: { text: string }) {
  return (
    <div className="border border-black/10 bg-[#f8f7f3] px-3 py-2.5 text-center text-[8px] font-semibold uppercase tracking-[0.12em]">
      {text}
    </div>
  );
}

/* Process step */
function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-[#f8f7f3] p-7 sm:p-8">
      <span className="text-[9px] text-black/30">{number}</span>

      <h3 className="mt-7 text-base font-medium">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-black/50">{text}</p>
    </div>
  );
}
