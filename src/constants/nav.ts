import { IconName } from "@/components/Icon/Icon";

type Nav = {
  to: string;
  label: string;
  icon: IconName;
};

export const nav: Nav[] = [
  { to: "/", label: "Dashboard", icon: "category" },
  { to: "/workout-plans", label: "Workout plans", icon: "calendar" },
  { to: "/", label: "Schedule", icon: "calendar" },
  { to: "/", label: "Reports", icon: "pieChart" },
  { to: "/", label: "Notifications", icon: "notification" },
  { to: "/", label: "Settings", icon: "settings" },
];
