import { NavLink } from "react-router";

const AdminLogin = () => {
  return (
    <div className="admin-login-container">
      <div className="admin-login-header">
        <span>MN HARDWARES</span>
      </div>

      <div className="admin-login-section">
        <h2>ADMIN LOGIN</h2>
        <div className="admin-login-form">
          <div className="admin-login-fields">
            <label>Email</label>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="admin-login-fields">
            <label>Passowrd</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="admin-login-fields">
            <NavLink to={`/dashboard`}>
              <input className="admin-login-btn" type="submit" value="Submit" />
            </NavLink>
          </div>
        </div>
      </div>

      <div className="admin-login-footer">
        <span>Copyright © 2025 Admin Panel. All rights reserved.</span>
      </div>
    </div>
  );
};

export default AdminLogin;
