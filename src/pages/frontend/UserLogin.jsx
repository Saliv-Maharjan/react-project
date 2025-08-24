import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { doLogin } from "../../services/frontend/userAuth";

const UserLogin = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

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
      navigate("/");
      setIsLoggedIn(localStorage.getItem("AUTH_TOKEN"));
    } else {
      if (loginStatus.reason === "not-user") {
        toast.warn(`You are not User!`);
      } else {
        toast.error(`Invalid credentials!`);
      }
    }
  };
  return (
    <div className="user-forms-section">
      <h2>USER LOGIN</h2>
      <div className="user-forms-form">
        <div className="user-form-filed">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => handleEmailChange(e)}
            placeholder="Enter you email"
          />
        </div>
        <div className="user-form-filed">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => handlePasswordChange(e)}
            placeholder="Enter you password"
          />
        </div>
        <div className="user-pass-forget">Forgot Password?</div>
        <div className="user-form-filed">
          <input
            className="user-forms-btn"
            onClick={() => handleBtnClick()}
            type="submit"
            value="LOGIN"
          />
        </div>
        <NavLink to={`/register`} className="user-form-swich">
          <div>New Here? Register Now!</div>
        </NavLink>
      </div>
    </div>
  );
};

export default UserLogin;
