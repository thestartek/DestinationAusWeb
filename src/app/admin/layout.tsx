import { PropsWithChildren } from "react";
import { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Toaster } from "sonner";
import "../globals.css";

export const metadata: Metadata = {
  title: { template: "%s | Dashboard", default: "Admin Dashboard" },
};

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const AdminLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <Toaster position="bottom-center" richColors />
      <body className={urbanist.className}>{children}</body>
    </html>
  );
};

export default AdminLayout;
