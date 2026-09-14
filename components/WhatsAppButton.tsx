"use client";

import { CONTACT } from "../data/products";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with HS Fabrics on WhatsApp"
      className="group fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-110 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <span className="animate-whatsapp-pulse absolute inset-0 rounded-full" />
      <svg
        viewBox="0 0 32 32"
        className="relative h-8 w-8 fill-white transition-transform duration-300 group-hover:scale-105 sm:h-9 sm:w-9"
        aria-hidden="true"
      >
        <path d="M16.004 2.667c-7.363 0-13.333 5.97-13.333 13.333 0 2.353.615 4.56 1.69 6.475L2.667 29.333l6.999-1.835a13.26 13.26 0 0 0 6.338 1.614h.006c7.362 0 13.333-5.97 13.333-13.333S23.366 2.667 16.004 2.667Zm0 24.394a11.02 11.02 0 0 1-5.616-1.537l-.403-.24-4.153 1.09 1.108-4.05-.263-.416a11.01 11.01 0 0 1-1.688-5.908c0-6.096 4.96-11.055 11.058-11.055 2.954 0 5.73 1.152 7.82 3.243a10.98 10.98 0 0 1 3.238 7.816c-.003 6.096-4.963 11.057-11.101 11.057Zm6.062-8.283c-.332-.166-1.963-.968-2.268-1.078-.305-.11-.527-.166-.749.166-.221.333-.858 1.078-1.052 1.3-.194.222-.388.25-.72.083-.332-.166-1.402-.517-2.671-1.65-.987-.881-1.654-1.968-1.848-2.3-.194-.333-.02-.513.146-.679.15-.15.332-.389.498-.583.166-.194.221-.333.332-.555.11-.222.055-.416-.028-.583-.083-.166-.749-1.807-1.026-2.474-.27-.65-.545-.562-.749-.573-.194-.01-.416-.012-.638-.012-.221 0-.582.083-.887.416-.305.333-1.163 1.137-1.163 2.773 0 1.636 1.19 3.217 1.356 3.439.166.222 2.343 3.578 5.677 5.017.793.343 1.412.547 1.895.7.796.253 1.52.217 2.093.132.638-.095 1.963-.803 2.24-1.578.276-.776.276-1.44.194-1.578-.083-.139-.305-.222-.638-.389Z" />
      </svg>
    </a>
  );
}
