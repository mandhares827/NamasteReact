import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

const ReastaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const categories = resInfo?.type;

  return (
    <div className="w-6/12 mx-auto">
      <div className="flex justify-between my-6 ">
        <div className="">
          <h1 className="font-bold text-slate-500 text-lg">{resInfo.name}</h1>
          <h4>{resInfo.cuisine.join(", ")}</h4>
          <h4>Delivery in {resInfo.deliveryTime}</h4>
        </div>

        <div className="flex border shadow-md p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            dataSlot="icon"
            className="w-4 h-4 mt-1 mr-1 fill-lime-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
          <span>{resInfo.avgRating}</span>
        </div>
      </div>

      {categories.map((item, index) => (
        //this is controlled component
        <RestaurantCategory
          key={item._id}
          item={item}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default ReastaurantMenu;
