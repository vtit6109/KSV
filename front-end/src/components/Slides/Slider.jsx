import React, { useRef } from 'react';
import { Carousel, ConfigProvider } from 'antd';

import slider1 from '../../assets/img/slides/slider1.jpg';
import slider2 from '../../assets/img/slides/slider2.jpg';
import slider3 from '../../assets/img/slides/slider3.jpg';
import slider4 from '../../assets/img/slides/slider4.jpg';
import slider5 from '../../assets/img/slides/slider5.jpg';

import logo from '../../assets/kenstoneLogo.svg';
import './slider.css';

const Slider = () => {
  // Dùng cho next and prev button -->
  const carouselRef = useRef();
  const handleNext = () => carouselRef.current.next();
  const handlePrev = () => carouselRef.current.prev();
  // <--

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dotPosition: 'right',
    pauseOnHover: false,
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            dotWidth: 12,
            dotHeight: 12,
            dotActiveWidth: 26,
          },
        },
      }}
    >
      <Carousel ref={carouselRef} {...settings}>
        <SliderItem imgUrl={slider1} />
        <SliderItem imgUrl={slider2} />
        <SliderItem imgUrl={slider3} />
        <SliderItem imgUrl={slider4} />
        <SliderItem imgUrl={slider5} />
      </Carousel>
    </ConfigProvider>
  );
};

const SliderItem = ({ imgUrl }) => {
  return (
    <div className='slider__item h-screen relative'>
      <img className=' bg-contain' src={imgUrl} alt='' />
      <div className=' absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <p className='text-white text-[60px]'>Chào mừng đến với</p>
        <img src={logo} className=' mt-9 mb-4 w-[500px]' alt='' />
      </div>
    </div>
  );
};

export default Slider;
