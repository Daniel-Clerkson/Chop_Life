import React from "react";
import Navbar from "./components/Navbar"; // if separated
import ProductGrid from "./components/Products";
import VendorList from "./components/VendorComponents/VendorList";
import FeaturedCarousel from "./components/FeaturedCarousel";
import Footer from "./components/Footer";
import HomeHero from "./components/HomeComponents/HomeHero";
import Login2 from "./components/AuthComponents/login2";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/AuthComponents/login2";
import MainLayout from "./Layout/MainLayout";
import Register from "./components/AuthComponents/Register";
import Menu from "./components/MenuComponents/Menu";
import ErrorPage from "./components/ErrorComponents/Error";
import ForgotPassword from "./components/AuthComponents/ForgotPassword";
import ResetPassword from "./components/AuthComponents/ResetPassword";
import VerifyEmail from "./components/AuthComponents/Verify";
import BecomeVendor from "./components/VendorComponents/BecomeVendor";
import Cart from "./components/CartComponent/Cart";
import ContactUs from "./components/Contact";
import AdminPanel from "./components/Admin/Admin";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeHero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vendors/list" element={<VendorList />} />
        <Route path="/vendors/apply" element={<BecomeVendor />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
