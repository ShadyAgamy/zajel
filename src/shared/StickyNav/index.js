import React, { useState, useEffect } from 'react';
import { Navbar, Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';

import './styles.scss';

function StickyNav() {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState('mobile');
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 600 ? setShow(true) : setShow(false);
    }
  };
  return (
    <nav className={`navSticky ${show ? ' d-block' : 'd-none'}`}>
      <Container fluid className="d-flex align-items-center justify-content-between">
        <Row className="w-100 align-items-center">
          <Col className="px-0">
            <Navbar.Brand>
              <svg xmlns="http://www.w3.org/2000/svg" width="71.356" height="71.356" viewBox="0 0 71.356 71.356">
                <g id="Logo" transform="translate(-193.028 -167.72)">
                  <path
                    id="Path_60115"
                    data-name="Path 60115"
                    d="M203,216.037h-8.737a1.237,1.237,0,1,0,0,2.474h6.2L193.231,231.4a.659.659,0,0,0-.045.095,1.659,1.659,0,0,0-.158.623v.125a.966.966,0,0,0,1.024.973H202.7a1.274,1.274,0,0,0,0-2.549h-6.155l7.243-12.845a1.516,1.516,0,0,0,.186-.684v-.124a.973.973,0,0,0-.972-.973"
                    transform="translate(0 1.927)"
                    fill="#0054A6"
                  />
                  <path
                    id="Path_60116"
                    data-name="Path 60116"
                    d="M212.534,226.289v4.346h-2.589a3.644,3.644,0,0,1-1.957-.409c-.3-.2-.458-.683-.458-1.4v-.5c0-.733.162-1.228.466-1.426a5.927,5.927,0,0,1,2.7-.538c.595-.033,1.213-.057,1.841-.068m1.2-6.678a5.854,5.854,0,0,0-3.534-.971,14.162,14.162,0,0,0-2.218.167,1.233,1.233,0,0,0-.571,2.2,1.221,1.221,0,0,0,.936.239,12.221,12.221,0,0,1,1.8-.129,3.12,3.12,0,0,1,1.893.456,2.148,2.148,0,0,1,.5,1.679v.605l-1.958.055a9.305,9.305,0,0,0-4.127.951,3.653,3.653,0,0,0-1.542,3.408v.552a5.215,5.215,0,0,0,.4,2.15,3.016,3.016,0,0,0,1.309,1.434,5.164,5.164,0,0,0,1.556.563,9.909,9.909,0,0,0,1.776.138h4.476l.045-.018a1.063,1.063,0,0,0,.694-1.013v-8.827a4.258,4.258,0,0,0-1.429-3.64"
                    transform="translate(0.474 2.031)"
                    fill="#0054A6"
                  />
                  <path
                    id="Path_60117"
                    data-name="Path 60117"
                    d="M218.983,221.061a1.327,1.327,0,0,0-1.326,1.325v10.276c0,1.763-.659,1.751-1.054,1.761a1.285,1.285,0,0,0-.962.345,1.234,1.234,0,0,0-.393.907,1.254,1.254,0,0,0,1.066,1.241,2.3,2.3,0,0,0,.41.033c1.338,0,3.583-.561,3.583-4.311V222.386a1.327,1.327,0,0,0-1.324-1.325"
                    transform="translate(0.886 2.128)"
                    fill="#0054A6"
                  />
                  <path
                    id="Path_60118"
                    data-name="Path 60118"
                    d="M224.477,221.061a1.329,1.329,0,0,0-1.327,1.325v9.3a1.325,1.325,0,0,0,2.651,0v-9.3a1.327,1.327,0,0,0-1.324-1.325"
                    transform="translate(1.202 2.128)"
                    fill="#0054A6"
                  />
                  <path
                    id="Path_60119"
                    data-name="Path 60119"
                    d="M232.239,230.965l-.077.011a2.363,2.363,0,0,1-.506.021,2.018,2.018,0,0,1-.288-.035.848.848,0,0,1-.3-.149.591.591,0,0,1-.149-.292,3.936,3.936,0,0,1-.116-1.074V217.362a1.325,1.325,0,0,0-2.65,0v12.159a6.009,6.009,0,0,0,.282,1.979,2.639,2.639,0,0,0,1,1.395,3.512,3.512,0,0,0,1.121.514,3.643,3.643,0,0,0,.446.079,3.979,3.979,0,0,0,.518.032,5.711,5.711,0,0,0,.672-.044l.379-.048a1.243,1.243,0,0,0,.66-2.168,1.234,1.234,0,0,0-.989-.3"
                    transform="translate(1.401 1.927)"
                    fill="#0054A6"
                  />
                  <path
                    id="Path_60120"
                    data-name="Path 60120"
                    d="M232.328,195.962A1.327,1.327,0,0,0,231,197.287v9.158a3.944,3.944,0,0,1-.116,1.075.626.626,0,0,1-.149.294.872.872,0,0,1-.3.147,2.056,2.056,0,0,1-.289.035,2.509,2.509,0,0,1-.507-.021l-.075-.01a1.242,1.242,0,1,0-.329,2.461l.377.048a5.516,5.516,0,0,0,.672.045,3.993,3.993,0,0,0,.519-.032,3.838,3.838,0,0,0,.445-.079,3.537,3.537,0,0,0,1.122-.514,2.661,2.661,0,0,0,1-1.394,6.039,6.039,0,0,0,.281-1.979v-9.234a1.327,1.327,0,0,0-1.325-1.325"
                    transform="translate(1.401 1.127)"
                    fill="#0054A6"
                  />
                  <path
                    id="Path_60121"
                    data-name="Path 60121"
                    d="M225.811,189.687a1.328,1.328,0,0,0-1.325,1.325V203.63a1.325,1.325,0,0,0,2.65,0V191.012a1.328,1.328,0,0,0-1.325-1.325"
                    transform="translate(1.255 0.876)"
                    fill="#0054A6"
                  />
                  <path
                    id="Path_60122"
                    data-name="Path 60122"
                    d="M217.87,195.077h-7.559a1.325,1.325,0,0,0,0,2.65H217.8a2.286,2.286,0,0,1,1.7.479,3.812,3.812,0,0,1,0,3.622,2.3,2.3,0,0,1-1.7.476H202.9V191.012a1.325,1.325,0,1,0-2.651,0v15.071a2.3,2.3,0,0,1-.477,1.706,3.824,3.824,0,0,1-3.622,0,2.3,2.3,0,0,1-.477-1.705v-5.337a1.325,1.325,0,1,0-2.65,0v5.412a4.35,4.35,0,0,0,1.359,3.614,5.472,5.472,0,0,0,3.454,1h.251a5.471,5.471,0,0,0,3.453-1,4.35,4.35,0,0,0,1.359-3.614v-1.2H217.87a4.346,4.346,0,0,0,3.614-1.36,5.466,5.466,0,0,0,1-3.452v-.25a5.472,5.472,0,0,0-1-3.455,4.349,4.349,0,0,0-3.614-1.36"
                    transform="translate(0 0.876)"
                    fill="#0054A6"
                  />
                  <path
                    id="Path_60123"
                    data-name="Path 60123"
                    d="M217.857,208.224a1.595,1.595,0,1,0-1.6,1.6,1.6,1.6,0,0,0,1.6-1.6"
                    transform="translate(0.863 1.552)"
                    fill="#0054A6"
                  />
                  <path
                    id="Path_60124"
                    data-name="Path 60124"
                    d="M224.487,216.037a1.6,1.6,0,1,0,1.6,1.6,1.6,1.6,0,0,0-1.6-1.6"
                    transform="translate(1.191 1.927)"
                    fill="#0054A6"
                  />
                  <path
                    id="Path_60125"
                    data-name="Path 60125"
                    d="M218.909,216.037a1.6,1.6,0,1,0,1.6,1.6,1.6,1.6,0,0,0-1.6-1.6"
                    transform="translate(0.969 1.927)"
                    fill="#0054A6"
                  />
                  <path
                    id="Path_60126"
                    data-name="Path 60126"
                    d="M232.284,193.975a1.6,1.6,0,1,0-1.6-1.6,1.6,1.6,0,0,0,1.6,1.6"
                    transform="translate(1.502 0.92)"
                    fill="#0054A6"
                  />
                  <path
                    id="Path_60127"
                    data-name="Path 60127"
                    d="M245.379,206.216V185.763l14.2-6.375v19.887Zm11.427-29.489-13.21,5.929-13.212-5.929,13.212-5.3Zm6.338-.11a.1.1,0,0,0,0-.017c0-.041-.007-.078-.011-.117s-.005-.088-.012-.133-.019-.083-.029-.127-.018-.086-.031-.128a1.165,1.165,0,0,0-.047-.119c-.017-.042-.031-.084-.05-.124s-.043-.074-.063-.109a1.277,1.277,0,0,0-.067-.113,1.153,1.153,0,0,0-.082-.1,1.22,1.22,0,0,0-.08-.1,1.281,1.281,0,0,0-.1-.1c-.029-.026-.056-.056-.088-.082s-.087-.061-.133-.093c-.028-.019-.053-.04-.082-.056a1.724,1.724,0,0,0-.24-.119l-17.767-7.133a1.793,1.793,0,0,0-1.33,0l-17.768,7.133a1.777,1.777,0,0,0-.24.119c-.034.02-.065.046-.1.069s-.08.051-.116.08-.064.06-.1.09-.063.056-.093.087-.057.07-.085.105-.053.063-.077.1-.045.077-.068.116-.044.07-.062.107-.033.082-.051.125-.033.077-.046.118a1.093,1.093,0,0,0-.031.128c-.01.044-.023.085-.029.127s-.009.09-.014.133-.01.077-.01.117v9.489a1.782,1.782,0,1,0,3.565,0v-6.7l14.2,6.375v20.453l-2.915-1.425a1.782,1.782,0,0,0-1.565,3.2l5.481,2.677c.005,0,.014,0,.021.008s.037.02.057.028.032.011.048.018c.075.028.152.053.23.074l.048.012c.02,0,.04.006.059.009a1.656,1.656,0,0,0,.313.031h.01a1.658,1.658,0,0,0,.314-.031c.019,0,.04-.005.059-.009s.031-.009.048-.012c.078-.021.154-.046.229-.074.017-.006.032-.01.049-.018l.057-.028c.007,0,.015,0,.022-.008l17.768-8.68a1.784,1.784,0,0,0,1-1.6V176.635l0-.019"
                    transform="translate(1.237 0)"
                    fill="#ffc20e"
                  />
                </g>
              </svg>
            </Navbar.Brand>
          </Col>
          <Col className="px-0">
            <div className="navbarLinks_links d-flex align-items-center">
              <div className="dropdown_links track ">
                <span>
                  Track
                  <svg xmlns="http://www.w3.org/2000/svg" width="9.115" height="5.265" viewBox="0 0 9.115 5.265">
                    <path
                      d="M-17309.312-10112.5l3.852,3.851,3.85-3.851"
                      transform="translate(17310.02 10113.207)"
                      fill="none"
                      stroke="#0054A6"
                      strokeLinecap="round"
                      strokeWidth="1"
                    ></path>
                  </svg>
                </span>
                <ul>
                  <p className="main-p text15 fw-normal mb-3">Track your shipment</p>
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
                      <ul className="p-0 mt-3">
                        <li>
                          <span className={number === 'mobile' ? 'active' : ''} onClick={() => setNumber('mobile')}>
                            mobile number
                          </span>
                        </li>
                        <li className="p-0">
                          <span className={number === 'tracking' ? 'active' : ''} onClick={() => setNumber('tracking')}>
                            tracking number
                          </span>
                        </li>
                      </ul>
                    </div>

                    <FormControl type="text" placeholder="" aria-label="" />
                    <button className="button-main  btn btn-primary-solid m-0">track</button>
                  </Form>
                </ul>
              </div>
              <div className="dropdown_links ">
                <span>
                  ship
                  <svg xmlns="http://www.w3.org/2000/svg" width="9.115" height="5.265" viewBox="0 0 9.115 5.265">
                    <path
                      d="M-17309.312-10112.5l3.852,3.851,3.85-3.851"
                      transform="translate(17310.02 10113.207)"
                      fill="none"
                      stroke="#0054A6"
                      strokeLinecap="round"
                      strokeWidth="1"
                    ></path>
                  </svg>
                </span>
                <ul>
                  <li>
                    <a href="">create shipment</a>
                  </li>
                  <li>
                    <a href="">manage shipment</a>
                  </li>
                  <li>
                    <a href="">get price estimate</a>
                  </li>
                  <li>
                    <a href="">find nearest branch</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown_links">
                <span>
                  solutions{' '}
                  <svg xmlns="http://www.w3.org/2000/svg" width="9.115" height="5.265" viewBox="0 0 9.115 5.265">
                    <path
                      d="M-17309.312-10112.5l3.852,3.851,3.85-3.851"
                      transform="translate(17310.02 10113.207)"
                      fill="none"
                      stroke="#0054A6"
                      strokeLinecap="round"
                      strokeWidth="1"
                    ></path>
                  </svg>
                </span>
                <ul>
                  <li>
                    <a href="">e-commerce</a>
                  </li>
                  <li>
                    <a href="">freight</a>
                  </li>
                  <li>
                    <a href="">fulfilment</a>
                  </li>
                  <li>
                    <a href="">domestic destribution</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown_links">
                <span>
                  Help &amp; Support{' '}
                  <svg xmlns="http://www.w3.org/2000/svg" width="9.115" height="5.265" viewBox="0 0 9.115 5.265">
                    <path
                      d="M-17309.312-10112.5l3.852,3.851,3.85-3.851"
                      transform="translate(17310.02 10113.207)"
                      fill="none"
                      stroke="#0054A6"
                      strokeLinecap="round"
                      strokeWidth="1"
                    ></path>
                  </svg>
                </span>
                <ul>
                  <li>
                    <a href="">FAQs</a>
                  </li>
                  <li>
                    <a href="">contact us</a>
                  </li>
                </ul>
              </div>
              <button type="button" className="button-main  btn btn-primary-solid">
                manage shipment
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </nav>
  );
}

export default StickyNav;
