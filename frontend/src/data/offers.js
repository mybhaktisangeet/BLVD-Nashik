import { IMG, CONTACT } from "@/data/site";

const CDN = "https://static.prod-images.emergentagent.com/jobs/8e94824b-eb2c-43de-890e-81e5b055610e/images";

export const OFFER_IMG = {
  vineyard: `${CDN}/7175d8e0b5e35ae14ee2d7e5aee61d3edd146dd0273de77a949efa356ec07418.jpeg`,
  celebrationSuite: `${CDN}/526e4e6a757c9ee9145686b154a8f3dd9cad231e1676546e9a4253650b4d66b5.jpeg`,
  monsoon: `${CDN}/871a155bef54b2aa764720bfd97156d0b76f81202e3ec18df0e52077a8c46c0a.jpeg`,
};

export const OFFERS = [
  {
    id: "monsoon-staycation",
    tag: "Now On — Monsoon",
    name: "Monsoon Staycation",
    image: OFFER_IMG.monsoon,
    featured: true,
    description:
      "Nashik turns emerald in the rains. Watch the mist roll over the hills from your window seat — chai in hand, spa warm and waiting, and the jacuzzi bubbling while it pours outside.",
    inclusions: [
      "Suite stay with misty hill views",
      "Monsoon high-tea — pakoras & chai by the window",
      "Warm jacuzzi, steam & sauna access at Club LaFair",
      "Movie evening at the private cinema",
      "Flexible late checkout on rainy mornings",
    ],
  },
  {
    id: "wine-country-weekend",
    tag: "Seasonal Favourite",
    name: "Wine Country Weekend",
    image: OFFER_IMG.vineyard,
    featured: true,
    description:
      "Nashik is India's wine capital — and BLVD is your basecamp. Two unhurried nights of vineyard trails, sundowners at The Foundry with Sula pours, and rooftop dinners under the stars.",
    inclusions: [
      "Two nights in a Deluxe Queen Room or Suite",
      "Daily breakfast at Turmeric",
      "Curated vineyard trail assistance — Sula & beyond",
      "Evening wine hour at The Foundry with Nashik pours",
      "Late checkout until 2:00 PM, subject to availability",
    ],
  },
  {
    id: "royal-wedding-bundle",
    tag: "Celebrations",
    name: "The Royal Wedding Bundle",
    image: IMG.heraGardens,
    featured: true,
    description:
      "Hera Gardens, dressed for your fairy tale — 12,000+ sq. ft. of ballroom and twilight lawn, choreographed end-to-end by our events team so your family simply celebrates.",
    inclusions: [
      "Hera Gardens ballroom + lawn for up to 750 guests",
      "In-house catering — vegetarian & non-vegetarian menus",
      "Decor, stage, and floral styling coordination",
      "Complimentary bridal suite on the wedding night",
      "Dedicated event manager & valet parking",
    ],
  },
  {
    id: "celebration-staycation",
    tag: "Romance",
    name: "Celebration Staycation",
    image: OFFER_IMG.celebrationSuite,
    featured: true,
    description:
      "Anniversaries, proposals, or just because — a suite dressed in petals and candlelight, champagne-style toasts, and a rooftop dinner at Panorama to seal the evening.",
    inclusions: [
      "One night in a Suite with celebration decor",
      "Cake & sparkling beverage on arrival",
      "Candlelight dinner for two at Panorama",
      "Breakfast in bed the next morning",
      "Late checkout until 1:00 PM",
    ],
  },
  {
    id: "corporate-conclave",
    tag: "Business",
    name: "Corporate Conclave",
    image: IMG.zeus,
    description:
      "Board the Zeus Boardroom or scale up to Apollo Banquet — full AV, seamless breaks, and working lunches, engineered for decisions that matter.",
    inclusions: [
      "Zeus Boardroom or Apollo Banquet — flexible layouts",
      "Projector, video conferencing & high-speed Wi-Fi",
      "Two tea/coffee breaks with savouries",
      "Working lunch at Turmeric or in-venue",
      "Preferred room-block rates for outstation teams",
    ],
  },
  {
    id: "wellness-reset",
    tag: "Wellness",
    name: "Club LaFair Wellness Reset",
    image: IMG.spa,
    description:
      "A full day surrendered to Club LaFair — sunrise yoga, therapeutic spa hands, steam, sauna, and golden-hour laps in the rooftop pool.",
    inclusions: [
      "Full-day access to Club LaFair facilities",
      "60-minute signature spa therapy",
      "Guided morning yoga session",
      "Steam, sauna & jacuzzi access",
      "Wellness lunch at Turmeric",
    ],
  },
  {
    id: "private-premiere",
    tag: "Entertainment",
    name: "Private Premiere Night",
    image: IMG.cinema,
    description:
      "The whole cinema, only your people. Screen a classic, a big game, or your own story — with popcorn, platters, and lounge service through the credits.",
    inclusions: [
      "Exclusive private cinema for up to your full party",
      "Choice of screening — film, sport, or your own reel",
      "Gourmet popcorn & F&B platters",
      "Optional celebration decor for birthdays",
      "Games room access before the show",
    ],
  },
];

export const offerWhatsApp = (name) =>
  `${CONTACT.whatsapp}?text=${encodeURIComponent(`Hello BLVD Nashik! I'd like to enquire about the "${name}" package. Please share details and availability.`)}`;
