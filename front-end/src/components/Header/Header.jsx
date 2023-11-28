import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo.svg';
import { FaAngleDown } from 'react-icons/fa6';

const nav_items = [
  {
    label: 'Trang chủ',
    href: '/',
  },
  {
    label: 'Dịch vụ',
    href: '/services',
  },
  {
    label: 'Về chúng tôi',
    href: '/about',
  },
  {
    label: 'Hoạt động',
    href: '/activities',
  },
  {
    label: 'Địa chỉ',
    href: '/locations',
  },
  {
    label: 'Blog',
    href: '/blog',
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

          <nav>
            <ul className='nav flex items-center gap-5'>
              {nav_items.map((item, index) => (
                <li key={index}>
                  <NavLink to={item.href}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className=' flex items-center text-white font-bold'>
            <p className=' cursor-pointer'>Languages</p>
            <FaAngleDown />
            <div className=' ml-[10px] px-[9px] py-3 border-2 rounded-[250px]'>
              Tuyển dụng
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
