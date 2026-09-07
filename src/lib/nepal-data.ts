import heroHimalaya from "@/assets/hero-himalaya.jpg";
import kathmanduImg from "@/assets/kathmandu.jpg";
import pokharaImg from "@/assets/pokhara.jpg";
import foodImg from "@/assets/food.jpg";
import staysImg from "@/assets/stays.jpg";
import chitwanImg from "@/assets/chitwan.jpg";

export const images = {
  hero: heroHimalaya,
  kathmandu: kathmanduImg,
  pokhara: pokharaImg,
  food: foodImg,
  stays: staysImg,
  chitwan: chitwanImg,
};

export type Region = "Himalaya" | "Hills" | "Terai" | "Kathmandu Valley";

export type Destination = {
  slug: string;
  name: string;
  region: Region;
  district: string;
  altitude: string;
  image: string;
  tagline: string;
  summary: string;
  highlights: string[];
  bestMonths: string[];
  idealDays: number;
  dailyBudgetUsd: number;
  rating: number;
  reviewCount: number;
  coords: { lat: number; lng: number };
  tags: string[];
};

export const destinations: Destination[] = [
  {
    slug: "kathmandu",
    name: "Kathmandu",
    region: "Kathmandu Valley",
    district: "Kathmandu",
    altitude: "1,400 m",
    image: kathmanduImg,
    tagline: "Living temples, brick courtyards and late incense smoke",
    summary:
      "Nepal's capital layers Newar craftsmanship over a restless modern city. Wake for morning rituals at Boudhanath, get lost in Ason bazaar, and end the day on a rooftop above Thamel.",
    highlights: [
      "Boudhanath Stupa kora at dawn",
      "Patan Durbar Square courtyards",
      "Swayambhunath sunrise viewpoint",
      "Ason and Indra Chowk spice markets",
    ],
    bestMonths: ["Oct", "Nov", "Mar", "Apr"],
    idealDays: 3,
    dailyBudgetUsd: 38,
    rating: 4.7,
    reviewCount: 1284,
    coords: { lat: 27.7172, lng: 85.324 },
    tags: ["culture", "heritage", "food", "city"],
  },
  {
    slug: "pokhara",
    name: "Pokhara",
    region: "Hills",
    district: "Kaski",
    altitude: "822 m",
    image: pokharaImg,
    tagline: "Lakeside calm under the Annapurna wall",
    summary:
      "The launchpad for Annapurna treks and Nepal's easiest place to slow down. Paddle Phewa Lake, paraglide from Sarangkot, and watch Machhapuchhre turn gold at sunrise.",
    highlights: [
      "Sarangkot sunrise over Annapurna",
      "Phewa Lake rowboat to Tal Barahi",
      "Paragliding above the valley",
      "World Peace Pagoda hike",
    ],
    bestMonths: ["Oct", "Nov", "Dec", "Mar"],
    idealDays: 3,
    dailyBudgetUsd: 34,
    rating: 4.8,
    reviewCount: 1571,
    coords: { lat: 28.2096, lng: 83.9856 },
    tags: ["lake", "adventure", "relax", "mountain views"],
  },
  {
    slug: "everest-base-camp",
    name: "Everest Base Camp",
    region: "Himalaya",
    district: "Solukhumbu",
    altitude: "5,364 m",
    image: heroHimalaya,
    tagline: "The walk every trekker measures the others against",
    summary:
      "Twelve days of Sherpa villages, suspension bridges and thinning air from Lukla to the Khumbu Icefall. Acclimatisation days in Namche and Dingboche are non-negotiable.",
    highlights: [
      "Namche Bazaar acclimatisation days",
      "Tengboche Monastery morning puja",
      "Kala Patthar sunrise on Everest",
      "Khumbu Glacier moraine walk",
    ],
    bestMonths: ["Mar", "Apr", "May", "Oct"],
    idealDays: 14,
    dailyBudgetUsd: 55,
    rating: 4.9,
    reviewCount: 932,
    coords: { lat: 28.0026, lng: 86.8528 },
    tags: ["trek", "high altitude", "iconic"],
  },
  {
    slug: "annapurna-circuit",
    name: "Annapurna Circuit",
    region: "Himalaya",
    district: "Manang / Mustang",
    altitude: "5,416 m (Thorong La)",
    image: heroHimalaya,
    tagline: "Rice terraces to high desert in one continuous line",
    summary:
      "Nepal's most varied trek climbs from subtropical valleys through pine forest and Tibetan-influenced Manang before crossing Thorong La into Mustang's dry canyons.",
    highlights: [
      "Thorong La pass crossing",
      "Manang village and Gangapurna Lake",
      "Muktinath temple complex",
      "Marpha apple orchards",
    ],
    bestMonths: ["Mar", "Apr", "Oct", "Nov"],
    idealDays: 16,
    dailyBudgetUsd: 45,
    rating: 4.9,
    reviewCount: 811,
    coords: { lat: 28.6667, lng: 83.9333 },
    tags: ["trek", "high altitude", "culture"],
  },
  {
    slug: "chitwan",
    name: "Chitwan National Park",
    region: "Terai",
    district: "Chitwan",
    altitude: "150 m",
    image: chitwanImg,
    tagline: "Sal forest, rhino tracks and slow river mornings",
    summary:
      "Nepal's first national park protects one-horned rhino, gharial and Bengal tiger. Canoe the Rapti at dawn, walk with a licensed naturalist, and visit a Tharu village in the evening.",
    highlights: [
      "Dawn canoe on the Rapti River",
      "Guided jungle walk for rhino tracking",
      "Tharu stick-dance evening",
      "Gharial breeding centre",
    ],
    bestMonths: ["Oct", "Nov", "Feb", "Mar"],
    idealDays: 3,
    dailyBudgetUsd: 46,
    rating: 4.6,
    reviewCount: 704,
    coords: { lat: 27.5291, lng: 84.354 },
    tags: ["wildlife", "jungle", "family"],
  },
  {
    slug: "lumbini",
    name: "Lumbini",
    region: "Terai",
    district: "Rupandehi",
    altitude: "150 m",
    image: kathmanduImg,
    tagline: "The quiet garden where the Buddha was born",
    summary:
      "A UNESCO site of monasteries built by countries across the Buddhist world, arranged around the Maya Devi Temple and the Ashoka pillar. Cycle the monastic zone at sunrise.",
    highlights: [
      "Maya Devi Temple marker stone",
      "Ashoka pillar inscription",
      "Monastic zone cycle loop",
      "World Peace Pagoda",
    ],
    bestMonths: ["Nov", "Dec", "Jan", "Feb"],
    idealDays: 2,
    dailyBudgetUsd: 28,
    rating: 4.4,
    reviewCount: 386,
    coords: { lat: 27.4833, lng: 83.2767 },
    tags: ["pilgrimage", "heritage", "quiet"],
  },
  {
    slug: "bhaktapur",
    name: "Bhaktapur",
    region: "Kathmandu Valley",
    district: "Bhaktapur",
    altitude: "1,401 m",
    image: kathmanduImg,
    tagline: "A medieval Newar town that never fully modernised",
    summary:
      "Car-free squares of carved wood and warm brick, potters drying clay in the sun, and the best juju dhau curd in Nepal. Stay overnight to see it after the day-trippers leave.",
    highlights: [
      "Nyatapola Temple five tiers",
      "Pottery Square at golden hour",
      "Peacock Window in Dattatreya",
      "Juju dhau king curd",
    ],
    bestMonths: ["Oct", "Nov", "Mar", "Apr"],
    idealDays: 2,
    dailyBudgetUsd: 30,
    rating: 4.8,
    reviewCount: 921,
    coords: { lat: 27.671, lng: 85.4298 },
    tags: ["heritage", "crafts", "photography"],
  },
  {
    slug: "upper-mustang",
    name: "Upper Mustang",
    region: "Himalaya",
    district: "Mustang",
    altitude: "3,840 m",
    image: heroHimalaya,
    tagline: "The walled kingdom beyond the rain shadow",
    summary:
      "Restricted-permit territory of ochre cliffs, sky caves and the walled city of Lo Manthang. Trekkable through the monsoon because the Himalaya blocks the rain.",
    highlights: [
      "Lo Manthang walled city",
      "Chhoser sky caves",
      "Tiji festival in spring",
      "Kali Gandaki gorge road",
    ],
    bestMonths: ["May", "Jun", "Jul", "Sep"],
    idealDays: 12,
    dailyBudgetUsd: 95,
    rating: 4.9,
    reviewCount: 214,
    coords: { lat: 29.1833, lng: 83.9667 },
    tags: ["trek", "remote", "culture", "permit"],
  },
];

