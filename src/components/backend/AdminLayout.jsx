import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
    return (
        <>
            <div className="admin-header"><Header /></div>
            <div className="admin-container">
                <div className="admin-sidebar"><Sidebar /></div>
                <div className="admin-content">Content</div>
            </div>
            <div className="admin-footer"><Footer /></div>
        </>
    )
}
export default AdminLayout;