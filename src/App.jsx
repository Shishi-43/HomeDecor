import React, { useEffect, useMemo, useState } from 'react';
import {
  Menu,
  X,
  Search,
  ChevronRight,
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

/* ----------------------------- DATA ----------------------------- */

const PHONE = '233559056144';
import curtainImg from './Photos/curtain.jpg'
import furnitureImg from './Photos/sofa.jpg'
import ledlightImg from './Photos/ledlight.jpg'
import chandelierImg from './Photos/chandelier.jpg'
import vaseImg from './Photos/vase.jpg'
import chairImg from './Photos/loungeChair.jpg'
import sculptureImg from './Photos/sculpture.jpg'

import curtainImg2 from './Photos/curtain2.jpg'
import furnitureImg2 from './Photos/sofa2.jpg'
import chandelierImg2 from './Photos/chandelier2.jpg'
import vaseImg2 from './Photos/vase2.jpg'
import chairImg2 from './Photos/loungeChair2.jpg'
import sculptureImg2 from './Photos/sculpture2.jpg'

import heroImg from './Photos/hero.avif'
import editImg from './Photos/editorial.avif'
import editImg2 from './Photos/editorial2.avif'
import atelierImg from './Photos/atelier.avif'

const CATEGORIES = [
  'All',
  'Curtains',
  'Furniture',
  'LED Lights',
  'Chandeliers',
  'Vases',
  'Lounge Chairs',
  'Sculptures',
];

// High-resolution Unsplash photos curated for the brown / luxury aesthetic.
const PRODUCTS = [
  {
    id: 'p01',
    name: 'Velluto Drape Curtains',
    category: 'Curtains',
    tagline: 'Hand-pleated Italian velvet in Espresso',
    description:
      'Floor-to-ceiling drapery tailored from triple-weight Italian velvet. Engineered to filter light into a warm, golden hush — the kind of glow that turns an ordinary afternoon into a memory.',
    materials: ['Italian Velvet', 'Brass Hardware', 'Blackout Lining'],
    image: curtainImg,
  },
  {
    id: 'p02',
    name: 'Noir Lounge Sofa',
    category: 'Furniture',
    tagline: 'Sculpted walnut frame · saddle leather',
    description:
      'A low-slung lounge sofa carved from solid walnut and upholstered in vegetable-tanned saddle leather that deepens with every passing season.',
    materials: ['Solid Walnut', 'Saddle Leather', 'Goose-down Cushions'],
    image: furnitureImg,
  },
  {
    id: 'p03',
    name: 'Aurum LED Cove Strip',
    category: 'LED Lights',
    tagline: 'Warm 2700K · architectural grade',
    description:
      'A whisper-thin LED ribbon designed for cove and shadow-gap installations. Casts a candlelit warmth that flatters every brown tone in the room.',
    materials: ['Anodized Aluminium', '2700K Diodes', 'Dimmable Driver'],
    image: ledlightImg,
  },
  {
    id: 'p04',
    name: 'Cascata Bronze Chandelier',
    category: 'Chandeliers',
    tagline: 'Hand-blown smoked glass · aged bronze',
    description:
      'Twenty-four hand-blown smoked-glass globes suspended from an aged-bronze armature. A modern heirloom designed to anchor a dining room or grand foyer.',
    materials: ['Aged Bronze', 'Smoked Glass', 'Silk-wrapped Cable'],
    image: chandelierImg,
  },
  {
    id: 'p05',
    name: 'Terracotta Monolith Vase',
    category: 'Vases',
    tagline: 'Wheel-thrown · matte clay finish',
    description:
      'A monolithic vessel wheel-thrown by a single artisan in Tuscany. Its matte terracotta surface absorbs light the way old leather absorbs the sun.',
    materials: ['Terracotta', 'Mineral Glaze'],
    image: vaseImg,
  },
  {
    id: 'p06',
    name: 'Sienna Bouclé Lounge Chair',
    category: 'Lounge Chairs',
    tagline: 'Curved oak · taupe bouclé',
    description:
      'A sculpted reading chair wrapped in heavyweight bouclé. The silhouette is pure 1970s Milan; the comfort is engineered for an entire chapter.',
    materials: ['Steam-bent Oak', 'Wool Bouclé', 'High-resilience Foam'],
    image: chairImg,
  },
  {
    id: 'p07',
    name: 'Atlas Bronze Sculpture',
    category: 'Sculptures',
    tagline: 'Lost-wax cast · patinated bronze',
    description:
      'A limited-edition bronze, lost-wax cast and finished by hand with a deep umber patina. Numbered and signed by the studio.',
    materials: ['Patinated Bronze', 'Travertine Base'],
    image: sculptureImg,
  },
  {
    id: 'p08',
    name: 'Linea Sheer Curtains',
    category: 'Curtains',
    tagline: 'Belgian linen in Sand',
    description:
      'Stonewashed Belgian linen sheers that diffuse afternoon light into soft, biscuit-warm tones. Sold by the panel, made to measure.',
    materials: ['Belgian Linen', 'Brass Eyelets'],
    image: curtainImg2,
  },
  {
    id: 'p09',
    name: 'Monolith Coffee Table',
    category: 'Furniture',
    tagline: 'Solid travertine · espresso wash',
    description:
      'A single block of travertine, gently honed and washed with espresso pigment. A quiet centerpiece for the living room.',
    materials: ['Travertine', 'Mineral Wash'],
    image: furnitureImg2,
  },
  {
    id: 'p10',
    name: 'Halo Pendant Chandelier',
    category: 'Chandeliers',
    tagline: 'Brushed brass · alabaster shade',
    description:
      'A single floating halo of brushed brass cradling an alabaster diffuser. Modern, monastic, magnificent.',
    materials: ['Brushed Brass', 'Italian Alabaster'],
    image: chandelierImg2,
  },
  {
    id: 'p11',
    name: 'Ondine Ceramic Vase',
    category: 'Vases',
    tagline: 'Sculptural · espresso glaze',
    description:
      'A curvilinear vessel finished in a deep espresso glaze that pools at the base like a slow river.',
    materials: ['Stoneware', 'Reactive Glaze'],
    image: vaseImg2,
  },
  {
    id: 'p12',
    name: 'Cocoon Reading Chair',
    category: 'Lounge Chairs',
    tagline: 'Cognac leather · swivel base',
    description:
      'A swiveling cocoon of aniline cognac leather mounted on a cast-bronze base. Built for slow Sundays.',
    materials: ['Aniline Leather', 'Cast Bronze', 'Kiln-dried Beech'],
    image: chairImg2,
  },
];

/* --------------------------- HELPERS --------------------------- */

const buildWhatsApp = (productName) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(
    `I'm interested in ${productName}.`
  )}`;

const buildSMS = (productName) =>
  `sms:+${PHONE}?body=${encodeURIComponent(
    `I'm interested in ${productName}.`
  )}`;

/* ============================ APP ============================ */

export default function App() {
  const [view, setView] = useState({ name: 'home' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [view]);

  const filtered = useMemo(() => {
    return PRODUCTS.filter(
      (p) =>
        (activeCategory === 'All' || p.category === activeCategory) &&
        (query.trim() === '' ||
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()))
    );
  }, [activeCategory, query]);

  const openProduct = (product) => setView({ name: 'product', product });
  const goHome = () => setView({ name: 'home' });

  return (
    <div className="min-h-screen bg-ivory text-ebony">
      <Header
        onHome={goHome}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        onCategory={(c) => {
          setActiveCategory(c);
          goHome();
          setTimeout(() => {
            document
              .getElementById('collection')
              ?.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }}
      />

      {view.name === 'home' && (
        <>
          <Hero
            onShop={() =>
              document
                .getElementById('collection')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
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
            onOpen={openProduct}
          />
          <ValueRow />
          <Atelier />
          <Testimonials />
          <Newsletter />
        </>
      )}

      {view.name === 'product' && (
        <ProductPage product={view.product} onBack={goHome} onOpen={openProduct} />
      )}

      <Footer />
    </div>
  );
}

/* ============================ HEADER ============================ */

function Header({ onHome, navOpen, setNavOpen, onCategory }) {
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

/* ============================= HERO ============================= */

function Hero({ onShop }) {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0 animate-slow-zoom">
        <img
          src={heroImg}
          alt="Luxury minimalist brown interior"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ebony/60 via-ebony/30 to-ebony/80" />
      <div className="absolute inset-0 shadow-inset pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-5 md:px-10 max-w-7xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex items-center gap-3 mb-6 text-cream/80">
            <span className="hairline bg-cream/50" />
            <span className="text-[11px] uppercase tracking-luxe">
              Autumn Collection · MMXXV
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

/* =========================== MARQUEE =========================== */

function Marquee() {
  const items = [
    'Made to Measure',
    'Atelier Crafted',
    'Worldwide White-Glove Delivery',
    'Heirloom Materials',
    'Numbered Editions',
    'Bespoke Commissions',
  ];
  return (
    <div className="bg-ebony text-sand py-5 overflow-hidden border-y border-espresso">
      <div className="flex gap-12 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        {[...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            className="text-[11px] uppercase tracking-luxe flex items-center gap-12"
          >
            {t}
            <Sparkles className="w-3 h-3 text-mocha" strokeWidth={1.5} />
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0)} to { transform: translateX(-33.333%)}}`}</style>
    </div>
  );
}

