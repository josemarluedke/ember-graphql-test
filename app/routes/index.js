import Ember from 'ember';
import GraphQL from 'npm:graphql';
const GraphQLSchema = GraphQL.GraphQLSchema
const GraphQLObjectType = GraphQL.GraphQLObjectType
const GraphQLString = GraphQL.GraphQLString

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        }
      }
    }
  })
});

export default Ember.Route.extend({
  model() {
    var query = '{ hello }';
    return GraphQL.graphql(schema, query)
  }
});
