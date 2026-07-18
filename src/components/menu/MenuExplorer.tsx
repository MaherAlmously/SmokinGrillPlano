import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Search } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, type MenuItem } from '@/consts/menu';
import { cn } from '@/lib/utils';

const FILTERS = ['All', ...MENU_CATEGORIES] as const;

function FlameIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="food-card bg-card border-border/60 border shadow-sm hover:shadow-xl"
    >
      <div className="food-card-media relative">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="aspect-[4/3] h-full w-full object-cover"
          />
        ) : (
          <div
            className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-[radial-gradient(120%_120%_at_30%_20%,oklch(0.28_0.02_55)_0%,oklch(0.19_0.015_55)_55%,oklch(0.14_0.012_55)_100%)]"
            role="img"
            aria-label={`${item.name} - photo coming soon`}
          >
            <div className="flex flex-col items-center gap-2 px-4 text-center">
              <FlameIcon className="text-ember/80 h-7 w-7" />
              <span className="font-heading text-[0.65rem] font-semibold tracking-[0.22em] text-white/50 uppercase">
                {item.name}
              </span>
            </div>
          </div>
        )}
        {item.badges?.[0] && (
          <span className="bg-ember absolute top-3 left-3 rounded-full px-3 py-1 text-[0.65rem] font-bold tracking-[0.14em] text-white uppercase">
            {item.badges[0]}
          </span>
        )}
      </div>
      <div className="p-3.5 sm:p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-heading text-base font-bold tracking-tight sm:text-lg">{item.name}</h3>
          <span className="text-ember font-heading shrink-0 text-base font-bold tabular-nums">
            {item.price ?? '—'}
          </span>
        </div>
        <p className="text-muted-foreground mt-2 text-xs leading-relaxed sm:text-sm">{item.description}</p>
        <p className="text-muted-foreground/70 mt-3 text-[0.7rem] font-semibold tracking-[0.16em] uppercase">
          {item.category}
        </p>
      </div>
    </motion.article>
  );
}

export default function MenuExplorer() {
  const [category, setCategory] = useState<(typeof FILTERS)[number]>('All');
  const [query, setQuery] = useState('');

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MENU_ITEMS.filter((item) => {
      if (category !== 'All' && item.category !== category) return false;
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    });
  }, [category, query]);

  return (
    <div>
      {/* Search */}
      <div className="relative mx-auto max-w-md">
        <Search
          className="text-muted-foreground pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search the menu…"
          aria-label="Search the menu"
          className="border-border bg-card focus-visible:ring-ember h-12 w-full rounded-full border pr-5 pl-11 text-sm shadow-sm outline-none focus-visible:ring-2"
        />
      </div>

      {/* Category pills */}
      <div
        className="mt-7 flex flex-wrap items-center justify-center gap-2.5"
        role="tablist"
        aria-label="Menu categories"
      >
        {FILTERS.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={category === f}
            onClick={() => setCategory(f)}
            className={cn(
              'focus-visible:ring-ember rounded-full px-4.5 py-2 text-xs font-bold tracking-[0.12em] uppercase transition-all duration-200 outline-none hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:hover:translate-y-0',
              category === f
                ? 'bg-ember text-white shadow-md'
                : 'bg-card border-border text-muted-foreground hover:border-ember/50 hover:text-foreground border',
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-12 grid grid-cols-2 gap-4 sm:gap-7 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <MenuCard key={item.name} item={item} />
          ))}
        </AnimatePresence>
      </motion.div>

      {items.length === 0 && (
        <div className="py-20 text-center">
          <FlameIcon className="text-ember/60 mx-auto h-10 w-10" />
          <p className="font-heading mt-4 text-xl font-bold">No dishes match “{query}”</p>
          <p className="text-muted-foreground mt-2 text-sm">
            Try a different search, or browse a category above.
          </p>
          <button
            onClick={() => {
              setQuery('');
              setCategory('All');
            }}
            className="btn-ember mt-7"
          >
            Show Full Menu
          </button>
        </div>
      )}
    </div>
  );
}
