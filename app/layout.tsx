import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "AviaBookOnline",
  description: "Developed By Rahul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} fontFamily bg-gray-100 dark:bg-medium overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
