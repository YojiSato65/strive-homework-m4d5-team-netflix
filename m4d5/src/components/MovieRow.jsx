import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
// import MoviesGallery from './MovieGallery'

class MovieRow extends React.Component {
  url = 'http://www.omdbapi.com/?apikey=fc9ce628'
  state = {
    movies: [],
  }

  componentDidMount = async () => {
    this.fetchFilms()
  }

  fetchFilms = async () => {
    try {
      let response = await fetch(this.url + '&s=harry%20potter')
      console.log(response)
      if (response.ok) {
        let data = await response.json()
        console.log(data)
        this.setState({ movies: data })
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <>
        <h4>new movies</h4>
        <Container>
          <Row className="justify-content-center mt-3">
            <Col md={6}>
              <Carousel>
                {this.state.movies.map((movie) => (
                  <Carousel.Item key={movie.imbdID}>
                    <img
                      className="d-block w-100"
                      src={movie.Poster}
                      alt="First slide"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default MovieRow
