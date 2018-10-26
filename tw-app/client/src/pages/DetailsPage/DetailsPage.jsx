import React from "react";
import BlurbModal from "../../components/BlurbModal";
import Blurb from "../../components/Blurb";
// import Movie from "../../components/Movie";

class DetailsPage extends React.Component {
    state = {
        open: false
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
                <div className="row">
                    <div class="col-md-6 d-flex align-items-center">
                        <button onClick={this.onOpenModal} className="btn btn-primary">Add Feed Back</button>
                        <BlurbModal open={this.state.open} onCloseModal={this.onCloseModal} />
                        <img src="https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg" />
                    </div>

                    <div class="col-md-6">
                        <div className="movie-content">
                            <div className="row">
                                <h1 className="title">Batman<span id="year"> (1989)</span></h1>
                            </div>
                            <div className="row">
                                <span id="rated">PG-13 </span> |
                <span id="runtime">126 min </span> |
                <span id="genres">Action, Adventure</span>
                            </div>
                            <br />
                            <div className="row">
                                <h4>Director <span id="director">Tim Burton</span></h4>
                                <br />
                                <h4>Writer <span id="writer">Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)</span></h4>
                                <br />
                                <h4>Cast <span id="actors">Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl</span></h4>
                            </div>
                            <br />
                            <div className="row">
                                <p id="plot">Gotham City. Crime boss Carl Grissom (Jack Palance) effectively runs the town but there's a new crime fighter in town - Batman (Michael Keaton). Grissom's right-hand man is Jack Napier (Jack Nicholson), a brutal man who is not entirely sane... After falling out between the two Grissom has Napier set up with the Police and Napier falls to his apparent death in a vat of chemicals. However, he soon reappears as The Joker and starts a reign of terror in Gotham City. Meanwhile, reporter Vicki Vale (Kim Basinger) is in the city to do an article on Batman. She soon starts a relationship with Batman's everyday persona, billionaire Bruce Wayne.</p>
                            </div>
                        </div>
                    </div>
                </div>
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