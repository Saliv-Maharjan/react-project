import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const UserForm = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/users");
    toast.success("Success");
  };

  return (
    <div className="user-form-container">
      <div className="user-form-title">
        <h2>User Form</h2>
      </div>
      <div className="user-form-section">
        <div className="user-form-field">
          <label className="user-form-label">Full Name</label>
          <input
            type="text"
            placeholder="Eg. Saliv Maharjan"
            className="user-form-input"
          />
        </div>
        <div className="user-form-field">
          <label className="user-form-label">Email Address</label>
          <input
            type="text"
            placeholder="Eg. salivmrj@gmail.com"
            className="user-form-input"
          />
        </div>
        <div className="user-form-field">
          <label className="user-form-label">Conctact Number</label>
          <input
            type="text"
            placeholder="Eg. +977 9866445340"
            className="user-form-input"
          />
        </div>
        <div className="user-form-field">
          <label className="user-form-label">Role</label>
          <select className="user-form-input">
            <option>User</option>
            <option>Admin</option>
          </select>
        </div>
        <div className="user-form-field">
          <label className="user-form-label">Password</label>
          <input
            type="text"
            placeholder="Enter the password"
            className="user-form-input"
          />
        </div>
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
