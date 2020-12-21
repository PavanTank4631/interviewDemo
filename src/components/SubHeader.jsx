//global
import React from 'react'

//styling
import { Row, Col } from 'reactstrap'

const SubHeader = () => {
  return (
    <div fluid className="header2">
      <Row>
        <Col className="header2-col" sm={12} md={6} lg={2}>
          <a href="#">Priya Mehta 32Y 4M</a>
        </Col>
        <Col className="header2-col" sm={12} md={6} lg={2}>
          <p>className: P0987</p>
        </Col>
        <Col className="header2-col" sm={12} md={6} lg={2}>
          <p>With
            <a href="#">G</a>3
            <a href="#">P</a>0
            <a href="#">L</a>1
            <a href="#">A</a>1
          </p>
        </Col>
        <Col className="header2-col" sm={12} md={6} lg={2}>
          <p>8 weeks pregnant</p>
        </Col>
        <Col className="header2-col" sm={12} md={6} lg={2}>
          <p>LMP: 20/01/2020</p>
        </Col>
        <Col className="header2-col" sm={12} md={6} lg={2}>
          <p>EDD: 29/10/2020</p>
        </Col>
      </Row>
    </div>
  )
}

export default SubHeader;