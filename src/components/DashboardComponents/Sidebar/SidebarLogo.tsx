import Image from "next/image";
import Link from "next/link";

const SidebarLogo = () => {
  return (
    <Link href="/admin/dashboard" className="flex items-center gap-1 w-fit p-2">
      <Image src="/startek.png" height={50} width={50} alt="Sidebar Logo" />{" "}
      <h2 className="text-2xl font-semibold">Startek</h2>
    </Link>
  );
};

export default SidebarLogo;
