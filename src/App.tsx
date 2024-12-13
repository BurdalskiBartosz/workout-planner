import "./App.css";
import { useStore } from "../store";
import styled from "@emotion/styled";

const StyledH1 = styled.h1(() => ({
  fontSize: "100px",
}));

const StyledH2 = StyledH1.withComponent("h2");

const Component = ({ className }: { className?: string }) => {
  return <div className={className}>Component</div>;
};

const StyledComponent = styled(Component)(() => ({
  color: "red",
}));

function App() {
  const str = useStore((state) => state.str);
  return (
    <>
      <StyledH1>{str}</StyledH1>
      <StyledComponent />
      <StyledH2>H2</StyledH2>
    </>
  );
}

export default App;
