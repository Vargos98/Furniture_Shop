import { useState } from 'react';
import { Heart, Minus, Plus } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { SectionHeading } from '../components/SectionHeading';
import { siteContent } from '../constants/content';
import { useWishlist } from '../context/WishlistContext';
import { products } from '../data/products';

const formatPrice = (price) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);

export function ProductDetailsPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  const { isWishlisted, toggleWishlist } = useWishlist();
  const [activeImage, setActiveImage] = useState(product?.gallery[0] ?? '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <Navigate to="/collections" replace />;
  }

  const similarProducts = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3);
  const saved = isWishlisted(product.id);

  return (
    <>
      <section className="px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <div className="overflow-hidden rounded-[2.4rem] border border-white/60 bg-white/70 p-4 shadow-glow">
              <img src={activeImage} alt={product.name} className="h-[520px] w-full rounded-[2rem] object-cover" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {product.gallery.map((image) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(image)}
                  className={`overflow-hidden rounded-[1.5rem] border p-2 shadow-soft ${
                    activeImage === image ? 'border-espresso bg-white' : 'border-white/60 bg-white/70'
                  }`}
                >
                  <img src={image} alt={product.name} className="h-28 w-full rounded-[1rem] object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[2.4rem] border border-white/60 bg-white/80 p-8 shadow-soft backdrop-blur-sm sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-terracotta">{product.category}</p>
            <h1 className="mt-4 font-display text-5xl text-espresso">{product.name}</h1>
            <p className="mt-4 text-base leading-8 text-espresso/70">{product.description}</p>
            <p className="mt-6 font-display text-5xl text-espresso">{formatPrice(product.price)}</p>

            <div className="mt-8 grid gap-4 rounded-[1.75rem] bg-sand p-5">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-espresso/45">{siteContent.productDetails.dimensionsLabel}</p>
                <p className="mt-2 text-sm text-espresso/75">{product.dimensions}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-espresso/45">{siteContent.productDetails.materialLabel}</p>
                <p className="mt-2 text-sm text-espresso/75">{product.material}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-espresso/45">{siteContent.productDetails.finishLabel}</p>
                <p className="mt-2 text-sm text-espresso/75">{product.finish}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-espresso/45">{siteContent.productDetails.careLabel}</p>
                <p className="mt-2 text-sm text-espresso/75">{product.care}</p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center rounded-full border border-espresso/10 bg-ivory px-3 py-2">
                <button
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-espresso"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center text-sm font-semibold text-espresso">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-espresso"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <p className="text-sm uppercase tracking-[0.25em] text-espresso/45">
                {siteContent.productDetails.quantityLabel}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to={`/custom-furniture?product=${encodeURIComponent(product.name)}`}
                className="inline-flex items-center justify-center rounded-full bg-espresso px-6 py-4 text-sm font-semibold text-ivory"
              >
                {siteContent.buttons.requestCustomization}
              </Link>
              <button
                type="button"
                onClick={() => toggleWishlist(product.id)}
                className={`inline-flex items-center justify-center gap-2 rounded-full border px-6 py-4 text-sm font-semibold ${
                  saved ? 'border-terracotta bg-terracotta text-white' : 'border-espresso/10 bg-white text-espresso'
                }`}
              >
                <Heart className={`h-4 w-4 ${saved ? 'fill-current' : ''}`} />
                {saved ? siteContent.buttons.savedToWishlist : siteContent.buttons.addToWishlist}
              </button>
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-terracotta/15 bg-terracotta/8 p-5">
              <p className="text-sm leading-7 text-espresso/72">{siteContent.productDetails.customizationBlurb}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Similar Products"
            title={siteContent.productDetails.similarProductsTitle}
            description="More handcrafted pieces that pair naturally with this design language."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {similarProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
