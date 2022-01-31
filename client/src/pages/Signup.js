import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Container, InputLeftAddon, Stack, Button, Input, InputGroup, Select, Heading } from '@chakra-ui/react'

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    favColour: ''
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container>
      <Heading as='h1' size='xl' p={3}>Sign up</Heading>
    
      <form onSubmit={handleFormSubmit}>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftAddon>Username</InputLeftAddon>
            <Input
              className="form-input"
              placeholder="Your username"
              name="username"
              type="username"
              id="username"
              value={formState.username}
              onChange={handleChange}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftAddon>Email</InputLeftAddon>
            <Input
              className="form-input"
              placeholder="Your email"
              name="email"
              type="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftAddon>Password</InputLeftAddon>
            <Input
              className="form-input"
              placeholder="******"
              name="password"
              type="password"
              id="password"
              value={formState.password}
              onChange={handleChange}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftAddon>Favourite colour</InputLeftAddon>
            <Select name="favColour"
              type="favColour"
              id="favColour" 
              value={formState.favColour}
              onChange={handleChange} 
              placeholder='Select your favourite colour!'>
              <option value="lightpink">Pink</option>
              <option value="red" >Red</option>
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

          <Button type="submit">
            Submit
          </Button>
  
          {error && <div>Signup failed</div>}
        </Stack>
      </form>
    </Container>    
  );
};

export default Signup;