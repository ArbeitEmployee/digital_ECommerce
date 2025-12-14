import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Home components
import Navbar from "./Home/components/Navbar";
import Footer from "./Home/components/Footer";
import Banner from "./Home/pages/Banner";
import BestSellingProducts from "./Home/pages/BestSellingProducts";
import FAQ from "./Home/pages/FAQ";
import Contact from "./Home/pages/Contact";
import FeaturedProducts from "./Home/pages/FeaturedProducts";
import LatestProducts from "./Home/pages/LatestProducts";
import PopularCategory from "./Home/pages/PopularCategory";
import ProductDetails from "./Home/subPages/ProductDetails";
import ProductGrid from "./Home/subPages/ProductGrid";
import AddToCart from "./Home/components/AddToCart";
import CheckOut from "./Home/components/CheckOut";
import AboutUs from "./Home/pages/AboutUs";
import WishList from "./Home/pages/WishList";
import Signup from "./Home/Signup";
import Login from "./Home/Login";
import ForgetPassword from "./Home/ForgetPassword";
import ThankYou from "./Home/components/ThankYou";

// Admin components
import AdminLogin from "./admin/AdminLogin";
import AdminSignup from "./admin/AdminSignup";
import ForgotPassword from "./admin/ForgotPassword";
import ResetPassword from "./admin/ResetPassword";
import { Toaster } from "react-hot-toast";
import AdminDashboard from "./admin/AdminDashboard";

// Mock authentication check for admin
const AdminPrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/admin" />;
};

function HomePage() {
  return (
    <>
      <Banner />
      <PopularCategory />
      <FeaturedProducts />
      <BestSellingProducts />
      <LatestProducts />
    </>
  );
}

function App() {
  return (
    <Router>
      {/* Toaster for notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#fff",
            color: "#000",
            border: "1px solid #e5e7eb",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          },
        }}
      />

      <Routes>
        {/* Public Routes with Navbar & Footer */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                {/* Home */}
                <Route path="/" element={<HomePage />} />

                {/* Shop / product listing */}
                <Route path="/shop" element={<ProductGrid />} />
                <Route path="/product" element={<ProductGrid />} />

                {/* Single product */}
                <Route path="/product/:id" element={<ProductDetails />} />

                {/* About Us */}
                <Route path="/about" element={<AboutUs />} />

                {/* Static pages */}
                <Route path="/contact" element={<Contact />} />
                <Route path="/faqs" element={<FAQ />} />

                {/* Cart / checkout */}
                <Route path="/added-to-cart" element={<AddToCart />} />
                <Route path="/checkout" element={<CheckOut />} />

                {/* Wishlist */}
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/thank-you" element={<ThankYou />} />

                {/* Auth */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgetPassword />} />
              </Routes>
              <Footer />
            </>
          }
        />

        {/* Admin Routes (No Navbar/Footer) */}
        <Route
          path="/admin/*"
          element={
            <Routes>
              <Route index element={<AdminLogin />} />
              <Route path="login" element={<AdminLogin />} />
              <Route path="signup" element={<AdminSignup />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="reset-password" element={<ResetPassword />} />
              <Route
                path="dashboard"
                element={
                  <AdminPrivateRoute>
                    <AdminDashboard />
                  </AdminPrivateRoute>
                }
              />
            </Routes>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
