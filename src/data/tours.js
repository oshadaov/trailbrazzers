// Plain data only (no React / JSX) so it can later be moved to an API or CMS easily.
//
// The Experience is organized by elements (Brand Bible): Water, Earth, Light, Spirit.
// iconName must match a key in src/utils/iconMap.jsx

export const tourData = {
  water: {
    key: "water",
    title: "Water",
    subtitle: "Waterfall journeys, riverside stillness, and the medicine of mist.",
    iconName: "Droplets",
    accent: "skyBlue",
    packages: [
      {
        id: "classic-waterfall-safari",
        name: "Classic Waterfall Safari",
        duration: "Half-Day (5 hrs)",
        people: "Up to 8",
        highlights: ["Bakers Bend", "Non Pareil Waterfall", "Hirikatuoya River Falls"],
        includes: ["4x4 Jeep", "Local Guide", "River stop", "Mobile photos"],
        priceFrom: "Contact for rates",
        difficulty: "Easy",
        bestFor: ["Families", "Photography"],
      },
      {
        id: "misty-falls-explorer",
        name: "Misty Falls Explorer",
        duration: "Full Day (10 hrs)",
        people: "Up to 8",
        highlights: ["Surathali Falls", "Bambarakanda (Tallest)", "Upper Bambarakanda Trek", "Samanala Wewa"],
        includes: ["Off-road Jeep", "Nature Guide", "Entry tickets", "Lunch with locals"],
        priceFrom: "Contact for rates",
        difficulty: "Moderate",
        bestFor: ["Adventure", "Waterfalls"],
      },
      {
        id: "ultimate-7-falls-circuit",
        name: "Ultimate 7-Falls Circuit",
        duration: "Full Day Extended",
        people: "Up to 8",
        highlights: ["Kuragala", "Hunugal Pokuna", "Duwili Ella", "Samanala Wewa", "7 Falls Total"],
        includes: ["Modified 4x4 Jeep", "Two Guides", "Picnic lunch", "Printed group photo"],
        priceFrom: "Contact for rates",
        difficulty: "Moderate",
        bestFor: ["Adventure", "Nature"],
      },
      {
        id: "waterfalls-and-wellness",
        name: "Waterfalls + Wellness",
        duration: "10 hrs",
        people: "Up to 6",
        highlights: ["Horton Plains edge", "Devil's Staircase views", "Herbal stream bath", "Forest meditation"],
        includes: ["Jeep + Light trek", "Wellness guide", "Herbal foot soak kit", "Organic lunch"],
        priceFrom: "Contact for rates",
        difficulty: "Moderate",
        bestFor: ["Wellness", "Couples"],
      },
    ],
  },

  earth: {
    key: "earth",
    title: "Earth",
    subtitle: "Peaks, trails, and wild landscapes — guided with reverence and safety.",
    iconName: "Mountain",
    accent: "forestGreen",
    packages: [
      {
        id: "bakers-bend-sunrise",
        name: "Bakers Bend Sunrise",
        duration: "Half-Day (4 hrs)",
        people: "Up to 6",
        highlights: ["Golden hour at Bakers Bend", "Cliffside curve", "Light breakfast at viewpoint"],
        includes: ["Sunrise jeep ride", "Hot tea + snacks", "Warm seating mats"],
        priceFrom: "Contact for rates",
        difficulty: "Easy",
        bestFor: ["Sunrise", "Photography"],
      },
      {
        id: "wangedigala-hike-combo",
        name: "Wangedigala Hike Combo",
        duration: "7:00 AM – 3:30 PM",
        people: "Up to 6",
        highlights: ["4x4 to trailhead", "Guided hike to peak", "Misty forest ridge"],
        includes: ["Hiking guide", "Jeep", "Trekking poles", "Hydration guidance"],
        priceFrom: "Contact for rates",
        difficulty: "Moderate",
        bestFor: ["Hiking", "Nature"],
      },
      {
        id: "devils-staircase-epic",
        name: "Devil’s Staircase Epic",
        duration: "Full Day",
        people: "Up to 6",
        highlights: ["Extreme jeep sections", "Haputale ridge lines", "Cliff walks"],
        includes: ["Off-road driver", "Safety gear", "Photography stops", "Packed lunch"],
        priceFrom: "Contact for rates",
        difficulty: "Hard",
        bestFor: ["Adventure", "Off-road"],
      },
      {
        id: "full-day-wildlife",
        name: "Full-Day Wildlife",
        duration: "5:00 AM – 5:00 PM",
        people: "Up to 6",
        highlights: ["Two safari sessions", "Lunch break", "Sunset reservoir view"],
        includes: ["All permits", "Lunch & refreshments", "Binoculars"],
        priceFrom: "Contact for rates",
        difficulty: "Easy",
        bestFor: ["Wildlife", "Photography"],
      },
    ],
  },

  light: {
    key: "light",
    title: "Light",
    subtitle: "Dark-sky discovery — low-impact nights, high wonder.",
    iconName: "Sparkles",
    accent: "premiumGold",
    packages: [
      {
        id: "night-safari-and-bbq",
        name: "Night Safari + Fire Dinner",
        duration: "Evening (5 hrs)",
        people: "Up to 6",
        highlights: ["Night drive (low-glare lighting)", "Wildlife spotting", "Campfire dinner"],
        includes: ["Tracker", "Dinner by fire", "Lanterns & mats"],
        priceFrom: "Contact for rates",
        difficulty: "Easy",
        bestFor: ["Night", "Couples"],
      },
      {
        id: "starry-skies-guided",
        name: "Starry Skies — Guided Stargazing",
        duration: "6:00 PM – 11:00 PM",
        people: "Up to 8",
        highlights: ["Twilight ride", "Guided stargazing", "Quiet sky-time"],
        includes: ["Star map", "Warm drinks", "Finger foods"],
        priceFrom: "Contact for rates",
        difficulty: "Easy",
        bestFor: ["Stargazing", "Friends"],
      },
      {
        id: "overnight-camping",
        name: "Overnight Eco-Camping",
        duration: "Overnight",
        people: "Custom",
        highlights: ["Eco tents", "Dinner by fire", "Sunrise viewpoints"],
        includes: ["All gear (tents/pillows)", "Nightwatch security", "Breakfast"],
        priceFrom: "Contact for rates",
        difficulty: "Moderate",
        bestFor: ["Adventure", "Groups"],
      },
    ],
  },

  spirit: {
    key: "spirit",
    title: "Spirit",
    subtitle: "Sacred stones, living culture, and the quiet intelligence of place.",
    iconName: "Lotus",
    accent: "charcoalGray",
    packages: [
      {
        id: "kuragala-monastery-tour",
        name: "Kuragala Sacred Sites",
        duration: "Half-Day",
        people: "Up to 8",
        highlights: ["Buddhist caves", "Islamic heritage", "Sacred blend of faiths"],
        includes: ["Cultural interpreter", "Herbal tea", "Respectful dress guidance"],
        priceFrom: "Contact for rates",
        difficulty: "Easy",
        bestFor: ["Culture", "History"],
      },
      {
        id: "adisham-and-colonial-trail",
        name: "Adisham & Tea Heritage",
        duration: "Full Day",
        people: "Up to 6",
        highlights: ["Colonial bungalow", "Tea factory visit", "Hillside viewpoints"],
        includes: ["History guide", "Tea tasting", "Local lunch"],
        priceFrom: "Contact for rates",
        difficulty: "Easy",
        bestFor: ["Culture", "Tea"],
      },
      {
        id: "ancient-springs-trail",
        name: "Ancient Springs Trail",
        duration: "Half-Day",
        people: "Up to 6",
        highlights: ["Hunugal Pokuna", "Village folklore", "Stone ruins"],
        includes: ["Village guide", "Story card", "Rest stops"],
        priceFrom: "Contact for rates",
        difficulty: "Easy",
        bestFor: ["Culture", "Photography"],
      },
      {
        id: "eco-learning-kids",
        name: "Eco-Learning (Kids)",
        duration: "Full Day",
        people: "Up to 8",
        highlights: ["Animal checklist", "Conservation talk", "Hands-on learning"],
        includes: ["Worksheets", "Small gifts", "Sustainable farm lunch"],
        priceFrom: "Contact for rates",
        difficulty: "Easy",
        bestFor: ["Families", "Learning"],
      },
    ],
  },
};

export function getAllToursFlat() {
  const list = [];
  Object.values(tourData).forEach((cat) => {
    cat.packages.forEach((pkg) => {
      list.push({
        ...pkg,
        categoryKey: cat.key,
        categoryTitle: cat.title,
        categorySubtitle: cat.subtitle,
        iconName: cat.iconName,
        accent: cat.accent,
      });
    });
  });
  return list;
}

export function findTour(categoryKey, tourId) {
  const cat = tourData[categoryKey];
  if (!cat) return null;
  const pkg = cat.packages.find((p) => p.id === tourId);
  if (!pkg) return null;
  return { ...pkg, categoryKey: cat.key, categoryTitle: cat.title, categorySubtitle: cat.subtitle, iconName: cat.iconName, accent: cat.accent };
}
