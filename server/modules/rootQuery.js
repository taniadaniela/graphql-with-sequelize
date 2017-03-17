import { GraphQLObjectType } from 'graphql';
import user from './user/resolver';

/**
 *  rootQuery
 */
const rootFields = Object.assign({}, user);

export default new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => rootFields
});