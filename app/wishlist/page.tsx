"use client";

import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { useCart } from "../../components/CartContext";
import { getProductBySlug } from "../../data/products";

export default function WishlistPage() {
  const { wishlist } = useCart();

  const products = wishlist
    .map((slug) => getProductBySlug(slug))
    .filter(Boolean);

  return (
    <>
      <Header />

      <main className="bg-[#f8f7f3]">
        <section className="bg-black px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <p className="text-[9px] uppercase tracking-[0.35em] text-white/40">
              Your saved pieces
            </p>

            <h1 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
              Wishlist
            </h1>
          </div>
        </section>

        {products.length === 0 ? (
          <section className="flex min-h-[55vh] items-center justify-center px-5 py-20 text-center">
            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-black/10">
                <HeartIcon />
              </div>

              <p className="mt-7 text-[9px] uppercase tracking-[0.3em] text-black/40">
                Saved for later
              </p>

              <h2 className="mt-3 text-2xl font-medium">
                Your wishlist is empty.
              </h2>

              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-black/50">
                Tap the heart on any product to save it here.
              </p>

              <Link
                href="/shop"
                className="mt-7 inline-flex bg-black px-8 py-3.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white"
              >
                Explore products
              </Link>
            </div>
          </section>
        ) : (
          <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="mx-auto max-w-[1440px]">
              <div className="mb-8 flex items-center justify-between">
                <p className="text-[9px] uppercase tracking-[0.16em] text-black/40">
                  {products.length} saved{" "}
                  {products.length === 1 ? "piece" : "pieces"}
                </p>

                <Link
                  href="/shop"
                  className="text-[9px] font-semibold uppercase tracking-[0.16em] underline underline-offset-4"
                >
                  Continue shopping
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-x-3 gap-y-12 sm:gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
                {products.map((product) => (
                  <ProductCard
                    key={product!.slug}
                    product={product!}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-6 w-6"
    >
      <path d="M20.8 8.8c0 5.2-8.8 10.2-8.8 10.2S3.2 14 3.2 8.8A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.6Z" />
    </svg>
  );
}