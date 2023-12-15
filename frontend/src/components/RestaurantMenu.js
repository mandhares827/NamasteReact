import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ReastaurantMenu = () => {
 
    const { resId } = useParams();

    const resInfo  = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer/>;
    console.log("rrrrrrrrresInfo", resInfo);
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(itemCards);
    return 
        <div className="menu">
            <h1>Name</h1>
            <h2>Manu</h2>
            <ul>
                <li>Biryani</li>
            </ul>
        </div>
    
}

export default ReastaurantMenu;