import { useState } from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../constants/content';
import { SectionHeading } from './SectionHeading';

export function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);
  const { newsletter } = siteContent.home;

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/60 bg-gradient-to-br from-espresso to-wood px-6 py-12 text-ivory shadow-glow sm:px-10 lg:px-14">
        <SectionHeading
          eyebrow="Private Circle"
          title={newsletter.title}
          description={newsletter.description}
          className="max-w-2xl text-ivory [&_h2]:text-ivory [&_p]:text-ivory/75"
        />
        <div className="mt-8 flex flex-col gap-4 lg:flex-row">
          <input
            type="email"
            placeholder={newsletter.placeholder}
            className="min-h-14 flex-1 rounded-full border border-white/20 bg-white/10 px-5 text-sm text-ivory outline-none placeholder:text-ivory/55"
          />
          <motion.button
            type="button"
            whileHover={{ y: -4 }}
            onClick={() => setSubmitted(true)}
            className="rounded-full bg-ivory px-6 py-4 text-sm font-semibold text-espresso"
          >
            {siteContent.buttons.subscribe}
          </motion.button>
        </div>
        {submitted ? <p className="mt-4 text-sm text-gold">{newsletter.success}</p> : null}
      </div>
    </section>
  );
}