export type HiddenGem = {
  slug: string;
  name: string;
  near: string;
  why: string;
  crowdLevel: "Barely visited" | "Quiet" | "Locals only";
  bestTime: string;
  gettingThere: string;
};

export const hiddenGems: HiddenGem[] = [
  {
    slug: "tsum-valley",
    name: "Tsum Valley",
    near: "Gorkha, Manaslu region",
    why: "A sacred valley where hunting has been banned for generations; wildlife is unusually calm and the Mu Gompa sits at the head of the valley.",
    crowdLevel: "Barely visited",
    bestTime: "March to May",
    gettingThere: "Jeep to Soti Khola, then 7 days walking via Philim.",
  },
  {
    slug: "khaptad",
    name: "Khaptad National Park",
    near: "Far-West Nepal",
    why: "Rolling alpine meadows more like a highland moor than the Himalaya, with the ashram of Khaptad Baba at its centre.",
    crowdLevel: "Locals only",
    bestTime: "April to June",
    gettingThere: "Flight to Dhangadhi, road to Silgadhi, two-day walk in.",
  },
  {
    slug: "panauti",
    name: "Panauti",
    near: "45 km from Kathmandu",
    why: "A perfectly preserved Newar town at a river confluence, with community homestays run by local women's cooperatives.",
    crowdLevel: "Quiet",
    bestTime: "October to March",
    gettingThere: "Bus from Ratna Park, about two hours.",
  },
  {
    slug: "rara-lake",
    name: "Rara Lake",
    near: "Mugu, Karnali",
    why: "Nepal's largest lake, deep blue and ringed by blue pine at 2,990 m, with almost no infrastructure around it.",
    crowdLevel: "Barely visited",
    bestTime: "September to November",
    gettingThere: "Flight Nepalgunj to Talcha, then a 3-hour walk.",
  },
  {
    slug: "bandipur",
    name: "Bandipur",
    near: "Between Kathmandu and Pokhara",
    why: "A Newar trading town on a ridge with a car-free main street and a clean Himalayan horizon from Tundikhel.",
    crowdLevel: "Quiet",
    bestTime: "October to April",
    gettingThere: "Get off at Dumre on the Prithvi Highway, 8 km uphill.",
  },
  {
    slug: "ilam",
    name: "Ilam",
    near: "Eastern Nepal",
    why: "Terraced tea gardens, mist and the Kanyam ridge — Nepal's Darjeeling without the crowds or the price.",
    crowdLevel: "Locals only",
    bestTime: "March to May",
    gettingThere: "Flight to Bhadrapur, then 3 hours by road.",
  },
];

