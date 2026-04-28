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
        <div className="w-8 h-8 border-2 border-surface-border border-t-coral rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 px-6 pb-20 relative z-10">
      {/* Ambient glow */}
      <div className="absolute top-40 left-20 w-72 h-72 rounded-full bg-coral/6 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-2">
            My <span className="text-gradient-coral italic">Travel List</span>
          </h1>
          <p className="text-text-muted">Your personal wishlist and the places you've already explored.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: <Heart size={18} className="text-coral" />, value: wishlist.length, label: 'Wishlisted', accent: 'border-coral/20' },
            { icon: <CheckCircle size={18} className="text-teal" />, value: visited.length, label: 'Visited', accent: 'border-teal/20' },
            { icon: <Globe size={18} className="text-violet" />, value: continentsVisited, label: 'Continents', accent: 'border-violet/20' },
            { icon: <Compass size={18} className="text-amber" />, value: `${pct}%`, label: 'of our list', accent: 'border-amber/20' },
          ].map(({ icon, value, label, accent }) => (
            <div key={label} className={`card-surface rounded-2xl p-5 flex flex-col gap-2 border ${accent}`}>
              {icon}
              <p className="font-display text-3xl font-bold text-text-primary">{value}</p>
              <p className="text-text-muted text-sm">{label}</p>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        {visited.length > 0 && (
          <div className="mb-12 card-surface rounded-2xl p-6">
            <div className="flex justify-between items-center mb-3">
              <p className="font-display text-lg font-semibold text-text-primary">Bucket List Progress</p>
              <p className="text-sm text-text-muted">{visited.length} / {destinations.length} destinations</p>
            </div>
            <div className="h-2.5 bg-base-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-coral to-amber rounded-full transition-all duration-700"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        )}

        {/* Wishlist */}
        <section className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Heart size={20} className="text-coral fill-coral" />
            <h2 className="font-display text-2xl font-semibold text-text-primary">Wishlist</h2>
            <span className="text-text-muted text-sm ml-1">({wishlisted.length})</span>
          </div>

          {wishlisted.length === 0 ? (
            <div className="card-surface border-dashed border-surface-border rounded-2xl p-10 text-center">
              <p className="font-display text-xl text-text-muted italic mb-2">Your wishlist is empty</p>
              <p className="text-text-dim text-sm mb-5">Tap the ❤️ on any destination card to save it here.</p>
              <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-coral hover:underline">
                <Globe size={14} /> Browse destinations
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlisted.map((d, i) => <DestinationCard key={d.id} destination={d} index={i} />)}
            </div>
          )}
        </section>

        {/* Visited */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle size={20} className="text-teal" />
            <h2 className="font-display text-2xl font-semibold text-text-primary">Places Visited</h2>
            <span className="text-text-muted text-sm ml-1">({visitedDests.length})</span>
          </div>

          {visitedDests.length === 0 ? (
            <div className="card-surface border-dashed border-surface-border rounded-2xl p-10 text-center">
              <p className="font-display text-xl text-text-muted italic mb-2">No visited places yet</p>
              <p className="text-text-dim text-sm">Tap the ✅ on a card once you've been there.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visitedDests.map((d, i) => <DestinationCard key={d.id} destination={d} index={i} />)}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
