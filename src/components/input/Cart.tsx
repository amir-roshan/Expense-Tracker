import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

interface Props {
  description: string;
  amount: string;
  category: string;
}

const ProductCard = ({ category, description, amount }: Props) => {
  return (
    <Card minWidth="md" maxWidth="2xl" mt={4} mr={2} ml={2}>
      <CardBody background="#ffe5ec">
        <Flex justify="space-between" align="center">
          <Stack mt="6" spacing="3">
            <Heading color="#000" size="md">
              {category}
            </Heading>
            <Text color="#333" fontSize="2xl">
              {description}
            </Text>
            <Text color="#000">{amount}</Text>
          </Stack>
          <IconButton
            aria-label="Delete icon"
            size="lg"
            icon={<DeleteIcon />}
            background="transparent"
          />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
