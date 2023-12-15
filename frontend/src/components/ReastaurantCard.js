import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/contsants";

const ReastaurantCard = (props) => {

    const {resData} = props;
    console.log("resData", resData);
    return <div className="res-card">
        <img className="res-image" src={CDN_URL+resData.cloudinaryImageId} alt="image" />
        <h3>{ resData.name }</h3> 
        <h3>{ resData.avgRating }</h3>
        <h3>{ resData.cuisines.join(", ") }</h3>
        <h3>{ resData.costForTwo }</h3>
        <h3>{ resData.sla.slaString }</h3>
    </div>
};

export default ReastaurantCard;