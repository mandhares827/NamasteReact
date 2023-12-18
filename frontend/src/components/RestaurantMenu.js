import {useParams} from "react-router-dom"
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ReastaurantMenu = () => {
 
    const { resId } = useParams();

    const resInfo  = useRestaurantMenu(resId);
    console.log("itemCards",resInfo?.menu);
    if(resInfo === null) return <Shimmer/>;
    
    const { name, cuisines } = resInfo;
    
    const itemCards = resInfo?.menu;

    console.log("itemCards",itemCards);
    return (
      <div>
        <h1>{resInfo.name}</h1>
                <h2>Manu</h2>
        {itemCards.map((item)=>(
           <div className="menu">
                
                <ul>
                    <li>{item.name}</li>
                    <li>{item.price}</li>
                </ul>
            </div>
        ))}
        
    </div>
    );
}

export default ReastaurantMenu;