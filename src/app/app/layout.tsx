import { SideBar } from "@/modules/widgets/ui/SideBar";
import { Topbar } from "@/modules/widgets/ui/Topbar";
import { ReactNode } from "react";

const AppTemplate = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      <SideBar />
      <div>
        <Topbar />
        <main className="py-5 px-7">{children}</main>
      </div>
    </div>
  );
};

export default AppTemplate;
