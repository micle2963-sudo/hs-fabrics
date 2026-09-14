"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "../data/products";
import { useCart } from "./CartContext";

type ProductCardProps = {
  product: Product;
};

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.5Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function ShoppingBagIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-[17px] w-[17px]"
      aria-hidden="true"
    >
      <path d="M6.5 8.5h11l1 12h-13l1-12Z" />
      <path d="M9 8.5V7a3 3 0 0 1 6 0v1.5" />
    </svg>
  );
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, toggleWishlist, isWishlisted } = useCart();

  const [added, setAdded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const wishlisted = isWishlisted(product.slug);
  const outOfStock = product.stock === false;

  const handleAddToCart = () => {
    if (outOfStock) return;

    addToCart({
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.sizes?.[0],
    });

    setAdded(true);

    window.setTimeout(() => {
      setAdded(false);
    }, 1600);
  };

  return (
    <article className="group min-w-0">
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-[18px] bg-[#eeede8]">
        <Link
          href={`/products/${product.slug}`}
          aria-label={`View ${product.name}`}
          className="block"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            {!imageError ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority={false}
                unoptimized
                sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[#eeede8] px-4 text-center">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-black/40">
                    Image unavailable
                  </p>
                  <p className="mt-2 break-words text-[9px] text-black/30">
                    {product.image}
                  </p>
                </div>
              </div>
            )}

            <div className="pointer-events-none absolute inset-0 bg-black/[0.02] transition-opacity duration-300 group-hover:bg-black/[0.06]" />
          </div>
        </Link>

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => toggleWishlist(product.slug)}
          aria-label={
            wishlisted
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          aria-pressed={wishlisted}
          className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 sm:right-4 sm:top-4 ${
            wishlisted
              ? "border-black bg-black text-white"
              : "border-white/60 bg-white/85 text-black hover:bg-black hover:text-white"
          }`}
        >
          <HeartIcon filled={wishlisted} />
        </button>

        {/* New Badge */}
        {product.newest && (
          <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-black backdrop-blur-md sm:left-4 sm:top-4">
            New
          </div>
        )}

        {/* Out of Stock */}
        {outOfStock && (
          <div className="absolute inset-x-3 bottom-3 rounded-full bg-black/85 px-3 py-2 text-center text-[8px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:inset-x-4 sm:bottom-4">
            Out of stock
          </div>
        )}

        {/* Desktop Add To Cart */}
        {!outOfStock && (
          <button
            type="button"
            onClick={handleAddToCart}
            className={`absolute bottom-3 left-3 right-3 hidden items-center justify-center gap-2 rounded-full px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.15em] backdrop-blur-md transition-all duration-300 sm:flex sm:bottom-4 sm:left-4 sm:right-4 ${
              added
                ? "bg-black text-white"
                : "bg-white/95 text-black hover:bg-black hover:text-white"
            }`}
          >
            <ShoppingBagIcon />
            {added ? "Added to Cart" : "Add to Cart"}
          </button>
        )}
      </div>

      {/* Product Information */}
      <div className="pt-4 sm:pt-5">
        <div className="flex items-start justify-between gap-3">
          <Link
            href={`/products/${product.slug}`}
            className="min-w-0 flex-1"
          >
            <p className="mb-1.5 text-[8px] font-semibold uppercase tracking-[0.17em] text-black/40">
              {product.type} · {product.category}
            </p>

            <h2 className="line-clamp-2 text-[13px] font-medium leading-5 tracking-[-0.015em] text-black transition-colors duration-300 hover:text-black/55 sm:text-[14px] sm:leading-6">
              {product.name}
            </h2>
          </Link>

          <p className="shrink-0 text-[12px] font-semibold text-black sm:text-[13px]">
            {product.price}
          </p>
        </div>

        {/* Color */}
        <p className="mt-1.5 text-[10px] text-black/45">
          {product.color}
        </p>

        {/* Mobile Add To Cart */}
        {!outOfStock && (
          <button
            type="button"
            onClick={handleAddToCart}
            className={`mt-3 flex w-full items-center justify-center gap-2 rounded-full border px-3 py-2.5 text-[8px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 sm:hidden ${
              added
                ? "border-black bg-black text-white"
                : "border-black/10 bg-white text-black hover:border-black hover:bg-black hover:text-white"
            }`}
          >
            <ShoppingBagIcon />
            {added ? "Added" : "Add to Cart"}
          </button>
        )}

        {/* View Details */}
        <Link
          href={`/products/${product.slug}`}
          className="mt-3 hidden items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.15em] text-black/40 transition-colors duration-300 hover:text-black sm:flex"
        >
          View Details
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}