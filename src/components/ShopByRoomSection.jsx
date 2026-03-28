import { motion } from 'framer-motion';
import { siteContent } from '../constants/content';
import { fadeUp, staggerContainer, viewportOnce } from '../constants/motion';
import { SectionHeading } from './SectionHeading';

export function ShopByRoomSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Shop by Room"
          title="Curated pieces for living, dining, bedroom, and study spaces."
          description="Explore room-led edits that make it easier to imagine how each piece will sit within your home."
        />
        <motion.div
          className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {siteContent.home.roomHighlights.map((room) => (
            <motion.article
              key={room.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 shadow-soft backdrop-blur-sm"
            >
              <div className="overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-3xl text-espresso">{room.title}</h3>
                <p className="mt-3 text-sm leading-7 text-espresso/68">{room.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
