import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import {
  createUser,
  getUserById,
  updateUser,
} from "../../services/backend/userData";

const UserForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
    number: "",
    role: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    if (id) {
      getUserById(id).then((response) => {
        setData({
          ...data,
          name: response.name,
          email: response.email,
          address: response.address,
          number: response.number,
          role: response.role,
          password: response.password,
        });
      });
    }
  }, []);

  const handleSubmit = () => {
    let hasError = false;
    let validateError = {
      name: "",
      email: "",
      address: "",
      number: "",
      role: "",
      password: "",
    };

    if (data.name.trim() === "") {
      validateError.name = toast.error("Name is Required!");
      hasError = true;
    }
    if (data.email.trim() === "") {
      validateError.email = toast.error("Email is Required!");
      hasError = true;
    }
    if (data.address.trim() === "") {
      validateError.address = toast.error("User Address is Required!");
      hasError = true;
    }
    if (data.number.trim() === "") {
      validateError.number = toast.error("Contact Number is Required!");
      hasError = true;
    }
    if (data.role.trim() === "") {
      validateError.role = toast.error("Role is Required!");
      hasError = true;
    }
    if (data.password.trim() === "") {
      validateError.password = toast.error("Password is Required!");
      hasError = true;
    }

    if (!hasError) {
      if (id) {
        // UPDATE USER
        updateUser(id, data)
          .then((response) => {
            navigate("/users");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        // CREATE USER
        createUser(data)
          .then((response) => {
            navigate("/users");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      console.log("Error submitting the form");
    }
  };

  return (
    <div className="user-form-container">
      <div className="user-form-title">
        {id && <h2>Edit User</h2>}
        {!id && <h2>Create User</h2>}
      </div>
      <div className="user-form-section">
        <div className="user-form-field">
          <label className="user-form-label">Full Name</label>
          <input
            type="text"
            placeholder="Eg. Saliv Maharjan"
            className="user-form-input"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div className="user-form-field">
          <label className="user-form-label">Email Address</label>
          <input
            type="text"
            placeholder="Eg. salivmrj@gmail.com"
            className="user-form-input"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className="user-form-field">
          <label className="user-form-label">User Address</label>
          <input
            type="text"
            placeholder="Eg. Kirtipurm"
            className="user-form-input"
            name="address"
            value={data.address}
            onChange={handleChange}
          />
        </div>
        <div className="user-form-field">
          <label className="user-form-label">Conctact Number</label>
          <input
            type="text"
            placeholder="Eg. +977 9866445340"
            className="user-form-input"
            name="number"
            value={data.number}
            onChange={handleChange}
          />
        </div>
        <div className="user-form-field">
          <label className="user-form-label">Role</label>
          <select
            className="user-form-input"
            name="role"
            value={data.role}
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        {!id && (
          <div className="user-form-field">
            <label className="user-form-label">Password</label>
            <input
              type="password"
              placeholder="Enter the password"
              className="user-form-input"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="user-form-field">
          <button className="user-form-btn" onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
