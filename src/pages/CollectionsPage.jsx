import { useState } from 'react';
import { motion } from 'framer-motion';
import { FilterBar } from '../components/FilterBar';
import { PageHero } from '../components/PageHero';
import { ProductCard } from '../components/ProductCard';
import { SectionHeading } from '../components/SectionHeading';
import { siteContent } from '../constants/content';
import { fadeUp, staggerContainer, viewportOnce } from '../constants/motion';
import { products } from '../data/products';

export function CollectionsPage() {
  const [activeCategory, setActiveCategory] = useState(siteContent.collections.filterAllLabel);
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState('featured');

  const categories = [siteContent.collections.filterAllLabel, ...new Set(products.map((product) => product.category))];

  const filteredProducts = products
    .filter((product) =>
      activeCategory === siteContent.collections.filterAllLabel ? true : product.category === activeCategory
    )
    .filter((product) => {
      const query = searchValue.toLowerCase();
      if (!query) {
        return true;
      }

      return [product.name, product.room, product.woodType, product.finish, product.shortDescription]
        .join(' ')
        .toLowerCase()
        .includes(query);
    })
    .sort((a, b) => {
      switch (sortValue) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return Number(b.newArrival) - Number(a.newArrival);
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return Number(b.featured) - Number(a.featured);
      }
    });

  return (
    <>
      <PageHero
        eyebrow={siteContent.collections.hero.eyebrow}
        title={siteContent.collections.hero.title}
        description={siteContent.collections.hero.description}
        image="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FilterBar
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            sortValue={sortValue}
            onSortChange={setSortValue}
            searchPlaceholder={siteContent.collections.searchPlaceholder}
            sortOptions={siteContent.collections.sortOptions}
          />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <SectionHeading
              eyebrow="Product Grid"
              title="A curated selection of handcrafted wooden furniture."
              description="Every piece is designed with premium finishes, handcrafted detailing, and everyday longevity in mind."
            />
            <p className="text-sm uppercase tracking-[0.25em] text-espresso/45">{filteredProducts.length} pieces</p>
          </div>

          {filteredProducts.length ? (
            <motion.div
              className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              {filteredProducts.map((product) => (
                <motion.div key={product.id} variants={fadeUp}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="mt-10 rounded-[2rem] border border-dashed border-espresso/20 bg-white/70 px-6 py-12 text-center shadow-soft">
              <h2 className="font-display text-4xl text-espresso">{siteContent.collections.emptyState.title}</h2>
              <p className="mt-4 text-sm leading-7 text-espresso/65">{siteContent.collections.emptyState.description}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
