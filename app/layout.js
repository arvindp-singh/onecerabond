import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "OneCeraBond - Premium Tile Adhesives",
  description:
    "OneCeraBond provides high‑performance tile adhesives and installation products engineered for durability, strength, and professional‑grade results in residential and commercial projects.",
  keywords: [
    "OneCeraBond",
    "tile adhesive",
    "tile mortar",
    "tile installation",
    "construction materials",
    "flooring adhesive",
    "wall tile adhesive",
    "ceramic tile",
    "porcelain tile",
    "building products",
  ],
  authors: [{ name: "OneCeraBond", url: "https://onecerabond.com" }],
  creator: "OneCeraBond",
  publisher: "OneCeraBond",
  robots: "index, follow",
  applicationName: "OneCeraBond Tile Adhesives",
  metadataBase: new URL("https://onecerabond.com"),
  openGraph: {
    title: "OneCeraBond - Premium Tile Adhesives",
    description:
      "Discover professional‑grade tile adhesives from OneCeraBond, designed for strong bonding, long‑lasting performance, and efficient installation for contractors and DIY projects.",
    url: "https://onecerabond.com",
    siteName: "OneCeraBond",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://onecerabond.com/imgs/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OneCeraBond - Premium Tile Adhesives",
      },
    ],
  },
  
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
