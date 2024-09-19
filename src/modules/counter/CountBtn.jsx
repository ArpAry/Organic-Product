import Count from "./Count";
import { useDispatch } from "react-redux";
import { Increase } from "../../modules/redux/Store";
import { INCREMENT } from "../../modules/redux/Store";
const CountBtn = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={(e) => dispatch(Increase(INCREMENT))}>Increment</button>
      <Count></Count>
      <button onClick={(e) => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
    </div>
  );
};
export default CountBtn;
