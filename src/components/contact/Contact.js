import React from 'react';
import './Contact.css';
import Image from '../images/pngwing.png'
import ContactCover from '../images/contact-cover.png'
import Form from './Form/Form';

export const Contact = () => {
  return <div>
<div className='contactTop'>
    <div className='LeftContact'>
        <h1> We Have Branches All Over The World</h1>
        <p>the gradual accumulation about atomic and small-scale behaviour during the first quarter of the 20th century, which gave some indication about small things dobehave , produced an incrasing confusion which was Heisenberg, and Born  </p>
    </div>
    <div className='rightContact'>
        <img src={Image}></img>

    </div>
 </div>
    <div className='BookAppointment'>
        <div className='leftContactPic'>
        <img src={ContactCover}></img>
        </div>
        <div className='AppointmentForm'>
          <Form/>
        </div>
    </div>
  </div>;
};
