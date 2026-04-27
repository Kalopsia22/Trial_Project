import Link from 'next/link';
import { Compass, Heart, Globe, BookOpen, Plane } from 'lucide-react';

export const metadata = {
  title: 'About — WanderList',
  description: 'The story behind the Travel Bucket List app.',
};

const techStack = [
  { name: 'Next.js 14', desc: 'App Router, SSG, dynamic routes', color: 'bg-ink-900 text-sand-50' },
  { name: 'Tailwind CSS', desc: 'Utility-first responsive styling', color: 'bg-ocean text-white' },
  { name: 'Framer Motion', desc: 'Smooth animations & transitions', color: 'bg-terracotta text-white' },
  { name: 'Lucide React', desc: 'Clean, consistent icon set', color: 'bg-sage text-white' },
  { name: 'Vercel', desc: 'One-click deployment', color: 'bg-ink-700 text-sand-100' },
];

const features = [
  {
    icon: <Globe size={20} />,
    title: 'Curated Destinations',
    desc: '6 meticulously described dream destinations spanning 5 continents.',
  },
  {
    icon: <BookOpen size={20} />,
    title: 'Filter & Explore',
    desc: 'Filter by continent or category to find destinations that match your travel style.',
  },
  {
    icon: <Plane size={20} />,
    title: 'Rich Detail Pages',
    desc: 'Each destination features highlights, fun facts, budget guides, and best travel times.',
  },
  {
    icon: <Heart size={20} />,
    title: 'Mobile-First Design',
    desc: 'Fully responsive layout that looks great on any screen — phone, tablet, or desktop.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 px-6 pb-20">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-ink-900 rounded-full mb-6">
            <Compass size={24} className="text-sand-100" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-900 mb-4">
            About <span className="italic text-terracotta">WanderList</span>
          </h1>
          <p className="text-ink-500 text-lg leading-relaxed">
            A passion project built for dreamers, planners, and everyone with a map on their wall.
          </p>
        </div>

        {/* Story */}
        <section className="mb-16">
          <div className="bg-white border border-sand-200 rounded-2xl p-8 flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-ink-900">The Story</h2>
            <p className="text-ink-600 leading-relaxed">
              WanderList started as a screening project — a chance to demonstrate familiarity with
              Next.js, React, and modern frontend patterns. But instead of a generic to-do list or
              product catalog, it became a travel bucket list: something I'd actually want to use.
            </p>
            <p className="text-ink-600 leading-relaxed">
              The app showcases Next.js 14 App Router patterns including server components,
              static site generation with <code className="bg-sand-100 px-1.5 py-0.5 rounded text-sm font-mono text-ink-700">generateStaticParams</code>,
              dynamic routes, and client-side filtering — all wrapped in a design that feels
              intentional rather than generic.
            </p>
            <p className="text-ink-600 leading-relaxed">
              Each destination was hand-written with real information — no lorem ipsum, no
              placeholder data. The goal was to build something worth exploring.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-semibold text-ink-900 mb-6">What's Inside</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white border border-sand-200 rounded-xl p-5 flex gap-4 hover:border-sand-400 transition-colors duration-200"
              >
                <div className="text-terracotta shrink-0 mt-0.5">{icon}</div>
                <div>
                  <h3 className="font-semibold text-ink-900 text-sm mb-1">{title}</h3>
                  <p className="text-ink-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-semibold text-ink-900 mb-6">Tech Stack</h2>
          <div className="flex flex-col gap-3">
            {techStack.map(({ name, desc, color }) => (
              <div
                key={name}
                className="flex items-center gap-4 bg-white border border-sand-200 rounded-xl px-5 py-4"
              >
                <span className={`text-xs font-bold px-3 py-1 rounded-full shrink-0 ${color}`}>
                  {name}
                </span>
                <span className="text-ink-500 text-sm">{desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-ink-900 text-sand-50 px-8 py-3.5 rounded-full font-medium hover:bg-terracotta transition-colors duration-300"
          >
            <Globe size={16} />
            Explore Destinations
          </Link>
        </div>
      </div>
    </div>
  );
}
