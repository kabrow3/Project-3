import imdbAPI from "../../utils/imdbAPI";
import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import InputBox from "../../components/InputBox";
import Movies from "../../components/Movies";
import { Panel, PanelBody, PanelHeading } from '../../components/Panel';
import API from "../../utils/API";
import '../../styles/components/resources.css';
import '../../styles/components/search.css';
import bear from '../../images/bear-hug-shadow.png';

class ResourcePage extends React.Component {
    state = {
        sq: "",//search query entered by user
        imdbid: "",
        results: [],//array of results returned from api
        // previousSearch: {},//previous search term saved after search completed
        // noResults: false,//boolean used as flag for conditional rendering
    };

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleSubmit = async (e) => {
        e.preventDefault()

        console.log(this.state.sq);

        imdbAPI.searchMovie(this.state.sq).then(res => {
            // console.log("RES", res);

            this.setState({
                imdbid: res.results.imdbid,
                results: res.results
            }, () => console.log(this.state));
        });

        imdbAPI.getMovie(this.state.sq).then(res => {
            console.log("DET", res);
        });
    }


    render() {
        return (
            <div className="wrapper">
                <div className="row ">
                    <div className="col col-12 ">
                        <div className="resources--hero">
                            <h1 className="text--light text-center big">resources</h1>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row justify-content-center py-5">
                        <div class="col-sm-10 col-md-8 col-lg-8 py-5">
                            <h5 className="pb-2"><strong>Giving survivors the option of <em>consent</em> in their movie viewing experience.</strong></h5>
                            <p><em>Trigger Warning</em> enables users to search movies for potentially triggering content, and decide whether to engage with it.  Search by trigger type, or view commonly searched movies and triggers. </p>

                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                    <Panel>
                        <PanelBody>
                            {
                                this.state.results.map((movie, i) => (
                                    <Movies
                                        key={i}
                                        imdbid={movie.imdbid}
                                        title={movie.title}
                                        poster={movie.poster}
                                        year={movie.year}
                                    />
                                )
                                )
                            }
                        </PanelBody>
                    </Panel>
                </div>
            </div>
            </div>
        );
    }
}

export default ResourcePage;