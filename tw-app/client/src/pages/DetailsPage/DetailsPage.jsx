import React from "react";
import BlurbModal from "../../components/BlurbModal";
import Movie from "../../components/Movie";
import imdbAPI from "../../utils/imdbAPI";

class DetailsPage extends React.Component {
    state = {
        open: false,
        results: []
    };

    componentDidMount() {
        imdbAPI.getMoviebyID(this.props.match.params.imdbid).then(res => {
            console.log("Det Res", res);
            this.setState({
                results: res
            }, () => console.log(this.state));
        });
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };


    render() {
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="movie-info">
                        <Movie
                            poster={this.state.results.poster}
                            title={this.state.results.title}
                            year={this.state.results.year}
                            rated={this.state.results.rated}
                            runtime={this.state.results.runtime}
                            genre={this.state.results.genre}
                            director={this.state.results.director}
                            writer={this.state.results.writer}
                            actors={this.state.results.actors}
                            plot={this.state.results.plot}
                        />
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-center">
                        <button onClick={this.onOpenModal} className="btn btn-primary">Add Feed Back</button>
                        <BlurbModal open={this.state.open} onCloseModal={this.onCloseModal} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h4>Known Triggers</h4>
                        {/* blurb component */}
                        {/* <Blurb /> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailsPage;