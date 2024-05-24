import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

interface CustomTextFieldProps extends Omit<TextFieldProps, "id"> {
  label: string;
  id: string;
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
            borderColor: "#880e4f", // Change border color when not focused
          },
        },
      }}
      {...props} // Spread the rest of the props
    />
  );
};

export default CustomTextField;
