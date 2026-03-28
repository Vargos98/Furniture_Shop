import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Hammer, Leaf, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FeaturedCarousel } from '../components/FeaturedCarousel';
import { HeroSection } from '../components/HeroSection';
import { NewsletterSection } from '../components/NewsletterSection';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { SectionHeading } from '../components/SectionHeading';
import { ShopByRoomSection } from '../components/ShopByRoomSection';
import { TestimonialCard } from '../components/TestimonialCard';
import { siteContent } from '../constants/content';
import { fadeUp, staggerContainer, viewportOnce } from '../constants/motion';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

const iconMap = {
  shield: ShieldCheck,
  hammer: Hammer,
  sparkles: Sparkles,
  leaf: Leaf,
};

export function HomePage() {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 4);
  const bestSellers = products.filter((product) => product.bestSeller).slice(0, 3);
  const newArrivals = products.filter((product) => product.newArrival).slice(0, 3);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % siteContent.testimonials.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <HeroSection />

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Featured Collections"
            title="Six signature categories shaped around contemporary Indian living."
            description="Browse expressive silhouettes across seating, dining, storage, and bedroom essentials."
          />
          <motion.div
            className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {siteContent.home.categories.map((category, index) => (
              <motion.article
                key={category.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-soft backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-terracotta">
                    0{index + 1}
                  </span>
                  <Link to="/collections" className="text-sm font-medium text-espresso/60 transition hover:text-espresso">
                    Explore
                  </Link>
                </div>
                <h3 className="mt-8 font-display text-4xl text-espresso">{category.title}</h3>
                <p className="mt-4 text-sm leading-7 text-espresso/68">{category.subtitle}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.4rem] border border-terracotta/10 bg-gradient-to-r from-espresso via-wood to-terracotta px-6 py-10 text-ivory shadow-glow sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Made in India</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl sm:text-5xl">{siteContent.home.madeInIndiaBanner.title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-ivory/75">{siteContent.home.madeInIndiaBanner.description}</p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Featured Products"
            title="A rotating edit of our most admired handcrafted pieces."
            description="Discover hero designs that define the Vanmaya material palette and furniture language."
          />
          <div className="mt-10">
            <FeaturedCarousel products={featuredProducts} />
          </div>
        </div>
      </section>

      <ShopByRoomSection />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Craft depth, material honesty, and a custom-first studio approach."
            description="Everything we build is designed to feel tactile, durable, and deeply considered."
          />
          <motion.div
            className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {siteContent.home.whyChooseUs.map((item) => {
              const Icon = iconMap[item.icon];

              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-soft backdrop-blur-sm"
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sand text-terracotta">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-3xl text-espresso">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-espresso/68">{item.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Best Sellers"
              title="Pieces our clients return to again and again."
              description="A premium shortlist of dining, storage, and lounge essentials with enduring appeal."
            />
            <Link to="/collections" className="text-sm font-semibold uppercase tracking-[0.25em] text-terracotta">
              {siteContent.buttons.viewAll}
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/40 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="New Arrivals"
            title="Fresh releases with sculpted forms and richly layered finishes."
            description="Recent additions to the atelier, crafted for modern homes that still crave soul."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="Craftsmanship"
              title="Traditional woodworking rituals, refined for today's homes."
              description="Our workshop process honors material patience, hand-guided precision, and finish depth."
            />
            <Link
              to="/craftsmanship"
              className="inline-flex items-center self-start rounded-full border border-espresso/10 bg-white/70 px-5 py-3 text-sm font-semibold text-espresso shadow-soft"
            >
              {siteContent.buttons.discoverStory}
            </Link>
          </div>
          <div className="mt-10">
            <ProcessTimeline steps={siteContent.craftsmanshipSteps} />
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Testimonials"
            title={siteContent.home.testimonialsTitle}
            description="A glimpse into the homes and studios where our furniture now lives."
          />
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={siteContent.testimonials[activeTestimonial].name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35 }}
              >
                <TestimonialCard {...siteContent.testimonials[activeTestimonial]} />
              </motion.div>
            </AnimatePresence>
            <div className="mt-5 flex gap-3">
              {siteContent.testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full transition ${
                    index === activeTestimonial ? 'w-12 bg-espresso' : 'w-6 bg-espresso/20'
                  }`}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2.4rem] border border-white/60 bg-white/80 p-8 shadow-soft backdrop-blur-sm sm:p-10">
            <SectionHeading
              eyebrow="Sustainability"
              title={siteContent.home.sustainability.title}
              description={siteContent.home.sustainability.description}
            />
            <div className="mt-8 space-y-4">
              {siteContent.home.sustainability.points.map((point) => (
                <div key={point} className="rounded-[1.5rem] bg-sand px-5 py-4 text-sm leading-7 text-espresso/75">
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.4rem] border border-white/60 bg-espresso p-4 shadow-glow">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
              alt="Craftsman finishing wooden furniture"
              className="h-full min-h-[420px] w-full rounded-[2rem] object-cover opacity-85"
            />
            <div className="absolute inset-x-10 bottom-10 rounded-[1.75rem] border border-white/15 bg-black/25 p-6 text-ivory backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-gold">Studio Promise</p>
              <p className="mt-3 font-display text-3xl">
                Designed to age gracefully, repair beautifully, and stay relevant for years.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}

