import DestinationsGrid from '@/components/DestinationsGrid';
import { destinations } from '@/lib/destinations';
import { MapPin, Globe, Plane, Sparkles } from 'lucide-react';

export default function HomePage() {
  const continents = [...new Set(destinations.map((d) => d.continent))].length;

  return (
    <div className="min-h-screen relative z-10">
      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        {/* Radial glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-coral/8 blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-72 h-72 rounded-full bg-teal/6 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          {/* Kicker pill */}
          <div className="inline-flex items-center gap-2 bg-surface border border-surface-border rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-coral rounded-full animate-pulse" />
            <span className="text-xs text-text-secondary font-medium tracking-widest uppercase">9 Dream Destinations</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary leading-[1.05] tracking-tight mb-6">
            The World is{' '}
            <span className="text-gradient-coral italic">Waiting</span>
            <br />
            for You
          </h1>

          <p className="font-body text-text-secondary text-lg leading-relaxed max-w-lg mb-10">
            A handpicked bucket list across {continents} continents. Save favourites,
            mark places visited, and track your progress.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8">
            {[
              { icon: <MapPin size={16} className="text-coral" />, value: `${destinations.length}`, label: 'Destinations' },
              { icon: <Globe size={16} className="text-teal" />, value: `${continents}`, label: 'Continents' },
              { icon: <Plane size={16} className="text-amber" />, value: '∞', label: 'Adventures' },
            ].map(({ icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="bg-surface border border-surface-border rounded-xl p-2">{icon}</div>
                <div>
                  <p className="font-display text-2xl font-bold text-text-primary">{value}</p>
                  <p className="text-xs text-text-muted uppercase tracking-wider">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
      </div>

      {/* Grid section */}
      <section className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display text-3xl font-semibold text-text-primary">
              Dream Destinations
            </h2>
            <p className="text-text-muted mt-1 text-sm">Search, filter, wishlist, and track your travels</p>
          </div>
        </div>
        <DestinationsGrid destinations={destinations} />
      </section>
    </div>
  );
}
