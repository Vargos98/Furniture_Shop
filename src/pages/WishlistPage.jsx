import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { ProductCard } from '../components/ProductCard';
import { SectionHeading } from '../components/SectionHeading';
import { siteContent } from '../constants/content';
import { useWishlist } from '../context/WishlistContext';
import { products } from '../data/products';

export function WishlistPage() {
  const { wishlistIds, clearWishlist } = useWishlist();
  const wishlistProducts = products.filter((product) => wishlistIds.includes(product.id));

  return (
    <>
      <PageHero
        eyebrow={siteContent.wishlist.hero.eyebrow}
        title={siteContent.wishlist.hero.title}
        description={siteContent.wishlist.hero.description}
        image="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {wishlistProducts.length ? (
            <>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <SectionHeading
                  eyebrow="Saved Pieces"
                  title="A shortlist of designs you may want to revisit."
                  description="Use this collection to compare materials, prepare for consultation, or narrow down your room edit."
                />
                <button
                  type="button"
                  onClick={clearWishlist}
                  className="self-start rounded-full border border-espresso/10 bg-white px-5 py-3 text-sm font-semibold text-espresso"
                >
                  Clear Wishlist
                </button>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {wishlistProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-[2.4rem] border border-dashed border-espresso/20 bg-white/75 px-6 py-16 text-center shadow-soft">
              <h2 className="font-display text-5xl text-espresso">{siteContent.wishlist.empty.title}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-espresso/68">
                {siteContent.wishlist.empty.description}
              </p>
              <Link
                to="/collections"
                className="mt-8 inline-flex rounded-full bg-espresso px-6 py-4 text-sm font-semibold text-ivory"
              >
                {siteContent.buttons.continueShopping}
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
