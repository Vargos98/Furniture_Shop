import { Search, SlidersHorizontal } from 'lucide-react';

export function FilterBar({
  categories,
  activeCategory,
  onCategoryChange,
  searchValue,
  onSearchChange,
  sortValue,
  onSortChange,
  searchPlaceholder,
  sortOptions,
}) {
  return (
    <div className="rounded-[2rem] border border-white/60 bg-white/80 p-5 shadow-soft backdrop-blur-sm">
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <label className="flex items-center gap-3 rounded-full border border-espresso/10 bg-ivory px-5 py-3">
          <Search className="h-4 w-4 text-terracotta" />
          <input
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder={searchPlaceholder}
            className="w-full bg-transparent text-sm text-espresso outline-none placeholder:text-espresso/40"
          />
        </label>
        <div className="flex items-center gap-3 rounded-full border border-espresso/10 bg-ivory px-5 py-3">
          <SlidersHorizontal className="h-4 w-4 text-terracotta" />
          <select
            value={sortValue}
            onChange={(event) => onSortChange(event.target.value)}
            className="w-full bg-transparent text-sm text-espresso outline-none"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {categories.map((category) => {
          const active = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active ? 'bg-espresso text-ivory' : 'bg-sand text-espresso/80 hover:bg-taupe'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
