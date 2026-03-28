import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../constants/motion';

export function SectionHeading({ eyebrow, title, description, align = 'left', className = '' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <motion.div
      className={`max-w-3xl ${alignment} ${className}`.trim()}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-terracotta/90">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-tight text-espresso sm:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-espresso/70 sm:text-lg">{description}</p>
      ) : null}
    </motion.div>
  );
}
