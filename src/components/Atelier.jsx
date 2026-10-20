import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { atelierImg, buildWhatsApp } from '../data/products';

export default function Atelier() {
  return (
    <section className="py-24 md:py-32 px-5 md:px-10 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 order-2 md:order-1">
          <img
            src={atelierImg}
            alt="Atelier"
            className="w-full aspect-[5/4] object-cover shadow-soft"
            loading="lazy"
          />
        </div>
        <div className="md:col-span-5 order-1 md:order-2">
          <div className="flex items-center gap-3 mb-6 text-espresso">
            <span className="hairline" />
            <span className="text-[11px] uppercase tracking-luxe">
              Bespoke
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Made to your
            <em className="text-espresso"> measure.</em>
          </h2>
          <p className="mt-6 text-chocolate/80 leading-relaxed">
            From a single curtain panel to an entire residence, our atelier
            collaborates with architects, designers and private clients on
            commissions in any quantity.
          </p>
          <a
            href={buildWhatsApp('a bespoke commission')}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-luxe text-ebony border-b border-ebony pb-1 hover:gap-5 transition-all"
          >
            Begin a Commission
            <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
