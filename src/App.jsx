import { BrowserRouter, Routes, Route } from "react-router";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AdminLayout from "./components/backend/AdminLayout";
import Dashboard from "./pages/backend/Dashboard";
import Users from "./pages/backend/Users";
import Products from "./pages/backend/Products";
import AdminLogin from "./pages/backend/AdminLogin";
import UserForm from "./components/backend/UserForm";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/users" element={<Users />} />
            <Route path="/users/add" element={<UserForm />} />
            <Route path="/users/edit" element={<UserForm />} />

            <Route path="/products" element={<Products />} />
          </Route>
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
};
export default App;
