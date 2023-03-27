import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

//Redux

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment")
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   if (action.type === "increase")
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   if (state.counter === 0 && action.type === "decrement")
//     return {
//       counter: 0,
//       showCounter: state.showCounter,
//     };
//   else if (action.type === "decrement")
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   if (action.type === "toggle")
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   return state;
// };

// const store = createStore(counterReducer);
// export default store;

// REDUX TOOLKIT
// uses immer package which willl clone existing and override a code in immutable way

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //methods
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = { isAuthenticated: false };
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;
export default store;