/* =========================== EDITORIAL =========================== */

function Editorial() {
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

/* ========================== COLLECTION ========================== */

function CollectionSection({
  products,
  categories,
  activeCategory,
  setActiveCategory,
  query,
  setQuery,
  onOpen,
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
            <ProductCard key={p.id} product={p} index={i} onOpen={onOpen} />
          ))}
        </div>
      )}
    </section>
  );
}

function ProductCard({ product, index, onOpen }) {
  return (
    <article
      className="group cursor-pointer animate-fade-up"
      style={{ animationDelay: `${(index % 6) * 80}ms` }}
      onClick={() => onOpen(product)}
    >
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
  );
}

/* =========================== VALUE ROW =========================== */

function ValueRow() {
  const values = [
    {
      icon: Sparkles,
      title: 'Atelier Crafted',
      text: 'Each piece is made in small editions by named artisans.',
    },
    {
      icon: Truck,
      title: 'White-Glove Delivery',
      text: 'Two-person delivery, installation and styling included.',
    },
    {
      icon: ShieldCheck,
      title: 'Lifetime Provenance',
      text: 'Numbered, signed and registered to your archive.',
    },
  ];
  return (
    <section className="bg-chocolate text-cream py-20 px-5 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {values.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex flex-col items-start">
            <Icon className="w-7 h-7 text-sand mb-5" strokeWidth={1.25} />
            <h3 className="font-serif text-2xl mb-2">{title}</h3>
            <p className="text-cream/70 leading-relaxed text-sm max-w-xs">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================ ATELIER ============================ */

function Atelier() {
  return (
    <section className="py-24 md:py-32 px-5 md:px-10 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 order-2 md:order-1">
          <img
            src={atelierImg}
            alt="Atelier"
            className="w-full aspect-[5/4] object-cover shadow-soft"
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

/* =========================== TESTIMONIALS =========================== */

function Testimonials() {
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

/* =========================== NEWSLETTER =========================== */

function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  return (
    <section className="bg-ebony text-cream py-24 px-5 md:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl">
          Letters from the maison.
        </h2>
        <p className="mt-4 text-cream/70 max-w-xl mx-auto">
          Slow correspondence on new arrivals, atelier visits and the
          occasional private preview.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your email address"
            className="flex-1 bg-transparent border border-cream/30 px-5 py-4 text-sm placeholder:text-cream/40 focus:outline-none focus:border-cream"
          />
          <button
            type="submit"
            className="bg-cream text-ebony px-8 py-4 text-xs uppercase tracking-luxe hover:bg-sand transition"
          >
            Subscribe
          </button>
        </form>
        {done && (
          <p className="mt-4 text-sand text-xs uppercase tracking-luxe">
            Thank you. A letter is on its way.
          </p>
        )}
      </div>
    </section>
  );
}

/* =========================== PRODUCT PAGE =========================== */

function ProductPage({ product, onBack, onOpen }) {
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

/* ============================= FOOTER ============================= */

function Footer() {
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
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cream">
                Atelier Visits
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cream">
                Trade Programme
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cream">
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
        <p>© MMXXV Maison Brun — All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-cream">Terms</a>
          <a href="#" className="hover:text-cream">Privacy</a>
          <a href="#" className="hover:text-cream">Shipping</a>
        </div>
      </div>
    </footer>
  );
}
