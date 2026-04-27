'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const [visited, setVisited] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const w = JSON.parse(localStorage.getItem('wl_wishlist') || '[]');
      const v = JSON.parse(localStorage.getItem('wl_visited') || '[]');
      setWishlist(w);
      setVisited(v);
    } catch {}
    setHydrated(true);
  }, []);

  const toggleWishlist = (id) => {
    setWishlist((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      localStorage.setItem('wl_wishlist', JSON.stringify(next));
      return next;
    });
  };

  const toggleVisited = (id) => {
    setVisited((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      localStorage.setItem('wl_visited', JSON.stringify(next));
      return next;
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, visited, toggleWishlist, toggleVisited, hydrated }}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used inside WishlistProvider');
  return ctx;
};
