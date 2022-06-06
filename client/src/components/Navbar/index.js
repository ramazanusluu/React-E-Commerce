import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";

function Navbar() {
  const { loggedIn } = useAuth();

  console.log(loggedIn);

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
                <Button colorScheme="messenger" variant="outline">
                  LOGIN
                </Button>
              </Link>
              <Link to="/signup">
                <Button colorScheme="messenger" variant="outline">
                  REGISTER
                </Button>
              </Link>
            </>
          )}
          {loggedIn && (
            <>
              <Link to="/profile">
                <Button colorScheme="whatsapp" variant="outline">
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
