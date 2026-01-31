import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Gómez — Founder de Bumbei",
  description:
    "Founder construyendo Bumbei (cashback en Bitcoin). Abierto a partnerships con creadores y marcas.",
  metadataBase: new URL("https://juanpage.com"),
  openGraph: {
    title: "Juan Gómez — Founder de Bumbei",
    description:
      "Construyo productos digitales que conectan tecnología con libertad financiera.",
    url: "https://juanpage.com",
    siteName: "Juan Gómez",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Gómez — Founder de Bumbei",
    description:
      "Founder construyendo Bumbei (cashback en Bitcoin). Partnerships con creadores y marcas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
