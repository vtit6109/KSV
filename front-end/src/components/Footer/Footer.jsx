import React from 'react';
import { Link } from 'react-router-dom';
import { FaLocationDot, FaEnvelope, FaSquareFacebook } from 'react-icons/fa6';

import logo from '../../assets/logo.svg';
import LanguagesBox from '../LanguagesBox/LanguagesBox';
import './footer.css';

const nav_items = [
  {
    label: 'Về chúng tôi',
    href: '#about',
  },
  {
    label: 'Dịch vụ',
    href: '#services',
  },
  {
    label: 'Hoạt động',
    href: '#activities',
  },
  {
    label: 'Địa chỉ',
    href: '#locations',
  },
];

const Footer = () => {
  return (
    <footer id='footer' className=' bg-[#353B3F] h-80'>
      <div className='container'>
        <section className=' pt-10 pb-3 flex justify-between text-white border-b items-start'>
          <div>
            <Link to='/'>
              <img src={logo} alt='' className=' w-[200px]' />
            </Link>
            <p>Kenstone metal Co., Ltd.</p>
          </div>
          <Nav />
          <LanguagesBox />
        </section>

        <section>
          <Contact />
        </section>

        <section className='flex justify-end'>
          <div className='text-white mt-3'>
            Copyright © 2020 KENSTONE Metal Co., Ltd. Inc. All rights reserved{' '}
            <br />
            <a href='#'>Data privacy statement</a> | <a href='#'>Imprint</a>
          </div>
        </section>
      </div>
    </footer>
  );
};

const Nav = () => {
  return (
    <nav>
      <ul className='flex flex-wrap font-bold'>
        <li>
          <Link to='/'>Trang chủ</Link>
        </li>
        {nav_items.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.label}</a>
            <span></span>
          </li>
        ))}
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

const Contact = () => {
  return (
    <div className='contact '>
      <div className='contact__group'>
        <span>
          <FaLocationDot />
        </span>
        <div>
          <h4 className=' text-primary-blue font-semibold'>
            TAIWAN | HEADQUARTER
          </h4>
          <p>
            Kenstone metal Co., <br /> Ltd. 9, Road 5, Taichung lnd. Park, 407
            Taichung, Taiwan TEL +886-4-2359 3591 FAX +886-4-2359 3589
          </p>
        </div>
      </div>
      <div className='contact__group'>
        <span>
          <FaLocationDot />
        </span>
        <div>
          <h4 className=' text-primary-blue font-semibold'>VIỆT NAM</h4>
          <p>
            Kenstone Việt Nam <br />
            Nhà máy Số 2, Số 30, Đường N2, KCN Nhơn Trạch 3, Xã Long Thọ, Huyện
            Nhơn Trạch, Tỉnh Dồng Nai, Việt Nam TEL: (+84) 2512-860-850
          </p>
        </div>
      </div>
      <div className='contact__group '>
        <span>
          <FaEnvelope />
        </span>
        <a
          href='mailto:Kenstone@kenstone.com.tw'
          className=' text-primary-blue font-semibold'
        >
          Kenstone@kenstone.com.tw
        </a>
      </div>
      <div className='contact__group '>
        <span>
          <FaSquareFacebook />
        </span>
        <a
          href='https://www.facebook.com/?locale=vi_VN'
          target='_blank'
          className=' text-primary-blue font-semibold'
        >
          Theo dõi chúng tôi
        </a>
      </div>
    </div>
  );
};

export default Footer;
