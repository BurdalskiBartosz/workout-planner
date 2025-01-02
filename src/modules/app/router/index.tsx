import { links } from "@/modules/shared/constants/links";
import { Dashboard } from "@/modules/pages/Dashboard";
import { WorkoutPlans } from "@/modules/pages/WorkoutPlans";
import { BrowserRouter, Route, Routes } from "react-router";
import { AppTemplate } from "@/modules/app/templates/AppTemplate";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppTemplate />}>
          <Route index element={<Dashboard />} />
          <Route path={links.workoutPlans} element={<WorkoutPlans />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
