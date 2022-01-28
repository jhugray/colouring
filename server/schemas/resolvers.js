const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('savedColourings')
        return userData;
      }
      throw new AuthenticationError('Not logged in');
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
    updateUser: async (parent, { favColour, image }) => {
      const user = await User.findOneAndUpdate(args);
      user.favColour = favColour;
      user.image = image;

      return user;
    },
    saveColours: async (parent, { colours }, context) => {
      console.log(colours)
      console.log(context)
      if (context.user) {
          const updatedUser = await User.findOneAndUpdate(
              { _id: context.user._id },
              { $addToSet: { savedColours: colours } },
              { new: true }
          )
          return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!')
  }
  }

}

module.exports = resolvers;