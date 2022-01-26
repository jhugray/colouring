import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to PAINTOLOUR</h1>
      <Box bg="tomato" w="100%" p={4} color="white">
        This is the Box
      </Box>
      <Stack spacing={8} direction="row" align="center">
        <Link to="/">
          Home
        </Link>
        <Link to="/signup">
          Signup
        </Link>
        <Button colorScheme="teal" size="md">
          Login
        </Button>
        <Link to="/DrawingBoard">
          DrawingBoard
        </Link>
      </Stack>
    </div>
  );
};

export default Home;
