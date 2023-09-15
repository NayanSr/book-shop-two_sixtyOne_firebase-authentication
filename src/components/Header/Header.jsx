import "./Header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      // eslint-disable-next-line no-unused-vars
      .then((result) => {})
      .catch((error) => console.log(error));
  };

  return (
    <nav className="header-container">
      <a href="/">
        <img className="header-image" src={logo} alt="" />
      </a>
      <div className="header-links">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        {user && (
          <small>
            welcome: {user.email} <button onClick={handleLogout}>Logout</button>
          </small>
        )}
      </div>
    </nav>
  );
};

export default Header;
