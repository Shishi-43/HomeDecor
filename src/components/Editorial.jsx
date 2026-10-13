import React from 'react';
import { editImg, editImg2 } from '../data/products';

export default function Editorial() {
  return (
    <section className="py-24 md:py-32 px-5 md:px-10 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-6 text-espresso">
            <span className="hairline" />
            <span className="text-[11px] uppercase tracking-luxe">
              The Maison
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
            Interiors composed like
            <em className="text-espresso"> still life.</em>
          </h2>
          <p className="mt-6 text-chocolate/80 leading-relaxed">
            We believe a home should breathe. Our pieces are sourced from a
            small constellation of European ateliers — leather tanned by the
            month, oak bent by hand, bronze poured one ingot at a time.
          </p>
          <p className="mt-4 text-chocolate/80 leading-relaxed">
            The palette is deliberately narrow: every shade of brown, from
            ebony night to morning sand, calibrated to live in conversation
            with the next.
          </p>
        </div>
        <div className="md:col-span-7 grid grid-cols-2 gap-4">
          <img
            src={editImg}
            alt="Brown minimalist interior"
            className="aspect-[3/4] object-cover w-full rounded-sm shadow-soft"
          />
          <img
            src={editImg2}
            alt="Warm interior detail"
            className="aspect-[3/4] object-cover w-full rounded-sm shadow-soft mt-10"
          />
        </div>
      </div>
    </section>
  );
}
