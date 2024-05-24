import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

interface CustomTextFieldProps extends Omit<TextFieldProps, "id"> {
  label: string;
  id: string;
  options?: { value: string; label: string }[];
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  id,
  ...props
}) => {
  return (
    <TextField
      size="medium"
      fullWidth
      label={label}
      id={id}
      color="secondary"
      sx={{
        marginBottom: 2, // Add margin bottom
        "& .MuiOutlinedInput-root": {
          "&:not(.Mui-focused) .MuiOutlinedInput-notchedOutline": {
            borderColor: "#880e4f",
          },
        },
      }}
      {...props}
    />
  );
};

export default CustomTextField;
