"use client";

import { useState } from "react";
import SidebarLogo from "./SidebarLogo";
import { NotificationIcon, ShowSidebarIcon } from "../Icons";
import { Switch } from "@/components/ui/switch";
import Search from "./Search";

type TopBarProps = {
  setShowSidebar: any;
};

const TopBar = ({ setShowSidebar }: TopBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="sidebar flex items-center gap-24 mx-2 md:py-0 py-2">
      <SidebarLogo className="md:flex hidden" />
      <div className="flex items-center justify-between flex-1">
        <div className="flex items-center gap-8">
          <ShowSidebarIcon
            onClick={() => setShowSidebar((prev: boolean) => !prev)}
            className="outline-none md:hidden"
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
