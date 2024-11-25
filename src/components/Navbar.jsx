import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const BrandNavbar = () => {
  return ( <>
    <Navbar bg="white" variant="dark" expand="lg" sticky="top">
      <Container >
        <Navbar.Brand href="#" style={{color:"#A73CF0",fontSize:"200%",fontWeight:"bold"}} >Udemy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <div class="search-bar">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input class="search-bar__input" type="text" placeholder="Search course etc...."></input>

        </div>
          <Nav className="ms-auto">
            <Nav.Link href="#home" style={{color:"black"}}>Course</Nav.Link>
            <Nav.Link href="#features" style={{color:"black"}}>My learnings</Nav.Link>
            <Nav.Link href="#home" style={{color:"black"}}>
              <i class="fa-solid fa-cart-shopping"></i> Cart
            </Nav.Link>
            <Nav.Link href="#features" style={{color:"black"}}>
              <i class="fa-solid fa-bell"></i> Notification
            </Nav.Link>
            <Nav.Link href="#contact" style={{color:"black"}}>
              {" "}
              <i class="fa-solid fa-user"></i> Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     <div class="categoty">

     <p>Development</p>
     <p>Design</p>
     <p>Masters in Yoga</p>
     <p>Self development</p>
     <p>IT & Software</p>
     <p>Marketing</p>
     <p>Meditation</p>
     <p>Personal Development</p>

 </div>
</>
  );
};

export default BrandNavbar;
