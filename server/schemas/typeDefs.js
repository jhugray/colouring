const { gql } = require('apollo-server-express');

const typeDefs = gql` 
type User {
  _id: ID
  username: String
  email: String
  password: String
  favColour: String
  savedColours: [String],
  image: String
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
  addUser(username: String!, email: String!, password: String!, favColour: String!, image: String!): Auth
  saveColours(savedColours: [String]): User
  updateUser(favColour: String, image: String): User
}

`;

module.exports = typeDefs;
