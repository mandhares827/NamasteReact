import ReastaurantCard, { withPromotedLabel } from "./ReastaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSeasearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:3000/product");
    const json = await data.json();

    //optional chaining
    setlistOfRestaurants(json);
    setFilteredRestaurant(json);
  };

  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLabel(ReastaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );

  //conditional rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-4 my-4">
        <div className="flex justify-center">
          <div className="mb-5">
            <input
              type="text"
              className="pl-10 pr-4 py-1 border rounded-lg"
              placeholder="Search here..."
              value={searchText}
              onChange={(e) => {
                setSeasearchText(e.target.value);
              }}
            />
            <button
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold ml-2 py-1 px-4 rounded-full"
              onClick={() => {
                const filteredResList = listOfRestaurants.filter((res) =>
                  res.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredResList);
              }}
            >
              Search
            </button>
            <input
              type="text"
              value={loggedInUser}
              className="border border-black ml-4 p-2"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
        {/* start corosal */}

        <div
          id="animation-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          {/* Carousel wrapper */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {/* Item 1 */}
            <div className="hidden duration-200 ease-linear" data-carousel-item>
              <img
                src="/docs/images/carousel/carousel-1.svg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* Item 2 */}
            <div className="hidden duration-200 ease-linear" data-carousel-item>
              <img
                src="/docs/images/carousel/carousel-2.svg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* Item 3 */}
            <div
              className="hidden duration-200 ease-linear"
              data-carousel-item="active"
            >
              <img
                src="/docs/images/carousel/carousel-3.svg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* Item 4 */}
            <div className="hidden duration-200 ease-linear" data-carousel-item>
              <img
                src="/docs/images/carousel/carousel-4.svg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* Item 5 */}
            <div className="hidden duration-200 ease-linear" data-carousel-item>
              <img
                src="/docs/images/carousel/carousel-5.svg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>

        {/* end corosal */}
        <div className="flex flex-wrap">
          {filteredRestaurant.map((restaurant) => (
            <Link
              className="w-52"
              key={restaurant._id}
              to={"/product/" + restaurant._id}
            >
              {
                /* {if restaurant card is promoted then show card with promoted label} */
                restaurant.isPromoted ? (
                  <RestaurantCardPromoted resData={restaurant} />
                ) : (
                  <ReastaurantCard resData={restaurant} />
                )
              }
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
