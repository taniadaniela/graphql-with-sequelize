import { GraphQLObjectType } from 'graphql';
import user from './user/mutation';

/**
 *  rootMutation
 */
const rootFields = Object.assign({}, user);

export default new GraphQLObjectType({
  name: 'RootMutation',
  fields: () => rootFields
});