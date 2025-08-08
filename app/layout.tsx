import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../src/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Magic Patterns - Professional Services",
  description: "Interior design, cleaning, fumigation, and academy services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen w-full bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}
