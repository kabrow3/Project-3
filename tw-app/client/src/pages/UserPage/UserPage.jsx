// import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';
import './List.css';
import './UserPage.css';

// import InputBox from "../../components/InputBox"

const Logout = withRouter(({ history }) => (
    <button
        onClick={() => {
            localStorage.removeItem('token');
            history.push('/');
        }}
    >
        Logout
    </button>
));

class UserPage extends React.Component {
    state = {};

    async componentDidMount() {
        /**
         * axios.get('/api/blurbs', { params: { email: this.props.user.email } })
         */
    }

    render() {
        if (!this.props.user) {
            return <h1>Ain't no user.</h1>;
        } else {
            return (
                <div className="user">
                    <Logout />
                    <div className="user_profile">
                        <img
                            src="https://www.gravatar.com/avatar/b1a79b84tb3b836f35917cbadea3dfe6?d=identicon"
                            alt="User"
                            className="user_img"
                        />
                        <div className="user_details">
                            <span className="user_name">
                                {this.props.user.username}
                                {/* Delcie Dion */}
                            </span>
                            <span className="user_joined">
                                {this.props.user.createdAt}
                                {/* Joined: OCT-10-18 */}
                            </span>
                        </div>
                    </div>
                    <div className="mt-5">
                        <ul className="nav nav-pills mb-3 mt-0 justify-content-center" id="pills-tab" role="tablist">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    id="pills-home-tab"
                                    data-toggle="pill"
                                    href="#pills-home"
                                    role="tab"
                                    aria-controls="pills-home"
                                    aria-selected="true"
                                >
                                    Movies List
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    id="pills-profile-tab"
                                    data-toggle="pill"
                                    href="#pills-profile"
                                    role="tab"
                                    aria-controls="pills-profile"
                                    aria-selected="false"
                                >
                                    Blurbs
                                </a>
                            </li>
                        </ul>
                        <div className="container tab-container pb-4">
                            <div className="tab-content" id="pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-home"
                                    role="tabpanel"
                                    aria-labelledby="pills-home-tab"
                                >
                                    <h5 className="pt-4">Favo Movies</h5>
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="pills-profile"
                                    role="tabpanel"
                                    aria-labelledby="pills-profile-tab"
                                >
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
