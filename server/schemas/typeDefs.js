const { gql } = require('apollo-server-express');

const typeDefs = gql` 
type User {
  _id: ID
  username: String
  email: String
  password: String
  favColour: String
  savedColourings: [Colouring]
}

type Colouring {
  _id: ID
  name: String
}

type Auth {
  token: ID!
  user: User
}

type Query {
  me: User
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!, favColour: String!): Auth
  savedColouring(name: String!): User
  removeColouring(_id: ID!): User
}

`;

module.exports = typeDefs;
