import React, { useState, useEffect} from 'react';
import News from "./News.js"
import './Cartelera1.css'

class Cartelera1 extends React.Component {
  render(){
    return (
        <div>
          <div className = 'cartelera1'>
              <img id ='slide-1' src="https://www.todoticket.com/images/eventos/slideshow/DiegoVive_slider.png" alt ="" height="100%" width="100%"/>
              <img id ='slide-2' src="https://www.todoticket.com/images/eventos/slideshow/1-slider-davinci.jpg" alt ="" height="100%" width="100%"/>
              <img id ='slide-3' src="https://www.todoticket.com/images/eventos/slideshow/magodeoz-slider.png" alt ="" height="100%" width="100%"/>
          </div>
          {/* <div className='nav'>
              <button className='buttonnav' href = "#slide-1"></button>
              <button className='buttonnav' href = "#slide-2"></button>
              <button className='buttonnav' href = "#slide-3"></button>      
          </div> */}
        </div>
      );
  }
};

export default Cartelera1; 