import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import FormCard from "./FormCard";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SelectCard from "./SelectCard";

interface FormData {
  description: string;
  amount: string;
  category: string;
}

const InputForm = () => {
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const descriptionRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

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
      label: "Entertainment",
    },
  ];

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "description":
        if (!value) {
          return "Description is required";
        }
        break;
      case "amount":
        if (!value) {
          return "Amount is required";
        } else if (parseFloat(value) < 0) {
          return "Amount must be non-negative";
        }
        break;
      case "category":
        if (!value) {
          return "Category is required";
        }
        break;
      default:
        return "";
    }
    return "";
  };

  const handleChange = (name: keyof FormData, value: string) => {
    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const description = descriptionRef.current?.value || "";
    const amount = amountRef.current?.value || "";
    const category = categoryRef.current?.value || "";
    const validationErrors: Partial<FormData> = {
      description: validateField("description", description),
      amount: validateField("amount", amount),
      category: validateField("category", category),
    };

    if (
      !validationErrors.description &&
      !validationErrors.amount &&
      !validationErrors.category
    ) {
      console.log({ description, amount, category });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Box
      margin="auto"
      width="70%"
      component="form"
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
        onChange={() =>
          handleChange("description", descriptionRef.current?.value || "")
        }
      />
      {errors.description && (
        <span className="alert alert-danger p-1">{errors.description}</span>
      )}

      <FormCard
        type="number"
        label="Amount"
        id="Amount"
        inputRef={amountRef}
        onChange={() =>
          handleChange("amount", amountRef.current?.value || "groceries")
        }
      />
      {errors.amount && (
        <span className="alert alert-danger p-1">{errors.amount}</span>
      )}

      <SelectCard
        options={categoryList}
        label="Category"
        id="Category"
        inputRef={categoryRef}
        onChange={() =>
          handleChange("category", categoryRef.current?.value || "")
        }
      />
      {errors.category && (
        <span className="alert alert-danger p-1">{errors.category}</span>
      )}

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
  );
};

export default InputForm;
