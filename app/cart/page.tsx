"use client";

import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useCart } from "../../components/CartContext";

export default function CartPage() {
  const {
    cart,
    cartCount,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const formattedTotal = `Rs. ${cartTotal.toLocaleString("en-PK")}`;

  return (
    <>
      <Header />

      <main className="bg-[#f8f7f3]">
        <section className="bg-black px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <p className="text-[9px] uppercase tracking-[0.35em] text-white/40">
              Shopping bag
            </p>

            <h1 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
              Your cart
            </h1>
          </div>
        </section>

        {cart.length === 0 ? (
          <section className="flex min-h-[55vh] items-center justify-center px-5 py-20 text-center">
            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-black/10">
                <BagIcon />
              </div>

              <p className="mt-7 text-[9px] uppercase tracking-[0.3em] text-black/40">
                Nothing here yet
              </p>

              <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
                Your cart is empty.
              </h2>

              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-black/50">
                Explore our collection and find something you love.
              </p>

              <Link
                href="/shop"
                className="mt-7 inline-flex bg-black px-8 py-3.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white"
              >
                Start shopping
              </Link>
            </div>
          </section>
        ) : (
          <section className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-16">
              {/* Items */}
              <div>
                <div className="mb-6 flex items-center justify-between border-b border-black/10 pb-5">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-black/45">
                    {cartCount} {cartCount === 1 ? "item" : "items"}
                  </p>

                  <Link
                    href="/shop"
                    className="text-[9px] font-semibold uppercase tracking-[0.16em] underline underline-offset-4"
                  >
                    Continue shopping
                  </Link>
                </div>

                <div className="divide-y divide-black/10">
                  {cart.map((item) => (
                    <article
                      key={`${item.slug}-${item.size}`}
                      className="flex gap-4 py-6 sm:gap-6"
                    >
                      <Link
                        href={`/products/${item.slug}`}
                        className="h-32 w-24 shrink-0 overflow-hidden bg-[#ecebe6] sm:h-40 sm:w-32"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </Link>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <Link
                              href={`/products/${item.slug}`}
                              className="text-sm font-medium sm:text-base"
                            >
                              {item.name}
                            </Link>

                            {item.size && (
                              <p className="mt-2 text-[9px] uppercase tracking-[0.15em] text-black/40">
                                Size: {item.size}
                              </p>
                            )}
                          </div>

                          <p className="shrink-0 text-sm font-semibold">
                            {item.price}
                          </p>
                        </div>

                        <div className="mt-7 flex items-center justify-between gap-4">
                          <div className="flex h-10 items-center border border-black/10 bg-white">
                            <button
                              type="button"
                              onClick={() =>
                                decreaseQuantity(item.slug, item.size)
                              }
                              className="flex h-full w-10 items-center justify-center text-black/55 hover:text-black"
                            >
                              −
                            </button>

                            <span className="w-8 text-center text-xs">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                increaseQuantity(item.slug, item.size)
                              }
                              className="flex h-full w-10 items-center justify-center text-black/55 hover:text-black"
                            >
                              +
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              removeFromCart(item.slug, item.size)
                            }
                            className="text-[9px] font-semibold uppercase tracking-[0.15em] text-black/40 underline underline-offset-4 hover:text-black"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <aside className="h-fit border border-black/10 bg-white p-6 sm:p-8 lg:sticky lg:top-28">
                <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-black/40">
                  Order summary
                </p>

                <div className="mt-7 space-y-4 border-b border-black/10 pb-6">
                  <div className="flex justify-between gap-4 text-sm">
                    <span className="text-black/50">Subtotal</span>
                    <span>{formattedTotal}</span>
                  </div>

                  <div className="flex justify-between gap-4 text-sm">
                    <span className="text-black/50">Delivery</span>
                    <span className="text-xs">Calculated at checkout</span>
                  </div>
                </div>

                <div className="flex items-center justify-between py-6">
                  <span className="text-sm font-medium">Total</span>
                  <span className="text-lg font-semibold">
                    {formattedTotal}
                  </span>
                </div>

                <Link
                  href="/checkout"
                  className="flex w-full items-center justify-center bg-black py-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-black/80"
                >
                  Proceed to checkout
                </Link>

                <div className="mt-6 space-y-4 border-t border-black/10 pt-6">
                  <SmallFeature
                    title="Cash on delivery"
                    text="Available across Pakistan"
                  />
                  <SmallFeature
                    title="WhatsApp ordering"
                    text="Fast and simple order confirmation"
                  />
                  <SmallFeature
                    title="Customer support"
                    text="We're here to help"
                  />
                </div>
              </aside>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

function BagIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-6 w-6"
    >
      <path d="M5 8.5h14l-1 12H6l-1-12Z" />
      <path d="M9 9V6a3 3 0 0 1 6 0v3" />
    </svg>
  );
}

function SmallFeature({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div>
      <p className="text-[9px] font-semibold uppercase tracking-[0.13em]">
        {title}
      </p>
      <p className="mt-1 text-[10px] leading-5 text-black/45">{text}</p>
    </div>
  );
}