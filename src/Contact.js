import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, Form,Button} from 'react-bootstrap'

class Contact extends React.Component{
  render(){
    const contact = {
      marginBottom: "80px"
    }

    return(
      <Container style={contact}>
        <Row>
          <Col>
        <h1 style={{textAlign:'center', color:'grey'}}>Contact</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <iframe
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.341775346873!
		2d3.3422253148425853!3d6.604381995223933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f1
		3.1!3m3!1m2!1s0x103b8d7c33eb87b3%3A0xfc23c9556f669273!2sAlabian+Solutions+Lim
		ited!5e0!3m2!1sen!2sng!4v1516009132030" width="600" height="450"
		frameborder="0" style={{border:0}} allowfullscreen>
            </iframe>
          </Col>
          <Col>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Full Name" className="formInput" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Email" className="formInput" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>How did you hear about us?</Form.Label>
              <Form.Control as="select">
                <option className="form-select" selected="selected">Facebook</option>
                <option>Twitter</option>
                <option>Telegram</option>
                <option>Instagram</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicRadio">
              <Form.Label>Would you visit us again?</Form.Label>

                <Form.Check type="radio" />Yes
                <Form.Check type="radio"/>No

            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Comment</Form.Label>
              <Form.Control as="textarea" rows="5" className="formInput"/>
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Sign me up for email update" />
            </Form.Group>
              <Button variant="success" type="submit">
              Submit
              </Button>





          </Form>
        </Col>
        </Row>
      </Container>
    )
  }
}
export default Contact
