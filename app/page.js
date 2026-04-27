import DestinationsGrid from '@/components/DestinationsGrid';
import { destinations } from '@/lib/destinations';
import { MapPin, Globe, Plane } from 'lucide-react';

export default function HomePage() {
  const continents = [...new Set(destinations.map((d) => d.continent))].length;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-sand-100 to-sand-50">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-sand-200/60 blur-3xl" />
        <div className="absolute bottom-0 left-10 w-48 h-48 rounded-full bg-terracotta/10 blur-2xl" />

        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="flex items-center gap-2 text-terracotta">
              <Globe size={15} />
              <span className="text-sm font-medium tracking-widest uppercase">Wanderlust Awaits</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-ink-900 leading-[1.05] tracking-tight">
              The World is{' '}
              <span className="italic text-terracotta">Waiting</span>
              <br />
              for You
            </h1>

            <p className="font-body text-ink-500 text-lg leading-relaxed max-w-lg">
              A handpicked bucket list of destinations that deserve a spot in your passport.
              Save favourites, mark places visited, and track your progress.
            </p>

            <div className="flex flex-wrap gap-8 pt-4">
              {[
                { icon: <MapPin size={16} />, value: `${destinations.length}`, label: 'Destinations' },
                { icon: <Globe size={16} />, value: `${continents}`, label: 'Continents' },
                { icon: <Plane size={16} />, value: '∞', label: 'Possibilities' },
              ].map(({ icon, value, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="text-terracotta">{icon}</div>
                  <div>
                    <p className="font-display text-2xl font-bold text-ink-900">{value}</p>
                    <p className="text-xs text-ink-400 uppercase tracking-wider">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink-900">Dream Destinations</h2>
            <p className="text-ink-400 mt-1 text-sm">Search, filter, save favourites, and track your travels</p>
          </div>
        </div>
        <DestinationsGrid destinations={destinations} />
      </section>
    </div>
  );
}
