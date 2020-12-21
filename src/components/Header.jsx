//global
import React from 'react'
import { Col, DropdownToggle, Input, InputGroup, InputGroupAddon, Row, Button } from 'reactstrap'

//styling
import { AppsOutlined, ChevronRightOutlined, InfoRounded, NotificationsNoneRounded, Search } from '@material-ui/icons'

const Header = () => {
  return (
    <div className="header">
      <Row>
        <Col lg={4} md={6} sm={12} id="col-1">
          <span id="title">ANAHA</span>
          <span>Project Profile</span>
          <ChevronRightOutlined />
          <span>Analytics</span>
        </Col>
        <Col lg={4} md={6} sm={12} id="col-2">
          <InputGroup>
            <Input placeholder="Search.." />
            <InputGroupAddon addonType="append">
              <Button>
                <Search />
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
        <Col lg={4} md={0} sm={0} id="col-3">
          <InfoRounded className="icon-info" fontSize="large" style={{ color: 'red' }} />
          <AppsOutlined fontSize="large" onclick />
          <NotificationsNoneRounded fontSize="large" />
          <div>
            <img alt="" src="https://picsum.photos/id/237/200/300" className="img-cat" />
            <span style={{ fontSize: 20 }}>Dr. Raquel</span>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Header