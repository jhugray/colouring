import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";


import DrawingBoard from "./pages/DrawingBoard";

function App() {
  return (
    <div className="App">
      {/* <ApolloProvider> */}
      <Router>
        <Switch>
          {/* <Route component={Login} />
              <Route component={Signup}/> 
          */}
          <Route exact path="/drawingBoard" component={DrawingBoard} />
        </Switch>
      </Router>
      {/* </ApolloProvider> */}
    </div>
  );
}

export default App;
