import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resInfo, setResInfo] = useState([]);
  const [copyData, setCopyData] = useState([])
  const [searchText, setSearchText] = useState("")

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
    setCopyData(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  return resInfo.length === 0 ? (
    <Shimmer/>
  ) : (
    <div>
      <div className="filter">
        <div>
          <button
          onClick={() => {
            const filterTop = resInfo.filter((each) => each.info.avgRating > 4);
            setCopyData(filterTop);
          }}
        >
          Top Restaurants
        </button>

        <input type="text" className="searchText" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
        <button
        onClick={()=>{
          const searchData = resInfo.filter((a)=> a.info.name.toLowerCase().includes(searchText.toLowerCase()))
          setCopyData(searchData)
        }}
        >Search🔍</button>
        </div>
      </div>
      <div className="res-main">
        {copyData.map((e) => (
          <RestaurantCard key={e.info.id} resData={e} />
        ))}
      </div>
    </div>
  );
};

export default Body;
