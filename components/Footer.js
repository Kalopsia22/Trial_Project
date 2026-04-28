import Link from 'next/link';
import { Compass, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-base-900 border-t border-surface-border mt-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gradient-to-br from-coral to-amber rounded-lg flex items-center justify-center">
                <Compass size={15} className="text-white" />
              </div>
              <span className="font-display text-text-primary font-semibold">WanderList</span>
            </Link>
            <p className="text-text-muted text-sm max-w-xs leading-relaxed">
              A curated bucket list of the world's most extraordinary destinations.
            </p>
          </div>
          <nav className="flex flex-col gap-2">
            <p className="text-text-dim text-xs uppercase tracking-widest mb-1">Navigate</p>
            <Link href="/" className="text-text-muted text-sm hover:text-text-primary transition-colors">Destinations</Link>
            <Link href="/my-list" className="text-text-muted text-sm hover:text-text-primary transition-colors">My List</Link>
            <Link href="/about" className="text-text-muted text-sm hover:text-text-primary transition-colors">About</Link>
          </nav>
        </div>
        <div className="border-t border-surface-border mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-text-dim text-xs">© {new Date().getFullYear()} WanderList. Built with Next.js & Tailwind CSS.</p>
          <p className="text-text-dim text-xs flex items-center gap-1">
            Made with <Heart size={11} className="text-coral fill-coral mx-0.5" /> for explorers
          </p>
        </div>
      </div>
    </footer>
  );
}
