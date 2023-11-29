import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo.svg';
import { FaAngleDown } from 'react-icons/fa6';

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
    href: '#footer',
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
            <div className=' ml-[10px] px-[9px] py-3 border-2 rounded-[250px]'>
              <Link to='/careers'>Tuyển dụng</Link>
            </div>
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
        <p key={index}>
          <a href={item.href}>
            {item.label}
            <span></span>
          </a>
        </p>
      ))}
      <p>
        <Link to='/blog'>
          Blog
          <span></span>
        </Link>
      </p>
    </nav>
  );
};

const LanguagesBox = () => {
  const languagesBoxRef = useRef();

  const showLanguagesBox = () => {
    languagesBoxRef.current?.classList.toggle('opacity-100');
  };

  return (
    <div
      className='flex items-center cursor-pointer relative'
      onClick={showLanguagesBox}
    >
      <p>Languages</p>
      <FaAngleDown />
      <div ref={languagesBoxRef} className='language-box'>
        <div>
          <p className='active'>Việt Nam</p>
        </div>
        <div className=' cursor-not-allowed'>
          <p>English</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
