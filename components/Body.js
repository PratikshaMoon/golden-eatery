import RestaurantCard from "./RestaurantCard";

const Body =()=>
    (
        <div>
            <div className="search">
            <input type="search"></input>
            <button>Search</button>
            </div>
            <RestaurantCard/>
        </div>

    )


export default Body;