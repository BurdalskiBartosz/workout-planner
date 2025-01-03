import { links } from "@/modules/shared/constants/links";
import { Dashboard } from "@/modules/pages/Dashboard";
import { WorkoutPlans } from "@/modules/pages/WorkoutPlans";
import { BrowserRouter, Route, Routes } from "react-router";
import { AppTemplate, AuthTemplate } from "@/modules/app/templates";
import { Login } from "@/modules/pages/auth/Login";
import { Registration } from "@/modules/pages/auth/Registration";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthTemplate />}>
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/registration" element={<Registration />} />
        </Route>
        <Route element={<AppTemplate />}>
          <Route index element={<Dashboard />} />
          <Route path={links.workoutPlans} element={<WorkoutPlans />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
