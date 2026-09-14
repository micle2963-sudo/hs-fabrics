"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSlider from "../components/BannerSlider";
import ScrollReveal from "../components/ScrollReveal";
import ProductCard from "../components/ProductCard";
import { getFeaturedProducts } from "../data/products";

const featured = getFeaturedProducts().slice(0, 6);

const collectionImages = {
  men: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=85",
  women:
    "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=85",
};

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <BannerSlider />

        {/* Intro */}
        <section className="bg-[#f8f7f3] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-black/40">
                HS Fabrics
              </p>

              <h2 className="mt-5 text-3xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Comfort made
                <br />
                <span className="text-black/45">to be lived in.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
                Discover premium hoodies and sweatshirts designed around
                comfort, clean style and everyday versatility.
              </p>
            </ScrollReveal>

            <div className="mt-12 grid grid-cols-3 gap-3 border-t border-black/10 pt-8 sm:gap-8">
              <div>
                <p className="text-lg font-medium sm:text-2xl">Premium</p>
                <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-black/40 sm:text-[9px]">
                  Quality fabrics
                </p>
              </div>

              <div>
                <p className="text-lg font-medium sm:text-2xl">COD</p>
                <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-black/40 sm:text-[9px]">
                  Pakistan wide
                </p>
              </div>

              <div>
                <p className="text-lg font-medium sm:text-2xl">Custom</p>
                <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-black/40 sm:text-[9px]">
                  Your own style
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured */}
        {featured.length > 0 && (
          <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
            <div className="mx-auto max-w-[1440px]">
              <div className="mb-10 flex items-end justify-between gap-6">
                <div>
                  <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-black/40">
                    Curated for you
                  </p>

                  <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                    Featured pieces
                  </h2>
                </div>

                <Link
                  href="/shop"
                  className="hidden items-center gap-2 border-b border-black pb-1 text-[9px] font-semibold uppercase tracking-[0.18em] sm:flex"
                >
                  View all
                  <span>→</span>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-14">
                {featured.map((product, index) => (
                  <ScrollReveal key={product.slug} delay={index * 70}>
                    <ProductCard product={product} />
                  </ScrollReveal>
                ))}
              </div>

              <div className="mt-12 flex justify-center sm:hidden">
                <Link
                  href="/shop"
                  className="border border-black px-7 py-3 text-[9px] font-semibold uppercase tracking-[0.18em]"
                >
                  View all products
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Collections */}
        <section className="bg-[#f1f0eb] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-10">
              <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-black/40">
                Explore
              </p>

              <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                Find your collection
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/men"
                className="group relative aspect-[4/5] overflow-hidden bg-neutral-200 sm:aspect-[5/6]"
              >
                <img
                  src={collectionImages.men}
                  alt="Men's collection"
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/30" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/70">
                    Collection 01
                  </p>

                  <h3 className="mt-2 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                    Men
                  </h3>

                  <span className="mt-5 inline-flex items-center gap-2 border-b border-white/60 pb-1 text-[9px] font-semibold uppercase tracking-[0.18em]">
                    Explore collection
                    <Arrow />
                  </span>
                </div>
              </Link>

              <Link
                href="/women"
                className="group relative aspect-[4/5] overflow-hidden bg-neutral-200 sm:aspect-[5/6]"
              >
                <img
                  src={collectionImages.women}
                  alt="Women's collection"
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/30" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/70">
                    Collection 02
                  </p>

                  <h3 className="mt-2 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                    Women
                  </h3>

                  <span className="mt-5 inline-flex items-center gap-2 border-b border-white/60 pb-1 text-[9px] font-semibold uppercase tracking-[0.18em]">
                    Explore collection
                    <Arrow />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Custom studio */}
        <section className="bg-black px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <p className="text-[9px] uppercase tracking-[0.35em] text-white/40">
                Custom Studio
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Make it
                <br />
                <span className="text-white/40">yours.</span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/55 sm:text-base">
                Create your own hoodie or sweatshirt with your preferred text,
                artwork, design or embroidery.
              </p>

              <Link
                href="/custom"
                className="mt-8 inline-flex items-center gap-3 bg-white px-7 py-3.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white/85"
              >
                Start customizing
                <Arrow />
              </Link>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85"
                  alt="Custom hoodie"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-8 aspect-square overflow-hidden sm:mt-14">
                <img
                  src="https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=900&q=85"
                  alt="Custom sweatshirt"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Delivery */}
        <section className="bg-[#f8f7f3] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-[1000px] text-center">
            <p className="text-[9px] uppercase tracking-[0.35em] text-black/40">
              Why HS Fabrics
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
              Designed for everyday life.
            </h2>

            <div className="mt-12 grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-3">
              {[
                ["01", "Premium fabrics", "Comfort-focused materials and clean finishing."],
                ["02", "Cash on delivery", "Easy ordering with COD available across Pakistan."],
                ["03", "Made for you", "Custom apparel for personal and team orders."],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="bg-[#f8f7f3] p-7 text-left sm:p-8"
                >
                  <span className="text-[9px] text-black/30">{number}</span>

                  <h3 className="mt-7 text-base font-medium">{title}</h3>

                  <p className="mt-3 text-sm leading-6 text-black/50">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-black/10 bg-white px-5 py-20 text-center sm:px-8 sm:py-24">
          <p className="text-[9px] uppercase tracking-[0.35em] text-black/40">
            HS Fabrics
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-medium tracking-[-0.045em] sm:text-5xl">
            Your next favourite layer is waiting.
          </h2>

          <Link
            href="/shop"
            className="mt-8 inline-flex bg-black px-8 py-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-black/80"
          >
            Shop now
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

function Arrow() {
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