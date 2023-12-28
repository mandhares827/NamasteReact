import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/contsants";

const ReastaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="w-48 bg-gray-50 hover:shadow-lg">
      <img className="rounded-2xl" src={resData.image} alt="image" />
      <div className="p-2">
        <h3 className=" text-slate-600 font-bold font-sans text-sm mb-2">
          {resData.name}
        </h3>
        <h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            dataSlot="icon"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>

          {resData.cuisines}
        </h2>
        <h3>{resData.price}</h3>
      </div>
    </div>
  );
};

//Higher order component

// input - RestaurantCard => RestaurantCardPromoted
export const withPromotedLabel = (ReastaurantCard) => {
  return (props) => {
    return (
      <div className="w-56">
        <label className="absolute mt-2 p-1 bg-black text-white rounded-lg text-xs">
          Promoted
        </label>
        <ReastaurantCard {...props} />
      </div>
    );
  };
};

export default ReastaurantCard;
