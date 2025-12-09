// import AddToCart from "./components/AddToCart";
import CheckOut from "./components/CheckOut";
import Footer from "./components/Footer";
// import GoToCart from "./components/GoToCard";
import Navbar from "./components/Navbar";
// import ForgetPassword from "./ForgetPassword";
// import Login from "./Login";
import Banner from "./pages/Banner";
import BestSellingProducts from "./pages/BestSellingProducts";
import Blog from "./pages/Blog";
import ClientSay from "./pages/ClientSay";
import FAQ from "./pages/FAQ";
// import Contact from "./pages/Contact";
import FeaturedProducts from "./pages/FeaturedProducts";
import LatestProducts from "./pages/LatestProducts";
import PopularCategory from "./pages/PopularCategory";
import BlogDetails from "./subPages/Blogdetails";
// import Signup from "./Signup";
// import ProductDetails from "./subPages/ProductDetails";
// import ProductGrid from "./subPages/ProductGrid";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <PopularCategory />
      <LatestProducts />
      <BestSellingProducts />
      <FeaturedProducts />
      <ClientSay />
      <Blog />
      <FAQ />
      {/* <ProductGrid />
      <ProductDetails />
      <Contact /> */}
      <Footer />
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* Your other content */}
      {/* <ForgetPassword /> */}
      {/* <AddToCart /> */}
      <CheckOut />
      {/* <GoToCart /> */}
      <BlogDetails />
    </div>
  );
}

export default App;
