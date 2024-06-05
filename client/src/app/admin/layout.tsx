import { PropsWithChildren } from "react";
import { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "../globals.css";
import { Toaster } from "sonner";
import { Sidebar } from "@/components/DashboardComponents";

export const metadata: Metadata = {
  title: { template: "%s | Dashboard", default: "Admin Dashboard" },
};

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const AdminLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <Toaster position="bottom-center" richColors />
      <body className={urbanist.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
};

export default AdminLayout;
