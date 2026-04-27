import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDestinationById, destinations } from '@/lib/destinations';
import {
  MapPin,
  Clock,
  DollarSign,
  Lightbulb,
  ArrowLeft,
  Star,
  Globe,
} from 'lucide-react';

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
const budgetColor = {
  '$': 'bg-sage/20 text-sage',
  '$$': 'bg-sand-200 text-ink-600',
  '$$$': 'bg-terracotta/20 text-terracotta',
  '$$$$': 'bg-sand-300 text-ink-800',
};

export default function DestinationPage({ params }) {
  const dest = getDestinationById(params.id);
  if (!dest) notFound();

  return (
    <div className="min-h-screen pt-16">
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
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/30 to-transparent" />

        {/* Back button */}
        <Link
          href="/"
          className="absolute top-6 left-6 flex items-center gap-2 text-white/90 hover:text-white bg-black/25 hover:bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
        >
          <ArrowLeft size={14} />
          Back
        </Link>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <Globe size={14} className="text-sand-300" />
            <span className="text-sand-300 text-sm font-medium">{dest.continent}</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
            {dest.name}
          </h1>
          <div className="flex items-center gap-2 mt-1.5">
            <MapPin size={14} className="text-sand-300" />
            <span className="text-sand-300 text-lg">{dest.country}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Tagline */}
            <p className="font-display text-xl md:text-2xl text-ink-700 italic leading-snug">
              &ldquo;{dest.tagline}&rdquo;
            </p>

            {/* Description */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink-900 mb-3">About</h2>
              <p className="text-ink-600 leading-relaxed text-[1.05rem]">{dest.description}</p>
            </div>

            {/* Must see */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink-900 mb-4">
                Must-See Highlights
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dest.mustSee.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 bg-white border border-sand-200 rounded-xl px-4 py-3"
                  >
                    <Star
                      size={14}
                      className="text-sand-500 fill-sand-400 mt-0.5 shrink-0"
                    />
                    <span className="text-ink-700 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fun fact */}
            <div className="bg-sand-100 border border-sand-200 rounded-2xl p-6 flex gap-4">
              <div className="shrink-0">
                <Lightbulb size={20} className="text-sand-600 mt-0.5" />
              </div>
              <div>
                <p className="text-xs text-sand-600 uppercase tracking-widest font-medium mb-1">
                  Did You Know?
                </p>
                <p className="text-ink-700 text-sm leading-relaxed">{dest.funFact}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-5">
            {/* Quick facts */}
            <div className="bg-white border border-sand-200 rounded-2xl p-6 flex flex-col gap-5">
              <h3 className="font-display text-lg font-semibold text-ink-900">Quick Facts</h3>

              <div className="flex flex-col gap-4">
                {/* Best time */}
                <div className="flex items-start gap-3">
                  <div className="bg-sand-100 rounded-lg p-2 shrink-0">
                    <Clock size={15} className="text-ink-600" />
                  </div>
                  <div>
                    <p className="text-xs text-ink-400 uppercase tracking-wider">Best Time</p>
                    <p className="text-ink-800 text-sm font-medium mt-0.5">{dest.bestTime}</p>
                  </div>
                </div>

                {/* Budget */}
                <div className="flex items-start gap-3">
                  <div className="bg-sand-100 rounded-lg p-2 shrink-0">
                    <DollarSign size={15} className="text-ink-600" />
                  </div>
                  <div>
                    <p className="text-xs text-ink-400 uppercase tracking-wider">Budget Level</p>
                    <span
                      className={`inline-block mt-1 text-xs font-semibold px-3 py-0.5 rounded-full ${budgetColor[dest.budget]}`}
                    >
                      {dest.budget} — {budgetLabel[dest.budget]}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <p className="text-xs text-ink-400 uppercase tracking-wider mb-2">Categories</p>
                  <div className="flex flex-wrap gap-2">
                    {dest.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-0.5 bg-sand-100 text-ink-600 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Emoji card */}
            <div
              className="rounded-2xl p-6 flex flex-col items-center gap-2 text-center"
              style={{ backgroundColor: `${dest.color}15`, borderColor: `${dest.color}30`, borderWidth: 1 }}
            >
              <span className="text-5xl">{dest.emoji}</span>
              <p className="font-display text-lg font-semibold text-ink-900">{dest.name}</p>
              <p className="text-ink-500 text-xs">{dest.country}</p>
            </div>

            {/* Back link */}
            <Link
              href="/"
              className="w-full text-center border border-ink-900 text-ink-900 rounded-xl py-3 text-sm font-medium hover:bg-ink-900 hover:text-sand-50 transition-all duration-200"
            >
              ← All Destinations
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
