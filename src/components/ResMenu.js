import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const ResMenu = () => {
  const [menuData, setMenuData] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data1 = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.3814425&lng=79.5726285&restaurantId=" +
        resId
    );
    const jsonData = await data1.json();
    setMenuData(jsonData.data);
    console.log(menuData);
  };

  if (menuData === null) {
    return <Shimmer />;
  }

  const { itemCards } =
    menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  return (
    <div class="center-container">
      <div className="resMenuData">
        <h1>{menuData?.cards[0]?.card?.card?.info?.name}</h1>
        <p>
          {menuData?.cards[0]?.card?.card?.info?.cuisines.join(", ")} -
          {menuData?.cards[0]?.card?.card?.info?.costForTwoMessage}
        </p>
        <h4>
          {
            menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
              ?.card?.card?.title
          }
        </h4>
        <ul className="menuList">
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs {item.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResMenu;
