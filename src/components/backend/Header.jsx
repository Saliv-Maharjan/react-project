import { NavLink } from "react-router";

const Header = () => {
  return (
    <>
      <div className="admin-header-container">
        <div className="admin-header-left">
          <span>MN Hardwares | Admin Panel</span>
        </div>
        <div className="admin-header-right">
          <NavLink to={`/admin-login`}>
            <button>Logout</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Header;
