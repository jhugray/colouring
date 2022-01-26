import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        favColour
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $favColour: String!) {
    addUser(username: $username, email: $email, password: $password, favColour: $favColour) {
      token
      user {
        _id
        username
        favColour
      }
    }
  }
`;

export const SAVE_COLOURING = gql`
mutation saveColouring($name: String!) {
  saveColouring(name: $name) {
    _id
    username
    email
    favColour
    savedColourings {
      name
    }
  }
}
`;

export const REMOVE_COLOURING = gql`
  mutation removeColouring($_id: ID) {
    removeColouring(_id: $id) {
      _id
      username
      email
      favColour
      savedColourings {
        name
      }
    }
  }
`;