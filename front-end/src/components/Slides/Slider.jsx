import { useRef } from 'react';
import { Carousel, ConfigProvider } from 'antd';
import slider1 from '../../assets/img/slides/slider1.jpg';
import slider2 from '../../assets/img/slides/slider2.jpg';
import slider3 from '../../assets/img/slides/slider3.jpg';
import slider4 from '../../assets/img/slides/slider4.jpg';
import slider5 from '../../assets/img/slides/slider5.jpg';

import logo from '../../assets/kenstoneLogo.svg';
import './slider.css';

const sliderItem = [
  {
    imgUrl: slider1,
    label: 'Về chúng tôi',
    href: '#about',
  },
  {
    imgUrl: slider2,
    label: 'Dịch vụ',
    href: 'https://www.kenstone.com.tw/web/services/',
  },
  {
    imgUrl: slider3,
    label: 'Hoạt động',
    href: '#activities',
  },
  {
    imgUrl: slider4,
    label: 'Địa chỉ',
    href: '#locations',
  },
  {
    imgUrl: slider5,
    label: 'Blog',
    href: '#blog',
  },
];

const Slider = () => {
  // Dùng cho next and prev button -->
  const carouselRef = useRef();
  // const handleNext = () => carouselRef.current.next();
  // const handlePrev = () => carouselRef.current.prev();
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
        {sliderItem.map((s, i) => (
          <SliderItem key={i} imgUrl={s.imgUrl} label={s.label} href={s.href} />
        ))}
      </Carousel>
    </ConfigProvider>
  );
};

const SliderItem = ({ imgUrl, label, href }) => {
  return (
    <div style={{ backgroundImage: `url(${imgUrl})` }} className='slider__item'>
      <div className=' absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <p className='text-[60px]'>Chào mừng đến với</p>
        <img src={logo} className=' my-4 w-[500px]' alt='' />
        <button>
          <a
            href={href}
            className='w-48 h-12 block bg-white rounded-lg text-primary-blue text-2xl font-semibold leading-[48px]'
          >
            {label}
          </a>
        </button>
      </div>
    </div>
  );
};

export default Slider;
