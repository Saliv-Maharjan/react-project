import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getUserById } from "../../services/backend/userData";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
    number: "",
  });

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

  const handleLogout = () => {
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.removeItem("USER_EMAIL");
    navigate("/login");
  };
  return (
    <div className="profile-page-section">
      <h2 className="profile-title">Profile Page</h2>
      <div className="profile-context">
        <div className="profile-form">
          <div className="profile-fields">
            <label>Full Name</label>
            <input type="text" name="name" value={data.name} readOnly />
          </div>

          <div className="profile-fields">
            <label>Email</label>
            <input type="text" name="email" value={data.email} readOnly />
          </div>

          <div className="profile-fields ">
            <label>Phone Number</label>
            <input type="text" name="number" value={data.number} readOnly />
          </div>

          <div className="profile-fields">
            <label>Home Address</label>
            <input type="text" name="address" value={data.address} readOnly />
          </div>
        </div>

        <div className="profile-image">
          <img src="vite.svg" />
          <div>Username</div>
          <div onClick={handleLogout} className="logout-btn">
            <span>LOGOUT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
