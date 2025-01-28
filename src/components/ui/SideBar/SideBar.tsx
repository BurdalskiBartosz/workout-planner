"use client";
import { Logo } from "@/components/shared/ui/Logo";
import { NavLink } from "@/components/ui/components/NavLink";
import { nav } from "@/constants/nav";

const SideBar = () => {
  return (
    <div className="border-r border-gray-200 px-10 pb-10 pt-14">
      <div className="mb-12">
        <Logo />
      </div>
      <p className="mb-6 text-lg font-bold text-blue-500">Menu</p>
      <nav>
        <ul className="flex list-none flex-col gap-y-7 text-sm">
          {nav.map((item) => (
            <li key={item.label}>
              <NavLink to={item.to} label={item.label} icon={item.icon} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export { SideBar };
