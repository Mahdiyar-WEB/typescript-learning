import { useReducer } from "react";

type CounterState = {
  count: number;
};

type CounterUpdate = {
  type: "increase" | "decrease";
  payload: number;
};

type CounterReset = {
  type: "reset";
};

const initialState = { count: 0 };

const reducer = (state: CounterState, action: CounterUpdate | CounterReset) => {
  switch (action.type) {
    case "increase": {
      return { count: state.count + action.payload };
    }
    case "decrease": {
      return { count: state.count - action.payload };
    }
    case "reset": {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "increase", payload: 1 })}>
        Increase
      </button>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: "decrease", payload: 3 })}>
        Decrease
      </button>
      <button onClick={() => dispatch({ type: "reset"})}>Reset</button>
    </div>
  );
};

export default Counter;
