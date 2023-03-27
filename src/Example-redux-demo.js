import React from "react";
import { legacy_createStore as createStore } from "redux";

const ReduxDemoExample = () => {
  const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === "increment")
      return {
        counter: state.counter + 1,
      };
    if (action.type === "decrement")
      return {
        counter: state.counter - 1,
      };
  };
  const store = createStore(counterReducer);

  const counterSub = () => {
    const updatedCounter = store.getState();
    console.log("updatedCounter", updatedCounter);
  };
  store.getState();
  store.dispatch({ type: "increment" });
  store.dispatch({ type: "increment" });
  store.dispatch({ type: "increment" });
  store.dispatch({ type: "increment" });
  store.dispatch({ type: "increment" });
  store.dispatch({ type: "decrement" });
  const updatedStore = store.getState();
  store.subscribe(counterSub);
  return <div>redux-demo {updatedStore.counter}</div>;
};
export default ReduxDemoExample;
