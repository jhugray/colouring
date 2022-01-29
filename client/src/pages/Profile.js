import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import {GET_ME } from '../utils/queries';
import { UPDATE_USER, DELETE_IMAGE } from '../utils/mutations';
import Auth from '../utils/auth';
import { Circle, Center, Grid, GridItem, Container, Stack, Avatar, AvatarBadge, Select, InputGroup, Button, Input, FormLabel} from '@chakra-ui/react'

const Profile = (props) => {
  const [updateUser] = useMutation(UPDATE_USER);
  const [deleteImage] = useMutation(DELETE_IMAGE);
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

  const handleDeleteImage = async (event) => {
    event.preventDefault();
    await deleteImage();
    console.log('you clicked delete')
  }


  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Grid
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(2, 1fr)'
        gap={4}
      >

      <GridItem colSpan={1} bg='papayawhip' p={4}>
        <Stack>
          <Center>
            <Circle bg={userData.favColour} size='10em' >
              <Avatar size='2xl' name={userData.username} src={userData.image}></Avatar>
            </Circle>
          </Center>
          
          <Center>
          <form>
            <button onClick={handleDeleteImage}>
             Delete my profile pic
            </button>
          </form> 
          </Center>
         
                   
        </Stack>
     
      </GridItem>

      <GridItem colSpan={3} bg='papayawhip' p={4}> 
        <Stack>
          <h1>
            Hi {userData.username}!
          </h1>
          <h2> Favourite Colour: {userData.favColour}</h2>
        </Stack>
          
          

         
      </GridItem>

      <GridItem colSpan={4} bg='tomato' p={6}>
        <form onSubmit={handleFormSubmit} >
          <Stack spacing={3}>
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
                  
            <Button type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      </GridItem>

    </Grid>
  </Container>
  );
};

export default Profile;