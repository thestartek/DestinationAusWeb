import { buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { HamburgerMenuDark } from "@/components/ui/hamburger";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <HamburgerMenuDark />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="flex flex-col gap-4 items-center justify-center">
            <Link
              className={`sm:hidden flex ${buttonVariants({
                variant: "link",
              })}`}
              href="/tools"
            >
              <DrawerClose>Tools</DrawerClose>
            </Link>
            <Link
              className={`sm:hidden flex ${buttonVariants({
                variant: "link",
              })}`}
              href="/blog"
            >
              <DrawerClose>Blog</DrawerClose>
            </Link>
            <Link
              className={`sm:hidden flex ${buttonVariants({
                variant: "link",
              })}`}
              href="/news"
            >
              <DrawerClose>News</DrawerClose>
            </Link>
            <Link
              className={buttonVariants({
                variant: "link",
              })}
              href="/"
            >
              <DrawerClose>Destination Australia</DrawerClose>
            </Link>
          </DrawerTitle>
          <DrawerDescription className="text-center">
            &copy; {new Date().getFullYear()} StarTek - Created by{" "}
            <Link href="https://github.com/pawandai" className="font-semibold">
              Pawandai.
            </Link>
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
