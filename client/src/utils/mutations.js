import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        favColour
        savedColours
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
        savedColours
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($favColour: String!) {
    updateUser(favColour: $favColour) {
      _id
      username
      email
      favColour
      image
      savedColours
    }
  }
`

export const SAVE_COLOURS = gql`
mutation savedColours($savedColours: [String]) {
  savedColours(savedColours: $savedColours) {
    _id
    username
    email
    favColour
    savedColours
  }
}
`;

// Going to need a query_colours to load older colourings state