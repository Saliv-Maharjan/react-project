import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import UserSidebar from "./UserSidebar";

const UserProfile = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="profile-section">
        <div className="profile-sidebar">
          <UserSidebar />
        </div>
        <div className="profile-outlet">
          <Outlet />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default UserProfile;
