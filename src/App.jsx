import { BrowserRouter, Routes, Route } from "react-router";
import AdminLayout from "./components/backend/AdminLayout";
import Dashboard from "./pages/backend/Dashboard";
import Users from "./pages/backend/Users";
import Products from "./pages/backend/Products";
import AdminLogin from "./pages/backend/AdminLogin";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
          </Route>
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
