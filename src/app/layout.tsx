import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

import { jakarta } from "@/components/font/jakarta";

export const metadata: Metadata = {
  title: "VouchFast | Testimonials made easy",
  description:
    "Testimonial collection and management made easy, for developers by developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${jakarta.className} dark`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
