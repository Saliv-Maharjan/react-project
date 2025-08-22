import { BrowserRouter, Routes, Route } from "react-router";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AdminLayout from "./components/backend/AdminLayout";
import Dashboard from "./pages/backend/Dashboard";
import Users from "./pages/backend/Users";
import Products from "./pages/backend/Products";
import AdminLogin from "./pages/backend/AdminLogin";
import UserForm from "./components/backend/UserForm";
import ProductForm from "./components/backend/ProductForm";
import UserLayout from "./components/frontend/UserLayout";
import UserLogin from "./pages/frontend/UserLogin";
import UserRegister from "./pages/frontend/UserRegister";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route path="/login" element={<UserLogin />} />
            <Route path="/register" element={<UserRegister />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />

            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/users/add" element={<UserForm />} />
            <Route path="/admin/users/edit/:id" element={<UserForm />} />

            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/products/add" element={<ProductForm />} />
            <Route path="/admin/products/edit" element={<ProductForm />} />
          </Route>
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
};
export default App;
