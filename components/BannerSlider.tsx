"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    image: "/banners/banner-1.jpg",
    title: "Luxury Made Simple",
    subtitle: "Premium hoodies and sweatshirts designed for your everyday style.",
  },
  {
    image: "/banners/banner-2.jpg",
    title: "Everyday. Elevated.",
    subtitle: "Discover refined comfort with the latest HS Fabrics collection.",
  },
  {
    image: "/banners/banner-3.jpg",
    title: "Premium Comfort",
    subtitle: "Soft fabrics, modern fits and timeless everyday essentials.",
  },
  {
    image: "/banners/banner-4.jpg",
    title: "Winter Essentials",
    subtitle: "Layer up in premium hoodies and sweatshirts made for every day.",
  },
  {
    image: "/banners/banner-5.jpg",
    title: "Modern Streetwear",
    subtitle: "Bold looks. Premium comfort. Your style, your way.",
  },
  {
    image: "/banners/banner-6.jpg",
    title: "Made For You",
    subtitle: "Explore premium pieces designed to fit your lifestyle.",
  },
  {
    image: "/banners/banner-7.jpg",
    title: "Find Your Style",
    subtitle: "Explore the latest collection from HS Fabrics.",
  },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [paused]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-neutral-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="
          relative
          h-[62vh]
          min-h-[460px]
          max-h-[760px]
          w-full
          sm:h-[68vh]
          sm:min-h-[500px]
          lg:h-[76vh]
          lg:min-h-[600px]
        "
      >
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            {/* Banner Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
              "
            />

            {/* Dark luxury overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex items-end">
              <div
                className="
                  mx-auto
                  w-full
                  max-w-7xl
                  px-5
                  pb-20
                  sm:px-8
                  sm:pb-24
                  lg:px-12
                  lg:pb-28
                "
              >
                <div
                  className={`max-w-xl transition-all duration-1000 ${
                    index === current
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                >
                  {/* Brand */}
                  <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.35em] text-white/75 sm:text-xs">
                    HS Fabrics
                  </p>

                  {/* Title */}
                  <h1
                    className="
                      text-3xl
                      font-semibold
                      leading-tight
                      tracking-[-0.03em]
                      text-white
                      sm:text-5xl
                      lg:text-7xl
                    "
                  >
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p
                    className="
                      mt-3
                      max-w-md
                      text-xs
                      leading-5
                      text-white/80
                      sm:mt-4
                      sm:text-base
                      sm:leading-6
                    "
                  >
                    {slide.subtitle}
                  </p>

                  {/* Button */}
                  <Link
                    href="/shop"
                    className="
                      mt-6
                      inline-flex
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      px-6
                      py-3
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-black
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-neutral-100
                      sm:mt-7
                      sm:px-8
                      sm:py-3.5
                      sm:text-xs
                    "
                  >
                    Shop Collection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Previous Button */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="
            absolute
            left-3
            top-1/2
            z-20
            flex
            h-9
            w-9
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-black/25
            text-white
            backdrop-blur-md
            transition
            hover:bg-white
            hover:text-black
            sm:left-6
            sm:h-10
            sm:w-10
          "
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="
            absolute
            right-3
            top-1/2
            z-20
            flex
            h-9
            w-9
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-black/25
            text-white
            backdrop-blur-md
            transition
            hover:bg-white
            hover:text-black
            sm:right-6
            sm:h-10
            sm:w-10
          "
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div
          className="
            absolute
            bottom-7
            left-1/2
            z-20
            flex
            -translate-x-1/2
            items-center
            gap-1.5
          "
        >
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrent(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-8 bg-white"
                  : "w-2 bg-white/45 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        {/* Slide Number */}
        <div className="absolute bottom-7 right-5 z-20 hidden text-[10px] tracking-[0.2em] text-white/70 sm:block">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
}