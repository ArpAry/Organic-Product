import { createStore } from "redux";

export const INCREMENT = "INCREMENT";

export const Increase = (state) => {
  return {
    type: INCREMENT,
  };
};

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
export const store = createStore(reducer);
