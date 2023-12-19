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
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();  
  const [pic, setpic] = useState();

  const handleClick = () => setShow(!show);
  const postDetails = (pics) => {};
  const submitHandler = () => {};
  return (
    <VStack>
      <FormControl isRequired>
        <FormLabel id="name">Name</FormLabel>
        <Input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
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
      <FormControl isRequired>
        <FormLabel id="password"> Confirm Password</FormLabel>

        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {" "}
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel id="pic">Upload your picture here !</FormLabel>

        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        colorScheme="purple"
        width="100%"
        style={{ marginTop: 15 }}
        onCLick={submitHandler}
      >
        SignUp
      </Button>
    </VStack>
  );
};

export default login;
