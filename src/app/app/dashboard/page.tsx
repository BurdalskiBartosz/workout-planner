import { logout } from "@/actions/authentication/login";

const Dashboard = () => {
  return (
    <div>
      <h1>DASHBOARD</h1>
      <form
        action={async () => {
          "use server";
          await logout();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
};

export default Dashboard;
