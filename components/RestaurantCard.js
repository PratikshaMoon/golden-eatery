
const RestaurantCard =({resData})=>{
    const{cloudinaryImageId,name} = resData?.info;
    return(
        <div className="res-container">
            <img 
            className="res-logo" alt="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}/>
            
            <h3>{resData.info.name}</h3>
            <div className="heading">
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.avgRating} Star</h4>
            </div>
        </div>
    )
};



export default RestaurantCard;