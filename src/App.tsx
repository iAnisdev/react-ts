import Click from "./components/HOC/Click";
import Hover from "./components/HOC/Hover";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Click />
      <br/>
      <Hover />
    </div>
  );
}

export default App;