export type Experience = {
  slug: string;
  name: string;
  place: string;
  category: "Adventure" | "Culture" | "Wellness" | "Nature" | "Food";
  duration: string;
  priceUsd: number;
  intensity: "Easy" | "Moderate" | "Demanding";
  description: string;
};

export const experiences: Experience[] = [
  {
    slug: "sarangkot-paragliding",
    name: "Paraglide from Sarangkot",
    place: "Pokhara",
    category: "Adventure",
    duration: "30–45 min flight",
    priceUsd: 85,
    intensity: "Easy",
    description:
      "Tandem launch from a 1,592 m ridge with Himalayan vultures thermalling alongside you, landing beside Phewa Lake.",
  },
  {
    slug: "trishuli-rafting",
    name: "Trishuli River rafting",
    place: "Trishuli, Dhading",
    category: "Adventure",
    duration: "Half day",
    priceUsd: 40,
    intensity: "Moderate",
    description: "Class III rapids on the highway river — the easiest rafting day to add between Kathmandu and Pokhara.",
  },
  {
    slug: "newar-cooking",
    name: "Newari cooking class",
    place: "Patan",
    category: "Food",
    duration: "4 hours",
    priceUsd: 32,
    intensity: "Easy",
    description: "Market shopping in Mangal Bazaar, then cooking chatamari, bara and yomari with a Newar family.",
  },
  {
    slug: "kopan-meditation",
    name: "Kopan Monastery retreat",
    place: "Kathmandu",
    category: "Wellness",
    duration: "3–10 days",
    priceUsd: 25,
    intensity: "Easy",
    description: "Structured meditation and Buddhist philosophy above the valley, with dorm accommodation and simple meals.",
  },
  {
    slug: "chitwan-canoe",
    name: "Dawn canoe and jungle walk",
    place: "Chitwan",
    category: "Nature",
    duration: "Half day",
    priceUsd: 35,
    intensity: "Moderate",
    description: "Dugout canoe on the Rapti at first light, then a naturalist-led walk through sal forest and elephant grass.",
  },
  {
    slug: "everest-flight",
    name: "Mountain flight past Everest",
    place: "Kathmandu",
    category: "Adventure",
    duration: "1 hour",
    priceUsd: 210,
    intensity: "Easy",
    description: "Early-morning fixed-wing flight along the Himalayan wall with a guaranteed window seat.",
  },
  {
    slug: "bhaktapur-pottery",
    name: "Pottery wheel session",
    place: "Bhaktapur",
    category: "Culture",
    duration: "2 hours",
    priceUsd: 18,
    intensity: "Easy",
    description: "Learn the kick-wheel from a Prajapati family potter in Talako Square and fire a small piece to take home.",
  },
  {
    slug: "poon-hill",
    name: "Poon Hill short trek",
    place: "Ghandruk, Annapurna",
    category: "Nature",
    duration: "4 days",
    priceUsd: 260,
    intensity: "Moderate",
    description: "Stone staircases through Gurung villages and rhododendron forest to a 3,210 m sunrise viewpoint.",
  },
];

