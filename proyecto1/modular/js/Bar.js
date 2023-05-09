import React, { useState, useEffect} from 'react';
import SearchBar from "./SearchBar.js"
import BAC from "./BAC.js"
import Button1 from './Button1.js';
import './Bar.css'

class Bar extends React.Component {
  render(){
    return (
        <div className='middleBar'>
          <div>
            <div><p className ='title'>Próximos Eventos.</p></div>
            <div className ='underline'></div>
          </div>
            <div className ='sb3'><SearchBar text="BUSCAR EVENTO..."></SearchBar></div>
            <div><BAC></BAC></div>
            <div>
              <div className='button1m'>
                <img className="image2" src = "https://www.todoticket.com/img/icons/filter.svg" alt = "" />
                <p className="textcss">FILTRAR</p>
              </div>
            </div>
        </div>
      );
  }
};

export default Bar; 