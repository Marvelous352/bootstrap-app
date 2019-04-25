import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'
import portfolio1 from './images/portfolio1.jpg'
import portfolio2 from './images/portfolio2.jpg'
import portfolio3 from './images/portfolio3.jpg'



class Portfolio extends React.Component{
  render(){
    const portfolio = {
      marginBottom:'80px'
    }
    return(
      <Container style={portfolio}>
        <h1 style={{textAlign:'center', color:'grey'}}>Portfolio</h1>
        <Row>
        <Col>
        <img src={portfolio1} alt="portfolio" style={{height:'300px', width:'350px'}}/>
        <img src={portfolio2} alt="portfolio" style={{height:'300px', width:'350px'}}/>
        <img src={portfolio3} alt="portfolio" style={{height:'300px', width:'350px'}}/>
        </Col>
        </Row>
        <Row>
        <Col>
        <img src={portfolio1} alt="portfolio" style={{height:'300px', width:'350px'}}/>
        <img src={portfolio2} alt="portfolio" style={{height:'300px', width:'350px'}}/>
        <img src={portfolio3} alt="portfolio" style={{height:'300px', width:'350px'}}/>
        </Col>
        </Row>

      </Container>
    )
  }
}
export default Portfolio
