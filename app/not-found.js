import Link from 'next/link';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative z-10">
      <Compass size={48} className="text-text-muted mb-6 animate-float" />
      <h1 className="font-display text-5xl font-bold text-text-primary mb-3">Lost at Sea</h1>
      <p className="text-text-secondary text-lg mb-8">This page doesn't exist — but the world does.</p>
      <Link
        href="/"
        className="bg-gradient-to-r from-coral to-amber text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Back to Destinations
      </Link>
    </div>
  );
}
