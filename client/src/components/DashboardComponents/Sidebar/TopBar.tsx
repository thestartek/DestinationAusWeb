"use client";

import { useState } from "react";
import SidebarLogo from "./SidebarLogo";
import { NotificationIcon, ShowSidebarIcon } from "../Icons";
import { Switch } from "@/components/ui/switch";
import Search from "./Search";

type TopBarProps = {
  setShowSidebar: any;
  className?: string;
  showSidebar?: boolean;
};

const TopBar = ({ setShowSidebar, className, showSidebar }: TopBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div
      className={`flex items-center gap-24 px-2 md:py-0 py-2 z-20 ${className}`}
    >
      <SidebarLogo className="md:flex hidden" />
      <div className="flex items-center justify-between flex-1">
        <div className="flex items-center gap-8">
          <ShowSidebarIcon
            onClick={() => setShowSidebar((prev: boolean) => !prev)}
            className={`outline-none md:hidden transition-all ease-in-out duration-500 ${
              showSidebar ? "opacity-0 pointer-events-none" : ""
            }`}
          />
          <Search
            className="relative hidden sm:flex"
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        <div className="flex items-center gap-8">
          <NotificationIcon mode="light" />
          <Switch />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
