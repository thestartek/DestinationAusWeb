import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const DashboardProfile = () => {
  return (
    <div className="h-[79.88vh] flex flex-col gap-2 items-center justify-center">
      <h2 className="text-gray-500 text-2xl font-semibold mt-2">
        This page is under construction ;)
      </h2>
      <Link
        href="/admin/dashboard"
        className={buttonVariants({ variant: "outline" })}
      >
        Go back to Dashboard
      </Link>
    </div>
  );
};

export default DashboardProfile;
