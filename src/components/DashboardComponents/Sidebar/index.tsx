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

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full">
      <TopBar />
      <div className="flex h-full">
        <div className="flex flex-col justify-between mx-2">
          <div className="flex flex-col gap-2">
            <SidebarOption
              icon={<DashboardIcon mode="light" />}
              title="Dashboard"
            />
            <SidebarOption icon={<NewsIcon mode="light" />} title="News" />
            <SidebarOption icon={<BlogsIcon mode="light" />} title="Blogs" />
            <SidebarOption icon={<FAQIcon mode="light" />} title="FAQs" />
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <SidebarOption
              icon={<ProfileIcon mode="light" />}
              title="Profile"
            />
            <SidebarOption
              icon={<SignOutIcon mode="light" />}
              title="Sign Out"
            />
          </div>
        </div>
        <div className="bg-slate-100 w-full rounded-xl p-4">
          Dashboard contents
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
