import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactLenis } from '../lenis/Lenis'
import ScrollProgress from "@/scrollprogress/ScrollProgress";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${dmSans.variable} antialiased`}
        >
          <ScrollProgress />
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
