import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category1";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AppContext from "./utils/Context";
import ContactUs from "./components/ContactUs/ContactUs";
import Second from "./components/Home/Second";
import Account from "./components/Account/Account";
import Category1 from "./components/Category/Category1";
import Category2 from "./components/Category/Category2";
import Category3 from "./components/Category/Category3";
import User from "./components/User/User";
import Admin from "./components/Admin-pages/Admin";
import AllProducts from "./components/Category/AllProducts";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/category" element={<Second />} /> */}
          {/* <Route path="/category/:id" element={<Category />} /> */}
          {/* <Route path="/product/:id" element={<SingleProduct />} /> */}

          {/* <Route path="/login" element={<Login />} /> */}

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/account" element={<Account />} />
          <Route path="/user" element={<Account />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/Categories" element={<Second />} />
          <Route path="/Millet" element={<Category1 />} />
          <Route path="/Jaggery" element={<Category2 />} />
          <Route path="/combo" element={<Category3 />} />
          <Route path="/allProducts" element={<AllProducts />} />
        </Routes>
        {/* <Footer /> */}
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
