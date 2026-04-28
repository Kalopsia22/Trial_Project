import Link from 'next/link';
import { Compass, Heart, Globe, BookOpen, Plane } from 'lucide-react';

export const metadata = {
  title: 'About — WanderList',
  description: 'The story behind the Travel Bucket List app.',
};

const techStack = [
  { name: 'Next.js 14', desc: 'App Router, SSG, dynamic routes', accent: 'text-text-primary bg-base-700 border-surface-border' },
  { name: 'Tailwind CSS', desc: 'Utility-first responsive styling', accent: 'text-teal bg-teal/10 border-teal/30' },
  { name: 'React 18', desc: 'Client components, hooks, context', accent: 'text-violet bg-violet/10 border-violet/30' },
  { name: 'Lucide React', desc: 'Clean, consistent icon set', accent: 'text-amber bg-amber/10 border-amber/30' },
  { name: 'Vercel', desc: 'One-click deployment', accent: 'text-coral bg-coral/10 border-coral/30' },
];

const features = [
  { icon: <Globe size={20} className="text-teal" />, title: 'Curated Destinations', desc: '9 meticulously described dream destinations spanning 6 continents.' },
  { icon: <BookOpen size={20} className="text-violet" />, title: 'Search & Filter', desc: 'Filter by continent, category, or search — results update instantly.' },
  { icon: <Heart size={20} className="text-coral" />, title: 'Wishlist & Visited', desc: 'Save favourites and track places you\'ve been. Persists across sessions.' },
  { icon: <Plane size={20} className="text-amber" />, title: 'Mobile-First Design', desc: 'Fully responsive layout that looks great on any screen size.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 px-6 pb-20 relative z-10">
      {/* Ambient glow */}
      <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-violet/6 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-coral to-amber rounded-2xl mb-6 shadow-glow-coral">
            <Compass size={24} className="text-white" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
            About <span className="text-gradient-coral italic">WanderList</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            A passion project built for dreamers, planners, and everyone with a map on their wall.
          </p>
        </div>

        {/* Story */}
        <section className="mb-12">
          <div className="card-surface rounded-2xl p-8 flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-text-primary">The Story</h2>
            <p className="text-text-secondary leading-relaxed">
              WanderList started as a Next.js screening project — a chance to demonstrate familiarity
              with App Router, server components, and modern frontend patterns. Instead of a generic
              to-do list, it became something worth actually using.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Every destination was hand-written with real information — best seasons, honest budget
              guidance, fun facts, must-see lists. The goal was to build something you'd actually open
              when planning a trip.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-semibold text-text-primary mb-6">What's Inside</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="card-surface card-surface-hover rounded-xl p-5 flex gap-4 transition-colors duration-200">
                <div className="shrink-0 mt-0.5">{icon}</div>
                <div>
                  <h3 className="font-semibold text-text-primary text-sm mb-1">{title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-semibold text-text-primary mb-6">Tech Stack</h2>
          <div className="flex flex-col gap-3">
            {techStack.map(({ name, desc, accent }) => (
              <div key={name} className="flex items-center gap-4 card-surface rounded-xl px-5 py-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full shrink-0 border ${accent}`}>
                  {name}
                </span>
                <span className="text-text-muted text-sm">{desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-coral to-amber text-white px-8 py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity shadow-glow-coral"
          >
            <Globe size={16} />
            Explore Destinations
          </Link>
        </div>
      </div>
    </div>
  );
}
