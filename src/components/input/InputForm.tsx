import React, { useRef } from "react";
import Box from "@mui/material/Box";
import FormCard from "./FormCard";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SelectCard from "./SelectCard";

const InputForm = () => {
  let description;
  let amount;
  let category;

  const descriptionRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLInputElement>(null);

  const categoryList = [
    {
      value: "groceries",
      label: "Groceries",
    },
    {
      value: "utilities",
      label: "Utilities",
    },
    {
      value: "entertainment",
      label: "Entertainments",
    },
  ];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    description = descriptionRef.current?.value;
    amount = amountRef.current?.value;
    category = categoryRef.current?.value;
    console.log(description, amount, category);
  };
  return (
    <>
      <Box
        margin="auto"
        width="70%"
        component="form"
        className=""
        marginTop={10}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        onSubmit={handleSubmit}
      >
        <FormCard
          label="Description"
          id="Description1"
          inputRef={descriptionRef}
        />
        <FormCard
          type="number"
          label="Amount"
          id="Amount"
          inputRef={amountRef}
        />
        <SelectCard
          options={categoryList}
          label="Category"
          id="Category"
          inputRef={categoryRef}
        />

        <Button
          type="submit"
          variant="outlined"
          color="secondary"
          size="large"
          endIcon={<AddShoppingCartIcon sx={{ color: "#880e4f" }} />}
        >
          Add to your cart
        </Button>
      </Box>
    </>
  );
};

export default InputForm;
