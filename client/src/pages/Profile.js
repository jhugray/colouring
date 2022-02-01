import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import {GET_ME } from '../utils/queries';
import { UPDATE_USER, DELETE_IMAGE } from '../utils/mutations';
import Auth from '../utils/auth';
import { Heading, Circle, Center, Grid, GridItem, Container, Stack, VStack, Avatar, Select, InputGroup, Button, Input, FormLabel, createStandaloneToast} from '@chakra-ui/react'

const Profile = (props) => {
  const [updateUser] = useMutation(UPDATE_USER);
  const [deleteImage] = useMutation(DELETE_IMAGE);
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || {};
  console.log(userData);
  const [formState, setFormState] = useState({ favColour: ''}, {image: ''});
  
  const toast = createStandaloneToast()

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
    }).then(
      toast({
      title: 'Updating Profile',
      description: "New content added",
      status: 'info',
      duration: 4000,
      isClosable: true,
      position: 'top'
    }))
  };


  const handleDeleteImage = async (event) => {
    event.preventDefault();
    await deleteImage().then(
      toast({
      title: 'Remove Avatar',
      description: "Clearing Image",
      status: 'warning',
      duration: 4000,
      isClosable: true,
      position: 'top'
    }))
  };


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

      <GridItem colSpan={1} p={4}>
        <Stack>
          <Center>
            <Circle bg={userData.favColour} size='10rem' >
              <Avatar size='2xl' name={userData.username} src={userData.image}></Avatar>
            </Circle>
          </Center>

        <Button onClick={handleDeleteImage}>
          Delete my profile pic
        </Button>
   
        </Stack>
      </GridItem>

      <GridItem colSpan={3} p={4}> 
        <VStack m={4}>
          <Heading as='h1' size='6rem' p={2}>
            Hi {userData.username}!
          </Heading>
          <Heading as='h2' size='3rem' > 
            Favourite colour: {userData.favColour}
          </Heading>
        </VStack>
      </GridItem>

      <GridItem colSpan={4} p={6}>
        <form onSubmit={handleFormSubmit} >
          <Stack spacing={3}>
            <InputGroup>
            <FormLabel>Update your favourite colour</FormLabel>
              <Select name="favColour"
                type="favColour"
                id="favColour" value={formState.favColour}  placeholder='Would you like to update your favourite colour?' onChange={handleChange}>
                <option value="lightpink">Pink</option>
                <option value="red">Red</option>
                <option value="darkorange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="lime">Lime</option>
                <option value="aqua">Aqua</option>
                <option value="blue">Blue</option>
                <option value="purple">Purple</option>
                <option value="fuchsia">Fuchsia</option>
                <option value="gray">Grey</option>
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