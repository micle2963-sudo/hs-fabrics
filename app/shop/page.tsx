
"use client";

import { useMemo, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import ScrollReveal from "../../components/ScrollReveal";
import {
  getMenProducts,
  getWomenProducts,
} from "../../data/products";

type Filter = "All" | "Men" | "Women" | "Hoodies" | "Sweatshirts";
type SortOption = "Default" | "Price Low" | "Price High" | "Newest";

export default function ShopPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const [sort, setSort] = useState<SortOption>("Default");

  const allProducts = useMemo(() => {
    const products = [...getMenProducts(), ...getWomenProducts()];

    // Remove accidental duplicate products
    const uniqueProducts = Array.from(
      new Map(products.map((product) => [product.slug, product])).values()
    );

    return uniqueProducts;
  }, []);

  const filtered = useMemo(() => {
    let products = [...allProducts];

    // Category filter
    switch (filter) {
      case "Men":
        products = products.filter(
          (product) => product.gender === "Men"
        );
        break;

      case "Women":
        products = products.filter(
          (product) => product.gender === "Women"
        );
        break;

      case "Hoodies":
        products = products.filter(
          (product) => product.type === "Hoodie"
        );
        break;

      case "Sweatshirts":
        products = products.filter(
          (product) => product.type === "Sweatshirt"
        );
        break;

      default:
        break;
    }

    // Sorting
    if (sort === "Price Low") {
      products.sort(
        (a, b) =>
          Number(a.price.replace(/[^\d]/g, "")) -
          Number(b.price.replace(/[^\d]/g, ""))
      );
    }

    if (sort === "Price High") {
      products.sort(
        (a, b) =>
          Number(b.price.replace(/[^\d]/g, "")) -
          Number(a.price.replace(/[^\d]/g, ""))
      );
    }

    if (sort === "Newest") {
      products.sort(
        (a, b) => Number(Boolean(b.newest)) - Number(Boolean(a.newest))
      );
    }

    return products;
  }, [allProducts, filter, sort]);

  const filters: Filter[] = [
    "All",
    "Men",
    "Women",
    "Hoodies",
    "Sweatshirts",
  ];

  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="bg-black px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <p className="text-[9px] uppercase tracking-[0.35em] text-white/40">
              The collection
            </p>

            <h1 className="mt-5 text-5xl font-medium tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Shop
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              Explore all HS Fabrics hoodies and sweatshirts for Men and
              Women.
            </p>
          </div>
        </section>

        {/* FILTER BAR */}
        <section className="sticky top-[68px] z-30 border-b border-black/10 bg-[#f8f7f3]/95 px-5 py-4 backdrop-blur-xl sm:top-[76px] sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              {/* CATEGORY FILTERS */}
              <div className="flex min-w-0 gap-2 overflow-x-auto no-scrollbar">
                {filters.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFilter(item)}
                    className={`shrink-0 rounded-full px-4 py-2.5 text-[8px] font-semibold uppercase tracking-[0.14em] transition sm:px-5 ${
                      filter === item
                        ? "bg-black text-white"
                        : "border border-black/10 text-black/50 hover:border-black/30 hover:text-black"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* SORT */}
              <div className="flex items-center justify-between gap-3 sm:justify-end">
                <p className="text-[9px] uppercase tracking-[0.14em] text-black/40">
                  {filtered.length} products
                </p>

                <select
                  value={sort}
                  onChange={(e) =>
                    setSort(e.target.value as SortOption)
                  }
                  className="rounded-full border border-black/10 bg-transparent px-4 py-2.5 text-[8px] font-semibold uppercase tracking-[0.12em] outline-none transition hover:border-black/30"
                  aria-label="Sort products"
                >
                  <option value="Default">Sort: Featured</option>
                  <option value="Newest">Newest</option>
                  <option value="Price Low">Price: Low to High</option>
                  <option value="Price High">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="bg-[#f8f7f3] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-3 gap-y-12 sm:gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-16">
                {filtered.map((product, index) => (
                  <ScrollReveal
                    key={`${product.slug}-${index}`}
                    delay={(index % 4) * 50}
                  >
                    <ProductCard product={product} />
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <div className="py-24 text-center">
                <p className="text-sm text-black/50">
                  No products match this filter.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* DELIVERY */}
        <section className="bg-black px-5 py-16 text-center text-white sm:px-8 sm:py-20">
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
            Delivery
          </p>

          <h2 className="mt-3 text-2xl font-medium sm:text-3xl">
            Delivery all over Pakistan
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-white/50">
            Order your favourite pieces with cash on delivery available.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}