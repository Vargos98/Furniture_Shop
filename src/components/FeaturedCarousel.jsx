import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteContent } from '../constants/content';

const formatPrice = (price) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);

export function FeaturedCarousel({ products }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [products.length]);

  const activeProduct = products[activeIndex];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="relative min-h-[520px] overflow-hidden rounded-[2.4rem] border border-white/60 bg-white/80 p-4 shadow-glow backdrop-blur-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.45 }}
            className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]"
          >
            <img
              src={activeProduct.image}
              alt={activeProduct.name}
              className="h-full min-h-[420px] w-full rounded-[2rem] object-cover"
            />
            <div className="flex flex-col justify-between py-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-terracotta">Featured Product</p>
                <h3 className="mt-4 font-display text-4xl text-espresso sm:text-5xl">{activeProduct.name}</h3>
                <p className="mt-4 text-sm uppercase tracking-[0.25em] text-espresso/45">{activeProduct.woodType}</p>
                <p className="mt-4 text-base leading-8 text-espresso/70">{activeProduct.description}</p>
              </div>
              <div className="mt-8">
                <p className="font-display text-4xl text-espresso">{formatPrice(activeProduct.price)}</p>
                <Link
                  to={`/collections/${activeProduct.slug}`}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-espresso px-5 py-3 text-sm font-semibold text-ivory"
                >
                  {siteContent.buttons.viewDetails}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="grid gap-4">
        {products.map((product, index) => {
          const active = index === activeIndex;

          return (
            <button
              key={product.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-4 rounded-[1.75rem] border px-4 py-4 text-left shadow-soft transition ${
                active ? 'border-espresso bg-espresso text-ivory' : 'border-white/60 bg-white/80 text-espresso'
              }`}
            >
              <img src={product.image} alt={product.name} className="h-20 w-20 rounded-2xl object-cover" />
              <div>
                <p className="font-display text-2xl">{product.name}</p>
                <p className={`mt-1 text-sm ${active ? 'text-ivory/70' : 'text-espresso/60'}`}>{product.shortDescription}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
