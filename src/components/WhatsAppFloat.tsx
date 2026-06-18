import { site } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3"
    >
      {/* Tooltip (desktop) */}
      <span className="pointer-events-none hidden rounded-full border border-border bg-surface px-3 py-2 text-sm font-medium shadow-lg opacity-0 transition-opacity group-hover:opacity-100 sm:block">
        Chat with us
      </span>

      <span className="relative flex h-14 w-14 items-center justify-center">
        {/* Pulse ring */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-60" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/40 transition-transform group-hover:scale-110">
          <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden="true">
            <path d="M16.003 3.2c-7.06 0-12.79 5.73-12.79 12.79 0 2.254.59 4.457 1.71 6.4L3.2 28.8l6.57-1.72a12.74 12.74 0 0 0 6.23 1.59h.005c7.06 0 12.79-5.73 12.79-12.79 0-3.42-1.33-6.63-3.75-9.05a12.7 12.7 0 0 0-9.04-3.63zm0 23.34h-.004a10.6 10.6 0 0 1-5.4-1.48l-.387-.23-4.003 1.05 1.068-3.9-.252-.4a10.56 10.56 0 0 1-1.62-5.64c0-5.86 4.77-10.63 10.63-10.63 2.84 0 5.5 1.107 7.51 3.116a10.56 10.56 0 0 1 3.11 7.52c0 5.86-4.77 10.63-10.63 10.63zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.107-.5-.16-.713.16-.21.32-.82 1.04-1.003 1.253-.184.213-.37.24-.69.08-.32-.16-1.35-.498-2.57-1.586-.95-.847-1.59-1.893-1.776-2.213-.184-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.214.054-.4-.027-.56-.08-.16-.713-1.72-.977-2.354-.257-.617-.518-.533-.713-.543l-.607-.01c-.21 0-.553.08-.843.4-.29.32-1.106 1.08-1.106 2.64 0 1.56 1.133 3.066 1.29 3.28.16.213 2.23 3.404 5.4 4.773.754.326 1.343.52 1.802.666.757.24 1.446.207 1.99.126.607-.09 1.89-.773 2.156-1.52.266-.746.266-1.386.187-1.52-.08-.133-.29-.213-.61-.373z" />
          </svg>
        </span>
      </span>
    </a>
  );
}
