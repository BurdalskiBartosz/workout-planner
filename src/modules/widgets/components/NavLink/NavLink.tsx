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
      className="decoration-none flex items-center gap-x-5 font-bold text-gray-500 transition-colors duration-300 hover:text-blue-500"
    >
      {icon && <Icon name={icon} />}
      {label}
    </Link>
  );
};

export { NavLink };
