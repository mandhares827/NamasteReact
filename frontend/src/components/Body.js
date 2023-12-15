import ReastaurantCard from "./ReastaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Header from "./Header";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSeasearchText] = useState("");
    useEffect(() => {fetchData();}, []);

    const fetchData = async () => {
      const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
      //optional chaining
      setlistOfRestaurants(json?.data?.cards[5]?.card.card.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(json?.data?.cards[5]?.card.card.gridElements?.infoWithStyle?.restaurants);
    }

    //conditional rendering
    return listOfRestaurants.length === 0 ? (<Shimmer />) : ( 
      <>
    <div className="container">
      <div className="search-container">
        <div className="search">
          <input type="text" value={searchText} onChange={(e) => {setSeasearchText(e.target.value)}} />
          <button className="search-btn" onClick={() => {
            const filteredResList = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurant(filteredResList);
          }}>Search</button>
        </div>
    
      </div>
       <div className="res-container">
         {filteredRestaurant.map((restaurant) => (<Link
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}
          ><ReastaurantCard key={restaurant.info.id} resData={restaurant?.info} /></Link>) )}
       </div>
     </div>
     </>);
 };

 export default Body;