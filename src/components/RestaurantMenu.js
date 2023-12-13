import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const ReastaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {fetchMenu();}, []);

    const fetchMenu = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&RestaurantId=425&submitAction=ENTER");
        const json = data.json();
        console.log("json");
    }
    return 
        resInfo === null ? ( <Shimmer /> ) : (  <div className="manu">
            <h1>Name</h1>
            <h2>Manu</h2>
            <ul>
                <li>Biryani</li>
            </ul>
        </div>
    );
}

export default ReastaurantMenu;