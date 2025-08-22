import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const UserLayout = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="user-container">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default UserLayout;
