import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const quotes = [
    {
      q: 'Maison Brun does not decorate rooms — they compose them. Every piece arrived feeling already loved.',
      a: 'Élodie V. · Tema',
    },
    {
      q: 'The bronze chandelier is the single most photographed object in our home. A genuine heirloom.',
      a: 'Mr. & Mrs. A. · Accra',
    },
    {
      q: 'Quiet, considered, deeply luxurious. The kind of brand you keep to yourself.',
      a: 'Jonas R. ·  East Legon',
    },
  ];
  return (
    <section className="bg-ivory py-24 md:py-32 px-5 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center gap-1 mb-6 text-espresso">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-current"
              strokeWidth={1}
            />
          ))}
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-balance max-w-3xl mx-auto leading-snug">
          Words from those who live with us.
        </h2>
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {quotes.map((q, i) => (
            <figure key={i} className="text-left">
              <blockquote className="font-serif italic text-xl text-ebony leading-snug">
                &ldquo;{q.q}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-[11px] uppercase tracking-luxe text-espresso">
                — {q.a}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
