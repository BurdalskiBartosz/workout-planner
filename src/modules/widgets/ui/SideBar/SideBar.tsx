"use client";
import { Logo } from "@/modules/shared/ui/Logo";
import { nav } from "@/modules/shared/constants/nav";
import { NavLink } from "@/modules/widgets/components/NavLink";

const SideBar = () => {
  return (
    <div className="border-r border-gray-200 pt-14 px-10 pb-10">
      <div className="mb-12">
        <Logo />
      </div>
      <p className="text-blue-500 font-bold text-lg mb-6">Menu</p>
      <nav>
        <ul className="flex gap-y-7 flex-col list-none text-sm">
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
