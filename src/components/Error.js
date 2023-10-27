import "./css/error.css"
import { useRouteError, Link } from "react-router-dom";

const Error = () => {

  const err = useRouteError()
  console.log(err)
  return ( <div>
    <div className="error-container">
      <div className="error-content">
        <h1> {err.status}</h1>
        <p>{err.statusText}</p>
      </div>
    
     
     </div>

     <h3><Link to = "/">Click here to go back to Home</Link> </h3>
    </div>

  );
};

export default Error;