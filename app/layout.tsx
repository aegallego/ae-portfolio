import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Glow, GlowCapture } from "@codaworks/react-glow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AUB Portfolio",
  description: "A portfolio for Aubrey Estacio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#1b1e2b] leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}
      >
        {children}
      </body>
    </html>
  );
}
