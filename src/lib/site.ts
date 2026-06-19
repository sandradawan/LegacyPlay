// =====================================================================
//  EDIT YOUR BUSINESS DETAILS HERE
//  This is the only file you need to change to update most of the site.
//  (Replace every "TODO" value with your real info.)
// =====================================================================

export const site = {
  // --- Brand ---
  name: "LegacyPlay",
  tagline: "The Ultimate PlayStation Gaming Lounge",
  description:
    "Drop in, grab a controller, and play. Premium PlayStation 5 stations, big-screen co-op, and weekly tournaments — all in one place.",

  // --- Contact ---
  phone: "07070325250",
  // International format, no spaces/+ , for the WhatsApp (wa.me) link
  whatsapp: "2348169955438",
  whatsappDisplay: "+234 816 995 5438",
  email: "goddaydaniel616@gmail.com",

  // --- Location ---
  address: "Airport Road, Gosa Primary, No. 9, Abuja, Nigeria",
  // Paste a Google Maps "embed" URL here (Maps > Share > Embed a map > copy the src).
  mapEmbedUrl:
    "https://www.google.com/maps?q=Gosa+Airport+Road+Abuja+Nigeria&output=embed",
  mapLink: "https://maps.google.com/?q=Gosa+Airport+Road+Abuja+Nigeria",

  // --- Opening hours ---
  hours: [
    { day: "Mon – Sat", time: "8:00 AM – 10:00 PM" },
    { day: "Sun", time: "12:00 PM – 10:00 PM" },
  ],

  // --- Socials (TODO: your real handles; leave "" to hide) ---
  socials: {
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
    twitch: "https://twitch.tv/",
    youtube: "",
  },
} as const;

// --- Hero slideshow images (files live in /public) ---
export const heroSlides = [
  { src: "/football-1.jpeg", alt: "EA Sports FC 26" },
  { src: "/football-2.jpeg", alt: "Mortal Kombat" },
  { src: "/football-3.jpeg", alt: "EA Sports FC 26" },
  { src: "/football-4.jpeg", alt: "Mortal Kombat fighters" },
  { src: "/football-5.jpeg", alt: "Need for Speed: Most Wanted" },
];

// --- CEO / Founder bio ---
export const ceo = {
  name: "GODDEY NOMSU DANIEL",
  role: "Founder & CEO",
  photo: "/IMG_3624.JPG.jpeg",
  quote:
    "I built LegacyPlay so every gamer in our city has a home — a place to compete, belong, and level up together.",
  bio: [
    "GODEY NOMSU DANIEL is the founder and driving force behind LegacyPlay. A lifelong gamer and football fanatic, he turned a simple idea — bring people together around the games they love — into the city's premier PlayStation lounge.",
    "From a single console to a full house of PS5 stations, tournaments, and a thriving community, his vision has always been the same: world-class gaming, an unbeatable atmosphere, and a place where casual players and serious competitors feel equally at home.",
  ],
} as const;

// --- What you offer (per-console hourly rates, in Naira) ---
export const offerings = [
  {
    title: "PlayStation 5",
    price: "₦500 / 10 min",
    blurb:
      "The latest console — lightning-fast loads, stunning 4K visuals, and the newest games.",
    features: [
      "4K 120Hz display",
      "DualSense controller",
      "Latest game library",
      "Headset included",
    ],
    featured: true,
  },
  {
    title: "PlayStation 4",
    price: "₦300 / 10 min",
    blurb:
      "A massive library of hits and classics. Perfect for FIFA, COD, and squad nights.",
    features: [
      "Full HD display",
      "DualShock 4 controller",
      "Huge game catalogue",
      "Co-op ready",
    ],
    featured: false,
  },
  {
    title: "PlayStation 3",
    price: "₦200 / 10 min",
    blurb:
      "Budget-friendly nostalgia. Relive the classics that defined a generation.",
    features: [
      "Retro classics",
      "Wireless controller",
      "Most affordable rate",
      "Great for beginners",
    ],
    featured: false,
  },
];

// --- Upcoming tournaments / events ---
export const events = [
  {
    title: "FC 25 Friday Night Cup",
    date: "Every Friday · 7:00 PM",
    game: "EA SPORTS FC 25",
    prize: "$100 prize pool",
    entry: "$10 entry",
  },
  {
    title: "Tekken 8 Throwdown",
    date: "Sat, Jun 28 · 5:00 PM",
    game: "Tekken 8",
    prize: "$250 prize pool",
    entry: "$15 entry",
  },
  {
    title: "Call of Duty 2v2 Showdown",
    date: "Sun, Jul 6 · 4:00 PM",
    game: "Call of Duty",
    prize: "$300 prize pool",
    entry: "$20 / team",
  },
];

// --- Gallery (real photos live in /public) ---
export const gallery = [
  { src: "/shop.jpeg", label: "Our gaming lounge" },
  { src: "/gallery-coop.jpg", label: "Co-op nights" },
  { src: "/out.png", label: "Step inside" },
  { src: "/gallery-gear.jpg", label: "Gear & vibes" },
  { src: "/gallery-station.jpg", label: "Game on" },
  { src: "/gallery-controller.jpg", label: "Grab a controller" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#ceo", label: "Founder" },
  { href: "#offerings", label: "Play" },
  { href: "#tournaments", label: "Tournaments" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
  { href: "#contact", label: "Contact" },
];
