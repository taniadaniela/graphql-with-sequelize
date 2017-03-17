import {
    GraphQLList, GraphQLInt, GraphQLString, GraphQLNonNull
} from 'graphql';

import { User } from '../../models/index';
import UserType from './type';

export default {
  user: {
    type: UserType,
    description: 'returns user according to args',
    args:{
      firstName: {
        type: GraphQLString
      },
      lastName: {
        type: GraphQLString
      },
      email: {
        type: GraphQLString
      },
      id: {
        type: GraphQLInt
      }
    },
    async resolve(obj, args, context){
      return User.find({ where: args }); 
    }
  },
  users: {
    type: new GraphQLList(UserType),
    args:{
      firstName: {
        type: GraphQLString
      },
      lastName: {
        type: GraphQLString
      },
      email: {
        type: GraphQLString
      },
      id: {
        type: GraphQLInt
      }
    },
    async resolve(obj, args, context){
      return User.all({ where: args }); 
    }
  }


}