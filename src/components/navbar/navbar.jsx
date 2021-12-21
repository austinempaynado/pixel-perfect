import { useHistory, NavLink } from "react-router-dom";
import './navbar.css'
export const NavBar = () => {

  const history = useHistory();

  return (
    <div id="nav-bar-container">
      <div id="nav-wrapper">
        <div id="nav-button-container">
          <li>
          <NavLink className="nav-link" to="/">Homepage</NavLink>
          </li>
          <NavBar className="nav-link" to="/profile">Profile</NavBar>
        </div>
      </div>
    </div>
  );
};
