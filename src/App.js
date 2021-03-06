import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Layout from './components/Layout/Layout';
import Users from './components/Users/Users';
import User from './components/User/User';
import NewUser from './components/NewUser/NewUser';

const client = new ApolloClient({
  uri: 'https://c3interview.danshin.pro/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={ Users } />
          <Route exact path='/user/:userId' component={ User } />
          <Route exact path='/new' component={ NewUser } />
        </Switch>
      </Layout>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;