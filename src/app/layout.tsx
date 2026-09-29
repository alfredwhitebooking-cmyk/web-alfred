import type { Metadata } from "next";
import { Bebas_Neue, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LUNA VERCEL — Artista Musical | Bio, Fotos, Videos y Shows",
  description:
    "Sitio brochure de LUNA VERCEL. Descubre su historia, galería de fotos, videos musicales, discografía, próximos shows y bookings.",
  keywords: [
    "artista musical",
    "música",
    "brochure",
    "bio",
    "videos",
    "shows",
    "LUNA VERCEL",
  ],
  authors: [{ name: "LUNA VERCEL" }],
  openGraph: {
    title: "LUNA VERCEL — Artista Musical",
    description: "Historia, fotos, videos y shows en un brochure animado.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUNA VERCEL — Artista Musical",
    description: "Historia, fotos, videos y shows en un brochure animado.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <body
        className={`${bebas.variable} ${inter.variable} ${playfair.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
