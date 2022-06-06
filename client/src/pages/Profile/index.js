import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, logout } = useAuth();

  let navigate = useNavigate();

  const handleLogout = async () => {
    logout(() => {
      navigate("/signup");
    });
  };

  return (
    <div>
      <Text fontSize="22">Profile</Text>
      <code>{JSON.stringify(user)}</code>
      <br />
      <br />
      <Button colorScheme="red" variant="solid" onClick={handleLogout}>
        LOGOUT
      </Button>
    </div>
  );
}

export default Profile;
