import logo from "./images/logo.png"

const Header = ()=> {
    return (
        <div className="header">
            <div>
                <img className="logo" src="https://cdn.freebiesupply.com/logos/thumbs/2x/the-eatery-logo.png"/>
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;