import React, { useContext, useEffect } from "react";
import {
  Flex,
  Box,
  Heading,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { ArrowForwardIcon, AtSignIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

import GeneralContext from "../utils/context/context";

const Login = () => {
  const navigate = useNavigate();
  const { isLogged, login } = useContext(GeneralContext);

  const handleLogin = () => {
    login!();
    navigate("/");
  };

  useEffect(() => {
    isLogged && navigate("/");
  }, []);

  return (
    <Flex
      pos={"fixed"}
      top={0}
      left={0}
      right={0}
      bottom={0}
      bgColor="gray.50"
      justifyContent={"center"}
      alignItems="center"
    >
      <Box w={350} padding="5" borderRadius="md" shadow="sm" bgColor="white">
        <Heading as="h1" size="lg" textAlign="center" marginBottom={5}>
          Chatting
        </Heading>
        <form action="">
          <Flex direction={"column"} gap={3}>
            <InputGroup>
              <InputLeftElement children={<AtSignIcon />} />
              <Input
                id="username"
                variant="filled"
                size="md"
                placeholder="username"
              />
            </InputGroup>
            <Button
              rightIcon={<ArrowForwardIcon />}
              size="md"
              w="100%"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;
