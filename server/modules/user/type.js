import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLFloat
} from 'graphql';

export default new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: (GraphQLString)
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLFloat)
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLFloat)
    }
  })
});