export type Stay = {
  slug: string;
  name: string;
  place: string;
  type: "Teahouse" | "Boutique" | "Homestay" | "Heritage" | "Eco-lodge";
  priceUsd: number;
  rating: number;
  perks: string[];
};

export const stays: Stay[] = [
  {
    slug: "dwarikas",
    name: "Dwarika's Hotel",
    place: "Kathmandu",
    type: "Heritage",
    priceUsd: 290,
    rating: 4.9,
    perks: ["Rescued Newar woodwork", "Courtyard pool", "Himalayan spa"],
  },
  {
    slug: "peace-eye-lodge",
    name: "Peace Eye Lodge",
    place: "Namche Bazaar",
    type: "Teahouse",
    priceUsd: 22,
    rating: 4.5,
    perks: ["Yak-dung stove lounge", "Hot shower", "Everest-facing rooms"],
  },
  {
    slug: "temple-tree",
    name: "Temple Tree Resort",
    place: "Pokhara Lakeside",
    type: "Boutique",
    priceUsd: 95,
    rating: 4.7,
    perks: ["Garden pool", "5 min to the lake", "Free bicycles"],
  },
  {
    slug: "panauti-homestay",
    name: "Panauti Community Homestay",
    place: "Panauti",
    type: "Homestay",
    priceUsd: 26,
    rating: 4.8,
    perks: ["Women-run cooperative", "Home-cooked dal bhat", "Village walk included"],
  },
  {
    slug: "barahi-jungle",
    name: "Barahi Jungle Lodge",
    place: "Chitwan",
    type: "Eco-lodge",
    priceUsd: 180,
    rating: 4.7,
    perks: ["Riverfront deck", "Naturalist guides", "All meals included"],
  },
  {
    slug: "lo-manthang-guesthouse",
    name: "Royal Mustang Guesthouse",
    place: "Lo Manthang",
    type: "Teahouse",
    priceUsd: 30,
    rating: 4.3,
    perks: ["Inside the city walls", "Solar heating", "Butter tea on arrival"],
  },
];

export type Dish = {
  name: string;
  origin: string;
  vegetarian: boolean;
  priceNpr: string;
  description: string;
};

export const dishes: Dish[] = [
  {
    name: "Dal bhat tarkari",
    origin: "Nationwide",
    vegetarian: true,
    priceNpr: "NPR 250–600",
    description: "Rice, lentil soup, seasonal vegetables and pickle. Refills are usually free — the fuel of every trek.",
  },
  {
    name: "Momo",
    origin: "Kathmandu / Tibetan",
    vegetarian: false,
    priceNpr: "NPR 150–350",
    description: "Steamed or fried dumplings with buffalo, chicken or vegetable filling, served with sesame-tomato achar.",
  },
  {
    name: "Newari khaja set",
    origin: "Kathmandu Valley",
    vegetarian: false,
    priceNpr: "NPR 400–900",
    description: "Beaten rice with choila, bara, soybeans and spiced potato — best with a glass of local aila.",
  },
  {
    name: "Thukpa",
    origin: "Himalayan north",
    vegetarian: false,
    priceNpr: "NPR 250–450",
    description: "Hand-pulled noodle soup with vegetables and broth; the standard warm-up meal at altitude.",
  },
  {
    name: "Sel roti",
    origin: "Nationwide",
    vegetarian: true,
    priceNpr: "NPR 30–80",
    description: "Ring-shaped rice-flour bread, crisp outside and soft inside, everywhere during Tihar.",
  },
  {
    name: "Juju dhau",
    origin: "Bhaktapur",
    vegetarian: true,
    priceNpr: "NPR 100–180",
    description: "The 'king of yoghurt' — buffalo-milk curd set in clay pots, thick enough to hold a spoon upright.",
  },
  {
    name: "Gundruk ko jhol",
    origin: "Hills",
    vegetarian: true,
    priceNpr: "NPR 120–250",
    description: "Sour fermented leafy-green soup, the taste most Nepalis abroad miss first.",
  },
  {
    name: "Yomari",
    origin: "Newar",
    vegetarian: true,
    priceNpr: "NPR 60–150",
    description: "Steamed rice-flour parcel filled with molasses and sesame, made for Yomari Punhi in December.",
  },
];

