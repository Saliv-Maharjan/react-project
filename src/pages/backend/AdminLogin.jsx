import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { doLogin } from "../../services/backend/adminAuth";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
  };

  // Handle Form Submission
  const handleBtnClick = async () => {
    let error = false;
    if (email === "") {
      toast.error("Email is required");
      error = true;
    } else if (password === "") {
      toast.error("Password is required");
      error = true;
    }

    if (error) {
      return;
    }

    const loginStatus = await doLogin(email, password);
    if (loginStatus.success) {
      toast.success(`Login successful, welcome ${email}!`);
      navigate("/admin");
    } else {
      if (loginStatus.reason === "not-admin") {
        toast.warn(`You are not Admin!`);
      } else {
        toast.error(`Invalid credentials!`);
      }
    }
  };
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
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => handleEmailChange(e)}
              placeholder="Enter your email"
            />
          </div>
          <div className="admin-login-fields">
            <label>Passowrd</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => handlePasswordChange(e)}
              placeholder="Enter your password"
            />
          </div>
          <div className="admin-login-fields">
            <input
              onClick={() => handleBtnClick()}
              className="admin-login-btn"
              type="submit"
              value="LOGIN"
            />
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
