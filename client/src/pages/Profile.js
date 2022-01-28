import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {GET_ME } from '../utils/queries';
import { UPDATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Container, Stack, Avatar, AvatarBadge } from '@chakra-ui/react'



const Profile = () => {
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
    <Container>
    <Stack direction="row">
    <Avatar name={userData.username}>
        <AvatarBadge borderColor='papayawhip' bg={userData.favColour} boxSize='1.25em' />
      </Avatar>
        <h1>
          Hi {userData.username}!
        </h1>  
    </Stack>
    <Stack>
      <h2>
        Favourite Colour: {userData.favColour}
      </h2>
    </Stack>


    </Container>
  );
};

export default Profile;