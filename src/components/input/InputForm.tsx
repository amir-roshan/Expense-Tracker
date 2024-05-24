import Box from "@mui/material/Box";
import FormCard from "./FormCard";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SelectCard from "./SelectCard";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  description: string;
  amount: string;
  category: string;
}

const InputForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

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

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
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
        onSubmit={handleSubmit(onSubmit)}
      >
        {errors.description && (
          <span className="alert alert-danger p-1">
            Description is required
          </span>
        )}
        <FormCard
          label="Description"
          id="Description1"
          inputRef={register("description", { required: true }).ref}
        />
        {errors.amount && (
          <span className="alert alert-danger p-1">Amount is required</span>
        )}
        <FormCard
          type="number"
          label="Amount"
          id="Amount"
          inputRef={register("amount", { required: true }).ref}
        />
        {errors.category && (
          <span className="alert alert-danger p-1">Category is required</span>
        )}
        <SelectCard
          options={categoryList}
          label="Category"
          id="Category"
          inputRef={register("category", { required: true }).ref}
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
