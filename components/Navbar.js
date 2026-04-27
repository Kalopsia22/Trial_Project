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
          ? 'bg-sand-50/95 backdrop-blur-md shadow-sm border-b border-sand-200'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-ink-900 rounded-full flex items-center justify-center group-hover:bg-terracotta transition-colors duration-300">
            <Compass size={16} className="text-sand-100" />
          </div>
          <span className="font-display font-semibold text-ink-900 text-lg tracking-tight">
            Wander<span className="text-terracotta">List</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-body text-sm font-medium tracking-wide transition-colors duration-200 relative group flex items-center gap-1.5 ${
                  pathname === href ? 'text-terracotta' : 'text-ink-700 hover:text-ink-900'
                }`}
              >
                {label}
                {label === 'My List' && wishlist.length > 0 && (
                  <span className="bg-terracotta text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-terracotta transition-all duration-300 ${
                    pathname === href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button
          className="md:hidden relative text-ink-800 hover:text-terracotta transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
          {wishlist.length > 0 && !menuOpen && (
            <span className="absolute -top-1 -right-1 bg-terracotta text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-sand-50 border-t border-sand-200 px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`font-body text-sm font-medium flex items-center gap-2 ${
                pathname === href ? 'text-terracotta' : 'text-ink-700'
              }`}
            >
              {label}
              {label === 'My List' && wishlist.length > 0 && (
                <span className="bg-terracotta text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
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
