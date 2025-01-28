import { SideBar } from "@/components/ui/SideBar";
import { Topbar } from "@/components/ui/Topbar";
import { ReactNode } from "react";

const AppTemplate = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div className="grid h-screen grid-cols-[250px_1fr]">
      <SideBar />
      <div>
        <Topbar />
        <main className="px-7 py-5">{children}</main>
      </div>
    </div>
  );
};

export default AppTemplate;
