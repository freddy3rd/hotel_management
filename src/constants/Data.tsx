import { Wifi, Coffee, Utensils, Tv, Refrigerator, Waves,Wine, Clapperboard, Car, Bed, UtensilsCrossedIcon } from "lucide-react";


import { ROOMS as room_image, COMMODITIES_IMAGE as commodities_image } from "./Image";
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
    icon: <Wifi/>,
    title: 'High Speed Wi-fi',
    description: 'Fast and reliable internet access throughout the property',
  },
  {
    icon: <Car/>,
    title: 'Parking Space',
    description: 'Secure and spacious parking available for all guests',
  },
  
  {
    icon: <Bed/>,
    title: 'Spa Center',
    description: 'Relaxing wellness treatments and full-service spa experience',
  },
  
  {
    icon: <UtensilsCrossedIcon/>,
    title: 'Restaurant & Bar',
    description: 'Enjoy premium dining and handcrafted drinks on-site',
  },
  
];

const ROOMS: RoomList[] = [
  {
    image: room_image.image_1,
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
    image: room_image.image_2,
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
    image: room_image.image_3,
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
      image:commodities_image.image_4,
      accent: "#c4a484", // Champagne Gold
  },
  {
    id: "suites",
    label: "02",
    title: "Luxury Suites",
    description:
      "Rest is the ultimate luxury. Each suite is a private sanctuary featuring soundproof walls, custom-made linens, and panoramic views designed to help you disconnect from the world and reconnect with yourself.",
      image:commodities_image.image_5,
      accent: "#4b5563", // Slate Gray
  },
  {
    id: "wellness",
    label: "04",
    title: "Spa & Wellness",
    description:
      "A holistic approach to rejuvenation. Our rooftop infinity pool and full-service spa offer a range of treatments tailored to your needs, providing a peaceful escape from the urban pace.",
      image:commodities_image.image_6,
      accent: "#0d9488", // Teal
  },
  {
    id: "hospitality",
    label: "05",
    title: "Concierge Service",
    description:
      "Our commitment to service goes beyond the expected. Whether it's a personalized city tour or a midnight request, our 24/7 concierge ensures your stay is seamless and unforgettable.",
      image:commodities_image.image_7,
      accent: "#1e293b", // Navy Blue
  },
  {
  id: "restaurant",
  label: "06",
  title: "Restaurant Dining",
  description:
    "Indulge in a curated culinary experience featuring local and international cuisine, crafted by world-class chefs using the freshest ingredients in a refined setting.",
  image: commodities_image.image_8,
  accent: "#0f766e", // Deep Teal
},
{
  id: "bar",
  label: "07",
  title: "Bar & Lounge",
  description:
    "Unwind in style at our bar and lounge, offering signature cocktails, premium spirits, and a relaxed ambiance perfect for evenings and social gatherings.",
  image: commodities_image.image_9,
  accent: "#7c2d12", // Warm Amber
},
];
export { ROOM_OPTIONS, GUEST_OPTIONS, FEATURES, ROOMS, COMMODITIES }