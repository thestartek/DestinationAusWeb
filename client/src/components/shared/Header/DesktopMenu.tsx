import { buttonVariants } from "@/components/ui/button";
import { NAV_ITEMS } from "@/constants";
import Link from "next/link";

const DesktopMenu = () => {
  return (
    <div className="hidden sm:flex items-center justify-between sm:gap-20 gap-10">
      {NAV_ITEMS.map((nav) => (
        <Link
          href={nav.href}
          className={buttonVariants({ variant: "link" })}
          key={nav._id}
        >
          {nav.name}
        </Link>
      ))}
      <Link
        className={`hidden md:flex ${buttonVariants({ variant: "link" })}`}
        href="/"
      >
        Destination Australia
      </Link>
    </div>
  );
};

export default DesktopMenu;
