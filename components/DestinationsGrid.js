'use client';

import { useState } from 'react';
import DestinationCard from './DestinationCard';
import FilterBar from './FilterBar';
import { useWishlist } from '@/lib/useWishlist';

export default function DestinationsGrid({ destinations }) {
  const [search, setSearch] = useState('');
  const [activeContinent, setActiveContinent] = useState('All');
  const [activeTag, setActiveTag] = useState('All');
  const [activeList, setActiveList] = useState('All');
  const { wishlist, visited } = useWishlist();

  const filtered = destinations.filter((d) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      d.name.toLowerCase().includes(q) ||
      d.country.toLowerCase().includes(q) ||
      d.tags.some((t) => t.toLowerCase().includes(q)) ||
      d.tagline.toLowerCase().includes(q);

    const matchContinent = activeContinent === 'All' || d.continent === activeContinent;
    const matchTag = activeTag === 'All' || d.tags.includes(activeTag);
    const matchList =
      activeList === 'All' ||
      (activeList === 'Wishlisted' && wishlist.includes(d.id)) ||
      (activeList === 'Visited' && visited.includes(d.id));

    return matchSearch && matchContinent && matchTag && matchList;
  });

  return (
    <>
      <FilterBar
        search={search} setSearch={setSearch}
        activeContinent={activeContinent} setActiveContinent={setActiveContinent}
        activeTag={activeTag} setActiveTag={setActiveTag}
        activeList={activeList} setActiveList={setActiveList}
      />

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="font-display text-2xl text-ink-400 italic">No destinations match.</p>
          <p className="text-ink-300 mt-2 text-sm">Try clearing some filters.</p>
        </div>
      ) : (
        <>
          <p className="text-ink-400 text-sm mb-4">{filtered.length} destination{filtered.length !== 1 ? 's' : ''}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((destination, i) => (
              <DestinationCard key={destination.id} destination={destination} index={i} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
