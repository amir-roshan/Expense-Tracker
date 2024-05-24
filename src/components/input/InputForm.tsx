import React from "react";
import Box from "@mui/material/Box";
import FormCard from "./FormCard";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const InputForm: React.FC = () => {
  return (
    <>
      <Box
        margin={10}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box
          sx={{
            width: "80%",
            maxWidth: "100%",
          }}
        >
          <FormCard label="Description" id="Description1" />
          <FormCard label="Amount" id="Amount" />
          <FormCard label="Category" id="Category" />
        </Box>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          endIcon={<AddShoppingCartIcon sx={{ color: "#880e4f" }} />}
        >
          Buy your accessories
        </Button>
      </Box>
    </>
  );
};

export default InputForm;
