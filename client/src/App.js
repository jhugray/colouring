import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import {ChakraProvider} from '@chakra-ui/react';

import Home from "./pages/Home";
import DrawingBoard from "./pages/DrawingBoard";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      {/* <ApolloProvider> */}
      <Router>
        <Switch>
          {/* <Route component={Login} />
              <Route component={Signup}/> 
          */}
          <Route exact path="/" component={Home} />
          <Route exact path="/drawingBoard" component={DrawingBoard} />
        </Switch>
      </Router>
      {/* </ApolloProvider> */}
      </ChakraProvider>
    </div>
  );
}

export default App;
