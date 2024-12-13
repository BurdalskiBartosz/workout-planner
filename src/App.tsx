import "./App.css";
import { useStore } from "../store";

function App() {
  const str = useStore((state) => state.str);
  return <h1>{str}</h1>;
}

export default App;
