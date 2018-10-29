import React from "react";
import Modal from "react-responsive-modal";
import SignInModal from "../SignInModal";
import "./Nav.css"
import { Link } from "react-router-dom";

// https://www.styled-components.com/

class Nav extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="gradient--salmon">
      <div className = "container">
        <nav className="navbar px-2">
          <Link to={"/"} className="navbar-brand">Trigger Movie Database</Link>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link to={"/About"} className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to={"/Resources"} className="nav-link">Resources</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Profile
        </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to={"/my-account"} className="dropdown-item">My Account</Link>
                <Link to={"/"} className="dropdown-item">Logout</Link>
              </div>
            </li>
            <li>
            <button onClick={this.onOpenModal} className="btn btn-outline-light">Login</button>
            </li>

          </ul>
         
        </nav>

        <SignInModal open={this.state.open} onCloseModal={this.onCloseModal} />
      </div>
      </div>
    );
  }
}

export default Nav;
