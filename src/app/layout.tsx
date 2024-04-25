import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yessy Album",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black text-white ">
      <body className={inter.className} >
        <Navbar />
        <div className="flex">
          <div className="w-1/4">
            <Sidebar />
          </div>
          <div className="w-full">{children}</div>
        </div>
        </body>
    </html>
  );
}