export type BudgetTier = {
  tier: "Shoestring" | "Comfortable" | "Premium";
  perDayUsd: number;
  stay: string;
  food: string;
  transport: string;
  activities: string;
};

export const budgetTiers: BudgetTier[] = [
  {
    tier: "Shoestring",
    perDayUsd: 25,
    stay: "Guesthouse or teahouse dorm, USD 6–12",
    food: "Dal bhat and street momo, USD 6",
    transport: "Local buses and shared jeeps, USD 4",
    activities: "Temple entries and self-guided walks, USD 5",
  },
  {
    tier: "Comfortable",
    perDayUsd: 65,
    stay: "Boutique 3-star or good lodge, USD 30",
    food: "Mixed local and café dining, USD 15",
    transport: "Tourist coach or private car share, USD 10",
    activities: "One paid activity most days, USD 10",
  },
  {
    tier: "Premium",
    perDayUsd: 210,
    stay: "Heritage hotel or luxury lodge, USD 130",
    food: "Hotel and fine dining, USD 35",
    transport: "Private vehicle with driver, USD 25",
    activities: "Flights, guides and permits, USD 20",
  },
];

export const budgetExtras = [
  { label: "Tourist visa on arrival (30 days)", usd: 50 },
  { label: "TIMS card for trekking", usd: 17 },
  { label: "Annapurna or Sagarmatha permit", usd: 23 },
  { label: "Domestic flight Kathmandu–Pokhara", usd: 120 },
  { label: "Licensed trekking guide per day", usd: 30 },
  { label: "Porter per day", usd: 20 },
];

export type RouteIdea = {
  slug: string;
  name: string;
  days: number;
  distanceKm: number;
  style: string;
  stops: { name: string; nights: number; note: string; coords: { lat: number; lng: number } }[];
};

export const routeIdeas: RouteIdea[] = [
  {
    slug: "classic-golden-triangle",
    name: "Golden Triangle: Kathmandu, Pokhara, Chitwan",
    days: 10,
    distanceKm: 520,
    style: "First visit, mixed culture and nature",
    stops: [
      { name: "Kathmandu", nights: 3, note: "Valley heritage and markets", coords: { lat: 27.7172, lng: 85.324 } },
      { name: "Pokhara", nights: 3, note: "Lake, sunrise, paragliding", coords: { lat: 28.2096, lng: 83.9856 } },
      { name: "Chitwan", nights: 2, note: "Wildlife and Tharu culture", coords: { lat: 27.5291, lng: 84.354 } },
      { name: "Bhaktapur", nights: 2, note: "Slow finish before flying out", coords: { lat: 27.671, lng: 85.4298 } },
    ],
  },
  {
    slug: "khumbu-classic",
    name: "Khumbu classic to Everest Base Camp",
    days: 16,
    distanceKm: 130,
    style: "High-altitude teahouse trek",
    stops: [
      { name: "Lukla", nights: 1, note: "Fly in, walk to Phakding", coords: { lat: 27.6869, lng: 86.7314 } },
      { name: "Namche Bazaar", nights: 3, note: "Acclimatisation days", coords: { lat: 27.8069, lng: 86.7139 } },
      { name: "Dingboche", nights: 2, note: "Second acclimatisation stop", coords: { lat: 27.8925, lng: 86.8306 } },
      { name: "Gorak Shep", nights: 2, note: "Base Camp and Kala Patthar", coords: { lat: 28.0026, lng: 86.8528 } },
    ],
  },
  {
    slug: "far-west-quiet",
    name: "Quiet west: Bandipur, Rara, Ilam",
    days: 14,
    distanceKm: 1150,
    style: "Off the tourist trail",
    stops: [
      { name: "Bandipur", nights: 2, note: "Ridge town warm-up", coords: { lat: 27.9333, lng: 84.4167 } },
      { name: "Rara Lake", nights: 4, note: "Karnali's blue heart", coords: { lat: 29.5167, lng: 82.0833 } },
      { name: "Ilam", nights: 3, note: "Tea gardens in the east", coords: { lat: 26.9094, lng: 87.9281 } },
    ],
  },
];

export type SeasonInfo = {
  season: string;
  months: string;
  feel: string;
  tempRange: string;
  rainfall: string;
  advice: string;
};

