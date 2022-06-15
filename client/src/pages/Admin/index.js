import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";
import Home from "./Home";
import Products from "./Products";
import Orders from "./Orders";
import ProductDetail from "./ProductDetail";
import NewProduct from "./Products/new";
import "./style.css";

function Admin() {
  return (
    <div>
      <nav>
        <ul className="admin-menu">
          <li>
            <Link to="/admin">
              <Button colorScheme="purple" variant="ghost">
                Home
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/admin/orders">
              <Button colorScheme="purple" variant="ghost">
                Orders
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/admin/products">
              <Button colorScheme="purple" variant="ghost">
                Products
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
      <Box mt="10">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"orders"} element={<Orders />} />
          <Route path={"products"} element={<Products />} />
          <Route path={"products/new"} element={<NewProduct />} />
          <Route path={"products/:product_id"} element={<ProductDetail />} />
        </Routes>
      </Box>
    </div>
  );
}

export default Admin;
