import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import {
  Flex,
  Spacer,
  Box,
  Stack,
  Avatar,
  AvatarBadge,
  Image,
} from "@chakra-ui/react";
import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../../utils/queries";
import logo from "../../assets/logo.png";

function Nav() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const { username: userParam } = useParams();
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || {};

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <header className="flex-row px-1">
      <nav>
        <Flex m={8}>
          <Box boxSize="sm">
            <Image src={logo} alt="Paint Between the lines logo" />
          </Box>
          <Spacer />
          <Stack spacing={16} direction="row" align="center">
            <Box
              borderRadius="md"
              bg="#2674D1"
              color="white"
              px={20}
              h={10}
              letterSpacing="widest"
              fontSize="xl"
            >
              <Link to="/">Home</Link>
            </Box>
            <Box
              borderRadius="md"
              bg="#2674D1"
              color="white"
              px={20}
              h={10}
              letterSpacing="widest"
              fontSize="xl"
            >
              <Link to="/DrawingBoard">DrawingBoard</Link>
            </Box>
            {Auth.loggedIn() ? (
              <>
                <Link to="/myprofile">My Profile</Link>
                <a href="/" onClick={logout}>
                  Logout
                </a>

                <Stack direction="row">
                  <Avatar size="lg" name={userData.username}>
                    <AvatarBadge
                      borderColor="papayawhip"
                      bg={userData.favColour}
                      boxSize="1.25em"
                    />
                  </Avatar>
                </Stack>
              </>
            ) : (
              <>
                <Box
                  borderRadius="md"
                  bg="#2674D1"
                  color="white"
                  px={20}
                  h={10}
                  letterSpacing="widest"
                  fontSize="xl"
                >
                  <Link to="/signup">Signup</Link>
                </Box>
                <Box
                  borderRadius="md"
                  bg="#2674D1"
                  color="white"
                  px={20}
                  h={10}
                  letterSpacing="widest"
                  fontSize="xl"
                >
                  <Link to="/login">Login</Link>
                </Box>
              </>
            )}
          </Stack>
        </Flex>
      </nav>
    </header>
  );
}

export default Nav;
