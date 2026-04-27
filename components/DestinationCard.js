'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, DollarSign } from 'lucide-react';

const budgetLabel = { '$': 'Budget', '$$': 'Moderate', '$$$': 'Splurge', '$$$$': 'Luxury' };

export default function DestinationCard({ destination, index }) {
  const delay = (index % 6) * 80;

  return (
    <Link
      href={`/destination/${destination.id}`}
      className="group block"
      style={{ animationDelay: `${delay}ms` }}
    >
      <article className="bg-white border border-sand-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={destination.thumbnail}
            alt={destination.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />

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
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-3 flex-1">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink-900 leading-tight group-hover:text-terracotta transition-colors duration-200">
              {destination.name}
            </h2>
            <div className="flex items-center gap-1 mt-0.5">
              <MapPin size={12} className="text-ink-400" />
              <span className="text-ink-400 text-sm">{destination.country}</span>
            </div>
          </div>

          <p className="text-ink-600 text-sm leading-relaxed line-clamp-2 flex-1">
            {destination.tagline}
          </p>

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
            <div className="flex items-center gap-1">
              <DollarSign size={12} className="text-sand-500" />
              <span className="text-xs text-ink-500 font-medium">
                {budgetLabel[destination.budget]}
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
