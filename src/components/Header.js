import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("Login");
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://cdn.freebiesupply.com/logos/thumbs/2x/the-eatery-logo.png"
        />
      </div>
      <div>
        <ul className="headerUl">
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/contact">Contact </Link>
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
          <li>🛒</li>
          <button
            className="login-button"
            onClick={() => {
              if (login === "Login") {
                setLogin("Logout ❌");
              } else {
                setLogin("Login");
              }
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
