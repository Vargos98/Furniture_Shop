import { AnimatePresence, motion } from 'framer-motion';
import { siteContent } from '../constants/content';

export function LoadingScreen({ visible }) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-espresso"
        >
          <div className="text-center">
            <motion.img
              src={siteContent.brand.logoPath}
              alt={siteContent.brand.name}
              className="mx-auto h-20 w-20 rounded-[1.75rem]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 font-display text-5xl text-ivory"
            >
              {siteContent.brand.shortName}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-2 text-xs uppercase tracking-[0.4em] text-gold"
            >
              {siteContent.brand.tagline}
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
