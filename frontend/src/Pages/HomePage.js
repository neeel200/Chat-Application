import React from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "../components/Authentication/login.js"; 
import Signup from "../components/Authentication/signup.js";

const HomePage = () => {
  return (
    <Container>
      <Box
        display={"Flex"}
        justifyContent={"center"}
        p={3}
        bg={"white"}
        w={"100%"}
        m={"20px 0 1px 0"}
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Text fontSize="4xl" fontFamily={"Work Sans"}>
          Talk-A-Tive
        </Text>
      </Box>
      <Box bg="white" w={"100%"} p={4} borderRadius={"1px"}>
        <Tabs variant="soft-rounded" colorScheme="purple">
          <TabList mb={"1em"}>
            <Tab width={"50%"}>LogIn</Tab>
            <Tab width={"50%"}>SignUp</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{<Login />}</TabPanel>
            <TabPanel>{<Signup />}</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
