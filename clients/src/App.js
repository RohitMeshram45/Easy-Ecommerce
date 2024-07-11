import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";
import Register from "./pages/Auth/Register.js";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Auth/Login.js";
import Dashboard from "./user/Dashboard.js";
import ForgetPassword from "./pages/Auth/ForgetPassword.js";
import Private from "./components/Routes/Private.js"
import AdminRoute from "./components/Routes/AdminRoute.js";
import AdminDashboard from "./pages/Admin/AdminDashboard.js";
import CreateCategory from "./pages/Admin/CreateCategory.js";
import CreateProduct from "./pages/Admin/CreateProduct.js";
import Users from "./pages/Admin/Users.js";
import Order from "./pages/User/Order.js";
import Profile from "./pages/User/Profile.js";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Private />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Order />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/users" element={<Users />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
