import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const DesktopMenu = () => {
  return (
    <div className="hidden sm:flex items-center justify-between sm:gap-20 gap-10">
      <Link className={buttonVariants({ variant: "link" })} href="/tools">
        Tools
      </Link>
      <Link className={buttonVariants({ variant: "link" })} href="/blog">
        Blog
      </Link>
      <Link className={buttonVariants({ variant: "link" })} href="/news">
        News
      </Link>
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
