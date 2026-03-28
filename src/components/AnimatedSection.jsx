import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../constants/motion';

export function AnimatedSection({ as = 'section', className = '', children, delay = 0 }) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}
