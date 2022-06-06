import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Error from "./pages/Error";

function App() {
  return (
    <div>
      <Navbar />
      <div id="content">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:product_id" element={<ProductDetail />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
