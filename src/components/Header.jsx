import React, { useEffect, useState } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { CATEGORIES, PHONE } from '../data/products';

export default function Header({ onHome, navOpen, setNavOpen, onCategory }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory/85 backdrop-blur-md border-b border-espresso/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
        <button
          onClick={onHome}
          className="flex items-baseline gap-2 group"
          aria-label="Maison Brun home"
        >
          <span className="font-serif text-2xl md:text-3xl tracking-wide text-ebony">
            Maison
          </span>
          <span className="font-serif italic text-2xl md:text-3xl text-espresso group-hover:text-mocha transition">
            Brun
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-10 text-[11px] uppercase tracking-luxe text-chocolate">
          {CATEGORIES.slice(1).map((c) => (
            <button
              key={c}
              onClick={() => onCategory(c)}
              className="hover:text-ebony transition-colors relative group"
            >
              {c}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-ebony group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`tel:+${PHONE}`}
            className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-luxe text-chocolate hover:text-ebony"
          >
            <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
            +{PHONE}
          </a>
          <button
            className="lg:hidden p-2 -mr-2 text-ebony"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle menu"
          >
            {navOpen ? (
              <X className="w-5 h-5" strokeWidth={1.5} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          navOpen ? 'max-h-[480px]' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-ivory/95 border-t border-espresso/10">
          {CATEGORIES.slice(1).map((c) => (
            <button
              key={c}
              onClick={() => {
                onCategory(c);
                setNavOpen(false);
              }}
              className="w-full flex items-center justify-between py-3 border-b border-espresso/10 text-xs uppercase tracking-luxe text-chocolate"
            >
              {c}
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
