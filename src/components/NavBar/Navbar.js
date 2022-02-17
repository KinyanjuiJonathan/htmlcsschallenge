import React from 'react';
import "./Navbar.css"

export const Navbar = () => {
  return <div className='NavContainer'>
      <div className='NavFirst'> <h1>BrandName</h1></div>
      <div className='NavSecond'>
          <btn>Home</btn>
          <btn>product</btn>
          <btn>contact</btn>
      </div>
      <div className='NavThird'>
          <btn>login</btn>
          <btn className='bluebtn'>Become a Member</btn>
      </div>
  </div>;
};
