import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Startek",
    default: "Startek Australia",
  },
  description:
    "Startek is a company based on Australia. created with the aim of helping students from all over the world who are planning for Australia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-slate-200 dark:bg-slate-800`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
