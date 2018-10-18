import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";


class Detail extends Component {
  state = {
    movie: {}
  };
  // When this component mounts, grab the movie with the _id of this.props.match.params.id
  // e.g. localhost:3000/movies/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getMovie(this.props.match.params.id)
      .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.Movie.title}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
          <image>
            <img src=
            {this.state.movie.poster}
            />
          </image>
          </Col>
          <Col size="md-6">
            <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.movie.plot}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Collection</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
