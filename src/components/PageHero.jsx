import { motion } from 'framer-motion';
import { fadeUp, softScale, staggerContainer, viewportOnce } from '../constants/motion';

export function PageHero({ eyebrow, title, description, image }) {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-32 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_top,_rgba(195,154,77,0.12),transparent_40%),linear-gradient(180deg,#fdf7f1_0%,#f7f1e8_100%)]" />
      <motion.div
        className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        viewport={viewportOnce}
      >
        <motion.div variants={fadeUp}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-terracotta">{eyebrow}</p>
          <h1 className="font-display text-5xl leading-tight text-espresso sm:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-espresso/70 sm:text-lg">{description}</p>
        </motion.div>
        <motion.div variants={softScale} className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-gold/20 via-transparent to-terracotta/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 p-3 shadow-glow backdrop-blur-sm">
            <img
              src={image}
              alt={title}
              className="h-[380px] w-full rounded-[1.5rem] object-cover sm:h-[440px]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
