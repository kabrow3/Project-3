import axios from 'axios';
import React from "react";
import InputBox from "../../components/InputBox"

class CreateAcc extends React.Component {
    state = {
        sq: ""
    };

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleClick = async (e) => {
        e.preventDefault()

        // axios.post('/api/auth', this.state)
        //     .then(res => console.log(res.data))
        //     .catch(err => console.log(err));
        console.log(this.state);
        
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                    
                        <div className="card">
                        <div className="card-body">
                        <span className="card-title"><h3>Search Movie</h3></span>
                        
                        <form className="container">
                                <InputBox type="text" name="sq" label="Search" value={this.state.sq} onChange={this.handleChange}/>
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