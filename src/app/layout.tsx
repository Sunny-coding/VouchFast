import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

import { jakarta } from "@/components/font/jakarta";

export const metadata: Metadata = {
  title: "Applauz | Testimonials made easy",
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
      <body className={`overflow-x-hidden ${jakarta.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
