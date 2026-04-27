'use client';

import { useState } from 'react';
import DestinationCard from './DestinationCard';
import FilterBar from './FilterBar';

export default function DestinationsGrid({ destinations }) {
  const [activeContinent, setActiveContinent] = useState('All');
  const [activeTag, setActiveTag] = useState('All');

  const filtered = destinations.filter((d) => {
    const continentMatch = activeContinent === 'All' || d.continent === activeContinent;
    const tagMatch = activeTag === 'All' || d.tags.includes(activeTag);
    return continentMatch && tagMatch;
  });

  return (
    <>
      <FilterBar
        activeContinent={activeContinent}
        setActiveContinent={setActiveContinent}
        activeTag={activeTag}
        setActiveTag={setActiveTag}
      />

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="font-display text-2xl text-ink-400 italic">No destinations match this filter.</p>
          <p className="text-ink-300 mt-2 text-sm">Try a different combination.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((destination, i) => (
            <DestinationCard key={destination.id} destination={destination} index={i} />
          ))}
        </div>
      )}
    </>
  );
}
