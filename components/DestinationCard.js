'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, Heart, CheckCircle } from 'lucide-react';
import { useWishlist } from '@/lib/useWishlist';

const budgetLabel = { '$': 'Budget', '$$': 'Moderate', '$$$': 'Splurge', '$$$$': 'Luxury' };

export default function DestinationCard({ destination, index }) {
  const { wishlist, visited, toggleWishlist, toggleVisited } = useWishlist();
  const isWishlisted = wishlist.includes(destination.id);
  const isVisited = visited.includes(destination.id);

  return (
    <article className="group relative bg-white border border-sand-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col">
      {/* Image */}
      <Link href={`/destination/${destination.id}`} className="block relative h-52 overflow-hidden">
        <Image
          src={destination.thumbnail}
          alt={destination.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />

        {/* Visited ribbon */}
        {isVisited && (
          <div className="absolute top-0 left-0 bg-sage text-white text-xs font-semibold px-3 py-1 rounded-br-xl flex items-center gap-1">
            <CheckCircle size={11} /> Visited
          </div>
        )}

        {/* Emoji badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full w-9 h-9 flex items-center justify-center text-lg shadow-sm">
          {destination.emoji}
        </div>

        {/* Continent tag */}
        <div className="absolute bottom-3 left-3">
          <span className="text-xs text-white/90 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full font-medium tracking-wide">
            {destination.continent}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <Link href={`/destination/${destination.id}`} className="flex-1">
            <h2 className="font-display text-xl font-semibold text-ink-900 leading-tight group-hover:text-terracotta transition-colors duration-200">
              {destination.name}
            </h2>
            <div className="flex items-center gap-1 mt-0.5">
              <MapPin size={12} className="text-ink-400" />
              <span className="text-ink-400 text-sm">{destination.country}</span>
            </div>
          </Link>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Visited toggle */}
            <button
              onClick={() => toggleVisited(destination.id)}
              title={isVisited ? 'Mark as not visited' : 'Mark as visited'}
              className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 ${
                isVisited
                  ? 'bg-sage border-sage text-white'
                  : 'border-sand-200 text-ink-300 hover:border-sage hover:text-sage'
              }`}
            >
              <CheckCircle size={14} />
            </button>

            {/* Wishlist toggle */}
            <button
              onClick={() => toggleWishlist(destination.id)}
              title={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
              className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 ${
                isWishlisted
                  ? 'bg-terracotta border-terracotta text-white'
                  : 'border-sand-200 text-ink-300 hover:border-terracotta hover:text-terracotta'
              }`}
            >
              <Heart size={14} className={isWishlisted ? 'fill-white' : ''} />
            </button>
          </div>
        </div>

        <Link href={`/destination/${destination.id}`}>
          <p className="text-ink-600 text-sm leading-relaxed line-clamp-2">
            {destination.tagline}
          </p>
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {destination.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-0.5 bg-sand-100 text-ink-600 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between pt-2 border-t border-sand-100">
          <div className="flex items-center gap-1 text-ink-400">
            <Clock size={12} />
            <span className="text-xs">{destination.bestTime}</span>
          </div>
          <span className="text-xs text-ink-500 font-medium">
            {destination.budget} · {budgetLabel[destination.budget]}
          </span>
        </div>
      </div>
    </article>
  );
}
