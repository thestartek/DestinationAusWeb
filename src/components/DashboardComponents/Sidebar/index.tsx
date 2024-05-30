import { PropsWithChildren } from "react";
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

const Sidebar = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col h-screen">
      <TopBar />
      <div className="flex h-full">
        <div className="flex flex-col justify-between mx-2">
          <div className="flex flex-col gap-2">
            <SidebarOption
              href="/admin/dashboard"
              icon={<DashboardIcon mode="light" />}
              title="Dashboard"
            />
            <SidebarOption
              href="/admin/dashboard/news"
              icon={<NewsIcon mode="light" />}
              title="News"
            />
            <SidebarOption
              href="/admin/dashboard/blogs"
              icon={<BlogsIcon mode="light" />}
              title="Blogs"
            />
            <SidebarOption
              href="/admin/dashboard/faqs"
              icon={<FAQIcon mode="light" />}
              title="FAQs"
            />
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <SidebarOption
              href="/admin/dashboard/profile"
              icon={<ProfileIcon mode="light" />}
              title="Profile"
            />
            <SignOut icon={<SignOutIcon mode="light" />} title="Sign Out" />
          </div>
        </div>
        <div className="bg-slate-100 w-full rounded-xl p-4">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
