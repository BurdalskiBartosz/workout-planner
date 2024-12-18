import styled from "@emotion/styled";
import { SideBar } from "@/components/SideBar";

const StyledWraper = styled.div({
  display: "grid",
  gridTemplateColumns: "250px 1fr",
  height: "100vh",
});

const Dashboard = () => {
  return (
    <StyledWraper>
      <SideBar />
    </StyledWraper>
  );
};

export { Dashboard };
