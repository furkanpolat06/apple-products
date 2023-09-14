import logo from "../../helpers/logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.scss";
import { useState } from "react";

const MyNavbar = ({ data, setSelectedCategory}) => {
  
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    
 }

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg " className="bg-body-tertiary">
      <Container>
        <Navbar.Brand ><img src={logo} alt="apple.logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-25">
          <Nav.Link href="#all">All</Nav.Link>
            <Nav.Link ><button onClick={() => handleCategoryFilter("smartphone")}>Iphone</button> </Nav.Link>
            <Nav.Link  href="#macbook">Macbook</Nav.Link>
            <Nav.Link href="#ipad">Ipad</Nav.Link>
            <Nav.Link href="#others">Others</Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
};
export default MyNavbar;

{/* <div className="navbar">
      
      <div className="logo">
        <img src={logo} alt="apple.logo" />
      </div>
      <div className="links">
      <a href="#all">All </a>
        <a href="#iphone">Iphone </a>
        <a href="#macbook">Macbook</a>
        <a href="#ipad">Ipad</a>
        
        <a href="#others">Others </a>
      </div>
      <div className="logo">
        <img src={logo} alt="horoscope" />
      </div>

    </div> */}