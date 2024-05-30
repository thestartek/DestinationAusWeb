"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  BlogsIcon,
  DashboardIcon,
  FAQIcon,
  NewsIcon,
  ProfileIcon,
  SignOutIcon,
} from "../Icons";
import SidebarOption from "./SidebarOption";
import TopBar from "./TopBar";
import SignOut from "./SignOut";
import SidebarLogo from "./SidebarLogo";

const Sidebar = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const [showSidebar, setShowSidebar] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".sidebar") && !sidebarRef.current?.contains(target)) {
      setShowSidebar(false);
    }
    if (target.closest(".links") && !sidebarRef.current?.contains(target)) {
      setShowSidebar(false);
    }
  };

  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setShowSidebar(false);
    }
  };

  // Close sidebar when route changes
  useEffect(() => {
    setShowSidebar(false);
  }, [pathname]);

  // Close sidebar when clicked outside and on escape key press
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <TopBar setShowSidebar={setShowSidebar} />
      <div className="flex h-full relative">
        <div
          className={`sidebar flex flex-col justify-between mx-2 absolute md:static z-20 px-2 bg-white h-full rounded-r-2xl md:rounded-none transition-all ease-in-out duration-500 ${
            showSidebar ? "-left-2" : "-left-1/2"
          }`}
        >
          <div className="flex flex-col gap-2">
            <SidebarLogo className="md:hidden" />
            <SidebarOption
              href="/admin/dashboard"
              icon={<DashboardIcon mode="light" />}
              title="Dashboard"
              className={
                pathname === "/admin/dashboard"
                  ? "bg-primary hover:bg-primary"
                  : "links"
              }
            />
            <SidebarOption
              href="/admin/dashboard/news"
              icon={<NewsIcon mode="light" />}
              title="News"
              className={
                pathname === "/admin/dashboard/news"
                  ? "bg-primary hover:bg-primary"
                  : "links"
              }
            />
            <SidebarOption
              href="/admin/dashboard/blogs"
              icon={<BlogsIcon mode="light" />}
              title="Blogs"
              className={
                pathname === "/admin/dashboard/blogs"
                  ? "bg-primary hover:bg-primary"
                  : "links"
              }
            />
            <SidebarOption
              href="/admin/dashboard/faqs"
              icon={<FAQIcon mode="light" />}
              title="FAQs"
              className={
                pathname === "/admin/dashboard/faqs"
                  ? "bg-primary hover:bg-primary"
                  : "links"
              }
            />
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <SidebarOption
              href="/admin/dashboard/profile"
              icon={<ProfileIcon mode="light" />}
              title="Profile"
              className={
                pathname === "/admin/dashboard/profile"
                  ? "bg-primary hover:bg-primary"
                  : "links"
              }
            />
            <SignOut icon={<SignOutIcon mode="light" />} title="Sign Out" />
          </div>
        </div>
        <div
          className={`bg-slate-100 outside w-full rounded-xl p-4 transition-all ease-in-out duration-500 ${
            showSidebar ? "blur-sm md:blur-none" : ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
