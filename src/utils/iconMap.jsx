import {
  Map,
  Mountain,
  Droplets,
  Moon,
  Sparkles,
  Compass,
  Footprints,
  Calendar,
  Users,
  BadgeCheck,
  Shield,
  MapPinned,

  // New icons for categories
  Leaf,
  HeartHandshake,
  Landmark,
  TreePine,
  Sunrise,
  Tent,
  Camera,
} from "lucide-react";

// Central icon registry
export const iconMap = {
  Map,
  Mountain,
  Droplets,
  Moon,
  Sparkles,
  Compass,
  Footprints,
  Calendar,
  Users,
  BadgeCheck,
  Shield,
  MapPinned,

  // NEW — Ella
  Sunrise,        // scenic sunrise view
  Camera,         // photography spot
  Tent,           // camping / hiking

  // NEW — Eco Healing
  Leaf,           // nature
  HeartHandshake, // healing / connection
  TreePine,       // forest therapy

  // NEW — Heritage Safari
  Landmark,       // historical / heritage
};

export function Icon({ name, className }) {
  const Comp = iconMap[name];
  if (!Comp) return null;
  return <Comp className={className} />;
}
