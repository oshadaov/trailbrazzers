import React from "react";
import { BarChart3, TreePine, Droplets, HandCoins } from "lucide-react";
import { Link } from "react-router-dom";
import { colors } from "../theme/colors";

function Stat({ icon: Icon, label, value, hint }) {
  return (
    <div className="p-6 bg-white border border-gray-200 shadow-sm">
      <div className="flex items-center gap-3">
        <div style={{ color: colors.forestGreen }}><Icon size={24} /></div>
        <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">{label}</p>
      </div>
      <p className="mt-3 text-3xl font-serif font-bold" style={{ color: colors.forestGreen }}>{value}</p>
      {hint ? <p className="mt-2 text-sm text-gray-600">{hint}</p> : null}
    </div>
  );
}

export default function ImpactDashboard({ compact = false }) {
  const trees = import.meta.env.VITE_IMPACT_TREES || "1,200+";
  const water = import.meta.env.VITE_IMPACT_WATERSHED || "18 km";
  const community = import.meta.env.VITE_IMPACT_COMMUNITY || "LKR 1.5M";

  return (
    <section style={{ backgroundColor: colors.premiumCream }} className={compact ? "py-14" : "py-20"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <div className="flex justify-center mb-3" style={{ color: colors.premiumGold }}>
            <BarChart3 size={28} />
          </div>
          <h2 style={{ color: colors.forestGreen }} className="text-3xl md:text-4xl font-serif font-bold">
            Impact Dashboard
          </h2>
          <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
            We report what we protect. These numbers are updated as we grow—linking exploration to real regeneration.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          <Stat icon={TreePine} label="Trees planted" value={trees} hint="Reforestation and habitat restoration." />
          <Stat icon={Droplets} label="Watershed protected" value={water} hint="Riverbanks, waterfalls, and catchment zones." />
          <Stat icon={HandCoins} label="Community partners" value={community} hint="Pre-profit revenue share + local livelihoods." />
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/impact"
            style={{ backgroundColor: colors.forestGreen }}
            className="px-6 py-3 text-white font-bold uppercase tracking-wider text-sm hover:opacity-90"
          >
            View impact details
          </Link>
        </div>
      </div>
    </section>
  );
}
