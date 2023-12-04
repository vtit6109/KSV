import React from 'react';
import { Link } from 'react-router-dom';
import { FaLocationDot, FaEnvelope, FaSquareFacebook } from 'react-icons/fa6';

import logo from '../../assets/kenstoneLogo.svg';
import Dropdown from '../../shared/Dropdown.jsx';
import './footer.css';
import navItems from '../../assets/data/navItems.js';

const items = [
  {
    key: 1,
    label: 'Tiếng Việt',
  },
  {
    key: 2,
    label: 'English',
    disabled: true,
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
          </div>

          <Nav />

          <Dropdown content={items}>Languages</Dropdown>
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
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.label}</a>
            <span></span>
          </li>
        ))}
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
            9, Road 5, Taichung lnd. Park, 407 Taichung, Taiwan <br />
            TEL +886-4-2359 3591 FAX +886-4-2359 3589 <br />
            <a
              href='https://www.kenstone.com.tw/web/home/'
              target='_blank'
              className=' hover:underline'
            >
              Home Page
            </a>
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
            Nhơn Trạch, Tỉnh Dồng Nai, Việt Nam <br />
            TEL: (+84) 2512-860-850
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
