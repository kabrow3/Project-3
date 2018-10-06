import axios from "axios";
import React from "react";
import Modal from "react-responsive-modal";
import InputBox from "../InputBox";


class SignInModal extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleClick = async (e) => {
    e.preventDefault()

    // axios.post('/api/auth', this.state)
    //     .then(res => console.log(res.data))
    //     .catch(err => console.log(err));

    try {
      const { data } = await axios.post('/api/auth/signin', this.state);

      this.setState({ email: "", password: "" });


      console.log(data);

    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Modal open={this.props.open} onClose={this.props.onCloseModal} center>
        <br />
        <h4 className="text-center">Please, login into your account</h4>
        <form id="signIn" name="signIn" className="col-sm-12">
          <div className="row">
            <InputBox type="email" name="email" label="Email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="row">
            <InputBox type="password" name="password" label="Password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <div className='row'>
            <button type='submit' className='col-sm-12 btn btn-primary' onClick={this.handleClick}>Login</button>
          </div>
        </form>
        <a href="/create-account"><p className="text-center">create account</p></a>
      </Modal>
    );
  }
}

export default SignInModal;