export const seasons: SeasonInfo[] = [
  {
    season: "Spring",
    months: "March – May",
    feel: "Rhododendron bloom, warm days, some haze",
    tempRange: "Kathmandu 18–28°C · Namche 2–12°C",
    rainfall: "Low, occasional afternoon storms",
    advice: "Best all-round trekking window. Book Everest and Annapurna lodges ahead.",
  },
  {
    season: "Monsoon",
    months: "June – August",
    feel: "Green, humid, leeches on hill trails",
    tempRange: "Kathmandu 21–30°C · Terai 26–35°C",
    rainfall: "Heavy, 250–350 mm per month",
    advice: "Go north to Mustang and Dolpo, which sit in the rain shadow. Expect flight delays.",
  },
  {
    season: "Autumn",
    months: "September – November",
    feel: "Clearest skies of the year, festival season",
    tempRange: "Kathmandu 15–27°C · Namche 0–10°C",
    rainfall: "Very low after mid-September",
    advice: "Peak season. Dashain and Tihar fill buses and hotels — reserve everything early.",
  },
  {
    season: "Winter",
    months: "December – February",
    feel: "Cold, crisp, empty trails at lower altitude",
    tempRange: "Kathmandu 2–19°C · Namche -8–6°C",
    rainfall: "Minimal, snow above 3,000 m",
    advice: "Great for Chitwan, Lumbini and Poon Hill. High passes may be closed by snow.",
  },
];

export type Phrase = { nepali: string; roman: string; english: string; context: string };

export const phrases: Phrase[] = [
  { nepali: "नमस्ते", roman: "Namaste", english: "Hello / greetings", context: "Greeting" },
  { nepali: "धन्यवाद", roman: "Dhanyabad", english: "Thank you", context: "Courtesy" },
  { nepali: "कति हो?", roman: "Kati ho?", english: "How much is it?", context: "Shopping" },
  { nepali: "महँगो भयो", roman: "Mahango bhayo", english: "That is expensive", context: "Bargaining" },
  { nepali: "पानी कहाँ छ?", roman: "Pani kaha cha?", english: "Where is water?", context: "Trail" },
  { nepali: "मलाई मासु चाहिँदैन", roman: "Malai masu chahidaina", english: "I don't want meat", context: "Food" },
  { nepali: "बाटो कता जान्छ?", roman: "Bato kata jancha?", english: "Where does this trail go?", context: "Trail" },
  { nepali: "मिठो छ", roman: "Mitho cha", english: "It's delicious", context: "Food" },
  { nepali: "सञ्चै हुनुहुन्छ?", roman: "Sanchai hunuhuncha?", english: "Are you well?", context: "Greeting" },
  { nepali: "अलिकति", roman: "Alikati", english: "A little bit", context: "General" },
  { nepali: "मद्दत गर्नुहोस्", roman: "Maddat garnuhos", english: "Please help", context: "Emergency" },
  { nepali: "अस्पताल कहाँ छ?", roman: "Aspatal kaha cha?", english: "Where is the hospital?", context: "Emergency" },
];

export type ChecklistItem = { id: string; label: string; group: string; note?: string };

export const checklist: ChecklistItem[] = [
  { id: "visa", label: "Passport valid 6+ months and visa fee in cash USD", group: "Documents" },
  { id: "insurance", label: "Insurance covering helicopter evacuation to 6,000 m", group: "Documents", note: "Standard policies stop at 2,500 m." },
  { id: "permits", label: "TIMS card and area permits arranged", group: "Documents" },
  { id: "copies", label: "Digital and paper copies of passport photos", group: "Documents" },
  { id: "boots", label: "Broken-in trekking boots", group: "Gear" },
  { id: "layers", label: "Down jacket, fleece and thermal base layers", group: "Gear" },
  { id: "sleeping", label: "Sleeping bag rated to -10°C for teahouses", group: "Gear" },
  { id: "poles", label: "Trekking poles and headlamp with spare batteries", group: "Gear" },
  { id: "powerbank", label: "Power bank — charging costs NPR 200–500 per device up high", group: "Gear" },
  { id: "diamox", label: "Altitude medication discussed with your doctor", group: "Health" },
  { id: "purifier", label: "Water purification tablets or filter bottle", group: "Health" },
  { id: "firstaid", label: "Blister kit, rehydration salts and personal medicines", group: "Health" },
  { id: "sunscreen", label: "SPF 50, lip balm and glacier sunglasses", group: "Health" },
  { id: "cash", label: "Nepali rupees in small notes — ATMs stop above Namche", group: "Money" },
  { id: "esim", label: "Ncell or NTC SIM, or an eSIM activated on arrival", group: "Money" },
  { id: "flights", label: "Buffer day before international departure for flight delays", group: "Money" },
];

