import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <ul key={item._id}>
          <li>{item.name}</li>
          <li>Category: {item.isVeg ? "Veg" : "Non-Veg"}</li>
          <li>Description: {item.description}</li>
          <li>Price: {item.price}</li>
          <button
            className="p-2 mx-16 rounded-lg bg-black text-white"
            onClick={() => handleAddItem(item)}
          >
            Add +
          </button>
        </ul>
      ))}
    </div>
  );
};

export default ItemList;
