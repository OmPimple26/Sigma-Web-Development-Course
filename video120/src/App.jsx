import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, multiply, incrementByAmount } from "./redux/counter/counterSlice";

function App() {
  // const [count, setCount] = useState(0);
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar/>
      <div>Currently count is {count}</div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(multiply())}>*</button>
      <button onClick={() => dispatch(incrementByAmount(6))}>+6</button>
    </>
  );
}

export default App;