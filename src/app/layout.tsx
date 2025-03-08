import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from 'next-auth/react';

import { ThemeProvider } from '@/providers/theme-provider';

import { jakarta } from '@/components/font/jakarta';
import Footer from '@/components/Footer';
import Navbar from '@/components/navbar';

import { Toaster } from '@/components/ui/toaster';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VouchFast | Testimonials made easy',
  description:
    'Testimonial collection and management made easy, for developers by developers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`overflow-x-hidden ${jakarta.className}`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>
            <Navbar />
            {children}
            <Analytics />
            <Footer />
            <Toaster />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
