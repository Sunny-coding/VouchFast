import './globals.css';

import { jakarta } from '@/components/font/jakarta';
import Footer from '@/components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { ThemeProvider } from '@/providers/theme-provider';

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
    <html lang='en' suppressHydrationWarning>
      <body className={`overflow-x-hidden ${jakarta.className}`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
