import React, { useState } from 'react';
import { Row, Col, Dropdown, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';

import './styles.scss';

function NavSearch() {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState('mobile');

  return (
    <Container fluid className="navSearch">
      <Row className="w-100 navSearch_content">
        <Col sm={8} className="px-0">
          <Form className="d-flex navSearch_content-form">
            <div className="dropdown_links ">
              <div className="d-flex align-items-center justify-content-between">
                {number} Number
                <svg xmlns="http://www.w3.org/2000/svg" width="9.115" height="5.265" viewBox="0 0 9.115 5.265">
                  <path
                    d="M-17309.312-10112.5l3.852,3.851,3.85-3.851"
                    transform="translate(17310.02 10113.207)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="1"
                  />
                </svg>
              </div>
              <ul>
                <li>
                  <span className={number === 'mobile' ? 'active' : ''} onClick={() => setNumber('mobile')}>
                    mobile number
                  </span>
                </li>
                <li>
                  <span className={number === 'tracking' ? 'active' : ''} onClick={() => setNumber('tracking')}>
                    tracking number
                  </span>
                </li>
              </ul>
            </div>

            <FormControl type="text" placeholder="" aria-label="" />
            <Button className="button-main ">track</Button>
          </Form>
        </Col>
        <Col sm={4} className="px-0">
          <Nav className="d-flex justify-content-end" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action1">عربي</Nav.Link>
            <Button className="button-main ">Manage Shipment</Button>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}

export default NavSearch;
