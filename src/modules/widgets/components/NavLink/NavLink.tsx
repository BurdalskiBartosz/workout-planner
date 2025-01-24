import { Icon, type IconName } from "@/modules/shared/ui/Icon";
import Link from "next/link";

type NavLinkProps = {
  to: string;
  label: string;
  icon?: IconName;
};

const NavLink = ({ to, label, icon }: NavLinkProps) => {
  return (
    <Link
      href={to}
      className="flex items-center gap-x-5 text-gray-500 font-bold decoration-none transition-colors duration-300 hover:text-blue-500"
    >
      {icon && <Icon name={icon} />}
      {label}
    </Link>
  );
};

export { NavLink };
