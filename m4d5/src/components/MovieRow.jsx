import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import MoviesGallery from './MovieGallery'

class MovieRow extends React.Component {
  url = "http://www.omdbapi.com/?apikey=fc9ce628";
  state = {
    movies: [],
  };

  componentDidMount = async () => {
    this.fetchFilms();
  };

  fetchFilms = async () => {
    try {
      let response = await fetch(this.url + "&s=harry%20potter");
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({ movies: data.Search });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        {/* <div id="carouselExampleControls" class="carousel slide mb-5" data-ride="carousel">
      <div class="carousel-inner">
      <div class="carousel-item active">
    <div class="row mx-n1"> */}
        <Container fluid>
          <h4 style={{ color: "white" }}>Harry Potter</h4>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-6 row-cols-xl-6 mb-4 text-center">
            {this.state.movies.map((movie) => (
              <Col key={movie.imdbID}>
                <img className="img-fluid" src={movie.Poster} alt="movie" />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default MovieRow;
