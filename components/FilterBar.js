'use client';

const continents = ['All', 'Asia', 'Europe', 'Africa', 'South America'];
const tags = ['All', 'Culture', 'Nature', 'Adventure', 'Food', 'Beach', 'History'];

export default function FilterBar({ activeContinent, setActiveContinent, activeTag, setActiveTag }) {
  return (
    <div className="flex flex-col gap-3 mb-10">
      {/* Continent filter */}
      <div className="flex flex-wrap gap-2">
        {continents.map((c) => (
          <button
            key={c}
            onClick={() => setActiveContinent(c)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
              activeContinent === c
                ? 'bg-ink-900 text-sand-50 border-ink-900'
                : 'bg-white text-ink-600 border-sand-200 hover:border-ink-400'
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
            className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all duration-200 border ${
              activeTag === t
                ? 'bg-terracotta text-white border-terracotta'
                : 'bg-sand-50 text-ink-500 border-sand-200 hover:border-terracotta hover:text-terracotta'
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
