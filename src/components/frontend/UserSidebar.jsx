import { NavLink } from "react-router";

const UserSidebar = () => {
  const id = localStorage.getItem("USER_ID");
  return (
    <div className="user-sidebar">
      <ul className="sidebar-navtivations">
        <NavLink to={`/profile/${id}`}>
          <li className="sidebar-navitems">Profile</li>
        </NavLink>
        <NavLink>
          <li className="sidebar-navitems">Security</li>
        </NavLink>
        <NavLink>
          <li className="sidebar-navitems">Order History</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default UserSidebar;
