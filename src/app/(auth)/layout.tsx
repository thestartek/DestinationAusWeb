import { PropsWithChildren } from "react";
import { Urbanist } from "next/font/google";
import { Toaster } from "sonner";
import { Metadata } from "next";
import "../globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Signin | Dashboard",
};

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.className} h-screen flex items-center justify-center`}
      >
        <Toaster position="bottom-center" richColors />
        {children}
      </body>
    </html>
  );
}