export type SafetyTip = { title: string; body: string; level: "Essential" | "Good to know" };

export const safetyTips: SafetyTip[] = [
  {
    title: "Ascend no more than 500 m sleeping altitude per day above 3,000 m",
    body: "Take a rest day every 1,000 m of gain. Headache with nausea, breathlessness at rest or loss of balance means descend immediately — not tomorrow.",
    level: "Essential",
  },
  {
    title: "Register your trek and carry emergency numbers",
    body: "Nepal Police 100, Ambulance 102, Tourist Police +977 1 4247041. Share your itinerary with your accommodation and someone at home.",
    level: "Essential",
  },
  {
    title: "Drink only treated water",
    body: "Refill stations exist in most trekking villages. Filter, boil or use tablets — bottled water creates plastic waste that has nowhere to go up there.",
    level: "Essential",
  },
  {
    title: "Road travel is the biggest real risk",
    body: "Prefer daytime departures, tourist coaches over local night buses, and avoid overloaded jeeps on monsoon-damaged hill roads.",
    level: "Essential",
  },
  {
    title: "Respect temple etiquette",
    body: "Remove shoes and leather, walk clockwise around stupas and chortens, and always ask before photographing people or rituals.",
    level: "Good to know",
  },
  {
    title: "Solo trekking rules changed",
    body: "Licensed guides are required on many national-park routes. Hire through a registered agency and confirm the guide's licence number.",
    level: "Good to know",
  },
  {
    title: "Earthquake and landslide awareness",
    body: "Know your building's exit, avoid steep cut slopes after heavy rain, and follow local advice during monsoon landslides.",
    level: "Good to know",
  },
];

export type GuideArticle = { slug: string; title: string; readMinutes: number; excerpt: string; body: string[] };

export const guideArticles: GuideArticle[] = [
  {
    slug: "first-72-hours",
    title: "Your first 72 hours in Nepal",
    readMinutes: 6,
    excerpt: "Landing at Tribhuvan, getting a SIM, changing money and not wasting day one on jet lag.",
    body: [
      "Visa on arrival is straightforward: fill the kiosk form, pay in cash (USD is smoothest), then queue for immigration. Have a passport photo as backup.",
      "Buy an Ncell or NTC SIM in the arrivals hall — you need a passport copy and one photo. Data is cheap and coverage reaches most trekking valleys.",
      "Change a small amount at the airport at a poor rate, then use licensed money changers in Thamel for the rest. Keep notes under NPR 1,000 for taxis and tea.",
      "Spend day one in the valley, not on a bus. Boudhanath in the late afternoon, an early dinner, and sleep. Start moving on day two.",
    ],
  },
  {
    slug: "choosing-a-trek",
    title: "How to choose the right trek",
    readMinutes: 8,
    excerpt: "Matching altitude, days and comfort level to the trek you'll actually enjoy.",
    body: [
      "Ask three questions: how many days do you truly have, how high are you willing to sleep, and how much comfort do you need at the end of the day.",
      "Under a week: Poon Hill, Mardi Himal or the Kathmandu Valley rim. Two weeks: Everest Base Camp, Manaslu or Langtang with side valleys.",
      "Anything crossing 5,000 m needs acclimatisation days built in. A trek that looks short on a map is long in thin air.",
      "Teahouse routes need no camping gear. Restricted areas like Upper Mustang and Dolpo need permits, a guide and often a minimum group size.",
    ],
  },
  {
    slug: "responsible-travel",
    title: "Travelling well in Nepal",
    readMinutes: 5,
    excerpt: "Where your money lands, what to carry out, and how to be a good guest.",
    body: [
      "Book through locally owned agencies and community homestays. A porter's fair daily wage, insurance and proper gear are not optional extras.",
      "Carry out every battery, wrapper and canister. Waste management above Namche is essentially you.",
      "Dress modestly at religious sites, ask before photographing, and learn a few Nepali phrases — it changes every interaction.",
      "Buy crafts directly from workshops in Patan, Bhaktapur and Thimi rather than airport stalls.",
    ],
  },
];

export const searchIndex = [
  ...destinations.map((d) => ({ type: "Destination", title: d.name, subtitle: d.region, to: `/destinations/${d.slug}`, keywords: d.tags.join(" ") })),
  ...hiddenGems.map((g) => ({ type: "Hidden gem", title: g.name, subtitle: g.near, to: "/hidden-gems", keywords: g.why })),
  ...experiences.map((e) => ({ type: "Experience", title: e.name, subtitle: e.place, to: "/experiences", keywords: e.category })),
  ...stays.map((s) => ({ type: "Stay", title: s.name, subtitle: s.place, to: "/stays", keywords: s.type })),
  ...dishes.map((d) => ({ type: "Food", title: d.name, subtitle: d.origin, to: "/food", keywords: d.description })),
  ...guideArticles.map((a) => ({ type: "Guide", title: a.title, subtitle: `${a.readMinutes} min read`, to: "/guide", keywords: a.excerpt })),
];

