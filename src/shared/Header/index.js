import React from 'react';
import { Button } from 'react-bootstrap';
import './styles.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper';
import slide1 from '../../assets/images/header.png';
import slide2 from '../../assets/images/header2.png';
import slide3 from '../../assets/images/header3.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

function Header() {
  return (
    <div className="header">
      <Swiper
        speed={1000}
        // loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: true,
        // }}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <div
            className="header_slide  primaryGradient  d-flex flex-column align-items-center justify-content-center "
            style={{
              backgroundImage: `url(${slide1})`,
            }}
          >
            <div className="header_slide-content  text-white text-center">
              <h2>Affordable, Simplified Shipping and Logistics From Zajil</h2>
              <p className="text-white">Discover what our Saudi integrity and global capacity can do for your bottom line</p>
              <Button className="button-main ">Manage Shipment</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="header_slide  primaryGradient d-flex flex-column align-items-center justify-content-center "
            style={{
              backgroundImage: `url(${slide2})`,
            }}
          >
            <div className="header_slide-content  text-white text-center">
              <h2>Affordable, Simplified Shipping and Logistics From Zajil</h2>
              <p className="text-white">Discover what our Saudi integrity and global capacity can do for your bottom line</p>
              <Button className="button-main ">Manage Shipment</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="header_slide  primaryGradient d-flex flex-column align-items-center justify-content-center "
            style={{
              backgroundImage: `url(${slide3})`,
            }}
          >
            <div className="header_slide-content  text-white text-center">
              <h2>Affordable, Simplified Shipping and Logistics From Zajil</h2>
              <p className="text-white">Discover what our Saudi integrity and global capacity can do for your bottom line</p>
              <Button className="button-main ">Manage Shipment</Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Header;
