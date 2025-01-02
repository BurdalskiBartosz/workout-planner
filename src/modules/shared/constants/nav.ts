import { IconName } from "@/modules/shared/ui/Icon/Icon";
import { links } from "./links";

type Nav = {
  to: string;
  label: string;
  icon: IconName;
};

export const nav: Nav[] = [
  { to: links.dashboard, label: "Dashboard", icon: "category" },
  { to: links.workoutPlans, label: "Workout plans", icon: "calendar" },
  { to: links.schedules, label: "Schedule", icon: "calendar" },
  { to: links.reports, label: "Reports", icon: "pieChart" },
  { to: links.notifications, label: "Notifications", icon: "notification" },
  { to: links.settings, label: "Settings", icon: "settings" },
];
