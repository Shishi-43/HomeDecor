import React, { useEffect, useMemo, useState } from 'react';
import { Routes, Route, useLocation, useNavigate, useParams, Link } from 'react-router-dom';
import {
  Search,
  ChevronLeft,
  ArrowUpRight,
  MessageCircle,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  MapPin,
  Sparkles,
  ShieldCheck,
  Truck,
  Star,
} from 'lucide-react';

import { CATEGORIES, PRODUCTS, buildWhatsApp, buildSMS, PHONE } from './data/products';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Editorial from './components/Editorial';
import CollectionSection from './components/CollectionSection';
import ValueRow from './components/ValueRow';
import Atelier from './components/Atelier';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

/* ============================ SCROLL TO TOP ============================ */

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

/* ============================ HOME PAGE ============================ */

function HomePage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    return PRODUCTS.filter(
      (p) =>
        (activeCategory === 'All' || p.category === activeCategory) &&
        (query.trim() === '' ||
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()))
    );
  }, [activeCategory, query]);

  return (
    <div className="min-h-screen bg-ivory text-ebony">
      <Header
        onHome={() => navigate('/')}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        onCategory={(c) => {
          setActiveCategory(c);
          navigate('/');
          setTimeout(() => {
            document
              .getElementById('collection')
              ?.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }}
      />

      <Hero
        onShop={() => {
          navigate('/');
          setTimeout(() => {
            document
              .getElementById('collection')
              ?.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }}
      />
      <Marquee />
      <Editorial />
      <CollectionSection
        products={filtered}
        categories={CATEGORIES}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        query={query}
        setQuery={setQuery}
      />
      <ValueRow />
      <Atelier />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

/* ============================ PRODUCT PAGE ROUTE ============================ */

function ProductPageRoute() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory text-ebony flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">Piece not found</h1>
          <Link to="/" className="text-espresso underline">
            Return to the collection
          </Link>
        </div>
      </div>
    );
  }

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-ivory text-ebony">
      <Header
        onHome={() => navigate('/')}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        onCategory={(c) => {
          navigate('/');
          setTimeout(() => {
            document
              .getElementById('collection')
              ?.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }}
      />
      <article className="pt-28 md:pt-32 pb-20 animate-fade-in">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <button
            onClick={() => navigate(-1)}
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
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
      <Footer />
    </div>
  );
}

/* ============================ APP ============================ */

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPageRoute />} />
      </Routes>
    </>
  );
}
