import React, { useRef } from 'react';
import { FaCaretDown } from 'react-icons/fa6';
import './languagesBox.css';

const LanguagesBox = () => {
  const languagesBoxRef = useRef();
  const iconRef = useRef();

  const showLanguagesBox = () => {
    languagesBoxRef.current?.classList.toggle('show');
    iconRef.current?.classList.toggle('rotate-180');
  };

  return (
    <div
      className='flex items-center cursor-pointer relative select-none'
      onClick={showLanguagesBox}
    >
      <p className='pr-0.5'>Languages</p>
      <span ref={iconRef} className='transition-all'>
        <FaCaretDown />
      </span>
      <div ref={languagesBoxRef} className='language-box'>
        <div className='active'>
          <p>Tiếng Việt</p>
        </div>
        <div className=' cursor-not-allowed'>
          <p>English</p>
        </div>
      </div>
    </div>
  );
};

export default LanguagesBox;
