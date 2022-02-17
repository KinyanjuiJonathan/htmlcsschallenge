import './App.css';
import Home  from './components/Home/Home';
import React from 'react';
import { Navbar } from './components/NavBar/Navbar';
import { Pricing } from './components/Pricing/Pricing';
import { Contact } from './components/contact/Contact';
import Product from './components/Product/Product.js';
import { Footer } from './components/Footer/Footer';



 const App = () => {
  return <div>
    <div className='App'>
      <Navbar/>
      <Home/>
      <Product/>
      <Pricing/>
      <Contact/>
      <Footer/>
      
    </div>
  </div>;
}
;

export default App;