export const interests = [
  "Trekking",
  "Culture & heritage",
  "Wildlife",
  "Food",
  "Photography",
  "Spiritual",
  "Adventure sports",
  "Slow travel",
] as const;

export const pace = ["Relaxed", "Balanced", "Packed"] as const;

export type PlannerInput = {
  days: number;
  budget: "Shoestring" | "Comfortable" | "Premium";
  interests: string[];
  pace: (typeof pace)[number];
  month: string;
};

export type PlanDay = { day: number; place: string; title: string; detail: string };

export function buildItinerary(input: PlannerInput): { days: PlanDay[]; estimateUsd: number; notes: string[] } {
  const tier = budgetTiers.find((t) => t.tier === input.budget) ?? budgetTiers[1]!;
  const wantsTrek = input.interests.includes("Trekking") || input.interests.includes("Adventure sports");
  const wantsWildlife = input.interests.includes("Wildlife");
  const wantsCulture = input.interests.includes("Culture & heritage") || input.interests.includes("Spiritual");

  const blocks: PlanDay[] = [];
  const push = (place: string, title: string, detail: string) =>
    blocks.push({ day: blocks.length + 1, place, title, detail });

  push("Kathmandu", "Arrive and settle", "Airport transfer, SIM and money change, sunset at Boudhanath Stupa.");
  if (wantsCulture || input.days >= 5) {
    push("Kathmandu Valley", "Heritage day", "Patan Durbar Square in the morning, Swayambhunath in the afternoon.");
    push("Bhaktapur", "Medieval town", "Pottery Square, Nyatapola Temple and juju dhau, overnight in the old town.");
  }
  if (wantsTrek) {
    push("Pokhara", "Move west", "Scenic drive or short flight, lakeside evening and gear check.");
    push("Nayapul → Ghandruk", "Trek day 1", "Stone stairways through Gurung villages with Annapurna South ahead.");
    push("Ghorepani", "Trek day 2", "Rhododendron forest climb to the ridge lodges.");
    push("Poon Hill → Tadapani", "Sunrise summit", "Pre-dawn climb to 3,210 m, then descend into forest.");
    push("Pokhara", "Rest and reward", "Hot shower, lakeside dinner and a rowboat at dusk.");
  } else {
    push("Pokhara", "Lake days", "Sarangkot sunrise, Phewa Lake boat and the World Peace Pagoda walk.");
    push("Pokhara", "Choose your pace", "Paragliding, caves and Old Bazaar, or simply a slow café day.");
  }
  if (wantsWildlife || input.days >= 9) {
    push("Chitwan", "Into the Terai", "Drive south, evening riverside sunset and Tharu cultural show.");
    push("Chitwan", "Jungle morning", "Dawn canoe on the Rapti and a guided walk tracking rhino.");
  }
  push("Kathmandu", "Last bazaar day", "Craft shopping in Patan, farewell Newari khaja set, pack for the flight.");
  push("Kathmandu", "Departure", "Buffer morning for delays, then transfer to Tribhuvan International.");

  const paceFactor = input.pace === "Packed" ? 1 : input.pace === "Relaxed" ? 0.8 : 0.9;
  const trimmed = blocks.slice(0, Math.max(3, input.days)).map((b, i) => ({ ...b, day: i + 1 }));

  const notes = [
    `Planned around ${input.month}, ${seasons.find((s) => s.months.includes(input.month.slice(0, 3)))?.advice ?? "check regional conditions before you book."}`,
    `${input.pace} pace: ${input.pace === "Packed" ? "expect early starts most days" : input.pace === "Relaxed" ? "two nights minimum in each base" : "one flexible buffer day built in"}.`,
    `${tier.tier} budget: ${tier.stay.toLowerCase()}, ${tier.food.toLowerCase()}.`,
  ];

  return {
    days: trimmed,
    estimateUsd: Math.round(trimmed.length * tier.perDayUsd * paceFactor + 90),
    notes,
  };
}

export const stats = [
  { value: "8", label: "of the world's 14 highest peaks" },
  { value: "10", label: "UNESCO World Heritage sites" },
  { value: "123", label: "languages spoken across the country" },
  { value: "6,000+", label: "rivers cutting through the hills" },
];
