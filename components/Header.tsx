"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "./CartContext";

const navLinks = [
{ label: "Men", href: "/men" },
{ label: "Women", href: "/women" },
{ label: "Shop", href: "/shop" },
{ label: "Custom Studio", href: "/custom" },
{ label: "Contact", href: "/contact" },
];

function HomeIcon() {
return ( <svg
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="1.7"
   className="h-[19px] w-[19px]"
 > <path d="m3 10 9-7 9 7" /> <path d="M5 9v11h14V9" /> <path d="M9 20v-6h6v6" /> </svg>
);
}

function HeartIcon() {
return ( <svg
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="1.7"
   className="h-[19px] w-[19px]"
 > <path d="M20.8 8.8c0 5.2-8.8 10.2-8.8 10.2S3.2 14 3.2 8.8A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.6Z" /> </svg>
);
}

function UserIcon() {
return ( <svg
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="1.7"
   className="h-[19px] w-[19px]"
 > <circle cx="12" cy="8" r="3.5" /> <path d="M5 20c.8-3.5 3.1-5.5 7-5.5s6.2 2 7 5.5" /> </svg>
);
}

function BagIcon() {
return ( <svg
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="1.7"
   className="h-[19px] w-[19px]"
 > <path d="M5 8.5h14l-1 12H6l-1-12Z" /> <path d="M9 9V6a3 3 0 0 1 6 0v3" /> </svg>
);
}

