import React from "react";
import { ArrowRight, Mountain } from "lucide-react";
import { Link } from "react-router-dom";
import { colors } from "../theme/colors";

export default function Hero() {
  const businessName = import.meta.env.VITE_BUSINESS_NAME || "Trailblazers";
  const heroVideo = import.meta.env.VITE_HERO_VIDEO || "";

  return (
    <section className="relative h-[92vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {heroVideo ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src={heroVideo}
          />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=2576&auto=format&fit=crop"
            alt="Misty peaks"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        <div style={{ backgroundColor: colors.forestGreen }} className="absolute inset-0 opacity-80 mix-blend-multiply" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div style={{ color: colors.premiumGold }} className="mb-6 flex justify-center animate-bounce-slow">
          <Mountain size={64} strokeWidth={1} />
        </div>

        <p className="text-white/80 tracking-[0.25em] uppercase text-xs mb-4">Belihuloya • Sri Lanka</p>

        <h1 style={{ color: colors.premiumCream }} className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-wide leading-tight drop-shadow-lg">
          Awaken the Explorer Within.
        </h1>

        <p className="text-white/85 text-lg md:text-xl tracking-wide max-w-2xl mx-auto mb-10 font-light drop-shadow-md">
          {businessName} offers regenerative journeys where watershed, forest canopy, and dark-sky discovery meet.
          You are not a tourist — you are an active participant in the living Earth.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/tours"
            style={{ backgroundColor: colors.premiumGold, color: colors.forestGreen }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold tracking-widest uppercase text-sm hover:opacity-90 transition-opacity shadow-lg transform hover:scale-[1.02] duration-200"
          >
            Explore the Experience <ArrowRight size={18} />
          </Link>
          <Link
            to="/impact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold tracking-widest uppercase text-sm border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            See our impact
          </Link>
        </div>
      </div>
    </section>
  );
}
