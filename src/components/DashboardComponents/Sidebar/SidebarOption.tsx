import Link from "next/link";

type SidebarOptionProps = {
  icon: JSX.Element;
  title: string;
  className?: string;
  href: string;
};

const SidebarOption = ({
  icon,
  title,
  className,
  href,
}: SidebarOptionProps) => {
  return (
    <Link
      href={href}
      className={`flex items-center justify-start w-[14rem] gap-2 px-3 py-3 rounded-xl hover:bg-[#FEF08A] cursor-pointer ${className}`}
    >
      {icon} <span className="select-none">{title}</span>
    </Link>
  );
};

export default SidebarOption;
