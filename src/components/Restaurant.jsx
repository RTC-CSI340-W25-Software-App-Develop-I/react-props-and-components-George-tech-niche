function Restaurant(props) {
    return (
      <div className="restaurant">
        <h2>{props.restaurant.name}</h2>
      <ul>
        <li>{props.restaurant.id}</li>
        <li>{props.restaurant.name}</li>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        <li>{props.restaurant.rating}</li>
      </ul>
  
      </div>
    );
  }
  
  export default Restaurant;