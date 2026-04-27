import Link from 'next/link';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <Compass size={48} className="text-sand-400 mb-6 animate-float" />
      <h1 className="font-display text-5xl font-bold text-ink-900 mb-3">Lost at Sea</h1>
      <p className="text-ink-400 text-lg mb-8">This page doesn't exist — but the world does.</p>
      <Link
        href="/"
        className="bg-ink-900 text-sand-50 px-6 py-3 rounded-full text-sm font-medium hover:bg-terracotta transition-colors duration-300"
      >
        Back to Destinations
      </Link>
    </div>
  );
}
