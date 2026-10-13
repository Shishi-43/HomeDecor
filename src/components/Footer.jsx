import React from 'react';
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { PHONE } from '../data/products';

export default function Footer() {
  return (
    <footer className="bg-ebony text-cream/80 pt-20 pb-10 px-5 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl text-cream">Maison</span>
            <span className="font-serif italic text-3xl text-sand">Brun</span>
          </div>
          <p className="mt-5 max-w-sm text-cream/60 leading-relaxed text-sm">
            A quiet atelier of furniture, lighting and objets — composed in
            every shade of brown.
          </p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-ebony transition"
                aria-label="social"
              >
                {/* TODO: real link */}
                <Icon className="w-4 h-4" strokeWidth={1.25} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-luxe text-sand mb-5">
            The Maison
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-cream">
                {/* TODO: real link */}
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cream">
                {/* TODO: real link */}
                Atelier Visits
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cream">
                {/* TODO: real link */}
                Trade Programme
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cream">
                {/* TODO: real link */}
                Press
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-luxe text-sand mb-5">
            Concierge
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
              <a href={`tel:+${PHONE}`} className="hover:text-cream">
                +{PHONE}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
              <a href="mailto:otisdaniel020@gmail.com" className="hover:text-cream">
                concierge@maisonbrun.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
              Accra · Tema · East Legon
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-4 text-[11px] uppercase tracking-luxe text-cream/50">
        <p>© MMXXVI Maison Brun — All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-cream">{/* TODO: real link */}Terms</a>
          <a href="#" className="hover:text-cream">{/* TODO: real link */}Privacy</a>
          <a href="#" className="hover:text-cream">{/* TODO: real link */}Shipping</a>
        </div>
      </div>
    </footer>
  );
}
