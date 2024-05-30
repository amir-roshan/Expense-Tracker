import React from "react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";

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
  <FormControl id={id} mb={4}>
    <FormLabel color={"#000"} htmlFor={id}>
      {label}
    </FormLabel>
    <Select
      color={"#000"}
      ref={inputRef}
      id={id}
      placeholder="Select option"
      onChange={onChange}
      focusBorderColor="#ff4081"
      borderColor="#880e4f"
      _hover={{
        borderColor: "#ff4081",
        backgroundColor: "#f8bbd0",
      }}
      _focus={{
        borderColor: "#ff4081",
      }}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          style={{
            backgroundColor: "#f8bbd0",
          }}
        >
          {option.label}
        </option>
      ))}
    </Select>
  </FormControl>
);

export default SelectCard;
