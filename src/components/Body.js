import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0398768&lng=72.87074799999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await apiData.json();
    setResInfo(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return resInfo.length === 0 ? (
    <Shimmer/>
  ) : (
    <div>
      <div className="filter">
        <button
          onClick={() => {
            const filterTop = resInfo.filter((each) => each.info.avgRating > 4);
            setResInfo(filterTop);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-main">
        {resInfo.map((e) => (
          <RestaurantCard key={e.info.id} resData={e} />
        ))}
      </div>
    </div>
  );
};

export default Body;
