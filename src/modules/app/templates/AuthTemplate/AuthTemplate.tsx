import { Outlet } from "react-router";

const AuthTemplate = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export { AuthTemplate };
