import Image from "next/image";
import Link from "next/link";

const SidebarLogo = ({ className }: { className: string }) => {
  return (
    <Link
      href="/admin/dashboard"
      className={`flex items-center gap-1 w-fit py-2 ${className}`}
    >
      <Image src="/startek.png" height={50} width={50} alt="Sidebar Logo" />{" "}
      <h2 className="text-2xl font-semibold">Startek</h2>
    </Link>
  );
};

export default SidebarLogo;
