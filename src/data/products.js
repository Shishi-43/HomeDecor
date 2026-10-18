import curtainImg from '../Photos/curtain.jpg'
import furnitureImg from '../Photos/sofa.jpg'
import ledlightImg from '../Photos/ledlight.jpg'
import chandelierImg from '../Photos/chandelier.jpg'
import vaseImg from '../Photos/vase.jpg'
import chairImg from '../Photos/loungeChair.jpg'
import sculptureImg from '../Photos/sculpture.jpg'

import curtainImg2 from '../Photos/curtain2.jpg'
import furnitureImg2 from '../Photos/sofa2.jpg'
import chandelierImg2 from '../Photos/chandelier2.jpg'
import vaseImg2 from '../Photos/vase2.jpg'
import chairImg2 from '../Photos/loungeChair2.jpg'
import sculptureImg2 from '../Photos/sculpture2.jpg'

import heroImg from '../Photos/hero.jpg'
import editImg from '../Photos/editorial.avif'
import editImg2 from '../Photos/editorial2.avif'
import atelierImg from '../Photos/atelier.avif'

export const PHONE = '233559056144';

export const CATEGORIES = [
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
export const PRODUCTS = [
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

export const buildWhatsApp = (productName) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(
    `I'm interested in ${productName}.`
  )}`;

export const buildSMS = (productName) =>
  `sms:+${PHONE}?body=${encodeURIComponent(
    `I'm interested in ${productName}.`
  )}`;

export { heroImg, editImg, editImg2, atelierImg };
