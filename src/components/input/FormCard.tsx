// FormCard.tsx
import React, { RefObject } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface FormCardProps {
  label: string;
  id: string;
  inputRef: RefObject<HTMLInputElement>;
  onChange: () => void;
  type?: string; // Optional prop for input type
}

const FormCard: React.FC<FormCardProps> = ({
  label,
  id,
  inputRef,
  onChange,
  type = "text",
}) => (
  <FormControl>
    <FormLabel color={"black"} htmlFor={id}>
      {label}
    </FormLabel>
    <Input
      fill={"#Pink 400"}
      _hover={{
        borderColor: "#ff4081",
      }}
      color={"black"}
      id={id}
      ref={inputRef}
      onChange={onChange}
      type={type}
      focusBorderColor="#ff4081"
      borderColor="#880e4f"
    />
  </FormControl>
);

export default FormCard;
