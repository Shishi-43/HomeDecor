import React from 'react';
import { Search } from 'lucide-react';
import ProductCard from './ProductCard';

export default function CollectionSection({
  products,
  categories,
  activeCategory,
  setActiveCategory,
  query,
  setQuery,
}) {
  return (
    <section
      id="collection"
      className="py-20 md:py-28 px-5 md:px-10 max-w-7xl mx-auto"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4 text-espresso">
            <span className="hairline" />
            <span className="text-[11px] uppercase tracking-luxe">
              The Collection
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Pieces for the
            <em className="text-espresso"> patient collector.</em>
          </h2>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-72">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-espresso/60"
              strokeWidth={1.5}
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the maison…"
              className="w-full bg-transparent border border-espresso/25 pl-10 pr-4 py-3 text-sm placeholder:text-espresso/40 focus:outline-none focus:border-espresso transition"
            />
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className={`px-4 py-2 text-[11px] uppercase tracking-luxe border transition-all ${
              activeCategory === c
                ? 'bg-ebony text-cream border-ebony'
                : 'bg-transparent text-chocolate border-espresso/25 hover:border-espresso'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Product grid */}
      {products.length === 0 ? (
        <div className="py-32 text-center text-chocolate/60 italic font-serif text-xl">
          No pieces match your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}
