import React from "react";
import { Atom, Eye, Waves, Sparkles } from "lucide-react";
import SeoHead from "../components/SeoHead";
import { colors } from "../theme/colors";

function Card({ icon: Icon, title, children }) {
  return (
    <div className="p-7 border border-gray-200 bg-white shadow-sm">
      <div style={{ color: colors.premiumGold }} className="mb-3">
        <Icon size={26} />
      </div>
      <h3 style={{ color: colors.forestGreen }} className="text-xl font-serif font-bold">{title}</h3>
      <div className="mt-3 text-gray-600 leading-relaxed text-sm">{children}</div>
    </div>
  );
}

export default function SciencePage() {
  const businessName = import.meta.env.VITE_BUSINESS_NAME || "Trailblazers";
  const siteUrl = import.meta.env.VITE_SITE_URL || "";
  const ogImage = import.meta.env.VITE_OG_IMAGE || "";
  const title = `Science | ${businessName}`;
  const description = "Why we talk about the observer effect, attention, and reverence — and how it shapes the Trailblazers experience.";
  const url = siteUrl ? `${siteUrl.replace(/\/$/, "")}/science` : undefined;

  return (
    <>
      <SeoHead title={title} description={description} url={url} image={ogImage || undefined} />

      <section style={{ backgroundColor: colors.premiumCream }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 style={{ color: colors.forestGreen }} className="text-3xl md:text-4xl font-serif font-bold">
            Science, Wonder, and Conscious Exploration
          </h1>
          <p className="mt-4 text-gray-700 max-w-3xl">
            Trailblazers blends ecology, psychology, and the language of wonder. Our idea is simple: the way you pay attention changes what you experience. When you slow down, listen, and observe with care, nature becomes more vivid—and you become more connected.
          </p>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card icon={Eye} title="The Observer Effect (in simple words)">
              In physics, observation can influence outcomes at very small scales. In human life, attention shapes perception: what you notice becomes your reality.
            </Card>
            <Card icon={Waves} title="State change">
              Waterfalls, forest air, and night skies can shift your nervous system from stress to calm. Our routes are designed to create that shift safely.
            </Card>
            <Card icon={Atom} title="Why we use the word ‘quantum’ carefully">
              We do not claim miracles. We use “quantum” as a metaphor for transformation: small changes in intention can create big changes in experience.
            </Card>
            <Card icon={Sparkles} title="Reverence as a practice">
              Reverence is not a religion. It is the habit of treating life as worthy of care—through low-impact travel, respectful silence, and community partnership.
            </Card>
          </div>

          <div className="mt-12 border border-gray-200 bg-white p-8">
            <h2 style={{ color: colors.forestGreen }} className="text-2xl font-serif font-bold">How this shows up on a tour</h2>
            <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-2">
              <li>We guide with stories that increase awareness—not just facts.</li>
              <li>We use mindful pacing: moments of silence, lookout stops, and reflection breaks.</li>
              <li>We protect the night: low-impact lighting and a respect-first “dark-sky promise.”</li>
              <li>We invite you to participate: pick up a plastic bottle, plant a tree, or log a wildlife observation with the guide.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
