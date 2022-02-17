import React from 'react';
import "./Pricing.css"

export const Pricing = () => {
  return <div className='PricingContainer'>
      <div className='topHead'>
          <h1>pricing</h1>
          <p>Problems trying to resolve the conflict between the two major realms of classical physics: Newtonian mechanics </p>
         
      </div>
      <div className='lowerclass'>
          <div className='Free'>
              <h1>Free</h1>
              <p> organize across all apps by hand</p>
              <h1>0 </h1>
              <div className='checkingBox'>
                    <input type="checkbox" value="" name="product update" /> Unlimited product updates 
                    <input type="checkbox" value="" name="product update" /> Unlimited product updates
                    <input type="checkbox" value="" name="product update" /> Unlimited product updates
                    <input type="checkbox" value="" name="product update" /> 1GB Cloud storage
                    <input type="checkbox" value="" name="product update" /> Email and community support
                </div>
              <button className='bluebutton'>Try for Free</button>
          </div>
          <div className='Standard'>
             <h1>Standard</h1>
              <p>organize across all apps by hand </p>
              <div className='checkingBox'>
                    <input type="checkbox" value="" name="product update" /> Unlimited product updates 
                    <input type="checkbox" value="" name="product update" /> Unlimited product updates
                    <input type="checkbox" value="" name="product update" /> Unlimited product updates
                    <input type="checkbox" value="" name="product update" /> 1GB Cloud storage
                    <input type="checkbox" value="" name="product update" /> Email and community support
                </div>
              <button className='bluebutton'>Try for Free</button>

          </div>
          <div className='Premium'>
              <h1>Premium</h1>
              <p>Organize across all apps by hand</p>
              <div className='checkingBox'>
                    <input type="checkbox" value="" name="product update" /> Unlimited product updates 
                    <input type="checkbox" value="" name="product update" /> Unlimited product updates
                    <input type="checkbox" value="" name="product update" /> Unlimited product updates
                    <input type="checkbox" value="" name="product update" /> 1GB Cloud storage
                    <input type="checkbox" value="" name="product update" /> Email and community support
                </div>
              <button className='bluebutton'>Try for Free</button>
              

          </div>

      </div>
  </div>;
};
