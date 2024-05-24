import React from "react";
import Box from "@mui/material/Box";
import InputForm from "./components/input/InputForm";

const App: React.FC = () => {
  return (
    <Box
      sx={{
        padding: 1,
        backgroundColor: "#F8E8EE", // Add background color
        minHeight: "100vh", // Ensure it takes the full viewport height
      }}
    >
      <InputForm />
    </Box>
  );
};

export default App;
