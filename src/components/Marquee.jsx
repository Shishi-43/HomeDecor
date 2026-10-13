import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Marquee() {
  const items = [
    'Made to Measure',
    'Atelier Crafted',
    'Worldwide White-Glove Delivery',
    'Heirloom Materials',
    'Numbered Editions',
    'Bespoke Commissions',
  ];
  return (
    <div className="bg-ebony text-sand py-5 overflow-hidden border-y border-espresso">
      <div className="flex gap-12 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        {[...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            className="text-[11px] uppercase tracking-luxe flex items-center gap-12"
          >
            {t}
            <Sparkles className="w-3 h-3 text-mocha" strokeWidth={1.5} />
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0)} to { transform: translateX(-33.333%)}}`}</style>
    </div>
  );
}
