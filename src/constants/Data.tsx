import { Wifi, Coffee, Utensils, Tv, Refrigerator, Waves,Wine, Clapperboard } from "lucide-react";

// Constants
const ROOM_OPTIONS: RoomOption[] = [
  { value: 'all', label: 'All Rooms' },
  { value: 'deluxe', label: 'Deluxe Room' },
  { value: 'ocean', label: 'Ocean Suite' },
  { value: 'penthouse', label: 'Penthouse' },
  { value: 'villa', label: 'Villa' },
];

const GUEST_OPTIONS: GuestOption[] = [
  { value: '2a', label: '2 Adults' },
  { value: '1a', label: '1 Adult' },
  { value: '2a1c', label: '2 Adults, 1 Child' },
  { value: '2a2c', label: '2 Adults, 2 Children' },
  { value: '3a', label: '3 Adults' },
];

const FEATURES: FeatureItem[] = [
  {
    icon: (
      <svg className="w-8 h-8 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Luxury Rooms',
    description: 'Handcrafted interiors',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ),
    title: 'Fine Dining',
    description: 'Michelin-starred chefs',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Wellness Spa',
    description: 'Rejuvenating treatments',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Prime Location',
    description: 'Heart of the city',
  },
];

const ROOMS: RoomList[] = [
  {
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    type: "Deluxe Ocean Suite",
    price: 3000,
    description: "A spacious suite featuring floor-to-ceiling windows with a breathtaking view of the Atlantic Ocean. Perfect for couples seeking a romantic getaway.",
    extras: [
      {
        icon: <Wifi />, // Example using Lucide icons
        title: "High-Speed Wi-Fi",
        stock: 1
      },
      {
        icon: <Coffee />,
        title: "Espresso Machine",
        stock: 1
      },
      {
        icon: <Utensils />,
        title: "Breakfast in Bed",
        stock: 2
      }
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
    type: "Standard Twin Room",
    price: 5000.00,
    description: "Comfortable and functional room equipped with two twin beds, ideal for friends or business travelers.",
    extras: [
      {
        icon: <Tv />,
        title: "Smart TV",
        stock: 1
      },
      {
        icon: <Refrigerator />,
        title: "Mini Fridge",
        stock: 5
      }
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    type: "Presidential Penthouse",
    price: 10000,
    description: "The ultimate luxury experience. Includes a private terrace, personal butler service, and a marble bathroom with a whirlpool tub.",
    extras: [
      {
        icon: <Waves />,
        title: "Private Pool Access",
        stock: 1
      },
      {
        icon: <Wine />,
        title: "Mini Bar (Premium)",
        stock: 10
      },
      {
        icon: <Clapperboard />,
        title: "Private Cinema Room",
        stock: 1
      }
    ]
  }
];
const COMMODITIES: CommoditySection[] = [
  {
    id: "welcome",
    label: "01",
    title: "The Grand Lobby",
    description:
      "Your journey begins in a space designed for serenity. Our lobby blends modern architecture with warm, organic textures to create an immediate sense of belonging and luxury from the moment you step inside.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80",
    accent: "#c4a484", // Champagne Gold
  },
  {
    id: "suites",
    label: "02",
    title: "Luxury Suites",
    description:
      "Rest is the ultimate luxury. Each suite is a private sanctuary featuring soundproof walls, custom-made linens, and panoramic views designed to help you disconnect from the world and reconnect with yourself.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900&q=80",
    accent: "#4b5563", // Slate Gray
  },
  {
    id: "wellness",
    label: "04",
    title: "Spa & Wellness",
    description:
      "A holistic approach to rejuvenation. Our rooftop infinity pool and full-service spa offer a range of treatments tailored to your needs, providing a peaceful escape from the urban pace.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=80",
    accent: "#0d9488", // Teal
  },
  {
    id: "hospitality",
    label: "05",
    title: "Concierge Service",
    description:
      "Our commitment to service goes beyond the expected. Whether it's a personalized city tour or a midnight request, our 24/7 concierge ensures your stay is seamless and unforgettable.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80",
    accent: "#1e293b", // Navy Blue
  },
];
export { ROOM_OPTIONS, GUEST_OPTIONS, FEATURES, ROOMS, COMMODITIES }