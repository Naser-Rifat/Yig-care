import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "YIG.CARE — Reset, Balance, Radiate",
  description:
    "A new era of frequency-wellness is almost here. Discover serene frequency healing sessions and daily remote energy recharging, powered by YIG.CARE technology.",
  openGraph: {
    title: "YIG.CARE — Reset, Balance, Radiate",
    description:
      "A new era of frequency-wellness is almost here. Discover serene frequency healing sessions and daily remote energy recharging, powered by YIG.CARE technology.",
    type: "website",
  },
  icons: {
    icon: "/yig-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
