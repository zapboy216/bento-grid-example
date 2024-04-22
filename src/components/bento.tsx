import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ResponsiveExample() {
  return (
    <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
      <Col xs={6} md={4} className="border-col-nobottom">
      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
        </Col>

        <Col xs={12} md={8} className="border-col">
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing eli xs=12 md=8</p>
          
        </Col>
      
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row>
        <Col xs={6} md={4} className="border-col-notopradius">
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4} className="border-col">
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4} className="border-col">
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
          xs=6 md=4
        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
      <Col xs={6} md={4} className="border-col">
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
          xs=6 md=4
        </Col>
        <Col xs={12} md={8} className="border-col">
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequatLorem ipsum dolor sit amet, consectetur adipiscing eli</p>
          xs=12 md=8
        </Col>
       
      </Row>
    </Container>
  );
}

export default ResponsiveExample;