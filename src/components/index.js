import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions, counterActions } from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  const show = useSelector((state) => state.counter.showCounter);
  // Autuhentication

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  // Redux
  //   const incrementHandler = () => {
  //     dispatch({ type: "increment" });
  //   };
  //   const decrementHandler = () => {
  //     dispatch({ type: "decrement" });
  //   };
  //   const increaseHandler = () => {
  //     dispatch({ type: "increase", amount: 5 });
  //   };
  //   const toggleHandler = () => {
  //     dispatch({ type: "toggle" });
  //   };

  // Redux Toolkit
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
    // dispatch({ type: "decrement" });
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
    // dispatch({ type: "increase", amount: 5 });
  };
  const toggleHandler = () => {
    dispatch(counterActions.toggle());
    // dispatch({ type: "toggle" });
  };
  const autheticateUser = () => {
    dispatch(authActions.login());
  };
  const removeAuthentication = () => {
    dispatch(authActions.logout());
  };

  console.log("isAuth", isAuth);

  return (
    <main>
      <h1> Authentication</h1>
      {isAuth ? (
        <div>
          <h1> header</h1>
          <button onClick={() => removeAuthentication()}>Logout</button>
        </div>
      ) : null}
      {isAuth ? null : (
        <button onClick={() => autheticateUser()}> Login</button>
      )}

      <h1>Redux Counter</h1>

      {show ? (
        <>
          <h2> {counter}</h2>
        </>
      ) : null}
      <button onClick={incrementHandler}> Increment </button>
      <button onClick={increaseHandler}> Increment by 5 </button>
      <button onClick={decrementHandler}> Decrement </button>
      <button onClick={toggleHandler}> Toggle </button>
    </main>
  );
};

export default Counter;
