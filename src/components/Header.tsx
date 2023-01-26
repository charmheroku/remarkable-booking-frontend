import { FaMoon } from "react-icons/fa";
import { RiHotelFill} from "react-icons/ri";
import {
  Box,
  Button,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default function Header() {
  const {
    isOpen: isLoginOpen,
    onClose: onLoginClose,
    onOpen: onLoginOpen,
  } = useDisclosure();
  const {
    isOpen: isSignUpOpen,
    onClose: onSignUpClose,
    onOpen: onSignUpOpen,
  } = useDisclosure();
  return (
    <HStack
      justifyContent={"space-between"}
      py={5}
      px={10}
      borderBottomWidth={1}
    >
      <Box color="red.500">
        <Link to={"/"}>
          <RiHotelFill size={"48"} />
        </Link>
      </Box>
      <HStack spacing={2}>
        <IconButton
          variant={"ghost"}
          aria-label="Toggle dark mode"
          icon={<FaMoon />}
        />
        <Button onClick={onLoginOpen}>Log in</Button>
        <Button onClick={onSignUpOpen} colorScheme={"red"}>
          Sign up
        </Button>
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </HStack>
  );
}
