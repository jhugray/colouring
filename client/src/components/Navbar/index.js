import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { 
  Flex, 
  Spacer, 
  Box, 
  Heading, 
  Stack, 
  Avatar, 
  AvatarBadge
} from '@chakra-ui/react'
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {GET_ME } from '../../utils/queries';


function Nav() {

const logout = event => {
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
            <Link to="/myprofile">
              My Profile
            </Link>
            <a href="/" onClick={logout}>
              Logout
            </a>

            <Stack direction="row">
              <Avatar size='lg' name={userData.username}>
                  <AvatarBadge borderColor='papayawhip' bg={userData.favColour} boxSize='1.25em' />
                </Avatar>
            </Stack>
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
