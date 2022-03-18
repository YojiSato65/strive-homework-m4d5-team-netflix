import React from 'react'
// import { Container, Row, Col, Carousel } from 'react-bootstrap'

class MovieRow extends React.Component {
  state = {}

  componentDidMount = async () => {
    try {
      let response = await fetch(
        'http://www.omdbapi.com/?i=tt3896198&apikey=fc9ce628',
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI3OWY5NTgxNmI1YjAwMTU5NDA3NDAiLCJpYXQiOjE2MjI2NDY2NzcsImV4cCI6MTYyMzg1NjI3N30.y-rBwB5WAQOWBvWrLlAgTQUrbGulxd2M6cWH3VLyGLw',
          },
        },
      )
      console.log(response)
      if (response.ok) {
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export default MovieRow
