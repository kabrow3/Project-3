import axios from 'axios';
import React from "react";
import InputBox from "../../components/InputBox";
import { Redirect } from 'react-router-dom';

class CreateAcc extends React.Component {
    state = {
        email: "",
        password: "",
        username: "",
        messageFromServer: '',
        showError: false,
        registerError: false,
        loginError: false,
    };

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleClick = (e) => {
        e.preventDefault()
        console.log(this.state)
        if (this.state.username === '' || this.state.email === '' || this.state.password === '') {
            this.setState({
                showError: true,
                loginError: false,
                registerError: true,
            });
        } else {
            axios
                .post('/registerUser', {
                    email: this.state.email,
                    password: this.state.password,
                    username: this.state.username
                })
                .then(response => {
                    console.log('Response:');
                    console.log(response.data);
                    if (response.data === 'email already taken') {
                        this.setState({
                            showError: true,
                            loginError: true,
                            registerError: false,
                        });
                    } else {
                        this.setState({
                            messageFromServer: response.data.message,
                            showError: false,
                            loginError: false,
                            registerError: false,
                        });
                    }
                })
                .catch(error => {
                    console.log(error.data);
                });
        }
    }

    render() {
        const {
            messageFromServer,
            showError,
            loginError,
            registerError,
        } = this.state;
        if (messageFromServer === '') {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">

                            <div className="card">
                                <div className="card-body">
                                    <span className="card-title"><h3>Create Account</h3></span>

                                    <form className="container">
                                        <InputBox type="text" name="username" label="Username" value={this.state.username} onChange={this.handleChange} />
                                        <InputBox type="email" name="email" label="Email" value={this.state.email} onChange={this.handleChange} />
                                        <InputBox type="password" name="password" label="Password" value={this.state.password} onChange={this.handleChange} />
                                        <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
                                    </form>

                                </div>
                            </div>
                            {showError === true &&
                                registerError === true && (
                                    <div>
                                        <p>Username and password are required fields.</p>
                                    </div>
                                )}
                            {showError === true &&
                                loginError === true && (
                                    <div>
                                        <p>
                                            That Email is already taken. Please choose another or
                                            login.
                                        </p>
                                    </div>
                                )}

                        </div>
                    </div>
                </div>
            );
        } else {
            return <Redirect to={`/`} />;
        }
    }
}

export default CreateAcc;