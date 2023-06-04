import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const toggleHandler = () => {};

  const incHandler = () => {
    dispatch({ type: "incrementby2" });
  };

  const decHandler = () => {
    dispatch({ type: "decrementby2" });
  };

  return (
    <main>
      <h1>Redux Counter</h1>
      <div>{counter}</div>
      <div>
        <button onClick={incHandler}>Increment</button>
        <button onClick={decHandler}>Decrement</button>
      </div>
      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
