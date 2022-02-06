import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper';
import slide1 from '../../assets/images/header.png';
import slide2 from '../../assets/images/header2.png';
import slide3 from '../../assets/images/header3.png';
import shape from '../../assets/images/frame.png';

import 'swiper/css/pagination';
import 'swiper/css';
import './styles.scss';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
SwiperCore.use([Autoplay]);

function Header() {
  const pagination = {
    el: '.header_custom-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"></div>';
    },
  };

  return (
    <div className="header">
      <div className="header_custom-pagination"></div>
      <Swiper
        pagination={pagination}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
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
        modules={[EffectCreative, Pagination]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <div
            className="header_slide  primaryGradient  d-flex flex-column align-items-center justify-content-center "
            style={{
              backgroundImage: `url(${slide1})`,
            }}
          >
            <img src={shape} alt="shape" className="shape shape1" />
            <img src={shape} alt="shape" className="shape shape2" />
            <div className="header_slide-content  text-white text-center">
              <h2>Affordable, Simplified Shipping and Logistics From Zajil</h2>
              <p className="text-white">Discover what our Saudi integrity and global capacity can do for your bottom line</p>
              <button type="button" class="text18 fw-normal  btn btn-secondery-outline">
                Learn More
              </button>
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
            <img src={shape} alt="shape" className="shape shape1" />
            <img src={shape} alt="shape" className="shape shape2" />
            <div className="header_slide-content  text-white text-center">
              <h2>Affordable, Simplified Shipping and Logistics From Zajil</h2>
              <p className="text-white">Discover what our Saudi integrity and global capacity can do for your bottom line</p>
              <button type="button" class="text18 fw-normal  btn btn-secondery-outline">
                Learn More
              </button>
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
            <img src={shape} alt="shape" className="shape shape1" />
            <img src={shape} alt="shape" className="shape shape2" />
            <div className="header_slide-content  text-white text-center">
              <h2>Affordable, Simplified Shipping and Logistics From Zajil</h2>
              <p className="text-white">Discover what our Saudi integrity and global capacity can do for your bottom line</p>
              <button type="button" class="text18 fw-normal  btn btn-secondery-outline">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Header;
