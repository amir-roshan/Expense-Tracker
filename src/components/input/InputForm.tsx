import React, { useRef, useState } from "react";
import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import FormCard from "./FormCard";
import SelectCard from "./SelectCard";
import Cart from "./Cart";

interface FormData {
  description: string;
  amount: string;
  category: string;
}

const InputForm = () => {
  const [products, setProducts] = useState<FormData[]>([]);
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

  const handleDelete = (index: number) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
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
      setProducts([
        ...products,
        {
          description: description,
          amount: amount,
          category: category,
        },
      ]);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Box
      margin="auto"
      width="70%"
      marginTop={10}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      as="form"
      onSubmit={handleSubmit}
    >
      <VStack spacing={4} width="100%">
        <FormCard
          label="Description"
          id="Description1"
          inputRef={descriptionRef}
          onChange={() =>
            handleChange("description", descriptionRef.current?.value || "")
          }
        />
        {errors.description && (
          <Text color="red.500" fontSize="sm">
            {errors.description}
          </Text>
        )}

        <FormCard
          type="number"
          label="Amount"
          id="Amount"
          inputRef={amountRef}
          onChange={() =>
            handleChange("amount", amountRef.current?.value || "")
          }
        />
        {errors.amount && (
          <Text color="red.500" fontSize="sm">
            {errors.amount}
          </Text>
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
          <Text color="red.500" fontSize="sm">
            {errors.category}
          </Text>
        )}

        <Button
          type="submit"
          colorScheme="pink"
          size="lg"
          rightIcon={<AddIcon />}
        >
          Add to your cart
        </Button>
      </VStack>
      <Flex alignItems="center" flexDirection="column">
        {products.length > 0
          ? products.map((product, index) => {
              return (
                <Cart
                  onDelete={() => handleDelete(index)}
                  key={index}
                  description={
                    product.description.charAt(0).toUpperCase() +
                    product.description.slice(1)
                  }
                  amount={product.amount}
                  category={
                    product.category.charAt(0).toUpperCase() +
                    product.category.slice(1)
                  }
                />
              );
            })
          : null}
      </Flex>
    </Box>
  );
};

export default InputForm;
