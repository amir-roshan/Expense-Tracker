import React from "react";
import { Box } from "@chakra-ui/react";
import InputForm from "./components/input/InputForm";

const App: React.FC = () => {
  return (
    <Box
      p={4}
      bg="#F8E8EE"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <InputForm />
    </Box>
  );
};

export default App;
