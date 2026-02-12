// Plain data only (no React / JSX)
// iconName must match a key in src/utils/iconMap.jsx

export const tourData = {
  waterfall: {
    key: "waterfall",
    title: "Waterfall Wonders Safari",
    subtitle: "Chase the cascading beauty of Sri Lanka’s most scenic waterfalls.",
    iconName: "Droplets",
    accent: "skyBlue",

    keyStops: [
      "Bambarakanda",
      "Pahanthudawa Falls",
      "Surathali Falls",
      "Upper Bambarakanda",
      "Duwili Ella",
      "Nonpareil",
      "Walawal Thuna",
    ],

    idealFor: ["Photographers", "Romantic Getaways", "Nature Lovers"],
    durationOptions: ["Full Day", "Half Day"],
    addons: ["River bath"],
    includes: ["Safari jeep", "River lunch (BBQ)", "Local snacks and fruits basket"],

    ratesUSD: {
      columns: ["# of Pax", "Full Day (Per Person)", "Half Day (Per Person)"],
      rows: [
        { pax: 2, fullDay: 70, halfDay: 50 },
        { pax: 3, fullDay: 60, halfDay: 40 },
        { pax: 4, fullDay: 50, halfDay: 30 },
      ],
      currency: "USD",
    },

    packages: [
      {
        id: "waterfall-full-or-half",
        name: "Waterfall Wonders Safari",
        duration: "Full Day / Half Day Options",
        people: "2–8 (custom on request)",
        highlights: [
          "Bambarakanda",
          "Pahanthudawa Falls",
          "Surathali Falls",
          "Upper Bambarakanda",
          "Duwili Ella",
          "Nonpareil",
          "Walawal Thuna",
        ],
        includes: ["Safari jeep", "River lunch (BBQ)", "Local snacks & fruits basket"],
        addOns: ["River bath"],
        priceFrom: "Per-person rates available (USD)",
      },
    ],
  },

  peaks: {
    key: "peaks",
    title: "Scenic Peaks & Viewpoints Tour",
    subtitle: "Breathe in panoramic views and cool mountain air across Uva’s hilltops.",
    iconName: "Mountain",
    accent: "forestGreen",

    keyStops: [
      "Baker’s Bend",
      "Haputale Main View",
      "Wangedigala",
      "Lipton’s Seat",
      "Weliwanguwa",
      "Nagrak Viewpoint",
    ],

    idealFor: ["Calm Explorers", "Families", "Landscape Seekers"],
    durationOptions: ["Full Day", "Half Day"],
    addons: ["Sunrise Ride", "Drone Photography", "Tea Factory Visit", "Snacks at Viewpoint"],
    includes: ["Safari jeep / transport (as arranged)", "Guide support"],

    ratesUSD: {
      columns: ["# of Pax", "Full Day (Per Person)", "Half Day (Per Person)"],
      rows: [
        { pax: 2, fullDay: 70, halfDay: 50 },
        { pax: 3, fullDay: 60, halfDay: 40 },
        { pax: 4, fullDay: 50, halfDay: 30 },
      ],
      currency: "USD",
    },

    packages: [
      {
        id: "peaks-full-or-half",
        name: "Scenic Peaks & Viewpoints",
        duration: "Full Day / Half Day Options",
        people: "2–8",
        highlights: [
          "Baker’s Bend sunrise option",
          "Lipton’s Seat",
          "Haputale Main View",
          "Weliwanguwa ridge",
          "Wangedigala area viewpoints",
        ],
        includes: ["Transport", "Guide support"],
        addOns: ["Sunrise Ride", "Drone Photography", "Tea Factory Visit", "Snacks at Viewpoint"],
        priceFrom: "Per-person rates available (USD)",
      },
    ],
  },

  trek: {
    key: "trek",
    title: "Trek & Trail Adventure",
    subtitle: "For the hikers, climbers, and thrill-lovers. Off-road meets on-foot!",
    iconName: "Footprints",
    accent: "premiumGold",

    keyStops: ["Devils’s Staircase", "Belihuloya to Nonpareil Trail", "Wangedigala Trek", "Kuragala Pilgrim Path"],

    idealFor: ["Fitness Groups", "Trekking Clubs", "Adventure Tourists"],
    durationOptions: ["Full Day", "Multi-day"],
    addons: ["Hydration Packs", "Guided Hike", "Camping"],
    includes: ["Guide support (as arranged)", "Safety-first planning"],

    ratesUSD: {
      columns: ["# of Pax", "Full Day (Per Person)"],
      rows: [
        { pax: 2, fullDay: 100 },
        { pax: 3, fullDay: 90 },
        { pax: 4, fullDay: 80 },
      ],
      currency: "USD",
    },

    packages: [
      {
        id: "trek-full-or-multi",
        name: "Trek & Trail Adventure",
        duration: "Full Day / Multi-day",
        people: "2–8 (depends on trail)",
        highlights: ["Devil’s Staircase", "Wangedigala Trek", "Belihuloya–Nonpareil trail", "Kuragala pilgrim path"],
        includes: ["Guided hike option", "Route planning", "Safety guidance"],
        addOns: ["Hydration Packs", "Camping"],
        priceFrom: "Per-person rates available (USD)",
      },
    ],
  },

  history: {
    key: "history",
    title: "Sacred Rock & History Trail",
    subtitle: "Uncover spiritual sites and ancient stories of the hill country.",
    iconName: "Map",
    accent: "charcoalGray",

    keyStops: ["Adisham Bungalow", "Prehistoric Cave Sites", "Kuragala Monastery", "Hunugal Pokuna"],

    idealFor: ["Educational Groups", "Cultural Enthusiasts", "Pilgrim Tourists"],
    durationOptions: ["Half Day", "Full Day"],
    addons: ["Herbal Tea Stop", "Local Monk Session", "Folklore Storytelling"],
    includes: ["Cultural guidance (as arranged)"],

    ratesUSD: {
      columns: ["# of Pax", "Full Day (Per Person)", "Half Day (Per Person)"],
      rows: [
        { pax: 2, fullDay: 70, halfDay: 50 },
        { pax: 3, fullDay: 60, halfDay: 40 },
        { pax: 4, fullDay: 50, halfDay: 30 },
      ],
      currency: "USD",
    },

    packages: [
      {
        id: "history-half-or-full",
        name: "Sacred Rock & History Trail",
        duration: "Half Day / Full Day",
        people: "2–8",
        highlights: ["Kuragala Monastery", "Hunugal Pokuna", "Adisham Bungalow", "Prehistoric cave sites"],
        includes: ["Guide support", "Respectful cultural guidance"],
        addOns: ["Herbal Tea Stop", "Local Monk Session", "Folklore Storytelling"],
        priceFrom: "Per-person rates available (USD)",
      },
    ],
  },

  twilight: {
    key: "twilight",
    title: "Twilight Safari + Campfire Night",
    subtitle: "Night drive, stars above, and a campfire meal beneath the trees.",
    iconName: "Moon",
    accent: "skyBlue",

    keyStops: ["Devil’s River (optional)", "Pambahinna Forest Patch", "Local Wildlife Trail"],
    idealFor: ["Couples", "Friends Groups", "Wild Experience Seekers"],
    durationOptions: ["6:30 PM – 10:30 PM"],
    addons: ["Tents", "Skywatching", "BBQ Dinner", "Music Sessions"],
    includes: ["Guide support (as arranged)"],

    ratesUSD: {
      columns: ["# of Pax", "Rate (Per Person)"],
      rows: [
        { pax: 2, fullDay: 100 },
        { pax: 3, fullDay: 90 },
        { pax: 4, fullDay: 80 },
      ],
      currency: "USD",
    },

    packages: [
      {
        id: "twilight-night",
        name: "Twilight Safari + Campfire Night",
        duration: "6:30 PM – 10:30 PM",
        people: "2–8",
        highlights: ["Night drive", "Forest patch", "Wildlife trail", "Campfire meal option"],
        includes: ["Guided experience"],
        addOns: ["Tents", "Skywatching", "BBQ Dinner", "Music Sessions"],
        priceFrom: "Per-person rates available (USD)",
      },
    ],
  },

  wildlife: {
    key: "wildlife",
    title: "Wildlife Explorer – Hadagiriya Safari Day Trip",
    subtitle: "Witness majestic elephants and wildlife in a national park setting.",
    iconName: "Compass",
    accent: "forestGreen",

    keyStops: ["Elephant Transit Home"],
    idealFor: ["Safari Lovers", "Families with Kids", "Wildlife Photographers"],
    durationOptions: ["Full Day (6:00 AM – 6:00 PM)"],
    addons: ["Binoculars", "Lunch stop", "Local fruit basket"],
    includes: ["Safari planning + coordination"],

    ratesUSD: {
      columns: ["# of Pax", "Full Day (Per Person)"],
      rows: [
        { pax: 2, fullDay: 150 },
        { pax: 3, fullDay: 125 },
        { pax: 4, fullDay: 100 },
      ],
      currency: "USD",
    },

    packages: [
      {
        id: "hadagiriya-full-day",
        name: "Hadagiriya Safari Day Trip",
        duration: "6:00 AM – 6:00 PM",
        people: "2–6",
        highlights: ["Elephant Transit Home", "Safari sessions", "Reservoir viewpoint (if possible)"],
        includes: ["Safari coordination", "Support from guide/driver"],
        addOns: ["Binoculars", "Lunch stop", "Local fruit basket"],
        priceFrom: "Per-person rates available (USD)",
      },
    ],
  },

  ella: {
    key: "ella",
    title: "Ella Highlands Excursion",
    subtitle: "A day from Belihuloya to the chilled-out paradise of Ella.",
    iconName: "MapPinned",
    accent: "premiumGold",

    keyStops: ["Ravana Falls", "Nine Arches Bridge", "Café Stop", "Ella Rock", "Little Adam’s Peak"],
    idealFor: ["Instagrammers", "Backpackers", "Day-trippers"],
    durationOptions: ["Full Day (6:00 AM – 7:00 PM)"],
    addons: ["Smooth Bar Stop", "Yoga Class", "Photography"],
    includes: ["Transport (as arranged)"],

    ratesUSD: {
      columns: ["# of Pax", "Full Day (Per Person)"],
      rows: [
        { pax: 2, fullDay: 80 },
        { pax: 3, fullDay: 70 },
        { pax: 4, fullDay: 60 },
      ],
      currency: "USD",
    },

    packages: [
      {
        id: "ella-highlands-day",
        name: "Ella Highlands Day Trip",
        duration: "6:00 AM – 7:00 PM",
        people: "2–8",
        highlights: ["Ravana Falls", "Nine Arches Bridge", "Ella Rock / Little Adam’s Peak"],
        includes: ["Day transport"],
        addOns: ["Smooth Bar Stop", "Yoga Class", "Photography"],
        priceFrom: "Per-person rates available (USD)",
      },
    ],
  },

  // ... keep everything else as you already have

ecoHealing: {
  key: "ecoHealing",
  title: "Eco-Healing & Meditation Trail",
  subtitle: "Relax your body and reconnect with nature in silence and serenity.",
  iconName: "Leaf",
  accent: "skyBlue",

  keyStops: ["Kuragala Rock", "Hirikatuoya River", "Hunugal Pokuna", "Forest Garden Spot"],
  idealFor: ["Wellness Travelers", "Solo Explorers", "Spiritual Groups"],
  durationOptions: ["Half Day", "Full Day"],

  // ✅ Fix this:
  addons: ["Organic Lunch", "Herbal Foot Soak", "Forest Meditation"],

  includes: ["Wellness-friendly pacing"],

  ratesUSD: {
    columns: ["# of Pax", "Full Day (Per Person)", "Half Day (Per Person)"],
    rows: [
      { pax: 2, fullDay: 70, halfDay: 50 },
      { pax: 3, fullDay: 60, halfDay: 40 },
      { pax: 4, fullDay: 50, halfDay: 30 },
    ],
    currency: "USD",
  },

  packages: [
    {
      id: "eco-healing-half-or-full",
      name: "Eco-Healing & Meditation Trail",
      duration: "Half Day / Full Day",
      people: "2–8",
      highlights: ["River stillness", "Forest meditation", "Sacred rock views (optional)"],
      includes: ["Relaxed itinerary"],
      addOns: ["Organic Lunch", "Herbal Foot Soak", "Forest Meditation"],
      priceFrom: "Per-person rates available (USD)",
    },
  ],
},


  heritageTea: {
    key: "heritageTea",
    title: "Heritage Safari + Tea Country Ride",
    subtitle: "Travel through colonial history and tea trails of Sri Lanka’s hills.",
    iconName: "Landmark",
    accent: "forestGreen",

    keyStops: ["Dambetenna Tea Factory", "Rathmalgama Factory", "Adisham Bungalow", "Lipton’s Seat"],
    idealFor: ["Tea Enthusiasts", "Seniors", "History Buffs"],
    durationOptions: ["Full Day"],
    addons: ["Guide Lecture", "Old Photographs", "Tea Tasting"],
    includes: ["Tea-country route planning"],

    ratesUSD: {
      columns: ["# of Pax", "Full Day (Per Person)"],
      rows: [
        { pax: 2, fullDay: 80 },
        { pax: 3, fullDay: 70 },
        { pax: 4, fullDay: 60 },
      ],
      currency: "USD",
    },

    packages: [
      {
        id: "heritage-tea-full-day",
        name: "Heritage Safari + Tea Country Ride",
        duration: "Full Day",
        people: "2–8",
        highlights: ["Tea factories", "Colonial heritage", "Lipton’s Seat viewpoints"],
        includes: ["Guided experience (as arranged)"],
        addOns: ["Guide Lecture", "Old Photographs", "Tea Tasting"],
        priceFrom: "Per-person rates available (USD)",
      },
    ],
  },
};

