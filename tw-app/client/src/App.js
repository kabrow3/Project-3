import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Landing from "./pages/LandingPage"
import CreateAcc from "./pages/CreateAcc";
import UserPage from "./pages/UserPage";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
      <Route exact path="/" 
         component={Landing} 
        />
        <Route exact path="/dummy" 
        // component={} 
        />
        <Route exact path="/dummy/:id" 
        // component={} 
        />
        <Route exact path="/create-account" 
         component={CreateAcc} 
        />
        
        <Route exact path="/my-account" 
         component={UserPage} 
        />
        <Route 
         component={NoMatch} 
        />
      </Switch>
    </div>
  </Router>
);

export default App;
