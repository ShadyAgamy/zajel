import React, { useState } from 'react';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import './styles.scss';
import logo from '../../assets/images/Logo.png';
function NavBar() {
  return (
    <nav className="navbarLinks ">
      <Container fluid className="d-flex align-items-center justify-content-between">
        <Navbar.Brand>
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <div className="navbarLinks_links d-flex">
          <div className="dropdown_links ">
            <span>
              ship{' '}
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
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeWidth="1"
                />
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
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeWidth="1"
                />
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
        </div>
      </Container>
    </nav>
  );
}

export default NavBar;
