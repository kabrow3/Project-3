import axios from "axios";
import React from "react";
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Modal from "react-responsive-modal";
import InputBox from "../InputBox";


class SignInModal extends React.Component {
  state = {
    email: '',
    password: '',
    loggedIn: false,
    showError: false,
    showNullError: false
  };

  handleChange = (e) => 
  this.setState({ 
    [e.target.name]: e.target.value 
  });

  handleClick = (e) => {
    e.preventDefault()
    console.log(this.state.username);
    console.log(this.state.password);
    if (this.state.username === '' || this.state.password === '') {
      this.setState({
        showError: false,
        showNullError: true,
        loggedIn: false,
      });
    } else {
    axios
    .get('/loginUser', {
      params: {
        email: this.state.email,
        password: this.state.password,
      },
    })
    .then (response => {
      if (
        response.data === 'bad email' ||
        response.data === 'passwords do not match'
      ) {
        this.setState({
          showError: true,
          showNullError: false,
        });
      } else {
      localStorage.setItem('JWT', response.data.token);
            this.setState({
              loggedIn: true,
              showError: false,
              showENullrror: false
            });
            console.log(response.data);
          }
    })
    .catch(error => {
      console.log(error.data);
    });
  }
  }

  render() {
    const {
      email,
      showError,
      loggedIn,
      showNullError
    } = this.state;
    if (!this.props.user) {
    return (
      <Modal open={this.props.open} onClose={this.props.onCloseModal} center>
        <br />
        <h4 className="text-center">Please, login into your account</h4>
        <form id="signIn" name="signIn" className="col-sm-12">
          <div className="">
            <InputBox type="email" name="email" label="Email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="">
            <InputBox type="password" name="password" label="Password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <div className=''>
          <br/>
            <button type='submit' className='col-sm-12 btn btn-primary' onClick={this.handleClick}>Login</button>
          </div>
          {showNullError && (
            <div>
              <p>The username or password cannot be null.</p>
            </div>
          )}
          {showError && (
            <div>
              <p>
                That username or password isn't recognized. Please try again or
                register now.
              </p>
            </div>
          )}
        </form>
        <a href="/create-account"><p className="text-center">create account</p></a>
      </Modal>
    );
    } else {
      return <Redirect to={`/my-account`} />;
    }
  }
}

export default SignInModal;