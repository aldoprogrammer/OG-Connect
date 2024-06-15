// src/components/Logo.js
import React from 'react';
import logoSrc from '../assets/logo.png';

const Logo = () => {
  return (
    <div>
      <img src={logoSrc} altText="OG Connect Logo" className='w-[130px] h-[130px]'  />
    </div>
  );
};

export default Logo;
