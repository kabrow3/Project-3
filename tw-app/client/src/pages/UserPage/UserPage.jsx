// import axios from 'axios';
import React from "react";
import "./UserPage.css";
import "./List.css";
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

// import InputBox from "../../components/InputBox"

class UserPage extends React.Component {
    
    state = {
        username: '',
        email: '',
        createdAt: '',
        isLoading: true,
        error: false
    }

    async componentDidMount() {
        console.log("I hit component did Mount in User Page line 21")
        let accessString = localStorage.getItem('JWT');
        if (accessString === null) {
            this.setState({
                isLoading: false,
                error: true,
            })
        }
        await axios
        .get("http://localhost:3001/findUser", {
            params: {
                email: this.props.match.params.email,
            },
            headers: { Authorization: `JWT ${accessString}` },
        })
        .then(response => {
            this.setState({
                username: response.data.username,
                email: response.data.email,
                createdAt: response.data.createdAt,
                isLoading: false,
                error: false
            })
        })
        .catch(error => {
            console.log(error.data);
        })
    }

    logout = e => {
        e.preventDefault();
        localStorage.removeItem("JWT");
    }

    render() {
        const {
            email,
            username,
            createdAt,
            error,
            isLoading
        } = this.state


        if (error) {
            return (
              <div>
                <div>
                  Problem fetching user data. Please login again.
                </div>
              </div>
            );
          } else if (isLoading) {
              return (
                  <div>
                      <div>
                          Loading User Data
                      </div>
                  </div>
              )
          } else {
        return (
            <div className="user">
            <button onClick={this.logout}>
            <Link to={'/'}>
            Logout
            </Link>
            </button>
                <div className="user_profile">
                    <img
                        src="https://www.gravatar.com/avatar/b1a79b84tb3b836f35917cbadea3dfe6?d=identicon"
                        className="user_img"
                    />
                    <div className="user_details">
                        <span className="user_name">
                            {username}
                            {/* Delcie Dion */}
                            </span>
                        <span className="user_joined">
                        {createdAt}
                        {/* Joined: OCT-10-18 */}
                        </span>
                    </div>
                </div>
                <div className="mt-5">

                    <ul className="nav nav-pills mb-3 mt-0 justify-content-center" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Movies List</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Blurbs</a>
                        </li>
                    </ul>
                    <div className="container tab-container pb-4">

                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                                <h5 className="pt-4">Favo Movies</h5>
                            </div>

                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                                <h5 className="pt-4">My Blurbs</h5>

                            </div>


                        </div>

                    </div>
                </div>
            </div>
        );
          }
    }
}

export default UserPage;