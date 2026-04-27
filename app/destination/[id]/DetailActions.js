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
            ? 'bg-terracotta text-white border-terracotta'
            : 'border-sand-300 text-ink-600 hover:border-terracotta hover:text-terracotta'
        }`}
      >
        <Heart size={15} className={isWishlisted ? 'fill-white' : ''} />
        {isWishlisted ? 'Wishlisted' : 'Wishlist'}
      </button>
      <button
        onClick={() => toggleVisited(id)}
        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium border transition-all duration-200 ${
          isVisited
            ? 'bg-sage text-white border-sage'
            : 'border-sand-300 text-ink-600 hover:border-sage hover:text-sage'
        }`}
      >
        <CheckCircle size={15} />
        {isVisited ? 'Visited!' : 'Been Here'}
      </button>
    </div>
  );
}
