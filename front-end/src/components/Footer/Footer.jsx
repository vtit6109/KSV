import React from 'react';
import { Link } from 'react-router-dom';

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
    <footer id='footer' className=' bg-[#353B3F] h-[300px]'>
      <div className='container'>
        <section className='pt-[50px] pb-3 flex justify-between text-white border-b'>
          <div>
            <Link to='/'>
              <img src={logo} alt='' className=' w-[200px]' />
            </Link>
            <p>Kenstone metal Co., Ltd.</p>
          </div>
          <div>
            <Nav />
          </div>
          <div>
            <LanguagesBox />
          </div>
        </section>
      </div>
    </footer>
  );
};

const Nav = () => {
  return (
    <nav className=' flex flex-wrap font-bold'>
      <div>
        <Link to='/'>Trang chủ</Link>
      </div>
      {nav_items.map((item, index) => (
        <div key={index}>
          <a href={item.href}>{item.label}</a>
          <span></span>
        </div>
      ))}
      <div>
        <Link to='/blog'>Blog</Link>
        <span></span>
      </div>
    </nav>
  );
};

export default Footer;
