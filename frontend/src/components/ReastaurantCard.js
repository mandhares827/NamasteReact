import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/contsants";

const ReastaurantCard = (props) => {

    const {resData} = props;

    return <div className="res-card">
        {/* <img className="res-image" src={CDN_URL+resData.image} alt="image" /> */}
        <h3>{ resData.name }</h3> 
        {/* <h3>{ resData.avgRating }</h3> */}
        <h3>{ resData.cuisines }</h3>
        <h3>{ resData.price }</h3>
    
    </div>
};

export default ReastaurantCard;