"use client";
import { LogoutButton } from "@/modules/shared/ui/LogoutButton";

const Topbar = () => {
  return (
    <div className="flex w-full justify-between items-center border-b border-gray-200 py-4 px-5 mx-2.5">
      Hello!
      <LogoutButton />
    </div>
  );
};

export { Topbar };
