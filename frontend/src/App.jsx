// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Banner from "./pages/Banner";
import BestSellingProducts from "./pages/BestSellingProducts";
import Blog from "./pages/Blog";
import ClientSay from "./pages/ClientSay";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import FeaturedProducts from "./pages/FeaturedProducts";
import LatestProducts from "./pages/LatestProducts";
import PopularCategory from "./pages/PopularCategory";

import BlogDetails from "./subPages/Blogdetails";
import ProductDetails from "./subPages/ProductDetails";
import ProductGrid from "./subPages/ProductGrid";

import AddToCart from "./components/AddToCart";
import GoToCart from "./components/GoToCard";
import CheckOut from "./components/CheckOut";
import AboutUs from "./pages/AboutUs";
import WishList from "./pages/WishList";

import Signup from "./Signup";
import Login from "./Login";
import ForgetPassword from "./ForgetPassword";

function HomePage() {
  return (
    <>
      <Banner />
      <PopularCategory />
      <FeaturedProducts />
      <BestSellingProducts />
      <LatestProducts />
      <ClientSay />
      <Blog />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Shop / product listing */}
        <Route path="/shop" element={<ProductGrid />} />

        {/* Single product */}
        <Route path="/product/:id" element={<ProductDetails />} />
        {/* About Us */}
        <Route path="/about" element={<AboutUs />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />

        {/* Static pages */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQ />} />

        {/* Cart / checkout */}
        <Route path="/added-to-cart" element={<AddToCart />} />
        <Route path="/cart" element={<GoToCart />} />
        <Route path="/checkout" element={<CheckOut />} />

        {/* Wishlist */}
        <Route path="/wishlist" element={<WishList />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
