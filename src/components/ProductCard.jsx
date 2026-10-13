import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ProductCard({ product, index }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block animate-fade-up"
      style={{ animationDelay: `${(index % 6) * 80}ms` }}
    >
      <article className="cursor-pointer">
        <div className="relative overflow-hidden bg-sand/40 aspect-[4/5]">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ebony/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <span className="text-[10px] uppercase tracking-luxe text-cream bg-ebony/70 backdrop-blur-sm px-3 py-1.5">
              View Piece
            </span>
            <ArrowUpRight
              className="w-8 h-8 text-cream bg-ebony/70 backdrop-blur-sm p-2"
              strokeWidth={1.25}
            />
          </div>
          <span className="absolute top-4 left-4 text-[10px] uppercase tracking-luxe text-cream/90 bg-ebony/40 backdrop-blur-sm px-2.5 py-1">
            {product.category}
          </span>
        </div>
        <div className="pt-5">
          <h3 className="font-serif text-xl text-ebony group-hover:text-espresso transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-chocolate/70 mt-1 italic">
            {product.tagline}
          </p>
        </div>
      </article>
    </Link>
  );
}
