'use client';

import { useWishlist } from '@/lib/useWishlist';
import { destinations } from '@/lib/destinations';
import DestinationCard from '@/components/DestinationCard';
import Link from 'next/link';
import { Heart, CheckCircle, Globe, Compass } from 'lucide-react';

export default function MyListClient() {
  const { wishlist, visited, hydrated } = useWishlist();

  const wishlisted = destinations.filter((d) => wishlist.includes(d.id));
  const visitedDests = destinations.filter((d) => visited.includes(d.id));

  const continentsVisited = [...new Set(visitedDests.map((d) => d.continent))].length;
  const pct = Math.round((visitedDests.length / destinations.length) * 100);

  if (!hydrated) {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-sand-300 border-t-terracotta rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-900 mb-2">
            My <span className="italic text-terracotta">Travel List</span>
          </h1>
          <p className="text-ink-400">Your personal wishlist and the places you've already explored.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: <Heart size={18} className="text-terracotta" />, value: wishlist.length, label: 'Wishlisted' },
            { icon: <CheckCircle size={18} className="text-sage" />, value: visited.length, label: 'Visited' },
            { icon: <Globe size={18} className="text-ocean" />, value: continentsVisited, label: 'Continents' },
            { icon: <Compass size={18} className="text-sand-600" />, value: `${pct}%`, label: 'of our list' },
          ].map(({ icon, value, label }) => (
            <div key={label} className="bg-white border border-sand-200 rounded-2xl p-5 flex flex-col gap-2">
              {icon}
              <p className="font-display text-3xl font-bold text-ink-900">{value}</p>
              <p className="text-ink-400 text-sm">{label}</p>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        {visited.length > 0 && (
          <div className="mb-12 bg-white border border-sand-200 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-3">
              <p className="font-display text-lg font-semibold text-ink-800">Bucket List Progress</p>
              <p className="text-sm text-ink-400">{visited.length} / {destinations.length} destinations</p>
            </div>
            <div className="h-3 bg-sand-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-terracotta to-sand-500 rounded-full transition-all duration-700"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        )}

        {/* Wishlist section */}
        <section className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Heart size={20} className="text-terracotta fill-terracotta" />
            <h2 className="font-display text-2xl font-semibold text-ink-900">Wishlist</h2>
            <span className="text-ink-400 text-sm ml-1">({wishlisted.length})</span>
          </div>

          {wishlisted.length === 0 ? (
            <div className="bg-white border border-dashed border-sand-300 rounded-2xl p-10 text-center">
              <p className="font-display text-xl text-ink-400 italic mb-2">Your wishlist is empty</p>
              <p className="text-ink-300 text-sm mb-5">Tap the ❤️ on any destination card to save it here.</p>
              <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-terracotta hover:underline">
                <Globe size={14} /> Browse destinations
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlisted.map((d, i) => (
                <DestinationCard key={d.id} destination={d} index={i} />
              ))}
            </div>
          )}
        </section>

        {/* Visited section */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle size={20} className="text-sage" />
            <h2 className="font-display text-2xl font-semibold text-ink-900">Places Visited</h2>
            <span className="text-ink-400 text-sm ml-1">({visitedDests.length})</span>
          </div>

          {visitedDests.length === 0 ? (
            <div className="bg-white border border-dashed border-sand-300 rounded-2xl p-10 text-center">
              <p className="font-display text-xl text-ink-400 italic mb-2">No visited places yet</p>
              <p className="text-ink-300 text-sm">Tap the ✅ on a card once you've been there.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visitedDests.map((d, i) => (
                <DestinationCard key={d.id} destination={d} index={i} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
