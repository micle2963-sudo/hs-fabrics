
"use client";

import { use, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ProductCard from "../../../components/ProductCard";
import { getProductBySlug, getRelatedProducts } from "../../../data/products";
import { useCart } from "../../../components/CartContext";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const router = useRouter();
  const product = getProductBySlug(slug);
  const { addToCart, toggleWishlist, isWishlisted } = useCart();

  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const related = useMemo(
    () => (product ? getRelatedProducts(product, 4) : []),
    [product]
  );

  if (!product) {
    return (
      <>
        <Header />

        <main className="flex min-h-[70vh] items-center justify-center px-5">
          <div className="text-center">
            <p className="text-[9px] uppercase tracking-[0.3em] text-black/40">
              Product not found
            </p>

            <h1 className="mt-4 text-3xl font-medium">
              This product is unavailable.
            </h1>

            <Link
              href="/shop"
              className="mt-7 inline-flex bg-black px-7 py-3.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white"
            >
              Back to shop
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  const wishlisted = isWishlisted(product.slug);

  const addProduct = () => {
    if (!selectedSize) {
      setMessage("Please select a size.");
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addToCart({
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: product.image,
        size: selectedSize,
      });
    }

    setMessage("Added to your cart.");
  };

  const buyNow = () => {
    if (!selectedSize) {
      setMessage("Please select a size.");
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addToCart({
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: product.image,
        size: selectedSize,
      });
    }

    router.push("/checkout");
  };

  return (
    <>
      <Header />

      <main className="bg-[#f8f7f3]">
        <div className="mx-auto max-w-[1440px] px-5 pt-7 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-black/35">
            <Link href="/" className="hover:text-black">
              Home
            </Link>

            <span>/</span>

            <Link href="/shop" className="hover:text-black">
              Shop
            </Link>

            <span>/</span>

            <span className="truncate text-black/55">
              {product.name}
            </span>
          </div>
        </div>

        <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 lg:py-14">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-[#ecebe6]">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />

            {(product.newest || product.featured) && (
              <span className="absolute left-4 top-4 bg-white px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.18em]">
                {product.newest ? "New" : "Featured"}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center lg:py-8">
            <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-black/40">
              {product.gender} · {product.type}
            </p>

            <h1 className="mt-4 max-w-xl text-3xl font-medium tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            <p className="mt-5 text-xl font-semibold">
              {product.price}
            </p>

            <div className="mt-7 h-px bg-black/10" />

            <p className="mt-7 text-sm leading-7 text-black/60">
              {product.description}
            </p>

            {/* Color */}
            <div className="mt-8">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em]">
                Color
              </p>

              <p className="mt-2 text-sm text-black/55">
                {product.color}
              </p>
            </div>

            {/* Sizes */}
            <div className="mt-7">
              <div className="flex items-center justify-between">
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em]">
                  Select size
                </p>

                <span className="text-[9px] text-black/35">
                  Standard fit
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => {
                      setSelectedSize(size);
                      setMessage("");
                    }}
                    className={`flex h-11 min-w-11 items-center justify-center border px-4 text-[9px] font-semibold uppercase tracking-[0.12em] transition ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-black/10 bg-white hover:border-black/40"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-7">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em]">
                Quantity
              </p>

              <div className="mt-3 flex h-11 w-fit items-center border border-black/10 bg-white">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => Math.max(1, current - 1))
                  }
                  className="flex h-full w-11 items-center justify-center text-lg text-black/60 hover:text-black"
                >
                  −
                </button>

                <span className="w-10 text-center text-sm">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => Math.min(10, current + 1))
                  }
                  className="flex h-full w-11 items-center justify-center text-lg text-black/60 hover:text-black"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 grid gap-2 sm:grid-cols-[1fr_auto]">
              <button
                type="button"
                onClick={buyNow}
                className="flex min-h-13 items-center justify-center bg-black px-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-black/80"
              >
                Buy now
              </button>

              <button
                type="button"
                onClick={addProduct}
                className="flex min-h-13 items-center justify-center border border-black px-6 text-[9px] font-semibold uppercase tracking-[0.2em] transition hover:bg-black hover:text-white"
              >
                Add to cart
              </button>
            </div>

            {/* Wishlist */}
            <button
              type="button"
              onClick={() => toggleWishlist(product.slug)}
              className="mt-3 flex w-full items-center justify-center gap-2 border border-black/10 py-3.5 text-[9px] font-semibold uppercase tracking-[0.18em] transition hover:border-black"
            >
              <span>{wishlisted ? "♥" : "♡"}</span>

              {wishlisted
                ? "Saved to wishlist"
                : "Save to wishlist"}
            </button>

            {message && (
              <p className="mt-4 text-center text-[10px] font-medium text-black/60">
                {message}
              </p>
            )}

            {/* Info cards */}
            <div className="mt-8 grid grid-cols-3 gap-px border border-black/10 bg-black/10">
              <Info title="Delivery" text="Pakistan wide" />
              <Info title="Payment" text="Cash on delivery" />
              <Info title="Support" text="WhatsApp" />
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="border-t border-black/10 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
            <div className="mx-auto max-w-[1440px]">
              <div className="mb-9">
                <p className="text-[9px] uppercase tracking-[0.3em] text-black/40">
                  You may also like
                </p>

                <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em]">
                  Related pieces
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-6">
                {related.map((item) => (
                  <ProductCard
                    key={item.slug}
                    product={item}
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

function Info({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="bg-[#f8f7f3] p-4 text-center sm:p-5">
      <p className="text-[8px] font-semibold uppercase tracking-[0.15em]">
        {title}
      </p>

      <p className="mt-2 text-[9px] leading-4 text-black/45">
        {text}
      </p>
    </div>
  );
}
