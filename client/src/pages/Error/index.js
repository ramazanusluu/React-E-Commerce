import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

function Error() {
  return (
    <div>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>ERROR 404</AlertTitle>
        <AlertDescription>
          The page you were looking for was not found
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default Error;
