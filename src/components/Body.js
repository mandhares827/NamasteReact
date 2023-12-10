import ReastaurantCard from "./ReastaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);

    useEffect(() => {fetchData();}, []);

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      //optional chaining
      setlistOfRestaurants(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    }

    //conditional rendering
    return listOfRestaurants.length === 0 ? (<Shimmer />) : ( <div className="container">
       <button className="filter-btn" onClick={() => {
        const filteredList = listOfRestaurants.filter(
            (res)=> res.info.AvgRating > 4  
        );
        setlistOfRestaurants(filteredList);
        }}>Top Rated Restaurants</button>
       <div className="res-container">
         {listOfRestaurants.map((restaurant) => (<ReastaurantCard key={restaurant.id} resData={restaurant} />) )}
       </div>
     </div>)
 };

 export default Body;