import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

interface SelectCardProps {
  label: string;
  id: string;
  options: { value: string; label: string }[];
  inputRef: React.Ref<HTMLSelectElement>;
  onChange?: () => void;
}

const SelectCard: React.FC<SelectCardProps> = ({
  label,
  id,
  options,
  inputRef,
  onChange,
}) => (
  <FormControl fullWidth sx={{ marginBottom: 2 }}>
    <InputLabel id={`${id}-label`}>{label}</InputLabel>
    <Select
      labelId={`${id}-label`}
      id={id}
      label={label}
      inputRef={inputRef}
      onChange={onChange}
      defaultValue=""
      sx={{
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#880e4f",
          transition: "border-color 0.3s ease, border-width 0.3s ease",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#ff4081",
          borderWidth: "2px",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#ff4081",
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
              backgroundColor: "#880e4f",
              color: "#fff",
            },
          }}
        >
          {option.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default SelectCard;
