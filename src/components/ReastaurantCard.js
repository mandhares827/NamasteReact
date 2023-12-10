import { CDN_URL } from "../utils/contsants";

const ReastaurantCard = (props) => {

    const {resData} = props;
    return <div className="res-card">
        <img className="res-image" src={CDN_URL+resData.imageId} alt="image" />
        <h3>{ resData.accessibility.altText }</h3> 
    </div>
};

export default ReastaurantCard;