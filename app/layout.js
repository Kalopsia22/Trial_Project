import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Travel Bucket List — Wander Further',
  description: 'A curated collection of dream destinations to inspire your next great adventure.',
  keywords: ['travel', 'bucket list', 'destinations', 'adventure', 'wanderlust'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
