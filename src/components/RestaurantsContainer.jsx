import Restaurant from "./Restaurant";
import {restaurants} from "../data/data.js";
function RestaurantsContainer(props) {
    return (
      <div className="restaurantContainer"> 
        {restaurants.map(restaurant => <Restaurant restaurant={restaurant}/>)}
      </div>
    );
  }
  
  export default RestaurantsContainer;