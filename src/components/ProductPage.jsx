import React from 'react';
import { ChevronLeft, ArrowUpRight, MessageCircle, Phone, Truck, Sparkles, ShieldCheck } from 'lucide-react';
import { PRODUCTS, buildWhatsApp, buildSMS } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductPage({ product, onBack, onOpen }) {
  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <article className="pt-28 md:pt-32 pb-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-luxe text-chocolate hover:text-ebony mb-8"
        >
          <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
          Back to Collection
        </button>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <div className="relative bg-sand/40 overflow-hidden aspect-[4/5]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 text-[10px] uppercase tracking-luxe text-cream/90 bg-ebony/50 backdrop-blur-sm px-2.5 py-1">
              {product.category}
            </span>
          </div>

          {/* Details */}
          <div className="md:pt-6">
            <div className="flex items-center gap-3 mb-5 text-espresso">
              <span className="hairline" />
              <span className="text-[11px] uppercase tracking-luxe">
                {product.category}
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
              {product.name}
            </h1>
            <p className="mt-3 italic text-chocolate/70">{product.tagline}</p>

            <div className="mt-6">
              <span className="text-[10px] uppercase tracking-luxe text-espresso/70">
                Price on enquiry
              </span>
            </div>

            <p className="mt-8 leading-relaxed text-chocolate/85">
              {product.description}
            </p>

            <div className="mt-8">
              <h3 className="text-[11px] uppercase tracking-luxe text-espresso mb-4">
                Materials
              </h3>
              <ul className="space-y-2">
                {product.materials.map((m) => (
                  <li
                    key={m}
                    className="flex items-center gap-3 text-sm text-chocolate"
                  >
                    <span className="w-1 h-1 bg-espresso rounded-full" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            {/* Inquiry buttons */}
            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              <a
                href={buildWhatsApp(product.name)}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-ebony text-cream px-6 py-4 text-xs uppercase tracking-luxe hover:bg-chocolate transition"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Enquire on WhatsApp
                <ArrowUpRight
                  className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  strokeWidth={1.5}
                />
              </a>
              <a
                href={buildSMS(product.name)}
                className="group inline-flex items-center justify-center gap-3 border border-ebony text-ebony px-6 py-4 text-xs uppercase tracking-luxe hover:bg-ebony hover:text-cream transition"
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                Enquire via SMS
                <ArrowUpRight
                  className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  strokeWidth={1.5}
                />
              </a>
            </div>

            <p className="mt-5 text-[11px] uppercase tracking-luxe text-espresso/70">
              A curator typically responds within the hour.
            </p>

            <div className="mt-10 pt-8 border-t border-espresso/15 grid grid-cols-3 gap-4 text-center">
              <div>
                <Truck
                  className="w-5 h-5 mx-auto text-espresso mb-2"
                  strokeWidth={1.25}
                />
                <p className="text-[10px] uppercase tracking-luxe text-chocolate">
                  White-glove
                </p>
              </div>
              <div>
                <Sparkles
                  className="w-5 h-5 mx-auto text-espresso mb-2"
                  strokeWidth={1.25}
                />
                <p className="text-[10px] uppercase tracking-luxe text-chocolate">
                  Made to order
                </p>
              </div>
              <div>
                <ShieldCheck
                  className="w-5 h-5 mx-auto text-espresso mb-2"
                  strokeWidth={1.25}
                />
                <p className="text-[10px] uppercase tracking-luxe text-chocolate">
                  Lifetime care
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-24">
            <h2 className="font-serif text-3xl mb-10">
              From the same <em className="text-espresso">collection</em>.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {related.map((p, i) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  index={i}
                  onOpen={onOpen}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
