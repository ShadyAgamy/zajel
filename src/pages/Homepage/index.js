import React, { useState } from 'react';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper';

// import { useTranslation } from 'react-i18next';

import NavSearch from '../../shared/NavSearch';
import NavBar from '../../shared/NavBar';
import Header from '../../shared/Header';
import Footer from '../../shared/Footer';

import blueCurve from '../../assets/images/curveBlue.png';
import world from '../../assets/icons/world-sm.svg';
import box from '../../assets/icons/box-sm.svg';
import snap from '../../assets/icons/snap.svg';
import video from '../../assets/videos/video.mp4';
import frame from '../../assets/images/frame.png';
import logistic from '../../assets/images/logist.png';
import header2 from '../../assets/images/header2.png';
import midBanner from '../../assets/images/mid-banner.png';
import news from '../../assets/images/news.png';
import news1 from '../../assets/images/news1.png';
import news2 from '../../assets/images/news2.png';
import news3 from '../../assets/images/news3.png';

import 'swiper/css';
import './styles.scss';
import 'swiper/css/effect-fade';

const HomePage = () => {
  // const { t, i18n } = useTranslation();
  const [sensor, setSensor] = useState(true);
  let [counter, setCounter] = useState(1);

  const checkVisibilty = (isVisible, start) => {
    if (isVisible) {
      if (counter < 5) {
        setCounter((prevState) => prevState + 1);
      } else {
        setSensor(false);
      }
      return start();
    }
  };

  const paginationData = [
    `<span> <svg xmlns="http://www.w3.org/2000/svg" width="38.375" height="20.865" viewBox="0 0 38.375 20.865">
      <g id="delivery-truck" transform="translate(0.191 -11.205)">
        <path id="Path_86562" data-name="Path 86562" d="M40.369,35.6a3.27,3.27,0,1,1,3.268-3.27A3.27,3.27,0,0,1,40.369,35.6Zm0-5.348a2.077,2.077,0,1,0,2.075,2.077A2.077,2.077,0,0,0,40.369,30.257Z" transform="translate(-7.611 -3.635)" fill="#0054A6" stroke="#0054A6" stroke-width="0.2"/>
        <path id="Path_86563" data-name="Path 86563" d="M18.7,35.6a3.27,3.27,0,1,1,3.267-3.27A3.27,3.27,0,0,1,18.7,35.6Zm0-5.348a2.077,2.077,0,1,0,2.074,2.077A2.077,2.077,0,0,0,18.7,30.257Z" transform="translate(-3.176 -3.635)" fill="#0054A6" stroke="#0054A6" stroke-width="0.2"/>
        <path id="Path_86564" data-name="Path 86564" d="M44.154,30.652H42.523a.6.6,0,1,1,0-1.193h1.463V26.3a2.513,2.513,0,0,0-.318-1.222l-3.229-5.789a.318.318,0,0,0-.278-.163h-4.4V29.461h1.42a.6.6,0,1,1,0,1.193H35.163a.6.6,0,0,1-.6-.6V18.525a.6.6,0,0,1,.6-.6h5a1.511,1.511,0,0,1,1.32.775l3.228,5.79a3.708,3.708,0,0,1,.468,1.8v3.332A1.025,1.025,0,0,1,44.154,30.652Z" transform="translate(-7.094 -1.356)" fill="#0054A6" stroke="#0054A6" stroke-width="0.2"/>
        <path id="Path_86565" data-name="Path 86565" d="M14.558,32.438H8.838a.6.6,0,0,1-.6-.6V27.254a.6.6,0,0,1,1.193,0v3.991h5.123a.6.6,0,1,1,0,1.193Z" transform="translate(-1.706 -3.142)" fill="#0054A6" stroke="#0054A6" stroke-width="0.2"/>
        <path id="Path_86566" data-name="Path 86566" d="M8.838,23.409a.6.6,0,0,1-.6-.6V18.807a.6.6,0,0,1,1.193,0v4.008A.6.6,0,0,1,8.838,23.409Z" transform="translate(-1.706 -1.414)" fill="#0054A6" stroke="#0054A6" stroke-width="0.2"/>
        <path id="Path_86567" data-name="Path 86567" d="M29.775,29.3H19.9a.6.6,0,1,1,0-1.193h9.279V12.5H9.435v2.457a.6.6,0,0,1-1.193,0V12.388a1.085,1.085,0,0,1,1.084-1.083H29.289a1.085,1.085,0,0,1,1.083,1.083V28.7A.6.6,0,0,1,29.775,29.3Z" transform="translate(-1.706)" fill="#0054A6" stroke="#0054A6" stroke-width="0.2"/>
        <path id="Path_86568" data-name="Path 86568" d="M9.855,27.851H2.284a.6.6,0,1,1,0-1.193H9.855a.6.6,0,1,1,0,1.193Z" transform="translate(-0.364 -3.142)" fill="#0054A6" stroke="#0054A6" stroke-width="0.2"/>
        <path id="Path_86569" data-name="Path 86569" d="M16.67,24.44H6.105a.6.6,0,1,1,0-1.193H16.67a.6.6,0,0,1,0,1.193Z" transform="translate(-1.146 -2.444)" fill="#0054A6" stroke="#0054A6" stroke-width="0.2"/>
        <path id="Path_86570" data-name="Path 86570" d="M4.631,20.48H.505a.6.6,0,1,1,0-1.193H4.631a.6.6,0,1,1,0,1.193Z" transform="translate(0 -1.634)" fill="#0054A6" stroke="#0054A6" stroke-width="0.2"/>
        <path id="Path_86571" data-name="Path 86571" d="M12.135,16.337H4.853a.6.6,0,1,1,0-1.193h7.282a.6.6,0,1,1,0,1.193Z" transform="translate(-0.89 -0.786)" fill="#0054A6" stroke="#0054A6" stroke-width="0.2"/>
      </g>
    </svg></span>
    <h5>Freight Services</h5>`,
    `<span><svg xmlns="http://www.w3.org/2000/svg" width="24.823" height="21.374" viewBox="0 0 24.823 21.374">
      <g id="ecommerce" transform="translate(0.15 -35.851)">
        <path id="Path_86557" data-name="Path 86557" d="M.479,36.959h4.07L7.328,49.464v2.869a2.395,2.395,0,1,0,2.826,2.826h1.772a.479.479,0,1,0,0-.958H10.153a2.4,2.4,0,0,0-1.868-1.868V49.891H22.606a.479.479,0,0,0,.472-.4l1.437-8.621a.479.479,0,0,0-.472-.558H6.275L5.4,36.376A.479.479,0,0,0,4.933,36H.479a.479.479,0,0,0,0,.958ZM17.673,45.58v3.353H12.74V45.58Zm-4.933-.958V41.269h4.933v3.353Zm-.958,4.311H8.191L7.446,45.58h4.336ZM9.244,54.68a1.437,1.437,0,1,1-1.437-1.437A1.438,1.438,0,0,1,9.244,54.68ZM22.2,48.933h-3.57V45.58h4.128Zm.718-4.311H18.631V41.269h4.847ZM11.782,41.269v3.353H7.233l-.745-3.353Z" transform="translate(0 0)" fill="#0054a6" stroke="#0054a6" stroke-width="0.3"/>
        <path id="Path_86558" data-name="Path 86558" d="M334.126,376a2.4,2.4,0,0,0-2.347,1.916h-2.3a.479.479,0,0,0,0,.958h2.3A2.395,2.395,0,1,0,334.126,376Zm0,3.832a1.437,1.437,0,1,1,1.437-1.437A1.438,1.438,0,0,1,334.126,379.833Z" transform="translate(-313.243 -323.716)" fill="#ffc20e" stroke="#ffc20e" stroke-width="0.3"/>
        <circle id="Ellipse_2497" data-name="Ellipse 2497" cx="0.401" cy="0.401" r="0.401" transform="translate(13.864 54.554)" fill="#ffc20e" stroke="#ffc20e" stroke-width="0.3"/>
      </g>
    </svg></span>
    <h5>E-commerce</h5>`,
    ` <span><svg xmlns="http://www.w3.org/2000/svg" width="21.172" height="22.556" viewBox="0 0 21.172 22.556">
        <g id="box" transform="translate(-15.782 0.253)">
          <g id="Group_41434" data-name="Group 41434" transform="translate(16.032 -0.001)">
            <g id="Group_41433" data-name="Group 41433" transform="translate(0 0)">
              <path id="Path_86559" data-name="Path 86559" d="M36.522,4.866,26.509.032a.323.323,0,0,0-.281,0L16.215,4.866a.323.323,0,0,0-.183.291V16.9a.323.323,0,0,0,.183.291l10.013,4.834a.323.323,0,0,0,.281,0l10.013-4.834A.323.323,0,0,0,36.7,16.9V5.156A.323.323,0,0,0,36.522,4.866ZM26.368.681l9.27,4.475-2.687,1.3a.32.32,0,0,0-.055-.034L23.689,1.975ZM22.96,2.34l9.257,4.469-1.9.915L21.068,3.257Zm9.473,5.081V10.8l-1.771.855V8.276Zm3.625,9.272-9.367,4.522V10.193l2.234-1.079a.323.323,0,0,0-.281-.582l-2.276,1.1-.9-.432a.323.323,0,0,0-.281.582l.854.412V21.215l-9.367-4.522V5.671l7.133,3.443a.323.323,0,0,0,.281-.582L17.1,5.156l3.209-1.549,9.7,4.685,0,.006v3.877a.323.323,0,0,0,.464.291L32.9,11.3a.323.323,0,0,0,.183-.291v-3.9l2.979-1.438Z" transform="translate(-16.032 0.001)" fill="#0054a6" stroke="#0054a6" stroke-width="0.5"/>
            </g>
          </g>
          <g id="Group_41436" data-name="Group 41436" transform="translate(17.411 14.699)">
            <g id="Group_41435" data-name="Group 41435" transform="translate(0)">
              <path id="Path_86560" data-name="Path 86560" d="M49.981,342l-1.469-.709a.323.323,0,1,0-.281.582l1.469.709a.323.323,0,0,0,.281-.582Z" transform="translate(-48.048 -341.261)" fill="#ffc20e" stroke="#ffc20e" stroke-width="0.5"/>
            </g>
          </g>
          <g id="Group_41438" data-name="Group 41438" transform="translate(17.413 12.167)">
            <g id="Group_41437" data-name="Group 41437" transform="translate(0)">
              <path id="Path_86561" data-name="Path 86561" d="M51.379,307.084l-2.82-1.361a.323.323,0,1,0-.281.582l2.82,1.361a.323.323,0,1,0,.281-.582Z" transform="translate(-48.096 -305.69)" fill="#ffc20e" stroke="#ffc20e" stroke-width="0.5"/>
            </g>
          </g>
        </g>
      </svg></span>
    <h5>Fulfillment</h5>`,
    ` <span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="26.706" height="21.958" viewBox="0 0 26.706 21.958">
      <defs>
        <clipPath id="clip-path">
          <rect id="Rectangle_2961" data-name="Rectangle 2961" width="26.706" height="21.958" transform="translate(0 0)" fill="none"/>
        </clipPath>
      </defs>
      <g id="Group_41559" data-name="Group 41559" transform="translate(0 0)">
        <g id="Group_41558" data-name="Group 41558" clip-path="url(#clip-path)">
          <path id="Path_86655" data-name="Path 86655" d="M15.027,4.583A5.913,5.913,0,0,1,10.75,2.8C8.608.969,6.363-.369,3.506,1.5c.908,1.258.129,2.7-1.628,2.88-.5.049-1.024-.313-1.178.556-.112.62-.293,1.068.507,1.39.368.151.621.707.82,1.127" fill="none" stroke="#ffc20e" stroke-width="1.2"/>
          <path id="Path_86656" data-name="Path 86656" d="M2.027,7.455c1.225,2.584,3.882,4.4,4.047,7.571a1.613,1.613,0,0,0,.872,1.064c.854.393,1.114,1.161,1.543,1.865.634,1.041,1.378,2.015,2.52,3.661-.263-2.221.842-1.833,1.678-1.815a7.865,7.865,0,0,1,2.457.273c.648.238,1,.186,1.307-.362a3.518,3.518,0,0,1,3.183-1.65,18.824,18.824,0,0,0,4.976-1.283c1.44-.463,1.407-1.833,1.491-2.921s-1.081-.964-1.754-1.025c-2.749-.259-3.819-2.209-4.8-4.387-.729-1.617-2.487-3.947-4.52-3.863" fill="none" stroke="#0054a6" stroke-width="1.2"/>
        </g>
      </g>
      </svg></span> <h5>Domestic Distribution</h5>`,
  ];

  const pagination = {
    el: '.custom-pagination-content',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' + paginationData[index] + '</div>';
    },
  };

  return (
    <div className="homepage">
      <NavSearch />
      <NavBar />
      <Header />
      <Container className="weAre" fluid>
        <Row className="weAre_text align-items-center">
          <Col>
            <svg xmlns="http://www.w3.org/2000/svg" width="58" height="3" viewBox="0 0 58 3">
              <g id="Group_41472" data-name="Group 41472" transform="translate(-691 -995)">
                <path
                  id="Path_86496"
                  data-name="Path 86496"
                  d="M1.5,0H29L26.694,3H1.5a1.5,1.5,0,0,1,0-3Z"
                  transform="translate(691 995)"
                  fill="#0054a6"
                />
                <path
                  id="Path_86497"
                  data-name="Path 86497"
                  d="M27.5,3H0L2.306,0H27.5a1.5,1.5,0,0,1,0,3Z"
                  transform="translate(720 995)"
                  fill="#ffc20e"
                />
              </g>
            </svg>
            <h2 className="homepage_title">
              We Are Built To Say, <q>Yes Delivered</q> to Your Business &amp; Logistics Needs
            </h2>
          </Col>
          <Col>
            <p className="main-p">
              From humble beginnings as the first private Saudi postal company, Zajil Express is now a very large company with global reach and the
              pride of Saudi entrepreneurship. More than 500 corporate clients count on Zajil to keep their goods – and their businesses – in motion
              with streamlined shipping services.
            </p>
          </Col>
        </Row>
        <Row className="weAre_boxes">
          <Col>
            <div className="weAre_boxes-box">
              <div className="icon">
                <img src={world} alt="" />
              </div>
              <h4>Global Capacity</h4>
              <p className="main-p">Offices and distribution centers are strategically located in major economic centers on most continents.</p>
            </div>
          </Col>
          <Col>
            {' '}
            <div className="weAre_boxes-box">
              <div className="icon">
                <img src={box} alt="" />
              </div>
              <h4>Flexibility</h4>
              <p className="main-p">
                Yes, Delivered. Zajil is happy to accommodate business demands from warehousing to door-to-door delivery of any type of freight or
                parcel.
              </p>
            </div>
          </Col>
          <Col>
            {' '}
            <div className="weAre_boxes-box">
              <div className="icon">
                <img src={snap} alt="" />
              </div>
              <h4>Simplicity</h4>
              <p className="main-p">
                From seamless, “account-less” simple shipping to friction-free COD services, Zajil is committed to making shipping and logistics easy.
              </p>
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-center align-items-center mt-6">
          <button type="button" class="button-main  btn btn-primary-solid">
            Learn More
          </button>
        </div>
      </Container>
      <div className="counters primaryGradient">
        <img src={frame} alt="" />
        <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </video>
        <div className="counters-content">
          {' '}
          <h2 className="homepage_title">Yes Delivered</h2>
          <Container>
            <Row>
              <Col className=" d-flex flex-column align-items-center ">
                <p className="count">
                  <CountUp end={7} duration={2.5} easingFn suffix="M">
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={(isVisible) => checkVisibilty(isVisible, start)} delayedCall active={sensor}>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="47.212" height="1.7" viewBox="0 0 47.212 1.7">
                  <path
                    id="Path_86511"
                    data-name="Path 86511"
                    d="M697.018,2173.874h45.512"
                    transform="translate(-696.168 -2173.024)"
                    fill="none"
                    stroke="#ffc20e"
                    stroke-linecap="round"
                    stroke-width="1.7"
                  />
                </svg>
                <small>Active Clients</small>
              </Col>
              <Col className=" d-flex flex-column align-items-center ">
                <p className="count">
                  <CountUp end={396} duration={3.5} easingFn>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={(isVisible) => checkVisibilty(isVisible, start)} delayedCall active={sensor}>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="47.212" height="1.7" viewBox="0 0 47.212 1.7">
                  <path
                    id="Path_86511"
                    data-name="Path 86511"
                    d="M697.018,2173.874h45.512"
                    transform="translate(-696.168 -2173.024)"
                    fill="none"
                    stroke="#ffc20e"
                    stroke-linecap="round"
                    stroke-width="1.7"
                  />
                </svg>
                <small>Courier Vans</small>
              </Col>
              <Col className=" d-flex flex-column align-items-center ">
                <p className="count">
                  <CountUp end={117} duration={3.5} easingFn>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={(isVisible) => checkVisibilty(isVisible, start)} delayedCall active={sensor}>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="47.212" height="1.7" viewBox="0 0 47.212 1.7">
                  <path
                    id="Path_86511"
                    data-name="Path 86511"
                    d="M697.018,2173.874h45.512"
                    transform="translate(-696.168 -2173.024)"
                    fill="none"
                    stroke="#ffc20e"
                    stroke-linecap="round"
                    stroke-width="1.7"
                  />
                </svg>
                <small>KSA Branches</small>
              </Col>
            </Row>
            <Row>
              <Col className=" d-flex flex-column align-items-center ">
                <p className="count">
                  <CountUp end={1055} duration={2.9} easingFn>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={(isVisible) => checkVisibilty(isVisible, start)} delayedCall active={sensor}>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="47.212" height="1.7" viewBox="0 0 47.212 1.7">
                  <path
                    id="Path_86511"
                    data-name="Path 86511"
                    d="M697.018,2173.874h45.512"
                    transform="translate(-696.168 -2173.024)"
                    fill="none"
                    stroke="#ffc20e"
                    stroke-linecap="round"
                    stroke-width="1.7"
                  />
                </svg>
                <small>Zajil Employees</small>
              </Col>
              <Col className=" d-flex flex-column align-items-center ">
                <p className="count">
                  <CountUp end={500} duration={3} easingFn>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={(isVisible) => checkVisibilty(isVisible, start, true)} delayedCall active={sensor}>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="47.212" height="1.7" viewBox="0 0 47.212 1.7">
                  <path
                    id="Path_86511"
                    data-name="Path 86511"
                    d="M697.018,2173.874h45.512"
                    transform="translate(-696.168 -2173.024)"
                    fill="none"
                    stroke="#ffc20e"
                    stroke-linecap="round"
                    stroke-width="1.7"
                  />
                </svg>
                <small>Corporate Clients</small>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="logistics ">
        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="58" height="3" viewBox="0 0 58 3">
            <g id="Group_41472" data-name="Group 41472" transform="translate(-691 -995)">
              <path
                id="Path_86496"
                data-name="Path 86496"
                d="M1.5,0H29L26.694,3H1.5a1.5,1.5,0,0,1,0-3Z"
                transform="translate(691 995)"
                fill="#0054a6"
              />
              <path
                id="Path_86497"
                data-name="Path 86497"
                d="M27.5,3H0L2.306,0H27.5a1.5,1.5,0,0,1,0,3Z"
                transform="translate(720 995)"
                fill="#ffc20e"
              />
            </g>
          </svg>
          <h2 className="homepage_title ">Customize Your Business Logistics</h2>
          <Row className="align-items-center mt-6">
            <Col md={4} className="custom-pagination">
              <img className="curve" src={blueCurve} alt="blueline" />
              <div className="custom-pagination-content d-flex align-items-center flex-column justify-content-center " />
            </Col>
            <Col md={{ span: 7, offset: 1 }}>
              <Swiper
                modules={[EffectFade, Pagination]}
                effect={'fade'}
                slidesPerView={'auto'}
                pagination={pagination}
                className="w-100"
                allowTouchMove={false}
              >
                <SwiperSlide>
                  <>
                    <img src={logistic} alt="" />
                    <div className="content">
                      <h5>Freight</h5>
                      <p>
                        From seamless, “account-less” simple shipping to friction-free COD services, Zajil is committed to making shipping and
                        logistics easy.
                      </p>
                      <button type="button" class="btn btn-text ">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" width="6.266" height="10.41" viewBox="0 0 6.266 10.41">
                          <path
                            id="Path_86498"
                            data-name="Path 86498"
                            d="M470.113,1988.045l4.145,4.145-4.145,4.145"
                            transform="translate(-469.053 -1986.984)"
                            fill="none"
                            stroke="#0054a6"
                            stroke-linecap="round"
                            stroke-width="1.5"
                          />
                        </svg>
                      </button>
                    </div>
                  </>
                </SwiperSlide>
                <SwiperSlide>
                  <>
                    <img src={header2} alt="" />
                    <div className="content">
                      <h5>E-commerce</h5>
                      <p>
                        From seamless, “account-less” simple shipping to friction-free COD services, Zajil is committed to making shipping and
                        logistics easy.
                      </p>
                      <button type="button" class="btn btn-text ">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" width="6.266" height="10.41" viewBox="0 0 6.266 10.41">
                          <path
                            id="Path_86498"
                            data-name="Path 86498"
                            d="M470.113,1988.045l4.145,4.145-4.145,4.145"
                            transform="translate(-469.053 -1986.984)"
                            fill="none"
                            stroke="#0054a6"
                            stroke-linecap="round"
                            stroke-width="1.5"
                          />
                        </svg>
                      </button>
                    </div>
                  </>
                </SwiperSlide>
                <SwiperSlide>
                  <>
                    <img src={logistic} alt="" />
                    <div className="content">
                      <h5>Fulfillment</h5>
                      <p>
                        From seamless, “account-less” simple shipping to friction-free COD services, Zajil is committed to making shipping and
                        logistics easy.
                      </p>
                      <button type="button" class="btn btn-text ">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" width="6.266" height="10.41" viewBox="0 0 6.266 10.41">
                          <path
                            id="Path_86498"
                            data-name="Path 86498"
                            d="M470.113,1988.045l4.145,4.145-4.145,4.145"
                            transform="translate(-469.053 -1986.984)"
                            fill="none"
                            stroke="#0054a6"
                            stroke-linecap="round"
                            stroke-width="1.5"
                          />
                        </svg>
                      </button>
                    </div>
                  </>
                </SwiperSlide>
                <SwiperSlide>
                  <>
                    <img src={header2} alt="" />
                    <div className="content">
                      <h5>Domestic</h5>
                      <p>
                        From seamless, “account-less” simple shipping to friction-free COD services, Zajil is committed to making shipping and
                        logistics easy.
                      </p>
                      <button type="button" class="btn btn-text ">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" width="6.266" height="10.41" viewBox="0 0 6.266 10.41">
                          <path
                            id="Path_86498"
                            data-name="Path 86498"
                            d="M470.113,1988.045l4.145,4.145-4.145,4.145"
                            transform="translate(-469.053 -1986.984)"
                            fill="none"
                            stroke="#0054a6"
                            stroke-linecap="round"
                            stroke-width="1.5"
                          />
                        </svg>
                      </button>
                    </div>
                  </>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </div>
      </div>
      <Container className="" fluid>
        <div className="mid-banner primaryGradient-horizontal" style={{ backgroundImage: `url(${midBanner})` }}>
          <img className="frame" src={frame} alt="" />
          <div className="content">
            <h3>Expand Your Business with Zajil</h3>
            <p>Talk to a KSA shipping and logistics expert at Zajil today.</p>
            <button type="button" class="btn btn-text text-white">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="6.266" height="10.41" viewBox="0 0 6.266 10.41">
                <path
                  id="Path_86498"
                  data-name="Path 86498"
                  d="M470.113,1988.045l4.145,4.145-4.145,4.145"
                  transform="translate(-469.053 -1986.984)"
                  fill="none"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-width="1.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>

      <section className="shipping">
        <Container className="" fluid>
          <Row>
            <Col className="text-center" md={{ span: 8, offset: 2 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="58" height="3" viewBox="0 0 58 3">
                <g id="Group_41472" data-name="Group 41472" transform="translate(-691 -995)">
                  <path
                    id="Path_86496"
                    data-name="Path 86496"
                    d="M1.5,0H29L26.694,3H1.5a1.5,1.5,0,0,1,0-3Z"
                    transform="translate(691 995)"
                    fill="#0054a6"
                  />
                  <path
                    id="Path_86497"
                    data-name="Path 86497"
                    d="M27.5,3H0L2.306,0H27.5a1.5,1.5,0,0,1,0,3Z"
                    transform="translate(720 995)"
                    fill="#ffc20e"
                  />
                </g>
              </svg>
              <h2 className="homepage_title my-4">Shipping Simplified</h2>
              <p className="main-p mb-4">
                Zajil is more than just the preferred partner for KSA businesses. We are committed to deliver an outstanding experience for personal
                shipping, too.
              </p>
              <Row className="boxes">
                <Col className="box" md={4}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="77.823" height="73.202" viewBox="0 0 77.823 73.202">
                    <g id="box" transform="translate(-16.032 1.251)">
                      <g id="Group_41540" data-name="Group 41540" transform="translate(16.032 -0.001)">
                        <g id="Group_41539" data-name="Group 41539" transform="translate(0 0)">
                          <path
                            id="Path_86644"
                            data-name="Path 86644"
                            d="M82.882,15.875,50.213.1A1.054,1.054,0,0,0,49.3.1L16.628,15.875a1.054,1.054,0,0,0-.6.949v38.3a1.054,1.054,0,0,0,.6.949L49.3,71.846a1.054,1.054,0,0,0,.917,0L82.882,56.075a1.054,1.054,0,0,0,.6-.949v-38.3A1.054,1.054,0,0,0,82.882,15.875ZM49.755,2.224,80,16.825l-8.767,4.232a1.045,1.045,0,0,0-.178-.112L41.014,6.443ZM38.634,7.635l30.2,14.579L62.649,25.2,32.461,10.627ZM69.541,24.214V35.252l-5.778,2.789V27ZM81.37,54.465,50.809,69.218V33.257l7.29-3.519a1.054,1.054,0,1,0-.917-1.9l-7.427,3.586-2.922-1.411a1.054,1.054,0,0,0-.917,1.9L48.7,33.257V69.218L18.14,54.464V18.5L41.412,29.738a1.054,1.054,0,0,0,.916-1.9L19.51,16.825,29.98,11.77,61.641,27.054l.015.019V39.721a1.054,1.054,0,0,0,1.512.949l7.886-3.807a1.054,1.054,0,0,0,.6-.949V23.2L81.37,18.5Z"
                            transform="translate(-16.032 0.001)"
                            fill="#0054a6"
                          />
                        </g>
                      </g>
                      <g id="Group_41542" data-name="Group 41542" transform="translate(20.531 47.957)">
                        <g id="Group_41541" data-name="Group 41541" transform="translate(0)">
                          <path
                            id="Path_86645"
                            data-name="Path 86645"
                            d="M54.355,343.681l-4.794-2.314a1.054,1.054,0,0,0-.917,1.9l4.794,2.314a1.054,1.054,0,0,0,.917-1.9Z"
                            transform="translate(-48.048 -341.261)"
                            fill="#ffc20e"
                          />
                        </g>
                      </g>
                      <g id="Group_41544" data-name="Group 41544" transform="translate(20.538 42.958)">
                        <g id="Group_41543" data-name="Group 41543" transform="translate(0)">
                          <path
                            id="Path_86646"
                            data-name="Path 86646"
                            d="M58.808,310.237l-9.2-4.441a1.054,1.054,0,0,0-.916,1.9l9.2,4.441a1.054,1.054,0,0,0,.916-1.9Z"
                            transform="translate(-48.096 -305.69)"
                            fill="#ffc20e"
                          />
                        </g>
                      </g>
                      <g id="Group_41545" data-name="Group 41545" transform="translate(-396.575 -6029.302)">
                        <path
                          id="Path_86647"
                          data-name="Path 86647"
                          d="M-12372.63-6325.793h9.811"
                          transform="translate(12852 12360)"
                          fill="none"
                          stroke="#ffc20e"
                          stroke-linecap="round"
                          stroke-width="2.5"
                        />
                        <path
                          id="Path_86648"
                          data-name="Path 86648"
                          d="M-12372.63-6325.793h9.811"
                          transform="translate(-5841.518 18401.932) rotate(90)"
                          fill="none"
                          stroke="#ffc20e"
                          stroke-linecap="round"
                          stroke-width="2.5"
                        />
                      </g>
                    </g>
                  </svg>
                  <h5>Create Shipment</h5>
                </Col>
                <Col className="box" md={4}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="71.951" height="71.951" viewBox="0 0 71.951 71.951">
                    <g id="location" transform="translate(0 -0.001)">
                      <path
                        id="Path_86649"
                        data-name="Path 86649"
                        d="M71.883,70.524,61.343,42.76a1.054,1.054,0,0,0-.468-.544L49.649,35.891l3.278-5.2a20.026,20.026,0,1,0-33.9,0l3.277,5.2L11.077,42.216a1.054,1.054,0,0,0-.468.544L.069,70.524a1.054,1.054,0,0,0,1.5,1.292l16.943-9.546,16.943,9.546a1.054,1.054,0,0,0,1.035,0l16.943-9.546L70.38,71.817a1.054,1.054,0,0,0,1.5-1.292ZM37.03,54.627a3.153,3.153,0,0,0,1.619-1.3l9.026-14.311,4.57,21.5L37.03,69.095ZM20.81,29.57a17.917,17.917,0,1,1,30.334,0C51,29.793,37.115,51.815,36.873,52.2l-.006.01a1.052,1.052,0,0,1-1.784,0c-.141-.223-14.056-22.29-14.268-22.629l0-.008ZM12.444,43.865l9.825-5.535-1.712,8.053a1.054,1.054,0,1,0,2.062.438l1.658-7.8L33.3,53.334a3.166,3.166,0,0,0,1.62,1.292V69.095L19.707,60.523l2.036-9.578a1.054,1.054,0,0,0-2.062-.438l-2.1,9.87L3.073,68.552ZM54.369,60.376,49.683,38.329l9.825,5.535L68.88,68.552Z"
                        transform="translate(0)"
                        fill="#0054a6"
                      />
                      <path
                        id="Path_86650"
                        data-name="Path 86650"
                        d="M196.688,71.594a11.594,11.594,0,1,0-11.594,11.594A11.607,11.607,0,0,0,196.688,71.594Zm-21.079,0a9.486,9.486,0,1,1,9.486,9.486A9.5,9.5,0,0,1,175.609,71.594Z"
                        transform="translate(-149.119 -51.567)"
                        fill="#ffc20e"
                      />
                      <path
                        id="Path_86651"
                        data-name="Path 86651"
                        d="M218.257,97.378a7.378,7.378,0,1,0-7.378,7.378A7.386,7.386,0,0,0,218.257,97.378Zm-12.648,0a5.27,5.27,0,1,1,5.27,5.27A5.276,5.276,0,0,1,205.609,97.378Z"
                        transform="translate(-174.903 -77.351)"
                        fill="#ffc20e"
                      />
                    </g>
                  </svg>
                  <h5>Find Nearest Branch</h5>
                </Col>
                <Col className="box" md={4}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="65" height="73" viewBox="0 0 65 73">
                    <g id="Group_41550" data-name="Group 41550" transform="translate(-486 -6033)">
                      <g id="Rectangle_2946" data-name="Rectangle 2946" transform="translate(496 6033)" fill="#fff" stroke="#0054a6" stroke-width="2">
                        <rect width="55" height="72" rx="7" stroke="none" />
                        <rect x="1" y="1" width="53" height="70" rx="6" fill="none" />
                      </g>
                      <g
                        id="Rectangle_2947"
                        data-name="Rectangle 2947"
                        transform="translate(505 6043)"
                        fill="#fff"
                        stroke="#ffc20e"
                        stroke-linecap="round"
                        stroke-width="2"
                      >
                        <rect width="37" height="12" rx="1" stroke="none" />
                        <rect x="1" y="1" width="35" height="10" fill="none" />
                      </g>
                      <g
                        id="Rectangle_2948"
                        data-name="Rectangle 2948"
                        transform="translate(505 6060)"
                        fill="#fff"
                        stroke="#0054a6"
                        stroke-width="1.5"
                      >
                        <rect width="8" height="8" rx="1" stroke="none" />
                        <rect x="0.75" y="0.75" width="6.5" height="6.5" rx="0.25" fill="none" />
                      </g>
                      <g
                        id="Rectangle_2952"
                        data-name="Rectangle 2952"
                        transform="translate(505 6073)"
                        fill="#fff"
                        stroke="#0054a6"
                        stroke-width="1.5"
                      >
                        <rect width="8" height="8" rx="1" stroke="none" />
                        <rect x="0.75" y="0.75" width="6.5" height="6.5" rx="0.25" fill="none" />
                      </g>
                      <g
                        id="Rectangle_2955"
                        data-name="Rectangle 2955"
                        transform="translate(505 6086)"
                        fill="#fff"
                        stroke="#0054a6"
                        stroke-width="1.5"
                      >
                        <rect width="8" height="8" rx="1" stroke="none" />
                        <rect x="0.75" y="0.75" width="6.5" height="6.5" rx="0.25" fill="none" />
                      </g>
                      <g
                        id="Rectangle_2949"
                        data-name="Rectangle 2949"
                        transform="translate(534 6060)"
                        fill="#fff"
                        stroke="#0054a6"
                        stroke-width="1.5"
                      >
                        <rect width="8" height="8" rx="1" stroke="none" />
                        <rect x="0.75" y="0.75" width="6.5" height="6.5" rx="0.25" fill="none" />
                      </g>
                      <g
                        id="Rectangle_2953"
                        data-name="Rectangle 2953"
                        transform="translate(534 6073)"
                        fill="#fff"
                        stroke="#0054a6"
                        stroke-width="1.5"
                      >
                        <rect width="8" height="21" rx="1" stroke="none" />
                        <rect x="0.75" y="0.75" width="6.5" height="19.5" rx="0.25" fill="none" />
                      </g>
                      <g
                        id="Rectangle_2950"
                        data-name="Rectangle 2950"
                        transform="translate(520 6060)"
                        fill="#fff"
                        stroke="#0054a6"
                        stroke-width="1.5"
                      >
                        <rect width="8" height="8" rx="1" stroke="none" />
                        <rect x="0.75" y="0.75" width="6.5" height="6.5" rx="0.25" fill="none" />
                      </g>
                      <g
                        id="Rectangle_2951"
                        data-name="Rectangle 2951"
                        transform="translate(520 6073)"
                        fill="#fff"
                        stroke="#0054a6"
                        stroke-width="1.5"
                      >
                        <rect width="8" height="8" rx="1" stroke="none" />
                        <rect x="0.75" y="0.75" width="6.5" height="6.5" rx="0.25" fill="none" />
                      </g>
                      <g
                        id="Rectangle_2954"
                        data-name="Rectangle 2954"
                        transform="translate(520 6086)"
                        fill="#fff"
                        stroke="#0054a6"
                        stroke-width="1.5"
                      >
                        <rect width="8" height="8" rx="1" stroke="none" />
                        <rect x="0.75" y="0.75" width="6.5" height="6.5" rx="0.25" fill="none" />
                      </g>
                      <g id="Ellipse_2499" data-name="Ellipse 2499" transform="translate(486 6075)" fill="#fff" stroke="#0054a6" stroke-width="2">
                        <circle cx="15.5" cy="15.5" r="15.5" stroke="none" />
                        <circle cx="15.5" cy="15.5" r="14.5" fill="none" />
                      </g>
                      <g id="Group_41550-2" data-name="Group 41550" transform="translate(0 1)">
                        <path
                          id="Path_86652"
                          data-name="Path 86652"
                          d="M506.4,6083.5l-8.176,13.236"
                          transform="translate(-0.811 -0.118)"
                          fill="none"
                          stroke="#ffc20e"
                          stroke-linecap="round"
                          stroke-width="2"
                        />
                        <g id="Ellipse_2500" data-name="Ellipse 2500" transform="translate(502 6092)" fill="#fff" stroke="#ffc20e" stroke-width="1.5">
                          <circle cx="3.5" cy="3.5" r="3.5" stroke="none" />
                          <circle cx="3.5" cy="3.5" r="2.75" fill="none" />
                        </g>
                        <g id="Ellipse_2501" data-name="Ellipse 2501" transform="translate(494 6081)" fill="#fff" stroke="#ffc20e" stroke-width="1.5">
                          <circle cx="3.5" cy="3.5" r="3.5" stroke="none" />
                          <circle cx="3.5" cy="3.5" r="2.75" fill="none" />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <h5>Price Calculator</h5>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="news">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between">
            <h2 className="homepage_title oneLine me-2 ">Zajil News</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="90%" height="2" viewBox="0 0 1066.086 2">
              <g id="Component_26_1" data-name="Component 26 – 1" transform="translate(1 1)">
                <path
                  id="Path_344"
                  data-name="Path 344"
                  d="M3126.333,2542h532.045"
                  transform="translate(-3126.333 -2542)"
                  fill="none"
                  stroke="#0054a6"
                  stroke-linecap="round"
                  stroke-width="2"
                />
                <path
                  id="Path_86594"
                  data-name="Path 86594"
                  d="M3126.333,2542h528.275"
                  transform="translate(-2590.523 -2542)"
                  fill="none"
                  stroke="#ffc20e"
                  stroke-linecap="round"
                  stroke-width="2"
                />
              </g>
            </svg>
          </div>
          <Row className="mt-5">
            <Col className="news_single" md={6}>
              <Card className=" border-0">
                <Card.Img variant="top" src={news} />
                <Card.Body className="px-0">
                  <p className="text14 main-p">8 June 2020</p>
                  <Card.Title className="primary-title mb-2">Zajil Investment</Card.Title>
                  <Card.Text className="main-p mb-4 text20 w-75">Zajil announces major investment in global shipping network capacity.</Card.Text>
                  <button type="button" class="btn btn-text fw-normal">
                    read More
                    <svg xmlns="http://www.w3.org/2000/svg" width="6.266" height="10.41" viewBox="0 0 6.266 10.41">
                      <path
                        id="Path_86498"
                        data-name="Path 86498"
                        d="M470.113,1988.045l4.145,4.145-4.145,4.145"
                        transform="translate(-469.053 -1986.984)"
                        fill="none"
                        stroke="#0054A6"
                        stroke-linecap="round"
                        stroke-width="1.5"
                      />
                    </svg>
                  </button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="news_others" md={6}>
              <Card className="w-100 border-0 mb-4">
                <Card.Body className="p-0">
                  <p className="text14 main-p">8 June 2020</p>
                  <Card.Title className="primary-title mb-2">Zajil Care</Card.Title>
                  <Card.Text className="main-p mb-4 text20 w-75 max-2-lines">
                    Zajil CARE, a commitment to business values that highlight KSA competitive Zajil CARE, a commitment to business values that
                    highlight KSA competitive
                  </Card.Text>
                  <button type="button" class="btn btn-text fw-normal">
                    read More
                    <svg xmlns="http://www.w3.org/2000/svg" width="6.266" height="10.41" viewBox="0 0 6.266 10.41">
                      <path
                        id="Path_86498"
                        data-name="Path 86498"
                        d="M470.113,1988.045l4.145,4.145-4.145,4.145"
                        transform="translate(-469.053 -1986.984)"
                        fill="none"
                        stroke="#0054A6"
                        stroke-linecap="round"
                        stroke-width="1.5"
                      />
                    </svg>
                  </button>
                </Card.Body>
                <Card.Img variant="right" src={news1} />
              </Card>
              <Card className="w-100 border-0 mb-4">
                <Card.Body className="px-0">
                  <p className="text14 main-p">8 June 2020</p>
                  <Card.Title className="primary-title mb-2">Zajil App</Card.Title>
                  <Card.Text className="main-p mb-4 text20 w-75 max-2-lines">
                    Zajil mobile app to simplify user experience in managing global shipping Zajil mobile app to simplify user experience in managing
                    global shipping
                  </Card.Text>
                  <button type="button" class="btn btn-text fw-normal">
                    read More
                    <svg xmlns="http://www.w3.org/2000/svg" width="6.266" height="10.41" viewBox="0 0 6.266 10.41">
                      <path
                        id="Path_86498"
                        data-name="Path 86498"
                        d="M470.113,1988.045l4.145,4.145-4.145,4.145"
                        transform="translate(-469.053 -1986.984)"
                        fill="none"
                        stroke="#0054A6"
                        stroke-linecap="round"
                        stroke-width="1.5"
                      />
                    </svg>
                  </button>
                </Card.Body>
                <Card.Img variant="right" src={news2} />
              </Card>
              <Card className="w-100 border-0 mb-4">
                <Card.Body className="px-0">
                  <p className="text14 main-p">8 June 2020</p>
                  <Card.Title className="primary-title mb-2">Zajil App</Card.Title>
                  <Card.Text className="main-p mb-4 text20 w-75 max-2-lines">
                    Zajil mobile app to simplify user experience in managing global shipping Zajil mobile app to simplify user experience in managing
                    global shipping
                  </Card.Text>
                  <button type="button" class="btn btn-text fw-normal">
                    read More
                    <svg xmlns="http://www.w3.org/2000/svg" width="6.266" height="10.41" viewBox="0 0 6.266 10.41">
                      <path
                        id="Path_86498"
                        data-name="Path 86498"
                        d="M470.113,1988.045l4.145,4.145-4.145,4.145"
                        transform="translate(-469.053 -1986.984)"
                        fill="none"
                        stroke="#0054A6"
                        stroke-linecap="round"
                        stroke-width="1.5"
                      />
                    </svg>
                  </button>
                </Card.Body>
                <Card.Img variant="right" src={news3} />
              </Card>
            </Col>
            <div className="d-flex justify-content-center align-items-center mt-6">
              <button type="button" class="button-main  btn btn-primary-solid">
                View All
              </button>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
