import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import CreateAcc from "./pages/CreateAcc";
import UserPage from "./pages/UserPage";
import Nav from "./components/Nav";
import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/DetailsPage";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" 
        component={LandingPage} 
        />
        <Route exact path="/details/:id" 
        component={DetailsPage} 
        />
        <Route exact path="/dummy/:id" 
        // component={} 
        />
        <Route exact path="/create-account" 
         component={CreateAcc} 
        />
        <Route exact path="/my-account/:username" 
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
