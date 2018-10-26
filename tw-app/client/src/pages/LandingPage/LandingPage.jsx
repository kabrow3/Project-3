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

class LandingPage extends React.Component {
    state = {
        sq: "",//search query entered by user
        imdbid: "",
        results: [],//array of results returned from api
        // previousSearch: {},//previous search term saved after search completed
        // noResults: false,//boolean used as flag for conditional rendering
    };

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleSubmit= async (e) => {
        e.preventDefault()

        console.log(this.state.sq);

        imdbAPI.searchMovie(this.state.sq).then(res => {
            // console.log("RES", res);

            this.setState({
                imdbid: res.results.imdbid,
                results: res.results
            }, () => console.log(this.state));
        });

        imdbAPI.getMovie(this.state.sq).then(res=> {
            console.log("DET", res);
        });
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
                            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                        </form>

                        </div> 
                        </div>

                    </div>
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