import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import logo from '../../assets/logo.svg';
import LanguagesBox from '../LanguagesBox/LanguagesBox';

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

const Header = () => {
  return (
    <header className=' bg-primary-blue h-20'>
      <div className='container h-full'>
        <div className=' flex items-center justify-between h-full'>
          <Link to='/'>
            <img src={logo} alt='' className=' w-[296px]' />
          </Link>

          <Nav items={nav_items} />

          <div className=' flex items-center text-white font-bold'>
            <LanguagesBox />

            <Link
              to='/careers'
              className=' ml-2.5 px-2 py-3 border-2 rounded-[250px] block hover:bg-cyan-600 transition-all'
            >
              Tuyển dụng
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const Nav = ({ items }) => {
  return (
    <nav className='nav'>
      {items.map((item, index) => (
        <div key={index} className='nav__item'>
          <a href={item.href}>{item.label}</a>
          <span></span>
        </div>
      ))}
      <div className='nav__item'>
        <Link to='/blog'>Blog</Link>
        <span></span>
      </div>
    </nav>
  );
};

export default Header;
