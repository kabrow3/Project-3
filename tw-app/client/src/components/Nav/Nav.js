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
        <h1>Hello</h1>
        <button onClick={this.onOpenModal}>Open modal</button>
        <SignInModal open={this.state.open} onCloseModal={this.onCloseModal} />
      </div>
    );
  }
}

export default Nav;
