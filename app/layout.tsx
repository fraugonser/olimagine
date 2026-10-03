import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SolanaProvider from "@/components/solana/SolanaProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://olimagine.vercel.app"),

  title: "Olimagine — Art from a Different Planet",

  description:
    "A digital art world built around the imagination of Oliver, a young autistic artist. Original art, limited digital collectibles and Solana underneath.",

  openGraph: {
    title: "Olimagine — Art from a Different Planet",
    description:
      "A little artist. A big imagination. An open universe.",
    url: "https://olimagine.vercel.app",
    siteName: "Olimagine",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Olimagine — Art from a Different Planet",
    description:
      "A little artist. A big imagination. An open universe.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
    <body className="min-h-full flex flex-col">
  <SolanaProvider>
    <Header />
    {children}
  </SolanaProvider>
</body>
    </html>
  );
}
