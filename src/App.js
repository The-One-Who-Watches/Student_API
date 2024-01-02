import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        counter {counter}, {isLogged}
      </header>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      {isLogged ? <h3>I am logged</h3> : ""}
    </div>
  );
}

export default App;
