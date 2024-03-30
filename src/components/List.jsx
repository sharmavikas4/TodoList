import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { completeTask, deleteList } from "../redux/features/List/listSlice";
const List = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.list);
  return (
    <div>
      {list.length !== 0 && (
        <ul className="list">
          {list.map((item, id) => (
            <li key={id} className="item">
              <input
                className="checkbox"
                type="checkbox"
                checked={item.complete}
                onChange={() => {
                  dispatch(completeTask(id));
                }}
              />
              <span
                style={{
                  textDecoration: item.complete ? "line-through green" : "none",
                }}
              >
                {item.value}
              </span>
              <button
                className="delete"
                onClick={() => {
                  dispatch(deleteList(id));
                }}
              >
                &#x1F5D1;
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default List;
