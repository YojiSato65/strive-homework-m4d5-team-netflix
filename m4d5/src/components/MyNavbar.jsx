import { Component } from "react";
import { Navbar, Nav, InputGroup, FormControl } from "react-bootstrap";

class MyNavbar extends Component {
  state = {
    searchString: "",
  };

  render() {
    return (
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#221f1f" }}>
        <Navbar.Brand>
          <img
            src="https://fontmeme.com/permalink/211105/a65e718e7ad2d9230ec2aa9607ae934b.png"
            alt="netflix-font"
            border="0"
            width="160"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className={"nav-link font-weight-bold"}>Home</div>
            <div className={"nav-link font-weight-bold"}>TV Shows</div>
            <div className={"nav-link font-weight-bold"}>Movies</div>
            <div className={"nav-link font-weight-bold"}>Recently Added</div>
            <div className={"nav-link font-weight-bold"}>My List</div>
          </Nav>
          <span className="d-flex align-items-center">
            <InputGroup className="icons">
              <FormControl
                placeholder="Search and press enter"
                aria-label="search"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <div id="kids">KIDS</div>
            <i className="fa fa-bell icons"></i>
            <i className="fa fa-user icons"></i>
          </span>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNavbar;
