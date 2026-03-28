import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteContent } from '../constants/content';
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from '../constants/motion';

export function HeroSection() {
  const { hero } = siteContent.home;

  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-32 sm:px-6 lg:px-8 lg:pb-20">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#fffaf2_0%,#f8f0e6_52%,#f4e8d8_100%)]" />
      <div className="absolute inset-0 -z-10 bg-radialWarm" />
      <div className="absolute left-[10%] top-28 h-44 w-44 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute bottom-10 right-[12%] h-56 w-56 rounded-full bg-terracotta/15 blur-3xl" />

      <motion.div
        className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={slideInLeft} className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-terracotta/20 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-terracotta shadow-soft">
            <Sparkles className="h-4 w-4" />
            {hero.eyebrow}
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[0.95] text-espresso sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-espresso/70 sm:text-lg">{hero.description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.div whileHover={{ y: -4 }}>
              <Link
                to={hero.primaryCta}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-espresso px-6 py-4 text-sm font-semibold text-ivory shadow-soft"
              >
                {siteContent.buttons.exploreCollections}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -4 }}>
              <Link
                to={hero.secondaryCta}
                className="inline-flex items-center justify-center rounded-full border border-espresso/10 bg-white/70 px-6 py-4 text-sm font-semibold text-espresso shadow-soft"
              >
                {siteContent.buttons.requestCustomization}
              </Link>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="mt-10 grid gap-4 sm:grid-cols-3">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] border border-white/60 bg-white/70 p-5 shadow-soft backdrop-blur-sm">
                <p className="font-display text-4xl text-espresso">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-espresso/55">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={slideInRight} className="relative lg:pl-8">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-3 top-10 hidden w-52 rounded-[1.75rem] border border-white/60 bg-white/75 p-4 shadow-glow backdrop-blur-md md:block"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">Signature Edit</p>
            <p className="mt-2 font-display text-2xl text-espresso">{hero.featureCard.title}</p>
            <p className="mt-2 text-sm leading-6 text-espresso/65">{hero.featureCard.description}</p>
          </motion.div>

          <div className="relative rounded-[2.4rem] border border-white/60 bg-white/40 p-3 shadow-glow backdrop-blur-md">
            <img
              src={hero.image}
              alt={hero.title}
              className="h-[520px] w-full rounded-[2rem] object-cover object-center"
            />
          </div>

          <motion.img
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            src={hero.collage[0]}
            alt="Craft detail"
            className="absolute -bottom-6 left-4 hidden h-44 w-48 rounded-[1.75rem] border border-white/70 object-cover shadow-soft md:block"
          />
          <motion.img
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            src={hero.collage[1]}
            alt="Furniture detail"
            className="absolute -right-4 top-16 hidden h-44 w-40 rounded-[1.75rem] border border-white/70 object-cover shadow-soft xl:block"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
