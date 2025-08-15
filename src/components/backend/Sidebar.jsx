import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <>
      <div className="admin-sidebar-container">
        <ul>
          <NavLink to={`/dashboard`}>
            <li>Dashboard</li>
          </NavLink>
          <NavLink to={`/users`}>
            <li>User Database</li>
          </NavLink>
          <li>Color Request</li>
          <NavLink to={`/products`}>
            <li>Product Management</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
