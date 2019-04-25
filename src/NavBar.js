import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Image from "./Image";
import Profile from"./Profile"
import Icons from"./Icons"
import AboutUss from"./AboutUss"
import Expirence from"./Expirence"
import Download from"./Download"
import Portfolio from"./Portfolio"
import Contact from"./Contact"
import Expenses from"./Expenses"
import "./Style.css"
import {Container, Navbar, Nav} from 'react-bootstrap'


class NavBar extends React.Component{
  render(){

    return(
      <Container>
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#About">About</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#expirience">Expirence</Nav.Link>
      <Nav.Link href="#download">Download</Nav.Link>
      <Nav.Link href="#portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
      <Nav.Link href="#table">Table</Nav.Link>
    </Nav>

  </Navbar>
  <br/>
  <Image/>
  <Profile/>
  <Icons/>
  <AboutUss/>
  <Expirence/>
  <Download/>
  <Portfolio/>
  <Contact/>
  <Expenses/>


      </Container>


    )

  }

}


export default NavBar
