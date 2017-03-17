import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList
} from 'graphql';

import UserType from './type';
import { User } from '../../models/index';

export default {
  updateUser: {
    type: UserType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLInt)
      },
      email: {
        type: GraphQLString
      },
      firstName: {
        type: GraphQLString
      },
      lastName: {
        type: GraphQLString
      },
      schoolId:{
        type: GraphQLInt
      },
      passwordDigest: {
        type: GraphQLString
      },
      avatar: {
        type: GraphQLString
      },
      aboutMe: {
        type: GraphQLString
      }
    },
    description: 'updates an user',
    resolve(obj, args, context) {
      // User.sync();
      // use context.id when you have login stuff
      return User.update(args, { where: { id: args.id }, individualHooks: true }).then(
        function(user, err) {
          if (err) console.log(err);
          return user[1][0];
        }
      );
      return null;
    },
  },
};
