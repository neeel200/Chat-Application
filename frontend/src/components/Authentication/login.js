import {
  VStack,
  FormControl,
  Input,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";

const login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState(); 
  const [password, setPassword] = useState();

  const handleClick = () => setShow(!show);
  const submitHandler = () => {};
  return (
    <VStack>
      <FormControl isRequired>
        <FormLabel id="email">Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter your name"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel id="password">Password</FormLabel>

        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {" "}
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="purple"
        width="100%"
        style={{ marginTop: 15 }}
        onCLick={submitHandler}
      >
        LogIn
      </Button>
      <Button
        variant={"solid"}
        colorScheme="red"
        width="100%"
        onCLick={() => {
            setEmail("guest@example.com")
            setPassword("123456")
        }}
      >
        GetGuest User Credentials
      </Button>
    </VStack>
  );
};

export default login; 
