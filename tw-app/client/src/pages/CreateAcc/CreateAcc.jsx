import React from "react";

const InputBox = props => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <br/>
        <input type={props.type || "text"} className="form-control validate" name={props.name} value={props.value} onChange={props.onChange} />
    </div>
);

class CreateAcc extends React.Component {
    state = {
        email: "",
        password: "",
        username: ""
    };

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleClick = (e) => {
        e.preventDefault()

        console.log(this.state);
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