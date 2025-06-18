import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavigationBar from "@/components/NavigationBar";
import FooterBar from "@/components/FooterBar";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bitefuls",
  description: "Your go-to recipe app for delicious meals",
};

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
        <NavigationBar />
        {children}
        <FooterBar />
      </body>
    </html>
  );
}