export function getAllToursFlat() {
  const list = [];
  Object.values(tourData).forEach((cat) => {
    (cat.packages || []).forEach((pkg) => {
      list.push({
        ...pkg,
        categoryKey: cat.key,
        categoryTitle: cat.title,
        categorySubtitle: cat.subtitle,
        iconName: cat.iconName,
        accent: cat.accent,

        keyStops: cat.keyStops || [],
        idealFor: cat.idealFor || [],
        durationOptions: cat.durationOptions || [],
        categoryAddons: cat.addons || [],
        categoryIncludes: cat.includes || [],
        ratesUSD: cat.ratesUSD || null,
      });
    });
  });
  return list;
}

export function findTour(categoryKey, tourId) {
  const cat = tourData[categoryKey];
  if (!cat) return null;
  const pkg = (cat.packages || []).find((p) => p.id === tourId);
  if (!pkg) return null;

  return {
    ...pkg,
    categoryKey: cat.key,
    categoryTitle: cat.title,
    categorySubtitle: cat.subtitle,
    iconName: cat.iconName,
    accent: cat.accent,

    keyStops: cat.keyStops || [],
    idealFor: cat.idealFor || [],
    durationOptions: cat.durationOptions || [],
    categoryAddons: cat.addons || [],
    categoryIncludes: cat.includes || [],
    ratesUSD: cat.ratesUSD || null,
  };
}
