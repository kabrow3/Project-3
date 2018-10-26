import axios from 'axios';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateAcc from "./pages/CreateAcc";
import DetailsPage from "./pages/DetailsPage";
import LandingPage from "./pages/LandingPage";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import UserPage from "./pages/UserPage";

class App extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    const token = localStorage.getItem('token');

    axios
        .get('/auth/verify', { headers: { Authorization: `bearer ${token}` } })
        .then((response) => {
            const data = response.data;
            this.setState({ user: data });
        })
        .catch((err) => {
            console.log(err.response.data);
            console.log('User not authenticated');
        });
}

CreateAcc = (props) => <CreateAcc user={this.state.user} {...props} />;
DetailsPage = (props) => <DetailsPage user={this.state.user} {...props} />;
LandingPage = (props) => <LandingPage user={this.state.user} {...props} />;
UserPage = (props) => <UserPage user={this.state.user} {...props} />;

  render () {
    return (
      <Router>
        <div>
          <Nav user={this.state.user} />
          <Switch>
            <Route exact path="/" 
            component={this.LandingPage} 
            />
            <Route exact path="/details/:imdbid" 
            component={DetailsPage} 
            />
            <Route exact path="/dummy/:id" 
            // component={} 
            />
            <Route exact path="/create-account" 
             component={CreateAcc} 
            />
            <Route exact path="/my-account" 
             component={this.UserPage} 
            />
            <Route 
             component={NoMatch} 
            />
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;
