import { Dashboard } from "@/pages/dashboard";
import { WorkoutPlans } from "@/pages/workout-plans";
import { BrowserRouter, Route, Routes } from "react-router";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="workout-plans" element={<WorkoutPlans />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
