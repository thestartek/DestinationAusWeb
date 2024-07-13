import Image from "next/image";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

const Header = () => {
  return (
    <main className="w-full bg-slate-200 px-4 shadow-lg sticky top-0 z-50">
      <header className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            className=""
            src="/startek.png"
            width={60}
            height={60}
            alt="Logo"
          />
        </Link>

        <DesktopMenu />
        <div className="flex md:hidden">
          <MobileMenu />
        </div>
      </header>
    </main>
  );
};

export default Header;
