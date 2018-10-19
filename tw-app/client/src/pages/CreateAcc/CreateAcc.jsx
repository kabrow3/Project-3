import axios from 'axios';
import React from "react";
import InputBox from "../../components/InputBox"

class CreateAcc extends React.Component {
    state = {
        email: "",
        password: "",
        username: ""
    };

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleClick = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios
        .post('http://localhost:3001/registerUser', {
          email: this.state.email,
          password: this.state.password,
          username: this.state.username
        })
        .then(response => {
          console.log('Response:');
          console.log(response.data);
        })
        .catch(error => {
          console.log(error.data);
        });
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                    
                        <div className="card">
                        <div className="card-body">
                        <span className="card-title"><h3>Create Account</h3></span>
                        
                        <form className="container">
                                <InputBox type="text" name="username" label="Username" value={this.state.username} onChange={this.handleChange}/>
                                <InputBox type="email" name="email" label="Email" value={this.state.email} onChange={this.handleChange}/>
                                <InputBox type="password" name="password" label="Password" value={this.state.password} onChange={this.handleChange}/>
                                <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
                        </form>

                        </div> 
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default CreateAcc;