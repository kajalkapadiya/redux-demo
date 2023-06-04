import { createStore } from "redux";

// const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "incrementby2") {
    return {
      counter: state.counter + 2,
    };
  } else if (action.type === "decrementby2") {
    return {
      counter: state.counter - 2,
    };
  }
};

const Store = createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = Store.getState();
  console.log(latestState);
};

Store.subscribe(counterSubscriber);

Store.dispatch({ type: "incrementby2" });
Store.dispatch({ type: "decrementby2" });

export default Store;
