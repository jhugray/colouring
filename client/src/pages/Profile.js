import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import {GET_ME } from '../utils/queries';
import { UPDATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Container, Stack, Avatar, AvatarBadge, Select, InputGroup, Button, Input, FormLabel} from '@chakra-ui/react'

const Profile = (props) => {
  const [updateUser] = useMutation(UPDATE_USER);
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || {};
  console.log(userData);
  const [formState, setFormState] = useState({ favColour: ''}, {image: ''});


  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setFormState({
      ...formState,
      [name]: value,
    });
  };


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await updateUser({
      variables: {
        favColour: formState.favColour,
        image: formState.image
      },
    });



  
  };


  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
    <Stack direction="row">
    <Avatar size='2xl' name={userData.username} src={userData.image}>
        <AvatarBadge borderColor='papayawhip' bg={userData.favColour} boxSize='1em' />
      </Avatar>
        <h1>
          Hi {userData.username}!
        </h1>  
    </Stack>
    <Stack>
      <h2>
        Favourite Colour: {userData.favColour}
      </h2>
      <form onSubmit={handleFormSubmit} >
      <InputGroup>
      <FormLabel>Update your favourite colour</FormLabel>
        <Select name="favColour"
          type="favColour"
          id="favColour" value={formState.favColour}  placeholder='Would you like to update your favourite colour?' onChange={handleChange}>
          <option value="red" >Red</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
        </Select>
      </InputGroup>

      <InputGroup>
      <FormLabel>Update or add a profile picture</FormLabel>
              <Input
                className="form-input"
                placeholder="Add a URL(link) to the picture"
                name="image"
                type="url"
                id="image"
                value={formState.image}
                onChange={handleChange}
              />
              </InputGroup>
              <InputGroup>
              <Button type="submit">
                Submit
              </Button>
            </InputGroup>

      </form>
    </Stack>



 

    </Container>
  );
};

export default Profile;