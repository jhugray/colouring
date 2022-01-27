import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Flex, Spacer, Box, Heading, Stack } from '@chakra-ui/react'

function Nav() {

const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="flex-row px-1">
      <nav>
        <Flex>
          <Box bg="tomato" p="10">
            <Heading size="md">| PAINT |</Heading>
            
          </Box>
          <Spacer />
          <Stack spacing={8} direction="row" align="center">
          <Link to="/">
          Home
        </Link>
        <Link as="button" to="/DrawingBoard">
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
      </Flex>
      </nav>
    </header>
  );
}

export default Nav;
