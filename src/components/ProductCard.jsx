import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteContent } from '../constants/content';
import { useWishlist } from '../context/WishlistContext';

const formatPrice = (price) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);

export function ProductCard({ product }) {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const saved = isWishlisted(product.id);

  return (
    <motion.article
      layout
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[2rem] border border-white/60 bg-white/85 shadow-soft backdrop-blur-sm"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          className={`absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 backdrop-blur-sm transition ${
            saved ? 'bg-terracotta text-white' : 'bg-white/80 text-espresso'
          }`}
          aria-label={saved ? siteContent.buttons.savedToWishlist : siteContent.buttons.addToWishlist}
        >
          <Heart className={`h-5 w-5 ${saved ? 'fill-current' : ''}`} />
        </button>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-sand px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-terracotta">
            {product.category}
          </span>
          <span className="text-xs uppercase tracking-[0.25em] text-espresso/45">{product.woodType}</span>
        </div>
        <h3 className="mt-4 font-display text-3xl text-espresso">{product.name}</h3>
        <p className="mt-3 text-sm leading-7 text-espresso/70">{product.shortDescription}</p>
        <div className="mt-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-espresso/45">{product.finish}</p>
            <p className="mt-2 font-display text-3xl text-espresso">{formatPrice(product.price)}</p>
          </div>
          <Link
            to={`/collections/${product.slug}`}
            className="rounded-full bg-espresso px-5 py-3 text-sm font-semibold text-ivory transition hover:bg-wood"
          >
            {siteContent.buttons.viewDetails}
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
