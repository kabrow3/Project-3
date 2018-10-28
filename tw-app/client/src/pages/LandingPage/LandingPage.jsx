import imdbAPI from "../../utils/imdbAPI";
import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import InputBox from "../../components/InputBox";
// import Movie from "../../components/Movie";
import Movies from "../../components/Movies";
import { Container, Row, Col } from "../../components/Grid";
import { H1, H3, H4 } from '../../components/Headings';
import { Panel, PanelBody, PanelHeading } from '../../components/Panel';
import API from "../../utils/API";
import '../../styles/components/hero.css';
import '../../styles/components/search.css';
import brain from '../../images/brain-temp.png' ;

class LandingPage extends React.Component {
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
                <div className="row">
                    <div className="col col-12 ">
                        <div className="hero">

                            <h1 className="text--light text-center">trigger warning</h1>
                            <span className="text--light text-center block"><em>Prepare for triggering content in movies.</em> </span>
                            <div className="hero--brain text-center">
                                <img src={brain}></img>
                            </div>
                            <div className="form-wrapper">

                               <form className="mx-auto search form-inline background--white">
                                    <InputBox type="text" name="sq" placeholder="Search by movie" value={this.state.sq} onChange={this.handleChange} />
                                    <button type="submit" className="background--white search--button" onClick={this.handleSubmit}><i class="fas fa-search"></i></button>
                                </form>

                            </div>
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
                <div class="row">
                   
                </div>

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
        );
    }
}

export default LandingPage;