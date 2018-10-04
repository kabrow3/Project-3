import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" 
        // component={} 
        />
        <Route exact path="/dummy" 
        // component={} 
        />
        <Route exact path="/dummy/:id" 
        // component={} 
        />
        <Route 
         component={NoMatch} 
        />
      </Switch>
    </div>
  </Router>
);

export default App;
