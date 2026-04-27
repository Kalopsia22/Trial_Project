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
      {/* Search bar */}
      <div className="relative">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400 pointer-events-none" />
        <input
          type="text"
          placeholder="Search destinations, countries, tags…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-10 py-2.5 bg-white border border-sand-200 rounded-xl text-sm text-ink-800 placeholder-ink-300 focus:outline-none focus:ring-2 focus:ring-sand-400 focus:border-transparent transition-all"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-300 hover:text-ink-600"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* List filter */}
      <div className="flex flex-wrap gap-2">
        {['All', 'Wishlisted', 'Visited'].map((l) => (
          <button
            key={l}
            onClick={() => setActiveList(l)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
              activeList === l
                ? l === 'Wishlisted'
                  ? 'bg-terracotta text-white border-terracotta'
                  : l === 'Visited'
                  ? 'bg-sage text-white border-sage'
                  : 'bg-ink-900 text-sand-50 border-ink-900'
                : 'bg-white text-ink-600 border-sand-200 hover:border-ink-400'
            }`}
          >
            {l === 'Wishlisted' ? '❤️ Wishlisted' : l === 'Visited' ? '✅ Visited' : 'All'}
          </button>
        ))}
      </div>

      {/* Continent filter */}
      <div className="flex flex-wrap gap-2">
        {continents.map((c) => (
          <button
            key={c}
            onClick={() => setActiveContinent(c)}
            className={`px-3.5 py-1 rounded-full text-sm font-medium transition-all duration-200 border ${
              activeContinent === c
                ? 'bg-ink-800 text-sand-50 border-ink-800'
                : 'bg-white text-ink-600 border-sand-200 hover:border-ink-500'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Tag filter */}
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTag(t)}
            className={`px-3 py-0.5 rounded-full text-xs font-medium transition-all duration-200 border ${
              activeTag === t
                ? 'bg-sand-400 text-ink-900 border-sand-400'
                : 'bg-sand-50 text-ink-500 border-sand-200 hover:border-sand-400'
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
