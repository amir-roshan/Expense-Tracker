import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectProps,
} from "@mui/material";

interface SelectCardProps extends Omit<SelectProps, "id"> {
  label: string;
  id: string;
  options: { value: string; label: string }[];
}

const SelectCard: React.FC<SelectCardProps> = ({
  label,
  id,
  options,
  ...props
}) => {
  return (
    <FormControl fullWidth sx={{ marginBottom: 2 }}>
      <InputLabel
        id={`${id}-label`}
        sx={{
          color: "#880e4f", // Initial label color
          transition: "color 0.3s ease", // Add transition for label color
          "&.Mui-focused": {
            color: "#ff4081", // Secondary label color when focused
          },
          "&:hover": {
            color: "#ff4081", // Secondary label color on hover
          },
        }}
      >
        {label}
      </InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        label={label}
        defaultValue=""
        {...props}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#880e4f", // Custom border color
            transition: "border-color 0.3s ease, border-width 0.3s ease", // Transition for border color change
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff4081", // Border color on hover
            borderWidth: "2px", // Make the border thicker on hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff4081", // Border color when focused
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            sx={{
              backgroundColor: "#f8bbd0",
              "&:hover": {
                backgroundColor: "#f48fb1",
              },
              "&.Mui-selected": {
                backgroundColor: "#ff4081",
                color: "#000",
              },
              "&.MuiSelect-select": {
                "&.Mui-focused:hover": {
                  backgroundColor: "#f48fb1",
                },
              },
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectCard;
