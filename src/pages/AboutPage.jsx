import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { siteContent } from '../constants/content';
import { fadeUp, staggerContainer, viewportOnce } from '../constants/motion';

export function AboutPage() {
  const { about } = siteContent;

  return (
    <>
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        description={about.hero.description}
        image="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Brand Story"
            title="Heritage references, contemporary restraint, and material honesty."
            description="Vanmaya builds furniture that carries the warmth of Indian craft while fitting naturally into modern homes."
          />
          <motion.div
            className="mt-10 grid gap-6 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {about.story.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="rounded-[2rem] border border-white/60 bg-white/80 p-7 shadow-soft backdrop-blur-sm"
              >
                <h2 className="font-display text-3xl text-espresso">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-espresso/70">{item.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-white/40 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-3 shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80"
                alt="Artisan carving wood"
                className="h-[320px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-3 shadow-soft sm:translate-y-12">
              <img
                src="https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80"
                alt="Wood finishing process"
                className="h-[320px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>

          <div className="rounded-[2.4rem] border border-white/60 bg-white/80 p-8 shadow-soft backdrop-blur-sm sm:p-10">
            <SectionHeading
              eyebrow="Artisan Network"
              title={about.artisanSpotlight.title}
              description={about.artisanSpotlight.description}
            />
            <div className="mt-8 space-y-4">
              {about.values.map((value) => (
                <div key={value.title} className="rounded-[1.5rem] bg-sand px-5 py-4">
                  <h3 className="font-display text-2xl text-espresso">{value.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-espresso/68">{value.description}</p>
                </div>
              ))}
            </div>
            <Link
              to="/custom-furniture"
              className="mt-8 inline-flex rounded-full bg-espresso px-5 py-3 text-sm font-semibold text-ivory"
            >
              {siteContent.buttons.requestCustomization}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
