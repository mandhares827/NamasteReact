import { CDN_URL } from "../utils/contsants";

const ReastaurantCard = (props) => {

    const {resData} = props;
    return <div className="res-card">
        <img className="res-image" src={CDN_URL+resData.info.cloudinaryImageId} alt="image" />
        <h3>{ resData.info.name }</h3> 
        <h3>{ resData.info.avgRating }</h3>
        <h3>{ resData.info.cuisines.join(", ") }</h3>
        <h3>{ resData.info.costForTwo }</h3>
        <h3>{ resData.info.sla.slaString }</h3>
    </div>
};

export default ReastaurantCard;