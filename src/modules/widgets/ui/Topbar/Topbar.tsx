"use client";
import { LogoutButton } from "@/modules/shared/ui/LogoutButton";

const Topbar = () => {
  return (
    <div className="mx-2.5 flex w-full items-center justify-between border-b border-gray-200 px-5 py-4">
      Hello!
      <LogoutButton />
    </div>
  );
};

export { Topbar };
