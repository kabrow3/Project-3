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
      <div>
        <nav className="navbar navbar--dark bg-color">
          <Link to={"/"} className="navbar-brand">TMDB</Link>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link to={"/About"} className="nav-link">About</Link>
            </li>
            <li>|</li>
            <li className="nav-item">
              <Link to={"/Resources"} className="nav-link">Resources</Link>
            </li>
            <li>|</li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Profile
        </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to={"/my-account"} className="dropdown-item">My Account</Link>
                <Link to={"/"} className="dropdown-item">Logout</Link>
              </div>
            </li>

          </ul>
          <button onClick={this.onOpenModal} className="btn btn-outline-success">Login</button>
        </nav>

        <SignInModal open={this.state.open} onCloseModal={this.onCloseModal} />
      </div>
    );
  }
}

export default Nav;
