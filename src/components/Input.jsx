import { addInput, deleteInput } from "../redux/features/Input/inputSlice";
import { addList } from "../redux/features/List/listSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Input = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.input);
  return (
    <div>
      <input
        onChange={(e) => {
          dispatch(addInput(e.target.value));
        }}
        className="input"
        type="text"
        placeholder="Enter your task"
        value={value}
      />
      <button
        className="add"
        onClick={() => {
          const item = {
            value: value,
            complete: false,
          };
          dispatch(addList(item));
          dispatch(deleteInput());
        }}
      >
        Add
      </button>
    </div>
  );
};
export default Input;
