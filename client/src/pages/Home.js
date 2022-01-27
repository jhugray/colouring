import React from "react";
import { Box, Stack } from "@chakra-ui/react";
// import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Auth from '../utils/auth';

const Home = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  
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
        <Link to="/DrawingBoard">
          DrawingBoard
        </Link>
        {Auth.loggedIn() ? (
          <>
            <Link to="/mycolourings">
              My Colourings
            </Link>
            <a href="/" onClick={logout}>
              Logout
            </a>
          </>
        ) : (
          <>
            <Link to="/signup">
              Signup
            </Link>
            <Link to="/login">
              Login
            </Link>
          </>
        )}
      </Stack>
    </div>
  );
};

export default Home;
