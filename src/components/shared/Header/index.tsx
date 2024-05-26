import Image from "next/image";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <main className="w-full bg-slate-300 px-4 shadow-lg">
      <header className="max-w-7xl mx-auto flex items-center justify-between">
        <Image
          className=""
          src="/startek.png"
          width={60}
          height={60}
          alt="Logo"
        />

        <DesktopMenu />
        <div className="flex md:hidden">
          <MobileMenu />
        </div>
      </header>
    </main>
  );
};

export default Header;
