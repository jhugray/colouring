import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import {ChakraProvider} from '@chakra-ui/react';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import DrawingBoard from "./pages/DrawingBoard";
import Profile from "./pages/Profile";
import NoMatch from './pages/NoMatch';
import Navbar  from './components/Navbar';
import Footer from './components/Footer'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Switch>         
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} /> 
          <Route exact path="/myprofile" component={Profile} /> 
          <Route exact path="/drawingBoard" component={DrawingBoard} />
          <Route component={NoMatch}/>
        </Switch>
      <Footer />
      </Router>
     
      </ApolloProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
