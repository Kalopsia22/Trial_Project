'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, Heart, CheckCircle } from 'lucide-react';
import { useWishlist } from '@/lib/useWishlist';

const budgetLabel = { '$': 'Budget', '$$': 'Moderate', '$$$': 'Splurge', '$$$$': 'Luxury' };

export default function DestinationCard({ destination }) {
  const { wishlist, visited, toggleWishlist, toggleVisited } = useWishlist();
  const isWishlisted = wishlist.includes(destination.id);
  const isVisited = visited.includes(destination.id);

  return (
    <article className="group relative rounded-2xl overflow-hidden card-surface card-surface-hover shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col">
      {/* Image */}
      <Link href={`/destination/${destination.id}`} className="block relative h-52 overflow-hidden">
        <Image
          src={destination.thumbnail}
          alt={destination.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-base-950/80 via-base-950/20 to-transparent" />

        {/* Visited ribbon */}
        {isVisited && (
          <div className="absolute top-0 left-0 bg-teal/90 text-base-950 text-xs font-semibold px-3 py-1 rounded-br-xl flex items-center gap-1">
            <CheckCircle size={11} /> Visited
          </div>
        )}

        {/* Emoji badge */}
        <div className="absolute top-3 right-3 glass rounded-full w-9 h-9 flex items-center justify-center text-lg">
          {destination.emoji}
        </div>

        {/* Continent tag */}
        <div className="absolute bottom-3 left-3">
          <span className="text-xs text-text-primary/80 glass px-2.5 py-1 rounded-full font-medium tracking-wide">
            {destination.continent}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <Link href={`/destination/${destination.id}`} className="flex-1 min-w-0">
            <h2 className="font-display text-xl font-semibold text-text-primary leading-tight group-hover:text-coral transition-colors duration-200 truncate">
              {destination.name}
            </h2>
            <div className="flex items-center gap-1 mt-0.5">
              <MapPin size={12} className="text-text-muted shrink-0" />
              <span className="text-text-muted text-sm truncate">{destination.country}</span>
            </div>
          </Link>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => toggleVisited(destination.id)}
              title={isVisited ? 'Mark as not visited' : 'Mark as visited'}
              className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 ${
                isVisited
                  ? 'bg-teal/20 border-teal text-teal'
                  : 'border-surface-border text-text-dim hover:border-teal hover:text-teal'
              }`}
            >
              <CheckCircle size={14} />
            </button>
            <button
              onClick={() => toggleWishlist(destination.id)}
              title={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
              className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 ${
                isWishlisted
                  ? 'bg-coral/20 border-coral text-coral'
                  : 'border-surface-border text-text-dim hover:border-coral hover:text-coral'
              }`}
            >
              <Heart size={14} className={isWishlisted ? 'fill-coral' : ''} />
            </button>
          </div>
        </div>

        <Link href={`/destination/${destination.id}`}>
          <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
            {destination.tagline}
          </p>
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {destination.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-0.5 bg-base-700/60 text-text-secondary rounded-full font-medium border border-surface-border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between pt-2 border-t border-surface-border">
          <div className="flex items-center gap-1 text-text-muted">
            <Clock size={12} />
            <span className="text-xs">{destination.bestTime}</span>
          </div>
          <span className="text-xs text-amber font-medium">
            {destination.budget} · {budgetLabel[destination.budget]}
          </span>
        </div>
      </div>
    </article>
  );
}
