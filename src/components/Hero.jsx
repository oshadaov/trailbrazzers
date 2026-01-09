import React from "react";
import { Mountain } from "lucide-react";
import { colors } from "../theme/colors";

export default function Hero() {
  return (
    <section className="relative h-[92vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=2576&auto=format&fit=crop"
          alt="Misty Mountains"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div style={{ backgroundColor: colors.deepGreen }} className="absolute inset-0 opacity-80 mix-blend-multiply" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div style={{ color: colors.gold }} className="mb-6 flex justify-center animate-bounce-slow">
          <Mountain size={64} strokeWidth={1} />
        </div>

        <h1 style={{ color: colors.cloudCream }} className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-wide leading-tight drop-shadow-lg">
          THE JOURNEY TO WITHIN,
          <br />
          BEGINS OUTSIDE.
        </h1>

        <p className="text-gray-200 text-lg md:text-xl tracking-wide max-w-2xl mx-auto mb-10 font-light drop-shadow-md">
          Soulful journeys rooted in nature, culture, and community. Awaken your inner transformation through outer exploration
          in sacred natural places.
        </p>

        <button
          style={{ backgroundColor: colors.gold, color: colors.deepGreen }}
          className="px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-yellow-500 transition-colors shadow-lg transform hover:scale-105 duration-200"
        >
          Start Your Journey
        </button>
      </div>
    </section>
  );
}
