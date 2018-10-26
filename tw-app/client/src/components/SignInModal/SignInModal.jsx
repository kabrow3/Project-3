import axios from 'axios';
import React from 'react';
import Modal from 'react-responsive-modal';
import { withRouter } from 'react-router-dom';
import InputBox from '../InputBox';

class SignInModal extends React.Component {
    state = {
        email: '',
        password: '',
        error: ''
    };

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleClick = async (e) => {
        e.preventDefault();

        if (!this.state.email || !this.state.password) {
            this.setState({ error: 'Email and Password are Required' });
        }

        try {
            const { data } = await axios.post('/auth/login', {
                email: this.state.email,
                password: this.state.password
            });

            localStorage.setItem('token', data.token);

            this.props.history.push('/my-account');
            location.reload(); // eslint-disable-line
        } catch (err) {
            this.setState({ error: err.response.data.message });
        }
    };

    render() {
        return (
            <Modal open={this.props.open} onClose={this.props.onCloseModal} center>
                <br />
                <h4 className="text-center">Please, login into your account</h4>
                <form id="signIn" name="signIn" className="col-sm-12">
                    <div className="">
                        <InputBox
                            type="email"
                            name="email"
                            label="Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="">
                        <InputBox
                            type="password"
                            name="password"
                            label="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="">
                        <br />
                        <button type="submit" className="col-sm-12 btn btn-primary" onClick={this.handleClick}>
                            Login
                        </button>
                    </div>
                    <p>{this.state.error}</p>
                </form>
                <a href="/create-account">
                    <p className="text-center">create account</p>
                </a>
            </Modal>
        );
    }
}

export default withRouter(SignInModal);
