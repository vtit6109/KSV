import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import logo from '../../assets/logo.svg';
import navItems from '../../assets/data/navItems';
import Dropdown from '../../shared/Dropdown';

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

const Header = () => {
  const headerRef = useRef();

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener('scroll', stickyHeaderFunc);
  });

  return (
    <header id='header' ref={headerRef}>
      <div className='container h-full'>
        <div className=' flex items-center justify-between h-full'>
          <Link to='/'>
            <img src={logo} alt='' className=' w-[296px]' />
          </Link>

          <Nav />

          <div className=' flex items-center text-white font-bold'>
            <Dropdown content={items}>Languages</Dropdown>

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

const Nav = () => {
  return (
    <nav>
      <ul className='nav'>
        {navItems.map((item, index) => (
          <li key={index} className='nav__item'>
            <a href={item.href}>{item.label}</a>
            <span></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
