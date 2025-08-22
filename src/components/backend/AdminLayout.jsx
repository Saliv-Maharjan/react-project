import { Outlet, useNavigate } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useEffect } from "react";

const AdminLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const role = localStorage.getItem("USER_ROLE");
    if (role !== "Admin") {
      navigate("/admin-login");
    }
  }, []);

  return (
    <>
      <div className="admin-header">
        <Header />
      </div>
      <div className="admin-container">
        <div className="admin-sidebar">
          <Sidebar />
        </div>
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
      <div className="admin-footer">
        <Footer />
      </div>
    </>
  );
};
export default AdminLayout;
