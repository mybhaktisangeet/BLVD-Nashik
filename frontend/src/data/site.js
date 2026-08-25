const CDN = "https://static.prod-images.emergentagent.com/jobs/8e94824b-eb2c-43de-890e-81e5b055610e/images";

export const IMG = {
  heroExterior: `${CDN}/dde8c3cde77da3a16d2624dca81c1e40319f2a165c54222b580240405ea70268.jpeg`,
  lobby: `${CDN}/60bcd28d30c95e7cc540a9636a41144f5c2fbf696760a505b00db37526764610.jpeg`,
  roomDeluxe: `${CDN}/4a4c0cee876ba954bff7759953628e57aad4648c6d68506b815a2751e7987e12.jpeg`,
  roomSuite: `${CDN}/bdbaf453b9fe80e19630d3151ca4bb1934e0ea3b3b30daf03cc14f737b306252.jpeg`,
  banquetWedding: `${CDN}/cd81e3fe63b23bc3b203e1a5c8b609390961fe9489da0dbf017ccf5fac5e317b.jpeg`,
  heraGardens: `${CDN}/706ee4a05923066348a24caf38fc9cd333d1d6aa491e3c1c4fbae95b4edd0469.jpeg`,
  apollo: `${CDN}/f2238770e1291b569fc60df33f5e9841727fa3b62f98bb4ec34d72b632dc58bb.jpeg`,
  zeus: `${CDN}/3d45d38cc37e34f8450c04b6efc873a51e337f7abbae31808f422a1f41d58099.jpeg`,
  panorama: `${CDN}/0ef0e3f46a8ac82ce8e4e79afb7ba9921b9c5f50b4410518bd7468bd7c8ee5be.jpeg`,
  foundry: `${CDN}/75f1de1b693c163316dc539df4783221bd42ad58985bc1efb073f7f16a4c3c76.jpeg`,
  turmeric: `${CDN}/3105250684e738867c59a69d7bc1aba79d57a22e4547c5e5357e3f5ef28a7acc.jpeg`,
  cinema: `${CDN}/08bb24a9b14d41f6bd0bce02ae20771d4e652cebf7202c4447b5e35641f067cd.jpeg`,
  pool: `${CDN}/4e8cd9696a2766f3e22dd687d9038349a7820b006c0c6fb883603c0973e3b00d.jpeg`,
  spa: `${CDN}/bbdb6debbdb1833d87c8fcc72e8154b50998a44f4a661cb546d3a21f5aa18cd5.jpeg`,
  gym: `${CDN}/8afb46d77eaa572b1e3123b8df0b0f6db8bbc5b808bdcfa1c8e2b02e99dbe3e2.jpeg`,
  salon: `${CDN}/53fcdaa364f0bf4a7b6fe8d0986007ad4699cba854d2b2f4ca51dc98bf54aa6c.jpeg`,
  yoga: `${CDN}/61b2a4e7396303fe825ec06ae662a4bbd6238e38f77e4619c706a0f5b8a79a66.jpeg`,
  jacuzzi: `${CDN}/f72bf9b019305cc3957b924555a6c19223b9c057528bb5403f88894f013c77ac.jpeg`,
  golf: `${CDN}/e6bdcd4c5ea7c2bce7222eef539042d3e2d7a2da9591b588efbaafb3106ba9dc.jpeg`,
  games: `${CDN}/139b0a749b51c888bdde479ac9000a67f02fb96d7ba0aaac6abfa554dc93b7e1.jpeg`,
  exteriorNight: `${CDN}/5d817d1a02be11d036bbeed01e04827f02bf260c9147ccf081ea130477b96560.jpeg`,
  celebration: `${CDN}/7c2a20a5cc503ac086c48c06738e8744486c3590d83c583553d7a147a58ce342.jpeg`,
};

