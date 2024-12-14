import {
  Calendar,
  Category,
  Notification,
  PieChart,
  Settings,
} from "@/components/icons";

export const nav = [
  { to: "/", label: "Dashboard", icon: Category },
  { to: "/", label: "Schedule", icon: Calendar },
  { to: "/", label: "Reports", icon: PieChart },
  { to: "/", label: "Notifications", icon: Notification },
  { to: "/", label: "Settings", icon: Settings },
];
