"use client";

import { useMemo, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import ScrollReveal from "../../components/ScrollReveal";
import { getWomenProducts } from "../../data/products";

type Filter = "All" | "Hoodie" | "Sweatshirt";

export default function WomenPage() {
  const [filter, setFilter] = useState<Filter>("All");

  const products = getWomenProducts();

  const filtered = useMemo(() => {
    if (filter === "All") return products;

    return products.filter((product) => product.type === filter);
  }, [products, filter]);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f8f7f3]">
        {/* Premium Women Header */}
        <section className="px-5 pb-8 pt-12 sm:px-8 sm:pb-10 sm:pt-16 lg:px-12 lg:pt-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-black/40">
                  HS Fabrics
                </p>

                <h1 className="mt-3 text-4xl font-medium tracking-[-0.05em] text-black sm:text-5xl lg:text-6xl">
                  Women
                </h1>

                <p className="mt-3 max-w-xl text-sm leading-6 text-black/50 sm:text-base">
                  Soft, stylish hoodies and sweatshirts made for comfort,
                  confidence and everyday wear.
                </p>
              </div>

              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/40">
                {filtered.length} Products
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="px-5 pb-8 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex gap-2 overflow-x-auto border-b border-black/10 pb-6 no-scrollbar">
              {(["All", "Hoodie", "Sweatshirt"] as Filter[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-[9px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                    filter === item
                      ? "bg-black text-white shadow-sm"
                      : "border border-black/10 bg-white text-black/55 hover:border-black/25 hover:text-black"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Women Products */}
        <section className="px-5 pb-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 sm:gap-y-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-16">
                {filtered.map((product, index) => (
                  <ScrollReveal
                    key={product.slug}
                    delay={(index % 4) * 60}
                  >
                    <ProductCard product={product} />
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-black/10 bg-white py-24 text-center">
                <p className="text-sm text-black/50">
                  No products found.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}