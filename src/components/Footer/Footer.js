import React from 'react';
import { icons } from 'react-icons';
import '../Footer/Footer.css';
import {FaLocationArrow, FaPhone, FaSearchLocation} from "react-icons/fa";



export const Footer = () => {
  return <div className='maincontainer'>
      <div className='CompanyInfo'>
          <strong>Company Info</strong>
          <div><a>About Us</a></div>
          <div><a> Carrier</a></div>
          <div><a>We are hiring</a></div>
          <div><a>Blog</a></div>
      </div>
      <div className='Legal'>
          <strong>Legal</strong>
          <div><a>About Us</a></div>
          <div><a> Carrier</a></div>
          <div><a>We are hiring</a></div>
          <div><a>Blog</a></div>
      </div>
      <div className='Features'>
          <strong>Features</strong>
          <div><a>Business Marketing</a></div>
          <div><a> User Analytics</a></div>
          <div><a>Live Chat</a></div>
          <div><a>Unlimited Support</a></div>
      </div>
      <div className='Resources'>
          <strong>Resources</strong>
          <div><a>IOS & Android</a></div>
          <div><a> Watch a Demo</a></div>
          <div><a> Customer</a></div>
          <div><a>API</a></div>
      </div>
      <div>
          <div>Get in Touch</div>
         <FaPhone/>
        
      </div>

  </div>;
};
