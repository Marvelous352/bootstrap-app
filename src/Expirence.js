import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'
import google from './images/google.png'
import alabian from './images/alabian.png'

class Expirence extends React.Component{
  render(){
    const Expirence = {
    textAlign: 'left',
		height: '500px',
		padding: '20px',
		marginLeft: '10px',
    marginRight:'10px',
		borderRadius: '10px',
		backgroundColor: 'white',


    }
    return(
      <div className="parent">
        <h1>Expirence</h1>
        <Container>
          <Row>
            <Col style={Expirence}>
              <img src={google} alt="google" style={{height:"70px" ,width:"70px"}}/>
              <h3>CEO/ Lead Web Developer</h3>
  						<h4>Google Inc</h4>
  						<h5>Jan 11-present</h5>
  						<ul>
							<li>Preparation of monthly financial management account for the board of director of the ocmpany which must be ready within three working days into the new month</li>
							<li>Monitoring the finacial performance of the company's product and service inorder to determine which product to invest more money on or the product to discontinue. Which was done excellently, despite been a young comapny, she is not having a flow problem</li>
							<li>Monitoring the finacial performance of the company's product and service inorder to determine which product to invest more money on or the product to discontinue. Which was done excellently, despite been a young comapny, she is not having a flow problem</li>
						</ul>

            </Col>
            <Col style={Expirence}>
            <img src={alabian} alt="alabian logo" style={{height:"70px" ,width:"70px"}}/>
                <h3>CEO/ Lead Web Developer</h3>
						<h4>Google Inc</h4>
						<h5>Jan 11-present</h5>
						<ul>
							<li>Preparation of monthly financial management account for the board of director of the ocmpany which must be ready within three working days into the new month</li>
							<li>Monitoring the finacial performance of the company's product and service inorder to determine which product to invest more money on or the product to discontinue. Which was done excellently, despite been a young comapny, she is not having a flow problem</li>
							<li>Monitoring the finacial performance of the company's product and service inorder to determine which product to invest more money on or the product to discontinue. Which was done excellently, despite been a young comapny, she is not having a flow problem</li>
						</ul>
            </Col>
          </Row>


        </Container>



      </div>
    )
  }
}
export default Expirence