function MenuIcon({ open }: { open: boolean }) {
return ( <div className="relative h-5 w-5">
<span
className={`absolute left-0 top-[5px] h-px w-5 bg-current transition-transform duration-300 ${
          open ? "translate-y-[5px] rotate-45" : ""
        }`}
/>
<span
className={`absolute left-0 top-[10px] h-px w-5 bg-current transition-all duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
/>
<span
className={`absolute left-0 top-[15px] h-px w-5 bg-current transition-transform duration-300 ${
          open ? "-translate-y-[5px] -rotate-45" : ""
        }`}
/> </div>
);
}

export default function Header() {
const pathname = usePathname();
const { cartCount, wishlist } = useCart();

const [mobileOpen, setMobileOpen] = useState(false);

useEffect(() => {
setMobileOpen(false);
}, [pathname]);

useEffect(() => {
if (!mobileOpen) {
document.body.style.overflow = "";
return;
}


document.body.style.overflow = "hidden";

return () => {
  document.body.style.overflow = "";
};


}, [mobileOpen]);

useEffect(() => {
const handleEscape = (event: KeyboardEvent) => {
if (event.key === "Escape") {
setMobileOpen(false);
}
};


window.addEventListener("keydown", handleEscape);

return () => {
  window.removeEventListener("keydown", handleEscape);
};


}, []);

const isActive = (href: string) => {
if (href === "/shop") {
return pathname === "/shop";
}


return pathname === href || pathname.startsWith(`${href}/`);


};

return (
<>
{/* Announcement bar */} <div className="relative z-[60] bg-black px-4 py-2 text-center text-[9px] font-medium uppercase tracking-[0.25em] text-white sm:text-[10px]">
Delivery all over Pakistan </div>

  <header className="sticky top-0 z-50 border-b border-black/[0.07] bg-[#f8f7f3]/95 backdrop-blur-xl">
    <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:h-[76px] lg:px-10">

      {/* Mobile menu */}
      <button
        type="button"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-black transition hover:bg-black/5 lg:hidden"
      >
        <MenuIcon open={mobileOpen} />
      </button>

      {/* Desktop left navigation */}
      <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
        {navLinks.slice(0, 3).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative py-3 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors ${
              isActive(link.href)
                ? "text-black"
                : "text-black/55 hover:text-black"
            }`}
          >
            {link.label}

            {isActive(link.href) && (
              <span className="absolute bottom-0 left-0 h-px w-full bg-black" />
            )}
          </Link>
        ))}
      </nav>

      {/* REAL LOGO */}
      <Link
        href="/"
        aria-label="HS Fabrics Home"
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
      >
        <Image
          src="/logo/hs-fabrics-logo.png"
          alt="HS Fabrics"
          width={160}
          height={100}
          priority
          className="h-[82px] w-[140px] object-contain sm:h-[88px] sm:w-[150px]"
        />
      </Link>

      {/* Right navigation / actions */}
      <div className="ml-auto flex items-center gap-1 sm:gap-2">

        {/* Desktop links */}
        <nav className="mr-4 hidden items-center gap-7 lg:flex xl:gap-9">
          {navLinks.slice(3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-3 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors ${
                isActive(link.href)
                  ? "text-black"
                  : "text-black/55 hover:text-black"
              }`}
            >
              {link.label}

              {isActive(link.href) && (
                <span className="absolute bottom-0 left-0 h-px w-full bg-black" />
              )}
            </Link>
          ))}
        </nav>

        {/* Wishlist */}
        <Link
          href="/wishlist"
          aria-label="Wishlist"
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-black transition hover:bg-black/5"
        >
          <HeartIcon />

          {wishlist.length > 0 && (
            <span className="absolute right-[3px] top-[2px] flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-black px-1 text-[8px] font-semibold text-white">
              {wishlist.length > 9 ? "9+" : wishlist.length}
            </span>
          )}
        </Link>

        {/* Account */}
        <Link
          href="/account"
          aria-label="Account"
          className="hidden h-10 w-10 items-center justify-center rounded-full text-black transition hover:bg-black/5 sm:flex"
        >
          <UserIcon />
        </Link>

        {/* Cart */}
        <Link
          href="/cart"
          aria-label="Shopping bag"
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-black transition hover:bg-black/5"
        >
          <BagIcon />

          {cartCount > 0 && (
            <span className="absolute right-[3px] top-[2px] flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-black px-1 text-[8px] font-semibold text-white">
              {cartCount > 9 ? "9+" : cartCount}
            </span>
          )}
        </Link>
      </div>
    </div>
  </header>

  {/* Mobile menu */}
  <div
    className={`fixed inset-0 z-[55] lg:hidden ${
      mobileOpen ? "pointer-events-auto" : "pointer-events-none"
    }`}
  >
    {/* Backdrop */}
    <button
      type="button"
      aria-label="Close navigation"
      onClick={() => setMobileOpen(false)}
      className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
        mobileOpen ? "opacity-100" : "opacity-0"
      }`}
    />

    {/* Drawer */}
    <aside
      className={`absolute left-0 top-0 flex h-full w-[min(86vw,390px)] flex-col bg-[#f8f7f3] shadow-2xl transition-transform duration-300 ease-out ${
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex h-[calc(68px+32px)] items-end border-b border-black/[0.07] px-6 pb-5 pt-8">

        {/* Mobile drawer logo */}
        <Link
          href="/"
          aria-label="HS Fabrics Home"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src="/logo/hs-fabrics-logo.png"
            alt="HS Fabrics"
            width={140}
            height={90}
            className="h-[70px] w-[115px] object-contain"
          />
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
          className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-black/10"
        >
          <span className="relative block h-4 w-4">
            <span className="absolute left-0 top-1/2 h-px w-4 rotate-45 bg-black" />
            <span className="absolute left-0 top-1/2 h-px w-4 -rotate-45 bg-black" />
          </span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-7">
        <div className="mb-7 text-[9px] font-medium uppercase tracking-[0.3em] text-black/40">
          Explore
        </div>

        <nav className="flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`group flex items-center justify-between border-b border-black/[0.07] py-5 text-xl font-medium tracking-[-0.02em] ${
                isActive(link.href) ? "text-black" : "text-black/70"
              }`}
            >
              <span>{link.label}</span>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h13" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>
          ))}
        </nav>

        <div className="mt-10 rounded-2xl bg-black p-6 text-white">
          <p className="text-[9px] uppercase tracking-[0.28em] text-white/50">
            HS Fabrics
          </p>

          <h3 className="mt-3 text-xl font-medium tracking-[-0.02em]">
            Premium comfort,
            <br />
            made for everyday.
          </h3>

          <Link
            href="/shop"
            onClick={() => setMobileOpen(false)}
            className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em]"
          >
            Shop now
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Mobile quick actions */}
      <div className="border-t border-black/[0.07] px-5 py-4">
        <div className="grid grid-cols-3 gap-2">
          <Link
            href="/account"
            onClick={() => setMobileOpen(false)}
            className="flex flex-col items-center justify-center rounded-xl border border-black/[0.08] py-3"
          >
            <UserIcon />
            <span className="mt-1 text-[8px] uppercase tracking-[0.12em]">
              Account
            </span>
          </Link>

          <Link
            href="/wishlist"
            onClick={() => setMobileOpen(false)}
            className="flex flex-col items-center justify-center rounded-xl border border-black/[0.08] py-3"
          >
            <HeartIcon />
            <span className="mt-1 text-[8px] uppercase tracking-[0.12em]">
              Wishlist
            </span>
          </Link>

          <Link
            href="/cart"
            onClick={() => setMobileOpen(false)}
            className="flex flex-col items-center justify-center rounded-xl border border-black/[0.08] py-3"
          >
            <BagIcon />
            <span className="mt-1 text-[8px] uppercase tracking-[0.12em]">
              Cart
            </span>
          </Link>
        </div>
      </div>
    </aside>
  </div>

  {/* Mobile bottom navigation */}
  <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-black/[0.08] bg-[#f8f7f3]/95 px-3 pb-[max(8px,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl lg:hidden">
    <div className="mx-auto grid max-w-md grid-cols-4">

      <Link
        href="/"
        className={`flex flex-col items-center gap-1 py-2 ${
          pathname === "/" ? "text-black" : "text-black/45"
        }`}
      >
        <HomeIcon />
        <span className="text-[8px] font-medium uppercase tracking-[0.12em]">
          Home
        </span>
      </Link>

      <Link
        href="/shop"
        className={`flex flex-col items-center gap-1 py-2 ${
          pathname === "/shop" ? "text-black" : "text-black/45"
        }`}
      >
        <BagIcon />
        <span className="text-[8px] font-medium uppercase tracking-[0.12em]">
          Shop
        </span>
      </Link>

      <Link
        href="/wishlist"
        className={`relative flex flex-col items-center gap-1 py-2 ${
          pathname.startsWith("/wishlist")
            ? "text-black"
            : "text-black/45"
        }`}
      >
        <HeartIcon />

        {wishlist.length > 0 && (
          <span className="absolute left-1/2 top-0 ml-2 flex h-3.5 min-w-3.5 -translate-x-1/2 items-center justify-center rounded-full bg-black px-1 text-[7px] text-white">
            {wishlist.length > 9 ? "9+" : wishlist.length}
          </span>
        )}

        <span className="text-[8px] font-medium uppercase tracking-[0.12em]">
          Wishlist
        </span>
      </Link>

      <Link
        href="/account"
        className={`flex flex-col items-center gap-1 py-2 ${
          pathname.startsWith("/account")
            ? "text-black"
            : "text-black/45"
        }`}
      >
        <UserIcon />
        <span className="text-[8px] font-medium uppercase tracking-[0.12em]">
          Account
        </span>
      </Link>
    </div>
  </div>
</>

);
}