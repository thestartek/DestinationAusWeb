"use client";

import { useState } from "react";
import SidebarLogo from "./SidebarLogo";
import {
  BlogsIcon,
  DashboardIcon,
  FAQIcon,
  GoIcon,
  NewsIcon,
  NotificationIcon,
  ProfileIcon,
  SearchIcon,
  ShowSidebarIcon,
  SignOutIcon,
} from "../Icons";
import { Switch } from "@/components/ui/switch";
import Search from "./Search";

const TopBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex items-center gap-24">
      <SidebarLogo />
      <div className="flex items-center justify-between flex-1">
        <div className="flex items-center gap-8">
          <ShowSidebarIcon />
          <Search
            className="relative"
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
