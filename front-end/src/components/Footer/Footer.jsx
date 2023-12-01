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
    <footer id='footer' className=' bg-[#353B3F] h-96'>
      <div className='container'>
        <section className='footer__top '>
          <div>
            <Link to='/'>
              <img src={logo} alt='' className=' w-[200px]' />
            </Link>
            <p>Kenstone metal Co., Ltd.</p>
          </div>
          <Nav />
          <LanguagesBox />
        </section>

        <div className='divider'></div>

        <section className='footer__bottom'>
          <Contact />
        </section>
      </div>
    </footer>
  );
};

const Nav = () => {
  return (
    <nav>
      <ul className='flex flex-wrap font-bold gap-2'>
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
    <>
      <div className='contact '>
        <div className='contact__group'>
          <i>
            <FaLocationDot />
          </i>
          <p>
            <b>TAIWAN | HEADQUARTER </b>
            <br />
            Kenstone metal Co., Ltd. <br />
            9, Road 5, Taichung lnd. Park, 407 Taichung, Taiwan <br /> TEL
            +886-4-2359 3591 FAX +886-4-2359 3589
          </p>
        </div>
        <div className='contact__group'>
          <i>
            <FaLocationDot />
          </i>
          <p>
            <b>VIỆT NAM</b>
            <br />
            Kenstone Việt Nam <br />
            Nhà máy Số 2, Số 30, Đường N2, KCN Nhơn Trạch 3, Xã Long Thọ, Huyện
            Nhơn Trạch, Tỉnh Dồng Nai, Việt Nam <br /> TEL: (+84) 2512-860-850
          </p>
        </div>
        <div className='contact__group '>
          <i>
            <FaEnvelope />
          </i>
          <a href='mailto:Kenstone@kenstone.com.tw'>Kenstone@kenstone.com.tw</a>
        </div>
        <div className='contact__group '>
          <i>
            <FaSquareFacebook />
          </i>
          <a href='https://www.facebook.com/?locale=vi_VN' target='_blank'>
            Theo dõi chúng tôi
          </a>
        </div>
      </div>

      <div className='copyright flex justify-end mt-4'>
        <span className='text-white text-sm '>
          <p>
            Copyright © 2020 KENSTONE Metal Co., Ltd. Inc. All rights reserved
          </p>
          <a href='#'>Data privacy statement</a> | <a href='#'>Imprint</a>
        </span>
      </div>
    </>
  );
};

export default Footer;
