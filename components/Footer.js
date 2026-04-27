import Link from 'next/link';
import { Compass, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-sand-200 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-terracotta rounded-full flex items-center justify-center">
                <Compass size={14} className="text-white" />
              </div>
              <span className="font-display text-sand-100 font-semibold">WanderList</span>
            </Link>
            <p className="text-ink-200 text-sm max-w-xs leading-relaxed">
              A curated bucket list of the world's most extraordinary destinations.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-2">
            <p className="text-sand-400 text-xs uppercase tracking-widest mb-1">Navigate</p>
            <Link href="/" className="text-ink-200 text-sm hover:text-sand-100 transition-colors">Destinations</Link>
            <Link href="/about" className="text-ink-200 text-sm hover:text-sand-100 transition-colors">About</Link>
          </nav>
        </div>

        <div className="border-t border-ink-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-ink-400 text-xs">© {new Date().getFullYear()} WanderList. Built with Next.js & Tailwind CSS.</p>
          <p className="text-ink-400 text-xs flex items-center gap-1">
            Made with <Heart size={11} className="text-terracotta fill-terracotta mx-0.5" /> for explorers
          </p>
        </div>
      </div>
    </footer>
  );
}
