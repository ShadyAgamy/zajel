import React from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import './styles.scss';

function Footer() {
  return (
    <footer className="footer text-white">
      <Container>
        <Row>
          <Col md={3} className="footer_desc">
            <p className="footer_desc-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            </p>
            <p className="footer_desc-text">
              consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            </p>
            <p className="footer_desc-text">
              consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
            </p>
          </Col>
          <Col md={6} className="footer_links">
            <label htmlFor="subscribe">Subscribe to our newsletter</label>
            <InputGroup className="mb-3">
              <FormControl type="email" placeholder="Enter Your Mail" aria-label="subscribe" aria-describedby="basic-addon2" />
              <Button variant="outline-secondary" id="button-addon2">
                Subscribe <img src="images/location-arrow.svg" alt="" />
              </Button>
            </InputGroup>
            <Row className="footer_links-links">
              <Col className="inner_links" md={7}>
                <ul className="d-flex flex-column">
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  <li>
                    <a href="">Track Order</a>
                  </li>
                  <li>
                    <a href="">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Sell With Us</a>
                  </li>
                  <li>
                    <a href="">Shipping And Returns</a>
                  </li>
                </ul>
              </Col>
              <Col className="social_links" md={5}>
                <ul className="d-flex flex-column">
                  <li>
                    <a href="">
                      <img src="images/fb.svg" alt="fb" />
                    </a>
                    /YESHTERY
                  </li>
                  <li>
                    <a href="">
                      <img src="images/linked-in.svg" alt="linked-in" />
                    </a>
                    /YESHTERY
                  </li>
                  <li>
                    <a href="">
                      <img src="images/insta.svg" alt="insta" />
                    </a>
                    /YESHTERY
                  </li>
                  <li>
                    <a href="">
                      <img src="images/twitter.svg" alt="twitter" />
                    </a>
                    /YESHTERY
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="footer_foot align-items-center">
          <Col md={6}>
            <p>© 2021 yeshtery, all rights reserved.</p>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={6} className="d-flex align-items-center">
                <img src="images/cod.png" alt="" />
                <img src="images/visa.png" alt="" />
                <img src="images/master.png" alt="" />
              </Col>
              <Col md={6} className="d-flex justify-content-end align-items-center">
                Powered By <img className="ms-2 me-0" src="images/nasNav_logo.svg" alt="" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
