// import axios from 'axios';
import React from "react";
import "./UserPage.css"
import "./List.css"
// import InputBox from "../../components/InputBox"

class UserPage extends React.Component {
    render() {
        return (
            <div className="user">
                <div className="user_profile">
                    <img
                        src="https://www.gravatar.com/avatar/b1a79b84tb3b836f35917cbadea3dfe6?d=identicon"
                        className="user_img"
                    />
                    <div className="user_details">
                        <span className="user_name">
                            {/* {this.state.username} */}
                            Delcie Dion</span>
                        <span className="user_joined">Joined: OCT-10-18</span>
                    </div>
                </div>
                <div className="mt-5">

                    <ul class="nav nav-pills mb-3 mt-0 justify-content-center" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Movies List</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Blurbs</a>
                        </li>
                    </ul>
                    <div class="container tab-container pb-4">

                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                                <h5 class="pt-4">Favo Movies</h5>
                            </div>

                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                                <h5 class="pt-4">My Blurbs</h5>

                            </div>


                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default UserPage;