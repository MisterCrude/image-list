import { Alert, AlertIcon } from "@chakra-ui/react";

const ErrorAlert = () => {
  return (
    <Alert status="error">
      <AlertIcon />
      There was an error processing your request
    </Alert>
  );
};

export default ErrorAlert;
