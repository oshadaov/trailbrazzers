import {
  Map,
  Mountain,
  Droplets,
  Moon,
  Compass,
  Footprints,
  Calendar,
  Users,
  BadgeCheck,
  Shield,
  MapPinned,
} from "lucide-react";

// Keep a single place to map string names -> Lucide icon components.
export const iconMap = {
  Map,
  Mountain,
  Droplets,
  Moon,
  Compass,
  Footprints,
  Calendar,
  Users,
  BadgeCheck,
  Shield,
  MapPinned,
};

export function Icon({ name, className }) {
  const Comp = iconMap[name];
  if (!Comp) return null;
  return <Comp className={className} />;
}
