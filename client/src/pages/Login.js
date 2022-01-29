import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { InputLeftAddon, Heading, Container, InputGroup, Button, Input, Stack} from '@chakra-ui/react'
import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
 
    <Container>

      <Heading  as='h1' size='xl' p={3}>
        Login
      </Heading>

      <form onSubmit={handleFormSubmit}>
        <Stack spacing={3}>  

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
    
          <Button className="btn d-block w-100" type="submit">
            Submit
          </Button>

      </Stack>
      </form>
      {error && <div>Login failed</div>}
      
    </Container>

  );
};

export default Login;
