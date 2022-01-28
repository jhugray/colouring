import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Stack, Button, Input, InputGroup, InputLeftElement, Select } from '@chakra-ui/react'

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
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Sign Up</h4>
          <div className="card-body">
          <form onSubmit={handleFormSubmit}>
            <Stack spacing={4} m={10} >
            <InputGroup>
              <InputLeftElement />
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
              <InputLeftElement />
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
              <InputLeftElement />
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
              {/* <InputGroup>
              <InputLeftElement />
                <Input
                className="form-input"             
                name="favColour"
                type="favColour"
                id="favColour"
                value={formState.favColour}
                onChange={handleChange}
              />
              </InputGroup> */}
              <InputGroup>
              <Select   name="favColour"
                type="favColour"
                id="favColour" value={formState.favColour} onChange={handleChange} placeholder='Select your favourite colour!'>
                <option value="red" >Red</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
              </Select>
              </InputGroup>
              <InputGroup>
              <Button type="submit">
                Submit
              </Button>
            </InputGroup>
            {error && <div>Signup failed</div>}
            </Stack>
          </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
