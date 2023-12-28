import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ item, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div key={item._id}>
      <div
        onClick={handleClick}
        className="flex justify-between shadow-lg rounded-lg p-4 mx-auto mb-4 border-b-8 border-solid"
      >
        <div className="font-bold text-black">{item.menuType}</div>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-3"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25a.75.75 0 0 1 .75.75v16.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.47V3a.75.75 0 0 1 .75-.75Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div>{showItems && <ItemList items={item.menu} />}</div>
    </div>
  );
};

export default RestaurantCategory;
