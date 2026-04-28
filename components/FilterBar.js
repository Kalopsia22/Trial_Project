'use client';

import { Search, X } from 'lucide-react';

const continents = ['All', 'Asia', 'Europe', 'Africa', 'South America', 'Oceania'];
const tags = ['All', 'Culture', 'Nature', 'Adventure', 'Food', 'Beach', 'History', 'Romance', 'Scenic', 'Hiking'];

export default function FilterBar({
  search, setSearch,
  activeContinent, setActiveContinent,
  activeTag, setActiveTag,
  activeList, setActiveList,
}) {
  return (
    <div className="flex flex-col gap-4 mb-10">
      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
        <input
          type="text"
          placeholder="Search destinations, countries, vibes…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-10 py-3 bg-surface border border-surface-border rounded-xl text-sm text-text-primary placeholder-text-dim focus:outline-none focus:ring-1 focus:ring-coral/50 focus:border-coral/50 transition-all"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* List filter */}
      <div className="flex flex-wrap gap-2">
        {[
          { key: 'All', label: 'All Places' },
          { key: 'Wishlisted', label: '❤️ Wishlisted' },
          { key: 'Visited', label: '✅ Visited' },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveList(key)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
              activeList === key
                ? key === 'Wishlisted'
                  ? 'bg-coral/20 text-coral border-coral/50'
                  : key === 'Visited'
                  ? 'bg-teal/20 text-teal border-teal/50'
                  : 'bg-base-600 text-text-primary border-base-500'
                : 'bg-transparent text-text-secondary border-surface-border hover:border-base-500 hover:text-text-primary'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Continent */}
      <div className="flex flex-wrap gap-2">
        {continents.map((c) => (
          <button
            key={c}
            onClick={() => setActiveContinent(c)}
            className={`px-3.5 py-1 rounded-full text-sm font-medium transition-all duration-200 border ${
              activeContinent === c
                ? 'bg-amber/20 text-amber border-amber/50'
                : 'bg-transparent text-text-secondary border-surface-border hover:border-base-500 hover:text-text-primary'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTag(t)}
            className={`px-3 py-0.5 rounded-full text-xs font-medium transition-all duration-200 border ${
              activeTag === t
                ? 'bg-violet/20 text-violet border-violet/50'
                : 'bg-transparent text-text-muted border-surface-border hover:border-base-500 hover:text-text-secondary'
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
