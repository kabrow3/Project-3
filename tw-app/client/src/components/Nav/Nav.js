import React from "react";
import Modal from "react-responsive-modal";
import SignInModal from "../SignInModal";
import "./Nav.css"

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
        <nav className="navbar navbar--dark bg-dark">
        <button onClick={this.onOpenModal} className="btn btn-outline-success">Login</button>
        </nav>
        
        <SignInModal open={this.state.open} onCloseModal={this.onCloseModal} />
      </div>
    );
  }
}

export default Nav;
