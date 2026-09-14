import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../components/CartContext";
import WhatsAppButton from "../components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hsfabrics.store"),
  title: {
    default: "HS Fabrics | Premium Hoodies & Sweatshirts",
    template: "%s | HS Fabrics",
  },
  description:
    "Shop premium hoodies and sweatshirts by HS Fabrics. Discover stylish everyday wear, quality fabrics and custom apparel with delivery across Pakistan.",
  openGraph: {
    title: "HS Fabrics | Premium Hoodies & Sweatshirts",
    description:
      "Premium hoodies and sweatshirts designed for everyday comfort, personal expression and modern style. Delivery all over Pakistan.",
    url: "https://hsfabrics.store",
    siteName: "HS Fabrics",
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <CartProvider>
          {children}
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
