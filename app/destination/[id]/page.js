import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDestinationById, destinations } from '@/lib/destinations';
import { MapPin, Clock, DollarSign, Lightbulb, ArrowLeft, Star, Globe } from 'lucide-react';
import DetailActions from './DetailActions';

export async function generateStaticParams() {
  return destinations.map((d) => ({ id: d.id }));
}

export async function generateMetadata({ params }) {
  const dest = getDestinationById(params.id);
  if (!dest) return { title: 'Not Found' };
  return {
    title: `${dest.name}, ${dest.country} — WanderList`,
    description: dest.tagline,
  };
}

const budgetLabel = { '$': 'Budget', '$$': 'Moderate', '$$$': 'Splurge', '$$$$': 'Luxury' };

export default function DestinationPage({ params }) {
  const dest = getDestinationById(params.id);
  if (!dest) notFound();

  return (
    <div className="min-h-screen pt-16 relative z-10">
      {/* Hero image */}
      <div className="relative h-[55vh] md:h-[70vh] overflow-hidden">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-950 via-base-950/40 to-transparent" />

        {/* Back button */}
        <Link
          href="/"
          className="absolute top-6 left-6 flex items-center gap-2 text-text-primary glass px-4 py-2 rounded-full text-sm font-medium hover:bg-base-800/60 transition-all duration-200"
        >
          <ArrowLeft size={14} />
          Back
        </Link>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <Globe size={14} className="text-text-secondary" />
            <span className="text-text-secondary text-sm font-medium">{dest.continent}</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
            {dest.name}
          </h1>
          <div className="flex items-center gap-2 mt-1.5">
            <MapPin size={14} className="text-text-secondary" />
            <span className="text-text-secondary text-lg">{dest.country}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <p className="font-display text-xl md:text-2xl text-text-secondary italic leading-snug border-l-2 border-coral pl-5">
              {dest.tagline}
            </p>

            <div>
              <h2 className="font-display text-2xl font-semibold text-text-primary mb-3">About</h2>
              <p className="text-text-secondary leading-relaxed text-[1.05rem]">{dest.description}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-text-primary mb-4">Must-See Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dest.mustSee.map((item) => (
                  <li key={item} className="flex items-start gap-3 card-surface rounded-xl px-4 py-3">
                    <Star size={14} className="text-amber fill-amber/60 mt-0.5 shrink-0" />
                    <span className="text-text-primary text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface border border-surface-border rounded-2xl p-6 flex gap-4">
              <Lightbulb size={20} className="text-amber mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-amber uppercase tracking-widest font-medium mb-1">Did You Know?</p>
                <p className="text-text-secondary text-sm leading-relaxed">{dest.funFact}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-5">
            {/* Quick facts */}
            <div className="card-surface rounded-2xl p-6 flex flex-col gap-5">
              <h3 className="font-display text-lg font-semibold text-text-primary">Quick Facts</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="bg-base-700 rounded-lg p-2 shrink-0">
                    <Clock size={15} className="text-teal" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider">Best Time</p>
                    <p className="text-text-primary text-sm font-medium mt-0.5">{dest.bestTime}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-base-700 rounded-lg p-2 shrink-0">
                    <DollarSign size={15} className="text-amber" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider">Budget</p>
                    <span className="inline-block mt-1 text-xs font-semibold px-3 py-0.5 rounded-full bg-amber/15 text-amber border border-amber/30">
                      {dest.budget} — {budgetLabel[dest.budget]}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-2">Categories</p>
                  <div className="flex flex-wrap gap-2">
                    {dest.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-0.5 bg-base-700 text-text-secondary rounded-full font-medium border border-surface-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Wishlist / Visited buttons */}
            <DetailActions id={dest.id} />

            {/* Emoji card */}
            <div className="rounded-2xl p-6 flex flex-col items-center gap-2 text-center card-surface"
              style={{ borderColor: `${dest.color}40`, background: `${dest.color}08` }}>
              <span className="text-5xl">{dest.emoji}</span>
              <p className="font-display text-lg font-semibold text-text-primary">{dest.name}</p>
              <p className="text-text-muted text-xs">{dest.country}</p>
            </div>

            <Link
              href="/"
              className="w-full text-center border border-surface-border text-text-secondary rounded-xl py-3 text-sm font-medium hover:bg-surface hover:text-text-primary transition-all duration-200"
            >
              ← All Destinations
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
