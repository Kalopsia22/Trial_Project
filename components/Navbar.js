'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, Menu, X, Heart } from 'lucide-react';
import { useWishlist } from '@/lib/useWishlist';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { wishlist } = useWishlist();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Destinations' },
    { href: '/my-list', label: 'My List' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-base-950/90 backdrop-blur-xl border-b border-surface-border shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-gradient-to-br from-coral to-amber rounded-xl flex items-center justify-center shadow-glow-coral group-hover:scale-105 transition-transform duration-200">
            <Compass size={17} className="text-white" />
          </div>
          <span className="font-display font-semibold text-text-primary text-lg tracking-tight">
            Wander<span className="text-gradient-coral">List</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-body text-sm font-medium tracking-wide transition-all duration-200 relative group flex items-center gap-1.5 ${
                  pathname === href ? 'text-coral' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {label}
                {label === 'My List' && wishlist.length > 0 && (
                  <span className="bg-coral text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-glow-coral">
                    {wishlist.length}
                  </span>
                )}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-coral to-amber transition-all duration-300 ${
                    pathname === href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden relative text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
          {wishlist.length > 0 && !menuOpen && (
            <span className="absolute -top-1 -right-1 bg-coral text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-base-900/95 backdrop-blur-xl border-t border-surface-border px-6 py-5 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`font-body text-sm font-medium flex items-center gap-2 ${
                pathname === href ? 'text-coral' : 'text-text-secondary'
              }`}
            >
              {label}
              {label === 'My List' && wishlist.length > 0 && (
                <span className="bg-coral text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
