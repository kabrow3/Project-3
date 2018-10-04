import React from "react";
import "./Nav.css"

const Nav = () => (
    <div>
                <ul className="nav navbar-dark nav-fill text-white py-3">
                    <li className="nav-item">
                        <a className="nav-link active" href="">I Hate</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">React</a>
                    </li>
                </ul>
            </div>
);

export default Nav;