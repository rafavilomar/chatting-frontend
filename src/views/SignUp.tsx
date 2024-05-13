import {
  ArrowForwardIcon,
  AtSignIcon,
  LockIcon,
  ViewIcon,
  ViewOffIcon
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import Brand from "../component/Brand";
import GeneralContext from "../utils/context/context";

const SignUp = () => {
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [passwordInputRepeat, setPasswordInputRepeat] = useState<string>("");
  const [show, setShow] = React.useState(false);
  const [showRepeat, setShowRepeat] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const { userLogged, login, signup } = useContext(GeneralContext);
  const navigate = useNavigate();

  const handleClick = () => setShow(!show);
  const handleClickRepeat = () => setShowRepeat(!showRepeat);

  const handleSignup = () => {
    signup!({
      username: usernameInput,
      password: passwordInput,
    });
    navigate("/");
  };

  useEffect(() => {
    userLogged && navigate("/");
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
        <Brand center />
        <form action="">
          <Flex direction={"column"} gap={3}>
            <InputGroup>
              <InputLeftElement children={<AtSignIcon />} />
              <Input
                id="username"
                variant="filled"
                size="md"
                placeholder="username"
                value={usernameInput}
                onChange={(e: any) => setUsernameInput(e.target.value)}
              />
            </InputGroup>
            <InputGroup size="md">
              <InputLeftElement children={<LockIcon />} />
              <Input
                id="password"
                variant="filled"
                size="md"
                type={show ? "text" : "password"}
                placeholder="password"
                value={passwordInput}
                onChange={(e: any) => setPasswordInput(e.target.value)}
              />
              <InputRightElement>
                <IconButton
                  aria-label={show ? "Hide" : "Show"}
                  icon={show ? <ViewIcon /> : <ViewOffIcon />}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            <InputGroup size="md">
              <InputLeftElement children={<LockIcon />} />
              <Input
                id="passwordRepeat"
                variant="filled"
                size="md"
                type={showRepeat ? "text" : "password"}
                placeholder="repeat password"
                isInvalid={passwordError}
                value={passwordInputRepeat}
                onChange={(e: any) => {
                  setPasswordInputRepeat(e.target.value);
                  if (e.target.value !== passwordInput) {
                    setPasswordError(true);
                  } else {
                    setPasswordError(false);
                  }
                }}
              />
              <InputRightElement>
                <IconButton
                  aria-label={showRepeat ? "Hide" : "Show"}
                  icon={showRepeat ? <ViewIcon /> : <ViewOffIcon />}
                  onClick={handleClickRepeat}
                />
              </InputRightElement>
            </InputGroup>
            <Button
              rightIcon={<ArrowForwardIcon />}
              size="md"
              w="100%"
              disabled={
                passwordError ||
                !usernameInput ||
                !passwordInput ||
                !passwordInputRepeat ||
                passwordInput.length < 8
              }
              onClick={handleSignup}
            >
              Sign Up
            </Button>
            <Link as={ReactRouterLink} to="/login" textAlign="center">
              Login
            </Link>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default SignUp;
