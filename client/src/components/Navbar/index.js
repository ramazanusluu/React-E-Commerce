import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";

function Navbar() {
  const { loggedIn, user } = useAuth();
  const { items } = useBasket();

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Link to="/">Ξ-COMMΞRCΞ</Link>
          </div>
          <ul className={styles.menu}>
            <li>
              <Link to="/">PRODUCT</Link>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          {!loggedIn && (
            <>
              <Link to="/signin">
                <Button colorScheme="messenger" variant="ghost">
                  LOGIN
                </Button>
              </Link>
              <Link to="/signup">
                <Button colorScheme="messenger" variant="ghost">
                  REGISTER
                </Button>
              </Link>
            </>
          )}
          {loggedIn && (
            <>
              {items.length > 0 && (
                <Link to="/basket">
                  <Button colorScheme="pink" variant="ghost">
                    Basket ({items.length})
                  </Button>
                </Link>
              )}
              {user?.role === "admin" && (
                <Link to="/admin">
                  <Button colorScheme="red" variant="ghost">
                    Admin
                  </Button>
                </Link>
              )}
              <Link to="/profile">
                <Button colorScheme="whatsapp" variant="ghost">
                  Profile
                </Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
