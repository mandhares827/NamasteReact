import ReastaurantCard from "./ReastaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSeasearchText] = useState("");
    useEffect(() => {fetchData();}, []);

    const fetchData = async () => {
      const data = await fetch("http://localhost:3000/product");
      const json = await data.json();
    
      //optional chaining
      setlistOfRestaurants(json);
      setFilteredRestaurant(json);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus ===  false)
      return (
        <h1>
          Looks like you are offline!! Please check your internet connection
        </h1>
      );
    

    //conditional rendering
    return listOfRestaurants.length === 0 ? (<Shimmer />) : ( 
      <>
    <div className="container">
      <div className="search-container">
        <div className="search">
          <input type="text" value={searchText} onChange={(e) => {setSeasearchText(e.target.value)}} />
          <button className="search-btn" onClick={() => {
            const filteredResList = listOfRestaurants.filter((res) => res.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurant(filteredResList);
          }}>Search</button>
        </div>
    
      </div>
       <div className="res-container">
         {filteredRestaurant.map((restaurant) => (
          
         <Link
            key={restaurant.id}
            to={"/product/" + restaurant._id}
          ><ReastaurantCard key={restaurant.id} resData={restaurant} /></Link>) )}
       </div>
     </div>
     </>);
 };

 export default Body;