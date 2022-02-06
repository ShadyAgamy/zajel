import React from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import './styles.scss';

import fb from '../../assets/icons/facebook.png';
import as from '../../assets/icons/as.png';
import mail from '../../assets/icons/mail.png';
import instagram from '../../assets/icons/instagram.png';
import twitter from '../../assets/icons/twitter.png';
import gp from '../../assets/icons/gp.png';
import telephone from '../../assets/icons/telephone.png';
function Footer() {
  return (
    <footer className="footer text-white">
      <Container fluid>
        <Row className="footer_main ">
          <Col md={3}>
            <h6 className="title">Our Company</h6>
            <Row>
              <Col sm={6}>
                <a className="text18 fw-light text-capitalize d-block text-white">About Us</a>
                <a className="text18 fw-light text-capitalize d-block text-white">Careers</a>
                <a className="text18 fw-light text-capitalize d-block text-white">FAQ's</a>
              </Col>
              <Col sm={6}>
                <a className="text18 fw-light text-capitalize d-block text-white">Media Center</a>
                <a className="text18 fw-light text-capitalize d-block text-white">Developers Tools</a>
                <a className="text18 fw-light text-capitalize d-block text-white">Developers Tools</a>
              </Col>
            </Row>
          </Col>
          <Col md={{ span: 2, offset: 1 }}>
            <h6 className="title">Legal</h6>
            <Row>
              <Col>
                <a className="text18 fw-light text-capitalize d-block text-white">Terms of Use</a>
                <a className="text18 fw-light text-capitalize d-block text-white">Privacy Policy</a>
              </Col>
            </Row>
          </Col>
          <Col md={{ span: 2, offset: 0 }}>
            <h6 className="title">Contact Us</h6>
            <Row>
              <Col>
                <div className="d-flex align-items-start">
                  <img src={mail} alt="mail" />
                  <a
                    className="text18 fw-light text-capitalize d-block text-white text-decoration-underline"
                    onClick={() => (window.location = 'mailto:info@zajil-express.com')}
                  >
                    info@zajil-express.com
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <img src={telephone} alt="telephone" />
                  <a className="text18 fw-light text-capitalize d-block text-white text-decoration-underline" href="tel:+996920000177">
                    +996920000177
                  </a>
                </div>
              </Col>
            </Row>
          </Col>

          <Col md={{ span: 3, offset: 1 }}>
            <h6 className="title">Contact Us</h6>
            <Row>
              <Col>
                <InputGroup className="mb-3">
                  <FormControl type="email" placeholder="Email Address " className="text12  bg-transparent" />
                  <button type="button" className="text14 fw-bold  btn btn-secondery-outline">
                    send
                  </button>
                </InputGroup>
                <div className="d-flex align-items-center social">
                  <a>
                    <img src={fb} alt="facebook" />
                  </a>
                  <a>
                    <img src={instagram} alt="instagram" />
                  </a>
                  <a>
                    <img src={twitter} alt="twitter" />
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="footer_foot align-items-center">
          <Col md={7} className="px-0">
            <p className="text16 text-white d-inline fw-light"> &#64; 2021 Zajil Express. All rights reserved.</p>
            <p className="text16 text-white d-inline fw-light">
              Developed by:
              <a href="" className="text-capitalize text-decoration-underline text-white">
                Brackets Technology
              </a>
            </p>
          </Col>
          <Col md={{ offset: 2, span: 3 }} className="px-0">
            <div className="d-flex justify-content-end align-items-center apps">
              <p className="text16 text-white d-inline fw-light mb-0"> Download Zajil App</p>{' '}
              <a href="">
                <img src={as} alt="" />
              </a>
              <a href="">
                <img src={gp} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
