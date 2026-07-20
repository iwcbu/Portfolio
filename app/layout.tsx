import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: "Your Name — Software Engineer & Data Developer",
    description: "An immersive, scroll-driven portfolio journey from the universe to a house on a hill.",
    openGraph: {
      title: "Your Name — A Journey Through Software & Data",
      description: "Travel from deep space to home through an interactive portfolio.",
      type: "website",
      images: [{ url: "/og.png", width: 1672, height: 941, alt: "A portfolio journey from the universe to home" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Your Name — A Journey Through Software & Data",
      description: "Travel from deep space to home through an interactive portfolio.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
