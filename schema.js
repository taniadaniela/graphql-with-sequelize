import { property, constant } from 'lodash';
import {GraphQLSchema} from 'graphql';
import query from './server/modules/rootQuery.js';
import mutation from './server/modules/rootMutation';


export default new GraphQLSchema({ query, mutation });