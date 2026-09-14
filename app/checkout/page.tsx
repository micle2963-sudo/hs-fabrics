
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useCart } from "../../components/CartContext";
import { CONTACT } from "../../data/products";

function parsePrice(price: string | number | undefined): number {
  if (price === undefined || price === null) {
    return 0;
  }

  const cleaned = String(price)
    .replace(/Rs\.?/gi, "")
    .replace(/PKR/gi, "")
    .replace(/,/g, "")
    .trim();

  const value = Number(cleaned);

  return Number.isFinite(value) ? value : 0;
}

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [orderId, setOrderId] = useState("");

  const calculatedTotal = cart.reduce((total, item) => {
    const price = parsePrice(item.price);
    return total + price * item.quantity;
  }, 0);

  const finalTotal =
    calculatedTotal > 0 ? calculatedTotal : cartTotal;

  const submitOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    const cleanName = name.trim();
    const cleanPhone = phone.replace(/\s+/g, "");
    const cleanCity = city.trim();
    const cleanAddress = address.trim();

    if (
      !cleanName ||
      !cleanPhone ||
      !cleanCity ||
      !cleanAddress
    ) {
      setError("Please complete all required fields.");
      return;
    }

    const phoneValid =
      /^(?:\+92|0092|92|03)\d{9,10}$/.test(cleanPhone);

    if (!phoneValid) {
      setError("Please enter a valid Pakistani phone number.");
      return;
    }

    if (cart.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    setSubmitting(true);

    const newOrderId = `HS-${Date.now()
      .toString()
      .slice(-8)}`;

    const lines = cart.map((item) => {
      const price = parsePrice(item.price);
      const lineTotal = price * item.quantity;

      return [
        `• ${item.name}`,
        `  Size: ${item.size || "N/A"}`,
        `  Qty: ${item.quantity}`,
        `  Price: Rs. ${lineTotal.toLocaleString("en-PK")}`,
      ].join("\n");
    });

    const message = [
      `*HS FABRICS ORDER*`,
      ``,
      `Order ID: ${newOrderId}`,
      ``,
      `*Customer Details*`,
      `Name: ${cleanName}`,
      `Phone: ${cleanPhone}`,
      `City: ${cleanCity}`,
      `Address: ${cleanAddress}`,
      ``,
      `*Order Items*`,
      ...lines,
      ``,
      `*Total: Rs. ${finalTotal.toLocaleString("en-PK")}*`,
      `Payment: Cash on Delivery`,
      ``,
      `Delivery: All over Pakistan`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${
      CONTACT.whatsappNumber
    }?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    setOrderId(newOrderId);
    clearCart();
    setSubmitting(false);
  };

  if (orderId) {
    return (
      <>
        <Header />

        <main className="flex min-h-[70vh] items-center justify-center bg-[#f8f7f3] px-5 py-20 text-center">
          <div className="max-w-lg">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-7 w-7"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
            </div>

            <p className="mt-7 text-[9px] uppercase tracking-[0.3em] text-black/40">
              Order received
            </p>

            <h1 className="mt-3 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
              Thank you for your order.
            </h1>

            <p className="mt-5 text-sm leading-7 text-black/55">
              Your order request has been prepared for WhatsApp.
              Please complete the WhatsApp conversation to confirm
              your order.
            </p>

            <div className="mt-7 border border-black/10 bg-white p-5">
              <p className="text-[9px] uppercase tracking-[0.2em] text-black/40">
                Order ID
              </p>

              <p className="mt-2 text-lg font-semibold">
                {orderId}
              </p>
            </div>

            <Link
              href="/shop"
              className="mt-7 inline-flex bg-black px-8 py-3.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white"
            >
              Continue shopping
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="bg-[#f8f7f3]">
        <section className="bg-black px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <p className="text-[9px] uppercase tracking-[0.35em] text-white/40">
              Secure checkout
            </p>

            <h1 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
              Checkout
            </h1>
          </div>
        </section>

        {cart.length === 0 ? (
          <section className="flex min-h-[55vh] items-center justify-center px-5 py-20 text-center">
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-black/40">
                No items
              </p>

              <h2 className="mt-3 text-2xl font-medium">
                Your cart is empty.
              </h2>

              <Link
                href="/shop"
                className="mt-7 inline-flex bg-black px-8 py-3.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white"
              >
                Shop now
              </Link>
            </div>
          </section>
        ) : (
          <section className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
            <form
              onSubmit={submitOrder}
              className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-16"
            >
              <div>
                <div className="border-b border-black/10 pb-6">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-black/40">
                    01 · Delivery details
                  </p>

                  <h2 className="mt-3 text-2xl font-medium">
                    Where should we deliver?
                  </h2>
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Full name *"
                    value={name}
                    onChange={setName}
                    placeholder="Your full name"
                  />

                  <Field
                    label="Phone number *"
                    value={phone}
                    onChange={setPhone}
                    placeholder="03XX XXXXXXX"
                    type="tel"
                  />

                  <Field
                    label="City *"
                    value={city}
                    onChange={setCity}
                    placeholder="e.g. Sargodha"
                  />

                  <div className="sm:col-span-2">
                    <label className="block">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.16em]">
                        Complete address *
                      </span>

                      <textarea
                        value={address}
                        onChange={(event) =>
                          setAddress(event.target.value)
                        }
                        placeholder="House / street / area / landmark"
                        rows={4}
                        className="mt-3 w-full resize-none border border-black/10 bg-white px-4 py-3.5 text-sm transition focus:border-black/30"
                      />
                    </label>
                  </div>
                </div>

                <div className="mt-10 border border-black/10 bg-white p-6 sm:p-8">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-black/40">
                    02 · Payment
                  </p>

                  <div className="mt-5 flex items-start gap-4">
                    <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-black">
                      <span className="h-2 w-2 rounded-full bg-white" />
                    </div>

                    <div>
                      <p className="text-sm font-medium">
                        Cash on Delivery
                      </p>

                      <p className="mt-1 text-xs leading-5 text-black/45">
                        Pay when your HS Fabrics order arrives.
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
                  disabled={submitting}
                  className="mt-6 flex w-full items-center justify-center bg-black py-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting
                    ? "Preparing order..."
                    : "Place order via WhatsApp"}
                </button>

                <p className="mt-4 text-center text-[9px] leading-5 text-black/35">
                  Your order details will open in WhatsApp for
                  confirmation.
                </p>
              </div>

              <aside className="h-fit border border-black/10 bg-white p-6 sm:p-8 lg:sticky lg:top-28">
                <p className="text-[9px] uppercase tracking-[0.25em] text-black/40">
                  Your order
                </p>

                <div className="mt-6 divide-y divide-black/10">
                  {cart.map((item) => (
                    <div
                      key={`${item.slug}-${item.size}`}
                      className="flex gap-4 py-4 first:pt-0"
                    >
                      <div className="h-20 w-16 shrink-0 overflow-hidden bg-[#ecebe6]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium leading-5">
                          {item.name}
                        </p>

                        <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-black/40">
                          {item.size || "N/A"} · Qty {item.quantity}
                        </p>

                        <p className="mt-2 text-xs font-semibold">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-5">
                  <span className="text-sm font-medium">
                    Total
                  </span>

                  <span className="text-lg font-semibold">
                    Rs. {finalTotal.toLocaleString("en-PK")}
                  </span>
                </div>

                <div className="mt-6 bg-[#f1f0eb] p-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.15em]">
                    Delivery
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-black/45">
                    Delivery all over Pakistan.
                  </p>
                </div>
              </aside>
            </form>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

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
    <label className="block">
      <span className="text-[9px] font-semibold uppercase tracking-[0.16em]">
        {label}
      </span>

      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="mt-3 w-full border border-black/10 bg-white px-4 py-3.5 text-sm transition focus:border-black/30"
      />
    </label>
  );
}
