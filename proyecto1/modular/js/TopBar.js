import React, { useState, useEffect} from 'react';
import './TopBar.css'
import SearchBar from './SearchBar.js'
import Button1 from './Button1.js'

class TopBar extends React.Component {
  render(){
    return (
          <div className='topBar' >
              <img src = "https://www.todoticket.com/img/logo_tt.svg" alt = "" height="9.5%" width="11.5%"/>
              <div className = 'sb2'><SearchBar text= "BUSCAR..."></SearchBar></div>
              <div ><Button1 text="EVENTOS" imagen = "https://www.todoticket.com/img/icons/eventos.svg"></Button1></div>
              <div ><Button1 text="PRODUCTOS" imagen = "https://www.todoticket.com/img/icons/productos.svg"></Button1></div>
              <div ><Button1 text="PROMOCIONES" imagen = "https://www.todoticket.com/img/icons/promos.svg"></Button1></div>
              <div ><Button1 text="NOTICIAS" imagen = "https://www.todoticket.com/img/icons/news.svg"></Button1></div>
          </div>
      );
  }
};

export default TopBar; 