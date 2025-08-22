import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <>
      <div className="admin-sidebar-container">
        <ul>
          <NavLink to={`/admin/dashboard`}>
            <li>Dashboard</li>
          </NavLink>
          <NavLink to={`/admin/users`}>
            <li>User Database</li>
          </NavLink>
          <li>Color Database</li>
          <NavLink to={`/admin/products`}>
            <li>Product Database</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
