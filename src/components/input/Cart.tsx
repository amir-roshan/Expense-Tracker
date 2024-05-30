import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  ButtonGroup,
  Button,
  Text,
  Heading,
} from "@chakra-ui/react";

interface Props {
  discription: string;
  amount: string;
  category: string;
}

const Cart = ({ discription, amount, category }: Props) => {
  return (
    <Card maxW="sm" m={2}>
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{category}</Heading>
          <Text color="blue.600" fontSize="2xl">
            {amount}
          </Text>
          <Text>{discription}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter></CardFooter>
    </Card>
  );
};

export default Cart;
