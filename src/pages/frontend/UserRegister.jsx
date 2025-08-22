import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { createUser } from "../../services/backend/userData";

const UserRegister = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
    role: "User",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    let hasError = false;
    let validateError = {
      name: "",
      email: "",
      password: "",
      cPassword: "",
    };

    if (data.name.trim() === "") {
      validateError.name = toast.error("Name is Required!");
      hasError = true;
    }
    if (data.email.trim() === "") {
      validateError.email = toast.error("Email is Required!");
      hasError = true;
    }
    if (data.password.trim() === "") {
      validateError.password = toast.error("Password is Required!");
      hasError = true;
    }
    if (data.cPassword.trim() === "") {
      toast.error("Confirm Password is Required!");
      hasError = true;
    }
    if (data.password !== data.cPassword) {
      toast.error("Passwords do not match!");
      hasError = true;
    }

    if (!hasError) {
      const { cPassword, ...userData } = data;
      // CREATE USER
      createUser(userData)
        .then((response) => {
          toast.success("Account Created Sucessfully!");
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Error submitting the form");
    }
  };

  return (
    <div className="user-forms-section">
      <h2>USER REGISTER</h2>
      <div className="user-forms-form">
        <div className="user-form-filed">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Enter you name"
          />
        </div>
        <div className="user-form-filed">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Enter you email"
          />
        </div>
        <div className="user-form-filed">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Enter you password"
          />
        </div>
        <div className="user-form-filed">
          <label>Confirm Password</label>
          <input
            type="password"
            name="cPassword"
            value={data.cPassword}
            onChange={handleChange}
            placeholder="Enter you password"
          />
        </div>
        <div className="user-form-filed">
          <input
            onClick={handleSubmit}
            className="user-forms-btn"
            type="submit"
            value="REGISTER"
          />
        </div>
        <NavLink to={`/login`} className="user-form-swich">
          <div>Already Registered? Login Now!</div>
        </NavLink>
      </div>
    </div>
  );
};

export default UserRegister;
