import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function FAQAccordion({ items }) {
  const [activeItem, setActiveItem] = useState(items[0]?.question ?? '');

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = item.question === activeItem;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/80 shadow-soft backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={() => setActiveItem(isOpen ? '' : item.question)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-display text-2xl text-espresso">{item.question}</span>
              <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                <ChevronDown className="h-5 w-5 text-terracotta" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="px-6 pb-6 text-sm leading-7 text-espresso/70">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
