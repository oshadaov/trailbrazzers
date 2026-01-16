// Plain data only (no React / JSX) so it can later be moved to an API or CMS easily.

/**
 * Category icons are mapped in UI (see: src/utils/iconMap.js)
 * iconName must match a key in that map.
 */
export const tourData = {
  waterfall: {
    key: "waterfall",
    title: "Waterfall Wonders Safari",
    subtitle: "Chase the falls, feel the mist, and explore nature’s rhythm.",
    iconName: "Droplets",
    packages: [
      {
        id: "classic-waterfall-safari",
        name: "Classic Waterfall Safari",
        duration: "Half-Day (5 hrs)",
        people: "Up to 8",
        highlights: ["Bakers Bend", "Non Pareil Waterfall", "Hirikatuoya River Falls"],
        includes: ["4x4 Jeep", "Local Guide", "River stop", "Free mobile photos"],
        priceFrom: "Contact for rates",
        difficulty: "Easy",
        bestFor: ["Families", "Photography"],
      },
      {
        id: "misty-falls-explorer",
        name: "Misty Falls Explorer",
        duration: "Full Day (10 hrs)",
        people: "Up to 8",
        highlights: [
          "Surathali Falls",
          "Bambarakanda (Tallest)",
          "Upper Bambarakanda Trek",
          "Samanala Wewa",
        ],
        includes: ["Off-road Jeep", "Nature Guide", "Entry tickets", "Lunch at local home"],
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
        includes: ["Modified 4x4 Jeep", "Two Guides", "Picnic Lunch", "Printed Group Photo"],
        priceFrom: "Contact for rates",
        difficulty: "Moderate",
        bestFor: ["Adventure", "Nature"],
      },
      {
        id: "waterfalls-and-wellness",
        name: "Waterfalls + Wellness",
        duration: "10 hrs",
        people: "Up to 6",
        highlights: ["Horton Plains", "Devil's Staircase", "Herbal Bath in Stream", "Forest Meditation"],
        includes: ["Jeep + Light Trek", "Wellness Guide", "Herbal Foot Soak Kit", "Organic Lunch"],
        priceFrom: "Contact for rates",
        difficulty: "Moderate",
        bestFor: ["Wellness", "Couples"],
      },
    ],
  },

  peaks: {
    key: "peaks",
    title: "Scenic Peaks & Viewpoints",
    subtitle: "Above the clouds, beyond the noise — see Sri Lanka’s soul.",
    iconName: "Mountain",
    packages: [
      {
        id: "bakers-bend-sunrise",
        name: "Bakers Bend Sunrise",
        duration: "Half-Day (4 hrs)",
        people: "Up to 6",
        highlights: ["Golden Hour at Bakers Bend", "Cliffside Curve", "Light Breakfast at Viewpoint"],
        includes: ["Sunrise Jeep Ride", "Hot Tea + Snacks", "Warm Seating Mats"],
        priceFrom: "Contact for rates",
        difficulty: "Easy",
        bestFor: ["Sunrise", "Photography"],
      },
      {
        id: "peaks-of-uva-explorer",
        name: "Peaks of Uva Explorer",
        duration: "Full Day",
        people: "Up to 8",
        highlights: ["Lipton’s Seat", "Haputale Main View", "Adisham Bungalow"],
        includes: ["Full-day Jeep", "Entry Permits", "Packed Lunch", "Nature Trail"],
        priceFrom: "Contact for rates",
        difficulty: "Easy",
        bestFor: ["Viewpoints", "Culture"],
      },
      {
        id: "wangedigala-hike-combo",
        name: "Wangedigala Hike Combo",
        duration: "7:00 AM – 3:30 PM",
        people: "Up to 6",
        highlights: ["4x4 Ride to Trailhead", "Guided Hike to Peak", "Misty Forest Ridge"],
        includes: ["Hiking Guide", "Jeep", "Trekking Poles", "Hydration Pack"],
        priceFrom: "Contact for rates",
        difficulty: "Moderate",
        bestFor: ["Hiking", "Nature"],
      },
      {
        id: "sunset-and-serenity-peak",
        name: "Sunset + Serenity Peak",
        duration: "Evening (4 hrs)",
        people: "Up to 6",
        highlights: ["Weliwanguwa Ridge Sunset", "Forest Guide Session", "Storytelling"],
        includes: ["Evening Jeep Ride", "Blankets + Lanterns", "Organic Juice"],
        priceFrom: "Contact for rates",
        difficulty: "Easy",
        bestFor: ["Sunset", "Couples"],
      },
    ],
  },

  trek: {
    key: "trek",
    title: "Trek & Trail Adventure",
    subtitle: "Off-road wheels meet mountain feet for wild-hearted wanderers.",
    iconName: "Footprints",
    packages: [
      {
        id: "devils-staircase-epic",
        name: "Devil’s Staircase Epic",
        duration: "Full Day",
        people: "Up to 6",
        highlights: ["Extreme Jeep Ride", "Haputale to Weliwanguwa", "Cliff Hikes"],
        includes: ["Off-road Driver", "Safety Gear", "Professional Photos", "Packed Lunch"],
        priceFrom: "Contact for rates",
        difficulty: "Hard",
        bestFor: ["Adventure", "Off-road"],
      },
      {
        id: "wangedigala-sunrise-trek",
        name: "Wangedigala Sunrise Trek",
        duration: "4:30 AM – 11:00 AM",
        people: "Up to 6",
        highlights: ["Pre-dawn Start", "Sunrise at Peak", "Viewing Ledges"],
        includes: ["Headlamps", "Walking Sticks", "Breakfast Pack", "Trekking Guide"],
        priceFrom: "Contact for rates",
        difficulty: "Moderate",
        bestFor: ["Sunrise", "Hiking"],
      },
      {
        id: "duwili-ella-jungle-trek",
        name: "Duwili Ella Jungle Trek",
        duration: "7:00 AM – 2:00 PM",
        people: "Up to 8",
        highlights: ["Jeep to Jungle Edge", "Guided Trail to Fall", "Misty Plunge Pool"],
        includes: ["Nature Trail Guide", "Local Fruit + Snacks", "Towels"],
        priceFrom: "Contact for rates",
        difficulty: "Moderate",
        bestFor: ["Waterfalls", "Nature"],
      },
      {
        id: "belihuloya-forest-sampler",
        name: "Belihuloya Forest Sampler",
        duration: "3-4 Hours",
        people: "Up to 6",
        highlights: ["Hirikatuoya River Trail", "Mini Jungle Loop", "Birdwatching"],
        includes: ["Short Jeep Transfer", "Activity Pack (Sketching)", "Refreshments"],
        priceFrom: "Contact for rates",
        difficulty: "Easy",
        bestFor: ["Families", "Birding"],
      },
    ],
  },

  history: {
    key: "history",
    title: "Sacred Rock & History",
    subtitle: "Where ancient stories echo through misty hills and sacred stones.",
    iconName: "Map",
    packages: [
      {
        id: "kuragala-monastery-tour",
        name: "Kuragala Monastery Tour",
        duration: "Half-Day",
        people: "Up to 8",
        highlights: ["Buddhist Caves", "Islamic Sites", "Sacred Blend of Faiths"],
        includes: ["Spiritual Heritage Guide", "Herbal Tea", "Info Leaflet"],
        priceFrom: "Contact for rates",
        difficulty: "Easy",
        bestFor: ["Culture", "History"],
      },
      {
        id: "adisham-and-colonial-trail",
        name: "Adisham & Colonial Trail",
        duration: "Full Day",
        people: "Up to 6",
        highlights: ["British-Era Estate", "Tea Factory Tour", "Planter's Home Lunch"],
        includes: ["History Guide", "Tea Tasting", "Gift: Tea Pack"],
        priceFrom: "Contact for rates",
        difficulty: "Easy",
        bestFor: ["Culture", "Tea"],
      },
      {
        id: "ancient-springs-trail",
        name: "Ancient Springs Trail",
        duration: "Half-Day",
        people: "Up to 6",
        highlights: ["Hunugal Pokuna", "Village Folklore", "Stone Stupa Ruins"],
        includes: ["Village Guide", "Illustrated Story Card", "Bamboo Seating"],
        priceFrom: "Contact for rates",
        difficulty: "Easy",
        bestFor: ["Culture", "Photography"],
      },
      {
        id: "prehistoric-cave-trail",
        name: "Prehistoric Cave Trail",
        duration: "Full Day",
        people: "Up to 6",
        highlights: ["Fa Hien / Batadombalena Caves", "Balangoda Culture", "Forest Lunch"],
        includes: ["Cultural Interpreter", "Entry Tickets", "Fossil Activity for Kids"],
        priceFrom: "Contact for rates",
        difficulty: "Moderate",
        bestFor: ["Culture", "Families"],
      },
    ],
  },

  twilight: {
    key: "twilight",
    title: "Twilight & Night Safari",
    subtitle: "As the sun sets, the wild awakens.",
    iconName: "Moon",
    packages: [
      {
        id: "night-safari-and-bbq",
        name: "Night Safari + BBQ",
        duration: "Evening (5 hrs)",
        people: "Up to 6",
        highlights: ["Night Drive (Spotlights)", "Wildlife Spotting", "Campfire Dinner"],
        includes: ["Tracker", "Full BBQ Dinner", "Lanterns & Mats"],
        priceFrom: "Contact for rates",
        difficulty: "Easy",
        bestFor: ["Night", "Couples"],
      },
      {
        id: "starry-skies-acoustic",
        name: "Starry Skies Acoustic",
        duration: "6:00 PM – 11:00 PM",
        people: "Up to 8",
        highlights: ["Twilight Ride", "Live Acoustic Music", "Stargazing"],
        includes: ["Musician", "Star Map", "Finger Foods"],
        priceFrom: "Contact for rates",
        difficulty: "Easy",
        bestFor: ["Stargazing", "Friends"],
      },
      {
        id: "overnight-camping",
        name: "Overnight Camping",
        duration: "Overnight",
        people: "Custom",
        highlights: ["Sleep in Eco-Tents", "Dinner by Fire", "Sunrise Views"],
        includes: ["All Gear (Tents/Pillows)", "Nightwatch Security", "Breakfast"],
        priceFrom: "Contact for rates",
        difficulty: "Moderate",
        bestFor: ["Adventure", "Groups"],
      },
    ],
  },

  wildlife: {
    key: "wildlife",
    title: "Wildlife Explorer",
    subtitle: "Get up close with the giants of the wild.",
    iconName: "Compass",
    packages: [
      {
        id: "hadagiriya-morning",
        name: "Hadagiriya Morning",
        duration: "Morning (7 hrs)",
        people: "Up to 6",
        highlights: ["Hadagiriya Park", "Elephant Herds", "Optional Transit Home"],
        includes: ["Private Transport", "Park Jeep", "Breakfast Pack"],
        priceFrom: "Contact for rates",
        difficulty: "Easy",
        bestFor: ["Wildlife", "Families"],
      },
      {
        id: "full-day-wildlife",
        name: "Full-Day Wildlife",
        duration: "5:00 AM – 5:00 PM",
        people: "Up to 6",
        highlights: ["Two Safari Sessions", "Lunch Break", "Sunset Reservoir View"],
        includes: ["All Permits", "Lunch & Refreshments", "Binoculars"],
        priceFrom: "Contact for rates",
        difficulty: "Easy",
        bestFor: ["Wildlife", "Photography"],
      },
      {
        id: "eco-learning-kids",
        name: "Eco-Learning (Kids)",
        duration: "Full Day",
        people: "Up to 8",
        highlights: ["Custom Animal Checklist", "Conservation Talk", "Transit Home"],
        includes: ["Educational Worksheets", "Gifts for Kids", "Sustainable Farm Lunch"],
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
      list.push({ ...pkg, categoryKey: cat.key, categoryTitle: cat.title, categorySubtitle: cat.subtitle, iconName: cat.iconName });
    });
  });
  return list;
}

export function findTour(categoryKey, tourId) {
  const cat = tourData[categoryKey];
  if (!cat) return null;
  const pkg = cat.packages.find((p) => p.id === tourId);
  if (!pkg) return null;
  return { ...pkg, categoryKey: cat.key, categoryTitle: cat.title, categorySubtitle: cat.subtitle, iconName: cat.iconName };
}
