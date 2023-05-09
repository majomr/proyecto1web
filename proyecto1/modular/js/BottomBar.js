import React, { useState, useEffect} from 'react';
import CallCenter from './CallCenter';
import Menu from './Menu.js'
import ToolBar from './ToolBar.js'
import Country from './Country.js'
import './BottomBar.css'
import { GrFacebookOption } from "react-icons/gr";

class BottomBar extends React.Component {
  render(){
    return (
        <div className='bar'>
            <div className='part1'>
              <img src = "https://www.todoticket.com/img/logo-white-mobile.svg" alt = "" height="35%" width="35%"/>
              <CallCenter></CallCenter>
            </div>
            <Menu title = "Puntos de venta" texts = {["Majadas Once", "Décima Plaza", "Guess Pradera Concepción","Quicksilver Paseo Cayala"]}></Menu>
            <Menu title = "Todoticket Guatemala" texts = {["Inicio", "Políticas de compra", "Productos", "Promociones", "Puntos de venta"]}></Menu>
            <div>
                <ToolBar icons = {[GrFacebookOption]}></ToolBar>
                <p className='text'>© 2017 Todoticket Guatemala</p>
                <Country></Country>
            </div>
        </div>
      );
  }
};

export default BottomBar; 