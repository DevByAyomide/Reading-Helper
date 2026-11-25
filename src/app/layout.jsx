import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Reading Helper',
  description: 'A web app that removes procrastination, distractions, and clutter from your reading experience.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#f7f7f5] px-5 pt-6 text-neutral-950 sm:px-8 sm:pt-8">
        {children}
        <Navigation />
      </body>
    </html>
  );
}
