const { AuthenticationError } = require('apollo-server-express');
const { connections } = require('mongoose');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
         
        return userData;
      }
      throw new AuthenticationError('Likely a context error');
    }
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
          throw new AuthenticationError('Incorrect credentials')
      }
      const correctPw = await user.isCorrectPassword(password);
      if(!correctPw) {
          throw new AuthenticationError('Incorrect credentials')
      }
      const token = signToken(user);
      return { token, user };
  },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
  },

    savedColours: async (parent, { savedColours }, context) => {
    if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { "savedColours": savedColours },
            { new: true }
        )
        return updatedUser;
    }
    throw new AuthenticationError('You need to be logged in!')
    },
    updateUser: async (parent, { favColour, image }, context) => {
      if (context.user) {
        const variables = {}
        if (favColour !== ''){
          variables.favColour = favColour
        }
        if (image !== undefined){
          variables.image = image
        }
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          variables,
          { new: true }
          );
        return updatedUser; 
      }
      throw new AuthenticationError('Not logged in');
    },

    deleteImage: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { "image": ''},
          { new: true }
          );
        return updatedUser; 
      }
      throw new AuthenticationError('Not logged in');
    },

    
  }
  }


module.exports = resolvers;