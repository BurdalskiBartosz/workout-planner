import "./App.css";
import { useStore } from "../store";
import styled from "@emotion/styled";

const Child = styled.p({
  fontSize: "15px",
  color: "yellow",
});

const StyledH1 = styled.h1<{ fontSize: number }>(
  {
    fontSize: "100px",
    [`& ${Child}`]: {
      color: "blue",
    },
  },
  (props) => ({
    fontSize: props.fontSize,
  })
);

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
      <StyledH1 fontSize={120}>
        {str}
        <Child>BLUE</Child>
        <p>XD</p>
      </StyledH1>
      <Child>YELLOW</Child>
      <StyledComponent />
      <StyledH2 fontSize={80}>H2</StyledH2>
    </>
  );
}

export default App;