export const CONTACT = {
  address: "P20, Trimbakeshwar Road, MIDC, Satpur Colony, Nashik, Maharashtra 422006",
  phoneSales: "+91 8380039333",
  phoneSales2: "+91 8380083331",
  phoneReservations: "+91 7558683916",
  phoneGeneral: "083800 39444",
  emailReservations: "reservations.nashik@aureshospitality.com",
  emailSales: "sales.nashik@aureshospitality.com",
  emailGM: "gm.nashik@aureshospitality.com",
  whatsapp: "https://wa.me/918380039333",
  booking: "https://staahmax.staah.net/be/indexpackdetail?propertyId=MzE5NQ==&individual=true",
  payNow: "http://aureshospitality.nowpay.co.in",
  instagram: "https://www.instagram.com/blvdnashik",
  facebook: "https://www.facebook.com/blvdnashik",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=BLVD+Nashik+P20+Trimbakeshwar+Road+MIDC+Satpur+Colony+Nashik+422006",
  mapsEmbed: "https://www.google.com/maps?q=BLVD+Nashik,+P20,+Trimbakeshwar+Road,+MIDC,+Satpur+Colony,+Nashik,+Maharashtra+422006&output=embed",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Rooms", to: "/rooms" },
  { label: "Banquet & Lawn", to: "/banquet" },
  { label: "Dining", to: "/dining" },
  { label: "Club LaFair", to: "/club-lafair" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export const ROOMS = [
  {
    id: "deluxe-queen",
    name: "Deluxe Queen Room",
    image: IMG.roomDeluxe,
    size: "221–290 sq. ft.",
    bed: "Plush Queen Bed",
    view: "Garden View",
    guests: "2 Adults",
    rate: "₹3,000",
    description:
      "Elegantly designed with contemporary furnishings, our Deluxe Queen Rooms offer a serene retreat with garden views, premium linens, and modern amenities for the discerning traveller.",
  },
  {
    id: "suite",
    name: "Suite",
    image: IMG.roomSuite,
    size: "528 sq. ft.",
    bed: "King Bed + Living Area",
    view: "Premium View",
    guests: "2 Adults + 1 Child",
    rate: "₹6,000",
    description:
      "Our spacious Suites feature a separate living area, luxurious king-size bed, and premium appointments — perfect for extended stays or guests seeking an elevated experience.",
  },
];

export const VENUES = [
  {
    id: "hera-gardens",
    name: "Hera Gardens",
    subtitle: "Banquets & Lawns",
    images: [IMG.heraGardens, IMG.banquetWedding],
    area: "12,000+ sq. ft.",
    capacity: "Up to 750 guests",
    idealFor: "Grand Weddings, Receptions, Engagements, Large Corporate Events",
    features: ["5,000+ sq. ft. air-conditioned grand ballroom", "6,000–7,000 sq. ft. open-air lawn", "In-house catering — Veg & Non-Veg", "Professional event coordination & decor", "Audio-visual equipment & stage setup", "Valet parking"],
    description:
      "Hera Gardens is Nashik's most magnificent event venue — a seamless blend of an air-conditioned grand ballroom and a sprawling open-air lawn, perfect for celebrations that demand grandeur.",
  },
  {
    id: "apollo",
    name: "Apollo Banquet",
    subtitle: "Indoor Banquet Hall",
    images: [IMG.apollo],
    area: "Flexible configuration",
    capacity: "50–200 guests",
    idealFor: "Corporate conferences, cocktail parties, social gatherings, intimate celebrations",
    features: ["Modular layout", "State-of-the-art AV", "Dedicated catering", "Customizable decor"],
    description:
      "Apollo Banquet offers sophisticated versatility — an elegant indoor space that transforms seamlessly from a corporate conference hall to a glamorous celebration venue.",
  },
  {
    id: "zeus",
    name: "Zeus Boardroom",
    subtitle: "Executive Boardroom",
    images: [IMG.zeus],
    area: "Executive meeting suite",
    capacity: "10–25 guests",
    idealFor: "Board meetings, executive retreats, strategy sessions, private dinners",
    features: ["Conference table & executive seating", "Projector, screen & video conferencing", "High-speed Wi-Fi", "Refreshment service"],
    description:
      "Zeus Boardroom is where decisions are made — a premium, intimate meeting space equipped for modern business needs with the comfort and privacy of a luxury hotel.",
  },
];

export const DINING = [
  {
    id: "panorama",
    name: "Panorama",
    tag: "Rooftop Fine Dining",
    cuisine: "French · Indian · International",
    hours: "7:00 AM – 11:00 PM",
    image: IMG.panorama,
    mood: "warm",
    highlights: ["Panoramic rooftop views", "Live music nights", "Al fresco dining", "Curated wine pairings"],
    description:
      "Dine under the stars at Panorama — our signature rooftop restaurant offering a curated menu of French-inspired, Indian, and international cuisines, paired with panoramic city views and live music.",
  },
  {
    id: "foundry",
    name: "The Foundry",
    tag: "Industrial Bar & Lounge",
    cuisine: "Artisan Cocktails · Premium Spirits",
    hours: "12:00 PM – 11:30 PM",
    image: IMG.foundry,
    mood: "moody",
    highlights: ["Handcrafted cocktails", "Premium spirits & craft beers", "Industrial chic decor", "Lounge seating"],
    description:
      "The Foundry is where raw industrial aesthetics meet refined mixology — an atmospheric bar and lounge serving handcrafted cocktails, premium spirits, and a curated selection of wines and craft beers.",
  },
  {
    id: "turmeric",
    name: "Turmeric",
    tag: "24-Hour Coffee Shop",
    cuisine: "Indian · Continental · Quick Bites",
    hours: "Open 24 Hours",
    image: IMG.turmeric,
    mood: "cozy",
    highlights: ["Open around the clock", "Artisan coffee & fresh brews", "Comfort food classics", "Warm, inviting spaces"],
    description:
      "From your morning espresso to a midnight snack, Turmeric is your always-open culinary companion — a warm, inviting cafe serving comfort food, fresh brews, and quick bites around the clock.",
  },
];

export const ENTERTAINMENT = [
  { id: "cinema", name: "Private Cinema", image: IMG.cinema, description: "A private screening room for movie nights, corporate presentations, or special events — the ultimate in-hotel entertainment experience." },
  { id: "golf", name: "Golf Simulator", image: IMG.golf, description: "Test your swing on world-famous virtual courses with our state-of-the-art golf simulator — entertainment and competition rolled into one." },
  { id: "games", name: "Games Room", image: IMG.games, description: "Challenge friends to a game of pool, foosball, or table tennis in our vibrant games room — designed for leisure and laughter." },
  { id: "kids", name: "Kids' Lounge", image: null, description: "A dedicated, supervised play area where young guests can enjoy themselves while parents unwind." },
];

export const CLUB_FACILITIES = [
  { id: "pool", name: "Swimming Pool", hours: "6:00 AM – 9:00 PM", image: IMG.pool, feature: true, description: "A stunning rooftop swimming pool offering a refreshing escape with panoramic views — perfect for morning laps or leisurely afternoon swims." },
  { id: "gym", name: "Gymnasium", hours: "6:00 AM – 10:00 PM", image: IMG.gym, description: "A fully-equipped gym with modern cardio machines, free weights, strength training equipment, and personal training available on request." },
  { id: "spa", name: "Spa & Wellness", hours: "10:00 AM – 8:00 PM", image: IMG.spa, description: "Indulge in a range of therapeutic treatments — from deep tissue massages and aromatherapy to body wraps and rejuvenating facials — all delivered by trained therapists." },
  { id: "salon", name: "Beauty Salon", hours: "10:00 AM – 8:00 PM", image: IMG.salon, description: "A full-service salon offering haircare, skincare, manicures, pedicures, and grooming services for men and women." },
  { id: "jacuzzi", name: "Jacuzzi, Steam & Sauna", hours: "6:00 AM – 10:00 PM", image: IMG.jacuzzi, description: "Unwind in our heated jacuzzi, then detox in dedicated steam and sauna rooms — designed for deep relaxation and muscle recovery." },
  { id: "yoga", name: "Yoga Studio", hours: "6:00 AM – 10:00 PM", image: IMG.yoga, description: "A tranquil space for yoga and meditation, with sessions available for all levels — start your day with clarity and calm." },
  { id: "recreation", name: "Recreation & Games", hours: "6:00 AM – 10:00 PM", image: IMG.games, description: "Pool table, foosball, table tennis, board games, a golf simulator on world-famous virtual courses, and a supervised kids' lounge." },
];

export const TESTIMONIALS = [
  { quote: "From the moment we arrived, BLVD felt less like a hotel and more like a private residence. Our wedding at Hera Gardens was nothing short of a fairy tale — every detail, flawless.", name: "Ananya & Rohit Deshmukh", type: "Wedding at Hera Gardens" },
  { quote: "The rooftop pool at sunset, dinner at Panorama, cocktails at The Foundry — we had an entire holiday without ever leaving the building. Nashik finally has a true lifestyle destination.", name: "Karan Mehta", type: "Weekend Staycation" },
  { quote: "We hosted our annual conference in Apollo Banquet. Flawless coordination, impeccable AV, and the Zeus Boardroom sealed our biggest deal of the year.", name: "Priya Nair", type: "Corporate Retreat" },
  { quote: "Club LaFair alone is worth the visit — the spa, the sauna, and the most serene yoga studio in Nashik. I left feeling completely renewed.", name: "Aditi Kulkarni", type: "Wellness Getaway" },
];

export const GALLERY = [
  { src: IMG.heroExterior, alt: "BLVD Nashik exterior at dusk", cat: "Exteriors" },
  { src: IMG.roomDeluxe, alt: "Deluxe Queen Room", cat: "Rooms" },
  { src: IMG.banquetWedding, alt: "Grand wedding setup in banquet hall", cat: "Banquet & Lawn" },
  { src: IMG.pool, alt: "Rooftop swimming pool at golden hour", cat: "Club LaFair" },
  { src: IMG.panorama, alt: "Panorama rooftop restaurant", cat: "Dining" },
  { src: IMG.lobby, alt: "Grand hotel lobby", cat: "Exteriors" },
  { src: IMG.roomSuite, alt: "Luxury Suite with living area", cat: "Rooms" },
  { src: IMG.heraGardens, alt: "Hera Gardens lawn at twilight", cat: "Banquet & Lawn" },
  { src: IMG.foundry, alt: "The Foundry bar and lounge", cat: "Dining" },
  { src: IMG.spa, alt: "Spa treatment room", cat: "Club LaFair" },
  { src: IMG.apollo, alt: "Apollo Banquet conference setup", cat: "Banquet & Lawn" },
  { src: IMG.turmeric, alt: "Turmeric 24-hour coffee shop", cat: "Dining" },
  { src: IMG.gym, alt: "Fully-equipped gymnasium", cat: "Club LaFair" },
  { src: IMG.zeus, alt: "Zeus executive boardroom", cat: "Banquet & Lawn" },
  { src: IMG.cinema, alt: "Private cinema room", cat: "Dining" },
  { src: IMG.salon, alt: "Beauty salon", cat: "Club LaFair" },
  { src: IMG.yoga, alt: "Tranquil yoga studio", cat: "Club LaFair" },
  { src: IMG.jacuzzi, alt: "Luxury jacuzzi and sauna", cat: "Club LaFair" },
  { src: IMG.golf, alt: "Golf simulator", cat: "Club LaFair" },
  { src: IMG.games, alt: "Elegant games room", cat: "Club LaFair" },
  { src: IMG.exteriorNight, alt: "Hotel facade at night", cat: "Exteriors" },
  { src: IMG.celebration, alt: "Grand celebration event", cat: "Events" },
];

export const GALLERY_CATS = ["All", "Rooms", "Banquet & Lawn", "Dining", "Club LaFair", "Exteriors", "Events"];

export const HOURS = [
  { label: "Front Desk / Reception", value: "24 Hours" },
  { label: "Room Service", value: "24 Hours" },
  { label: "Turmeric Coffee Shop", value: "24 Hours" },
  { label: "Panorama Restaurant", value: "7:00 AM – 11:00 PM" },
  { label: "The Foundry Bar", value: "12:00 PM – 11:30 PM" },
  { label: "Club LaFair", value: "6:00 AM – 10:00 PM" },
  { label: "Swimming Pool", value: "6:00 AM – 9:00 PM" },
  { label: "Spa & Salon", value: "10:00 AM – 8:00 PM" },
];

export const DISTANCES = [
  { place: "Nashik City Centre", distance: "6 km" },
  { place: "Nashik Road Railway Station", distance: "11 km" },
  { place: "Sula Vineyards", distance: "14 km" },
  { place: "Trimbakeshwar Temple", distance: "22 km" },
  { place: "Nashik (Ozar) Airport", distance: "28 km" },
];
