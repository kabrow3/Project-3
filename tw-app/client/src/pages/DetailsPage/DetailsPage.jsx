import React from "react";
import BlurbModal from "../../components/BlurbModal";
import Movie from "../../components/Movie";
import imdbAPI from "../../utils/imdbAPI";
import API from "../../utils/API";
import './DetailsPage.css';
import Blurb from "../../components/Blurb"

class DetailsPage extends React.Component {
    state = {
        open: false,
        results: [],
        blurbs:[]
    };

    componentDidMount() {
        imdbAPI.getMoviebyID(this.props.match.params.imdbid).then(res => {
            console.log("Det Res", res);
            this.setState({
                results: res
            }, () => console.log(this.state));
        });
        API.findBlurb(this.props.match.params.imdbid).then(res=> {
            console.log("DB res", res);
            this.setState({
                blurbs: res
            }, () => console.log(this.state));
        });

    };

    onOpenModal = () => {
        this.setState({ open: true });
        API.insertMovie(this.state.results.title, this.state.results.imdbid).then(res=> {
            console.log(res);
        })

    };

    onCloseModal = () => {
        this.setState({ open: false });
    };


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="movie-poster">
                                <img src={this.state.results.poster}></img>
                            </div>
                        </div>
                        <div className="row">
                            <div className="blurb-modal">
                                <button onClick={this.onOpenModal} className="btn btn-primary">Add Feed Back</button>
                                <BlurbModal
                                MovieImdbID={this.state.results.imdbid}
                                open={this.state.open} onCloseModal={this.onCloseModal} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="movie-info">
                            <Movie
                                title={this.state.results.title}
                                year={this.state.results.year}
                                rated={this.state.results.rated}
                                runtime={this.state.results.runtime}
                                genres={this.state.results.genres}
                                director={this.state.results.director}
                                writer={this.state.results.writer}
                                actors={this.state.results.actors}
                                plot={this.state.results.plot}
                            /> 
                        </div>
                    </div>
                    
                    {/* <div className="col-md-2">
                       
                    </div> */}
                </div>
                {/* <div className="row">
                   
                </div> */}
                <div className="row">
                    <div className="col-md-12">
                        <h4>Known Triggers</h4>
                        {/* blurb component */}
                        <Blurb />
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailsPage;