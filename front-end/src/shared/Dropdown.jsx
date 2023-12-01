import React, { useRef } from 'react';
import { FaCaretDown } from 'react-icons/fa6';
import PropTypes from 'prop-types';
import '../style/dropdown.css';

const Dropdown = ({ content, children }) => {
  const dropdownRef = useRef();
  const iconRef = useRef();

  const showDropdown = () => {
    dropdownRef.current?.classList.toggle('show');
    iconRef.current?.classList.toggle('rotate-180');
  };

  return (
    <div
      className='flex items-center cursor-pointer relative select-none'
      onClick={showDropdown}
    >
      <p className='pr-0.5'>{children}</p>
      <span ref={iconRef} className='transition-all'>
        <FaCaretDown />
      </span>
      <div ref={dropdownRef} className='dropdown-box'>
        {content.map((c) => (
          <button key={c.key} disabled={c?.disabled}>
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  content: PropTypes.array,
  children: PropTypes.string,
};

export default Dropdown;
