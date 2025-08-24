import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router";

const Header = () => {
  const isLoggedIn = localStorage.getItem("AUTH_TOKEN");
  const id = localStorage.getItem("USER_ID");

  return (
    <div className="user-header-section">
      <div className="user-header-logo">
        <span className="main-logo">MN</span>
        <span>HARDWARES</span>
      </div>

      <div className="user-header-nav">
        <ul className="user-header-navlinks">
          <NavLink to={`/`}>
            <li className="user-header-navitems">HOME</li>
          </NavLink>
          <NavLink>
            <li className="user-header-navitems">PRODUCTS</li>
          </NavLink>
          <NavLink>
            <li className="user-header-navitems">COLORS</li>
          </NavLink>
          <NavLink to={`/contact`}>
            <li className="user-header-navitems">CONTACT US</li>
          </NavLink>
        </ul>
      </div>

      <div className="user-header-btns">
        <FaCartShopping size={28} />
        <div className="profile-btn">
          {isLoggedIn ? (
            <NavLink to={`/profile/${id}`}>
              <CgProfile size={28} />
              <span>PROFILE</span>
            </NavLink>
          ) : (
            <NavLink to={`/login`}>
              <CgProfile size={28} />
              <span>LOGIN</span>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
