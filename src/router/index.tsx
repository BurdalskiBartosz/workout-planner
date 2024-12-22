import { links } from "@/constants/links";
import { Dashboard } from "@/pages/dashboard";
import { WorkoutPlans } from "@/pages/workout-plans";
import { BrowserRouter, Route, Routes } from "react-router";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path={links.workoutPlans} element={<WorkoutPlans />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
