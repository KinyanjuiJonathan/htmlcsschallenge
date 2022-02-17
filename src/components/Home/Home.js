import React from 'react';
import "../Home/Home.css"
import Icon from '../images/icons1.png'

const Home = () => {
  return (
  <div className='Container'>
          <div className='Header'>  <h1>We Ensure a Best Insurance Service</h1></div>
            <div className='HeaderText'><p>We know how large objects will act, but things on a small scale just do not act the way. </p></div>
        <div className='Buttons'>
            <button className='bluebtn'> Get Quote Now</button>
            <button>Learn More</button>
        </div>
      
        <div className='Home_cards'>
                <div className='first'> 
                    {/* <img src={Icon}> </img> */}
                    <h1>Peace of Mind</h1>
                    <p>The quick brown fox jumped over the lazy dog</p>
                </div>
                <div className='second'>
                    <h1>set for life</h1>
                    <p>The quick brown fox jumped over the lazy dog</p>
                </div>
                <div className='third'>
                    <h1>100% satisfaction</h1>
                    <p>The quick brown fox jumped over the lazy dog</p>
                </div> 
             
        </div>
        <div className='rowcards'>
            <div className='firstbottom'> 
            
                <h1>Peace of Mind</h1>
                <p>so it really behaves like neither. Now we have given up.</p>
            </div>
            <div className='secondbottom'>
                <h1>set for life</h1>
                <p>They were used to create the machines that launched</p>
            </div>
            <div className='thirdbottom'>
                <h1>100% satisfaction</h1>
                <p>So it really behaves like neither. Now we have given up</p>
            </div>
        </div>
        
    </div>
  )
};

export default Home;
