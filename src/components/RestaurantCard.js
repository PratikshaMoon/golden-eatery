
const RestaurantCard =({resData})=>{
    const{cloudinaryImageId,name} = resData?.info;
    return(
        <div className="res-container">
            <div className="res-title">
            <h4>{resData.info.name}</h4>
            </div>
            

            <img 
            className="res-logo" alt="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData?.info.cloudinaryImageId}/>
            
            <div className="heading">
            <h5>{resData?.info.costForTwo}</h5>
            <h5>{resData?.info.avgRating} Star</h5>
            </div>
        </div>
    )
};



export default RestaurantCard;