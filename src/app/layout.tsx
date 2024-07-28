import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kailon Simon | Full Stack Web Developer',
  description: 'Kailon Simon is a Full Stack Web Developer specializing in creating high-quality, responsive, and user-friendly websites and applications.',
  keywords: ['Full Stack Developer', 'Web Development', 'React', 'Node.js', 'JavaScript', 'TypeScript'],
  authors: [{ name: 'Kailon Simon' }],
  openGraph: {
    title: 'Kailon Simon | Full Stack Web Developer',
    description: 'Kailon Simon is a Full Stack Web Developer specializing in creating high-quality, responsive, and user-friendly websites and applications.',
    url: 'https://kailon.dev',
    siteName: 'Kailon Simon Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-zinc-900 pt-[64px]">
        <Navbar />
        <main className="flex-grow mx-auto w-full px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
