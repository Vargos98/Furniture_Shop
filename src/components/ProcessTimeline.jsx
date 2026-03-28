import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '../constants/motion';

export function ProcessTimeline({ steps }) {
  return (
    <motion.div
      className="relative grid gap-5 lg:grid-cols-3"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {steps.map((step, index) => (
        <motion.article
          key={step.title}
          variants={fadeUp}
          className="group rounded-[1.75rem] border border-white/60 bg-white/80 p-6 shadow-soft backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-espresso text-sm font-semibold text-ivory">
              0{index + 1}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent" />
          </div>
          <h3 className="mt-6 font-display text-3xl text-espresso">{step.title}</h3>
          <p className="mt-3 text-sm leading-7 text-espresso/70">{step.description}</p>
        </motion.article>
      ))}
    </motion.div>
  );
}
