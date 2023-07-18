import { ApolloClient } from "@apollo/client/core/core.cjs";



import { InMemoryCache } from "@apollo/client/cache/cache.cjs";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "mongodb+srv://mercyokebiorun:Celebrate%402002@mercy0.yaxlcok.mongodb.net/",
});

export default client;
