import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
        className={`${inter.variable} ${unbounded.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
