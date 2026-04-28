'use client';

import { Heart, CheckCircle } from 'lucide-react';
import { useWishlist } from '@/lib/useWishlist';

export default function DetailActions({ id }) {
  const { wishlist, visited, toggleWishlist, toggleVisited } = useWishlist();
  const isWishlisted = wishlist.includes(id);
  const isVisited = visited.includes(id);

  return (
    <div className="flex gap-3">
      <button
        onClick={() => toggleWishlist(id)}
        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium border transition-all duration-200 ${
          isWishlisted
            ? 'bg-coral/20 text-coral border-coral/50 shadow-glow-coral'
            : 'border-surface-border text-text-secondary hover:border-coral/50 hover:text-coral hover:bg-coral/10'
        }`}
      >
        <Heart size={15} className={isWishlisted ? 'fill-coral' : ''} />
        {isWishlisted ? 'Wishlisted' : 'Wishlist'}
      </button>
      <button
        onClick={() => toggleVisited(id)}
        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium border transition-all duration-200 ${
          isVisited
            ? 'bg-teal/20 text-teal border-teal/50 shadow-glow-teal'
            : 'border-surface-border text-text-secondary hover:border-teal/50 hover:text-teal hover:bg-teal/10'
        }`}
      >
        <CheckCircle size={15} />
        {isVisited ? 'Visited!' : 'Been Here'}
      </button>
    </div>
  );
}
