import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Jaz Events",
  description: "Jaz events center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.className}antialiased`}
      >
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
