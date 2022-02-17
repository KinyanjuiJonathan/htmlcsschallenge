import React from 'react';
import Image1 from '../images/user1.png';
import Image2 from '../images/user2.png';
import Image3 from '../images/user3.png';
import Vector from '../images/Vector.png';
import Vector1 from '../images/Vector1.png';
import Vector2 from '../images/Vector2.png';
import Vector3 from '../images/Vector3.png';
import Vector4 from '../images/Vector4.png';
import Vector5 from '../images/Vector5.png';
import './Product.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

export default function Product() {
  return <div className='ratecardscontainer'>
      <div className='ratecards'>
          <div className='firstrate'>
             <img src={Image1}></img>
             <p>slate helps you see how many days you need to work to reach your financial goal for the month and year.</p>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
          </div>
            <div className='secondrate'>
             <img src={Image2}></img>
             <p>slate helps you see how many days you need to work to reach your financial goal for the month and year.</p>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
            </div>
            <div className='thirdrate'>
             <img src={Image3}></img>
             <p>slate helps you see how many days you need to work to reach your financial goal for the month and year.</p>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
            </div>
        </div>
        <div className='ratecardpics'>
            <img src={Vector}></img>
            <img src={Vector1}></img>
            <img src={Vector2}></img>
            <img src={Vector3}></img>
            <img src={Vector4}></img>
            <img src={Vector5}></img>
        </div>
        <div className='Subscribe'>
            <div className='SubscribeLeft'>
                <p>Subscribe for the latest Newsletter</p>
            </div>
            <div className='SubscribeRight'>
                <input></input>
                <button>Subscribe</button>
            </div>
        </div>
  </div>
  
}
