import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { heroImg, buildWhatsApp } from '../data/products';

export default function Hero({ onShop }) {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0 animate-slow-zoom">
        <img
          src={heroImg}
          alt="Luxury minimalist brown interior"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ebony/60 via-ebony/30 to-ebony/80" />
      <div className="absolute inset-0 shadow-inset pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-5 md:px-10 max-w-7xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex items-center gap-3 mb-6 text-cream/80">
            <span className="hairline bg-cream/50" />
            <span className="text-[11px] uppercase tracking-luxe">
              Autumn Collection · MMXXVI
            </span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream leading-[1.02] text-balance max-w-4xl animate-fade-up">
            The quiet luxury
            <br />
            of <em className="text-sand font-normal">brown.</em>
          </h1>
          <p className="mt-8 max-w-xl text-cream/75 text-base md:text-lg leading-relaxed animate-fade-up [animation-delay:200ms]">
            A curated atelier of furniture, lighting and objets. Composed in
            the warm vocabulary of ebony, espresso and sand. Each piece, an
            heirloom in waiting.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up [animation-delay:400ms]">
            <button
              onClick={onShop}
              className="group inline-flex items-center justify-center gap-3 bg-cream text-ebony px-8 py-4 text-xs uppercase tracking-luxe hover:bg-sand transition-all"
            >
              Explore the Collection
              <ArrowUpRight
                className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                strokeWidth={1.5}
              />
            </button>
            <a
              href={buildWhatsApp('the Autumn Collection')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-cream/40 text-cream px-8 py-4 text-xs uppercase tracking-luxe hover:bg-cream/10 transition-all"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              Speak to a Curator
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
