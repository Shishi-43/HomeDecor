import React from 'react';
import { Sparkles, Truck, ShieldCheck } from 'lucide-react';

export default function ValueRow() {
  const values = [
    {
      icon: Sparkles,
      title: 'Atelier Crafted',
      text: 'Each piece is made in small editions by named artisans.',
    },
    {
      icon: Truck,
      title: 'White-Glove Delivery',
      text: 'Two-person delivery, installation and styling included.',
    },
    {
      icon: ShieldCheck,
      title: 'Lifetime Provenance',
      text: 'Numbered, signed and registered to your archive.',
    },
  ];
  return (
    <section className="bg-chocolate text-cream py-20 px-5 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {values.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex flex-col items-start">
            <Icon className="w-7 h-7 text-sand mb-5" strokeWidth={1.25} />
            <h3 className="font-serif text-2xl mb-2">{title}</h3>
            <p className="text-cream/70 leading-relaxed text-sm max-w-xs">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
