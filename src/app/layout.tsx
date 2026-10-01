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
  title: "ALFRED WHITE — Artista Musical | Reggaeton · Trap · Producción",
  description:
    "Sitio brochure de ALFRED WHITE. Desde las montañas de Colombia, hace reggaeton, trap y de todo lo que caiga. Bio, fotos, videos, discografía, shows y bookings.",
  keywords: [
    "Alfred White",
    "artista musical",
    "reggaeton",
    "trap",
    "Colombia",
    "productor musical",
    "brochure",
    "bio",
    "videos",
    "shows",
  ],
  authors: [{ name: "Alfred White" }],
  openGraph: {
    title: "ALFRED WHITE — Artista Musical",
    description:
      "Desde las montañas de Colombia. Reggaeton, trap y de todo lo que caiga. La música no tiene límites.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ALFRED WHITE — Artista Musical",
    description:
      "Desde las montañas de Colombia. Reggaeton, trap y de todo lo que caiga.",
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
